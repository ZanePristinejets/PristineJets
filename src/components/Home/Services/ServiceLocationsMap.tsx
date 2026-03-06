"use client";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useRef } from "react";

const ZOOM_LEVEL = 11;
const ALL_BOUNDS = L.latLngBounds([
  [43.5146, -114.256],
  [48.3105, -108.5429],
]);
const FIT_OPTIONS: L.FitBoundsOptions = { padding: [40, 40] };

const airportLocations = [
  {
    title: "Bozeman Yellowstone International Airport",
    description: "KBZN",
    lat: 45.7772,
    lng: -111.1523,
  },
  {
    title: "Jackson Hole Airport",
    description: "KJAC",
    lat: 43.6073,
    lng: -110.7377,
  },
  {
    title: "Glacier park international airport (Kalispell)",
    description: "KGPI",
    lat: 48.3105,
    lng: -114.256,
  },
  {
    title: "Ennis - Big Sky Airport",
    description: "KEKS",
    lat: 45.2755,
    lng: -111.6486,
  },
  {
    title: "Missoula Montana Airport",
    description: "KMSO",
    lat: 46.9163,
    lng: -114.0906,
  },
  {
    title: "Billings Logan International Airport",
    description: "KBIL",
    lat: 45.8077,
    lng: -108.5429,
  },
  {
    title: "Bert Mooney Airport (Butte)",
    description: "KBTM",
    lat: 45.9548,
    lng: -112.4975,
  },
  {
    title: "Helena Regional Airport",
    description: "KHLN",
    lat: 46.6068,
    lng: -111.9828,
  },
  {
    title: "West Yellowstone Airport",
    description: "KWYS",
    lat: 44.6884,
    lng: -111.1176,
  },
  {
    title: "Great Falls International Airport",
    description: "KGTF",
    lat: 47.482,
    lng: -111.3707,
  },
  {
    title: "Mission Field Airport",
    description: "KLVM",
    lat: 45.6994,
    lng: -110.4483,
  },
  {
    title: "Gardiner Airport",
    description: "29S",
    lat: 45.0499,
    lng: -110.7466,
  },
  {
    title: "Idaho Falls Regional Airport",
    description: "KIDA",
    lat: 43.5146,
    lng: -112.0702,
  },
  {
    title: "Threeforks Airport",
    description: "9S5",
    lat: 45.8788,
    lng: -111.5692,
  },
];

const pinIcon = L.divIcon({
  className: "",
  html: `
  <div style="position:relative;width:28px;height:40px;">
    <div style="position:absolute;top:0;left:2px;width:24px;height:24px;border-radius:50%;border:2px solid #bd843b;overflow:hidden;background:#fff;z-index:2;">
      <img src="/logo.png" style="width:100%;height:100%;object-fit:cover;object-position:top;" />
    </div>
    <div style="position:absolute;top:20px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:9px solid transparent;border-right:9px solid transparent;border-top:16px solid #bd843b;z-index:1;"></div>
  </div>`,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
  popupAnchor: [0, -42],
});

function FitBounds() {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(ALL_BOUNDS, FIT_OPTIONS);
  }, [map]);
  return null;
}

function MapRefSetter({ mapRef }: { mapRef: { current: L.Map | null } }) {
  const map = useMap();
  mapRef.current = map;
  return null;
}

function PopupController({
  selectedCode,
  markerRefs,
}: {
  selectedCode: string | null;
  markerRefs: { current: globalThis.Map<string, L.Marker> };
}) {
  const map = useMap();
  const hasSelected = useRef(false);

  useEffect(() => {
    if (!selectedCode) {
      if (hasSelected.current) {
        map.flyToBounds(ALL_BOUNDS, FIT_OPTIONS);
      }
      return;
    }
    hasSelected.current = true;
    const marker = markerRefs.current.get(selectedCode);
    if (marker) {
      map.flyTo(marker.getLatLng(), ZOOM_LEVEL);
      marker.openPopup();
    }
  }, [selectedCode, map, markerRefs]);

  return null;
}

type Props = {
  selectedCode: string | null;
  onReset?: () => void;
};

export default function ServiceLocationsMap({ selectedCode, onReset }: Props) {
  const markerRefs = useRef<globalThis.Map<string, L.Marker>>(
    new globalThis.Map(),
  );
  const mapRef = useRef<L.Map | null>(null);

  return (
    <div
      className="relative w-full h-[400px] sm:h-[480px]"
      style={{ isolation: "isolate" }}
    >
      <div className="w-full h-full rounded-sm overflow-hidden border-2 border-[#bd843b]">
        <MapContainer
          center={[45.7772, -111.1523]}
          zoom={6}
          scrollWheelZoom={true}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FitBounds />
          <MapRefSetter mapRef={mapRef} />
          <PopupController
            selectedCode={selectedCode}
            markerRefs={markerRefs}
          />
          {airportLocations.map((airport) => (
            <Marker
              key={airport.description}
              position={[airport.lat, airport.lng]}
              icon={pinIcon}
              ref={(m) => {
                if (m) markerRefs.current.set(airport.description, m);
              }}
              eventHandlers={{
                click: () => {
                  mapRef.current?.flyTo([airport.lat, airport.lng], ZOOM_LEVEL);
                },
              }}
            >
              <Popup>
                <span className="font-semibold text-sm">{airport.title}</span>
                <br />
                <span className="text-gray-500 text-xs">
                  {airport.description}
                </span>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Reset / zoom-out button */}
      <div className="absolute top-6 right-6 z-[400] bg-white border border-gray-300 hover:border-[#bd843b] text-gray-700 hover:text-[#bd843b] transition-colors duration-200 rounded-sm px-2 py-1 text-[11px] tracking-[1px] font-semibold shadow-sm">
        <button
          onClick={() => { mapRef.current?.flyToBounds(ALL_BOUNDS, FIT_OPTIONS); onReset?.(); }}
          title="Reset view"
          className="mt-0.5"
        >
          RESET VIEW
        </button>
      </div>
    </div>
  );
}

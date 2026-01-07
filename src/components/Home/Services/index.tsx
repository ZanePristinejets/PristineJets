"use client";
import { useState, useRef } from "react";
import {
  Sparkle,
  BrickWallShield,
  Armchair,
  Brush,
  SprayCan,
  Wind,
  Droplet,
  Wrench,
  Bug,
  Shield,
  Eraser,
  Gauge,
  Toilet,
  Dog,
  Warehouse,
  Plane,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const airportsServices: Service[] = [
  { title: "Bozeman Yellowstone International Airport", description: "KBZN", Icon: Plane },
  { title: "Jackson Hole Airport", description: "KJAC", Icon: Plane },
  { title: "Glacier park international airport (Kalispell)", description: "KGPI", Icon: Plane },
  { title: "Ennis - Big Sky Airport", description: "KEKS", Icon: Plane },
  { title: "Missoula Montana Airport", description: "KMSO", Icon: Plane },
  { title: "Billings Logan International Airport", description: "KBIL", Icon: Plane },
  { title: "Bert Mooney Airport (Butte)", description: "KBT", Icon: Plane },
  { title: "Helena Regional Airport", description: "KHLN", Icon: Plane },
  { title: "West Yellowstone Airport", description: "KWYS", Icon: Plane },
  { title: "Great Falls International Airport", description: "KGTF", Icon: Plane },
  { title: "Mission Field Airport", description: "KLVM", Icon: Plane },
  { title: "Gardiner Airport", description: "29S", Icon: Plane },
  { title: "Idaho Falls Regional Airport", description: "KIDA", Icon: Plane },
  { title: "Threeforks Airport", description: "9S5", Icon: Plane },
];

const exteriorServices: Service[] = [
  {
    title: "Dry Wash",
    description:
      "A water-conserving, safe cleaning method ideal for hangared or quick-turn aircraft, removing dust, grime, and contaminants without affecting paint or coatings.",
    Icon: Wind,
  },
  {
    title: "Wet Wash",
    description:
      "A full-surface wash for deeper cleaning, ideal for removing heavy buildup and preparing the aircraft for protective treatments.",
    Icon: Droplet,
  },
  {
    title: "Wax Application",
    description:
      "Premium aviation-grade wax that enhances shine, protects paint from UV damage, and improves aerodynamic smoothness.",
    Icon: BrickWallShield,
  },
  {
    title: "Brightwork Polishing",
    description:
      "Skilled metal restoration for leading edges, spinner cones, and other aluminum surfaces, leaving brightwork mirror-smooth and free of oxidation or hazing.",
    Icon: Sparkle,
  },
  {
    title: "Landing Gear Cleaning",
    description:
      "A detailed cleaning of landing gear assemblies, removing grease, hydraulic residue, brake dust, and runway debris.",
    Icon: Wrench,
  },
  {
    title: "De-Bugging",
    description:
      "Removal of insect buildup from leading edges, nose surfaces, and windshield areas for a clean appearance and improved aerodynamics.",
    Icon: Bug,
  },
  {
    title: "Paint Protection",
    description:
      "Application of coatings to protect the aircraft’s finish from UV exposure, oxidation, and environmental contaminants.",
    Icon: Shield,
  },
  {
    title: "Degreasing",
    description:
      "Thorough removal of oil, hydraulic fluid, and other residues from the underside, belly, and high-contact areas of the aircraft.",
    Icon: Eraser,
  },
];

const interiorServices: Service[] = [
  {
    title: "Cabin Sanitization",
    description:
      "A full wipe-down and disinfection of all high-touch surfaces, tables, armrests, overhead compartments, trim, and passenger seating areas to ensure a clean and safe environment.",
    Icon: SprayCan,
  },
  {
    title: "Leather Conditioning",
    description:
      "Deep cleaning and conditioning of all leather seats, armrests, and panels to restore softness, prevent cracking, and maintain a rich, luxurious appearance.",
    Icon: Armchair,
  },
  {
    title: "Carpet Extraction",
    description:
      "Professional deep cleaning using extraction methods to remove stains, dirt, odors, and embedded debris, leaving carpets fresh and revitalized.",
    Icon: Brush,
  },
  {
    title: "Pet Hair Removal",
    description:
      "Specialized removal of embedded pet hair from seats, carpets, panels, and hard-to-reach areas using professional tools and techniques to restore cleanliness, eliminate allergens, and ensure a fresh, guest-ready cabin.",
    Icon: Dog,
  },
  {
    title: "Window Detailing",
    description:
      "Crystal-clear cleaning of all interior windows and shades to enhance visibility and passenger comfort.",
    Icon: Sparkle,
  },
  {
    title: "Lavatory Disinfection",
    description:
      "Thorough cleaning and sanitization of lavatory surfaces, fixtures, and touch points.",
    Icon: Toilet,
  },
  {
    title: "Flight Deck Sanitization",
    description:
      "Careful cleaning and sanitizing of the cockpit area, including flight controls, avionics panels, seats, and high-touch controls - performed with precision to avoid interference with sensitive equipment.",
    Icon: Gauge,
  },
];

const hangerServices: Service[] = [
  {
    title: "Hangar Cleaning",
    description:
      "A fast, light cleaning of your aircraft's hangar space, including sweeping, dusting, cobweb removal, and mopping or deep floor cleaning to keep the area spotless and professional.",
    Icon: Warehouse,
  },
  {
    title: "Aircraft Dust-Off",
    description:
      "A quick exterior refresh to remove surface dust, fingerprints, and light debris using aviation-safe microfiber techniques. Ideal for pre-flight touch-ups or routine hangar upkeep.",
    Icon: Sparkle,
  },
]

export default function Services() {
  const [selected, setSelected] = useState<"airports" | "exterior" | "interior" | "hangar">("airports");
  const [expanded, setExpanded] = useState<
    Record<"airports" | "exterior" | "interior" | "hangar", boolean>
  >({
    airports: false,
    interior: false,
    exterior: false,
    hangar: false,
  });
  const gridTopRef = useRef<HTMLDivElement | null>(null);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const data =
    selected === "airports"
      ? airportsServices
      : selected === "exterior"
      ? exteriorServices
      : selected === "interior"
      ? interiorServices
      : hangerServices;
  const isExpanded = expanded[selected];
  const visible = isExpanded ? data : data.slice(0, 4);

  const scrollIntoViewWithOffset = (el: Element | null, offset: number) => {
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-white py-16 sm:py-20 lg:py-28 px-4">
      <div className="w-full mx-auto space-y-10">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <p className="text-[#bd843b] text-[12px] tracking-[3px] sm:tracking-[4px]">
            METICULOUS CARE, INSIDE AND OUT
          </p>
          <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-serif tracking-[10px] sm:tracking-[14px] lg:tracking-[18px] text-gray-900">
            OUR SERVICES
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-[13px] sm:text-[12px] leading-relaxed">
            At Pristine Jets, every detail matters. From cabin to fuselage, our
            expert crew delivers precision cleaning, polishing, and protection
            that keep your aircraft in top condition. Available 24/7 in Bozeman and all locations,
            we bring meticulous care wherever your jet is.
          </p>
        </div>

        {/* Tabs */}
        <div ref={tabsRef} className="flex flex-wrap justify-center gap-3 sm:gap-6">
          {[
            { key: "airports" as const, label: "AIRPORTS" },
            { key: "interior" as const, label: "INTERIOR" },
            { key: "exterior" as const, label: "EXTERIOR" },
            { key: "hangar" as const, label: "HANGAR" },
          ].map((tab) => {
            const active = selected === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setSelected(tab.key)}
                aria-pressed={active}
                className="group hover:cursor-pointer relative pb-2 text-sm font-semibold tracking-[2px] text-black w-full sm:w-auto text-center"
              >
                {tab.label}
                <span
                  className={
                    "absolute left-0 bottom-0 h-[2px] w-full rounded " +
                    (active
                      ? "bg-[#bd843b]"
                      : "bg-gray-200 group-hover:bg-[#a0672f] group-hover:cursor-pointer transition-colors duration-300")
                  }
                />
              </button>
            );
          })}
        </div>

        {/* Services: Airports (compact list) vs Others (original grid) */}
        {selected === "airports" ? (
          <div ref={gridTopRef} className="max-w-3xl mx-auto">
            <ul className="divide-y divide-gray-200">
              {visible.map(({ title, description, Icon }, idx) => (
                <li
                  key={title}
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  className="group flex items-center justify-center gap-4 py-4 px-2 transition-colors duration-200 hover:bg-gray-50"
                >

                  <div className="flex-1 text-center">
                    <h3 className="text-sm font-semibold tracking-[2px] text-gray-900 uppercase">
                      {title}
                    </h3>
                    <p className="text-[13px] text-gray-600 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div
            ref={gridTopRef}
            className="grid gap-6 md:gap-0 md:grid-cols-2 max-w-4xl mx-auto"
          >
            {visible.map(({ title, description, Icon }, idx) => (
              <div
                key={title}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                className="border border-gray-200 p-6 sm:p-8 lg:p-12 group hover:shadow-md hover:border-[#bd843b] transition-all duration-300 text-left"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 lg:w-10 lg:h-10 stroke-1 group-hover:text-[#bd843b] transition-all duration-300" />
                </div>
                <h3 className="text-base font-semibold tracking-[2px] sm:tracking-[3px] text-gray-900 mb-3 uppercase">
                  {title}
                </h3>
                <p className="text-gray-600 text-[13px] leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
            {expanded && <span />}
          </div>
        )}
        {data.length > 4 && (
          <div className="flex justify-center">
            <button
              ref={toggleBtnRef}
              onClick={() =>
                setExpanded((prev) => {
                  const nextForSelected = !prev[selected];
                  const nextState = {
                    ...prev,
                    [selected]: nextForSelected,
                  } as Record<"airports" | "exterior" | "interior" | "hangar", boolean>;
                  requestAnimationFrame(() => {
                    if (nextForSelected) {
                      if (selected === "airports") {
                        const container = gridTopRef.current;
                        if (container) {
                          const bottom =
                            container.getBoundingClientRect().bottom + window.scrollY;
                          const margin = 120; // leave some space before the end
                          const targetY = Math.max(bottom - window.innerHeight + margin, 0);
                          window.scrollTo({ top: targetY, behavior: "smooth" });
                        }
                      } else {
                        const lastStartIndex = Math.max(data.length - 4, 0);
                        itemRefs.current[lastStartIndex]?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    } else {
                      scrollIntoViewWithOffset(tabsRef.current, -80);
                    }
                  });
                  return nextState;
                })
              }
              className={`mt-4 text-xs tracking-[3px] hover:cursor-pointer font-semibold px-6 py-3 border ${isExpanded ? "border-[#bd843b] hover:border-gray-300" : "border-gray-300 hover:border-[#bd843b]"} transition-colors duration-300 rounded-sm group`}
              aria-expanded={isExpanded}
            >
              <span
                className={
                  "relative pb-1 " + (isExpanded ? "text-black" : "text-black")
                }
              >
                {isExpanded ? "VIEW LESS" : "VIEW ALL"}
                <span
                  className={
                    "absolute left-0 -bottom-0.5 h-[2px] w-full rounded " +
                    (isExpanded
                      ? "bg-[#bd843b] group-hover:bg-gray-400 transition-colors duration-300"
                      : "bg-gray-400 group-hover:bg-[#a0672f] transition-colors duration-300")
                  }
                />
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

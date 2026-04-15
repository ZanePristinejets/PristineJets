const airports = [
  {
    name: "Bozeman Yellowstone International Airport",
    code: "KBZN",
    address: "850 Gallatin Field Rd, Belgrade, MT 59714",
  },
  {
    name: "Jackson Hole Airport",
    code: "KJAC",
    address: "1250 E Airport Rd, Jackson, WY 83001",
  },
  {
    name: "Glacier Park International Airport (Kalispell)",
    code: "KGPI",
    address: "4170 US Hwy 2 E, Kalispell, MT 59901",
  },
  {
    name: "Ennis - Big Sky Airport",
    code: "KEKS",
    address: "467 Airport Rd, Ennis, MT 59729",
  },
  {
    name: "Missoula Montana Airport",
    code: "KMSO",
    address: "5225 US Hwy 10 W, Missoula, MT 59808",
  },
  {
    name: "Billings Logan International Airport",
    code: "KBIL",
    address: "1901 Terminal Cir, Billings, MT 59105",
  },
  {
    name: "Bert Mooney Airport (Butte)",
    code: "KBTM",
    address: "101 Airport Rd, Butte, MT 59701",
  },
  {
    name: "Helena Regional Airport",
    code: "KHLN",
    address: "2850 Mercer Loop, Helena, MT 59602",
  },
  {
    name: "West Yellowstone Airport",
    code: "KWYS",
    address: "721 Airport Rd, West Yellowstone, MT 59758",
  },
  {
    name: "Great Falls International Airport",
    code: "KGTF",
    address: "2800 Terminal Dr, Great Falls, MT 59404",
  },
  {
    name: "Mission Field Airport",
    code: "KLVM",
    address: "Airport Rd, Livingston, MT 59047",
  },
  {
    name: "Gardiner Airport",
    code: "29S",
    address: "Airport Rd, Gardiner, MT 59030",
  },
  {
    name: "Threeforks Airport",
    code: "9S5",
    address: "Airport Rd, Three Forks, MT 59752",
  },
  {
    name: "Idaho Falls Regional Airport",
    code: "KIDA",
    address: "2140 N Skyline Dr, Idaho Falls, ID 83402",
  },
  {
    name: "Yellowstone Regional Airport (Cody)",
    code: "KCOD",
    address: "2101 Roger Sedam Dr, Cody, WY 82414",
  },
];

const badgedAirportCodes = ["KBZN", "KMSO", "KJAC", "KGPI", "KBIL", "KHLN"];

const badgedAirports = badgedAirportCodes
  .map((code) => airports.find((airport) => airport.code === code))
  .filter((airport): airport is (typeof airports)[number] => Boolean(airport));

const serviceAirports = airports.filter(
  (airport) => !badgedAirportCodes.includes(airport.code)
);

export default function Locations() {
  return (
    <div className="relative w-full h-full bg-white">
      {/* Hero Section */}
      {/* <section className="h-[25vh] w-full relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/wiping-jet-counter.webp"
            alt="Pristine Jets service location"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[80%_center] sm:object-center"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative w-full flex flex-col items-center justify-center text-center px-4 py-20 pt-32">
          <div className="text-[#bd843b] text-[11px] tracking-[5px] uppercase mb-3">
            WHERE WE OPERATE
          </div>
          <h1 className="font-serif text-white text-[24px] sm:text-[30px] xl:text-[40px] tracking-[8px] sm:tracking-[14px] leading-tight">
            LOCATIONS
          </h1>
        </div>
      </section> */}

      {/* Office Location */}
      <section className="bg-stone-950 text-white px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-4 mt-10">
          <div className="text-[#bd843b] text-[10px] sm:text-[12px] tracking-[4px] uppercase">Our Office</div>
          <h2 className="font-serif text-[20px] sm:text-[30px] tracking-[6px]">PRISTINE JETS</h2>
          <p className="text-gray-300 text-sm sm:text-md tracking-[1px]">72450 Tarmac Trail, Belgrade, MT 59714</p>
        </div>
      </section>

      {/* Airports */}
      <section className="bg-white text-stone-900 px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="text-[#bd843b] text-[11px] tracking-[4px] uppercase">Credentials</div>
            <h2 className="font-serif text-[20px] sm:text-[26px] tracking-[6px]">AIRPORTS WE'RE BADGED AT</h2>
          </div>

          <ul className="divide-y divide-stone-200 border border-stone-200 rounded-sm overflow-hidden">
            {badgedAirports.map((airport) => (
              <li
                key={airport.code}
                className="flex items-center justify-between gap-4 px-5 py-3.5 hover:bg-stone-50 transition-colors"
              >
                <div className="min-w-0">
                  <p className="text-sm text-stone-700">{airport.name}</p>
                  <p className="text-xs text-stone-500 mt-1">{airport.address}</p>
                </div>
                <span className="text-[12px] tracking-[2px] text-[#bd843b] shrink-0">{airport.code}</span>
              </li>
            ))}
          </ul>

          <div className="text-center space-y-2 pt-4">
            <div className="text-[#bd843b] text-[11px] tracking-[4px] uppercase">Service Areas</div>
            <h2 className="font-serif text-[20px] sm:text-[26px] tracking-[6px]">OTHER AIRPORTS</h2>
          </div>

          <ul className="divide-y divide-stone-200 border border-stone-200 rounded-sm overflow-hidden">
            {serviceAirports.map((airport) => (
              <li
                key={airport.code}
                className="flex items-center justify-between gap-4 px-5 py-3.5 hover:bg-stone-50 transition-colors"
              >
                <div className="min-w-0">
                  <p className="text-sm text-stone-700">{airport.name}</p>
                  <p className="text-xs text-stone-500 mt-1">{airport.address}</p>
                </div>
                <span className="text-[12px] tracking-[2px] text-[#bd843b] shrink-0">{airport.code}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

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
  {
    name: "Ravalli County Airport",
    code: "KHRF",
    address: "203 Airport Rd, Hamilton, MT 59840",
  },
  {
    name: "Red Lodge Airport",
    code: "KRED",
    address: "1 N Airport Rd, Red Lodge, MT 59068",
  },
  {
    name: "Big Timber Airport",
    code: "6S0",
    address: "168 Airport Rd, Big Timber, MT 59011",
  },
  {
    name: "Dillon Airport",
    code: "KDLN",
    address: "2400 Airport Rd, Dillon, MT 59725",
  },
  {
    name: "Polson Airport",
    code: "8S1",
    address: "Polson, MT 59860",
  },
  {
    name: "Mineral County Memorial Airport",
    code: "9S4",
    address: "415 Aileron Way, Superior, MT 59872",
  },
  {
    name: "Lewistown Municipal Airport",
    code: "KLWT",
    address: "1601 D St, Lewistown, MT 59457",
  },
  {
    name: "Hot Springs Airport",
    code: "S09",
    address: "48 Little Bitteroot Rd, Hot Springs, MT 59845",
  },
  {
    name: "Thompson Falls Airport",
    code: "KTHM",
    address: "25 Airport Wy, Thompson Falls, MT 59873",
  },
  {
    name: "Powell Municipal Airport",
    code: "KPOY",
    address: "22 Rd 9, Powell, WY 82435",
  },
  {
    name: "Afton Municipal Airport",
    code: "KAFO",
    address: "322 Airport Rd #1, Afton, WY 83110",
  },
  {
    name: "Sheridan County Airport",
    code: "KSHR",
    address: "908 W Brundage Ln, Sheridan, WY 82801",
  },
  {
    name: "Casper / Natrona Airport",
    code: "KCPR",
    address: "8500 Airport Pkwy, Casper, WY 82604",
  },
  {
    name: "Rexburg-Madison County Airport",
    code: "KRXE",
    address: "296 Airport Rd, Rexburg, ID 83440",
  },
  {
    name: "Stevensville Airport",
    code: "32S",
    address: "3945 Flying Ln, Stevensville, MT 59870",
  },
  {
    name: "Ronan Airport",
    code: "7S0",
    address: "35605 Ronan Airport Rd, Ronan, MT 59864",
  },
  {
    name: "Libby Airport",
    code: "S59",
    address: "4986 Farm to Market Rd, Libby, MT 59923",
  },
  {
    name: "Kalispell City Airport",
    code: "S27",
    address: "1880 Highway U.S. 93 S, Kalispell, MT 59901",
  },
];

const badgedAirportCodes = ["KBZN", "KMSO", "KJAC", "KGPI", "KBIL", "KHLN"];

const badgedAirports = badgedAirportCodes
  .map((code) => airports.find((airport) => airport.code === code))
  .filter((airport): airport is (typeof airports)[number] => Boolean(airport));

const serviceAirports = airports.filter(
  (airport) => !badgedAirportCodes.includes(airport.code),
);

export default function Locations() {
  return (
    <div className="relative w-full h-full bg-white">
      {/* Office Location */}
      <section className="bg-stone-950 text-white px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-4 mt-10">
          <h1 className="text-[#bd843b] text-[10px] sm:text-[12px] tracking-[4px] uppercase">
            Our Office
          </h1>
          <p className="font-serif text-[20px] sm:text-[30px] xl:text-[40px] tracking-[8px] sm:tracking-[14px] leading-tight">
            PRISTINE JETS
          </p>
          <p className="text-gray-300 text-sm sm:text-md tracking-[1px]">
            72450 Tarmac Trail, Belgrade, MT 59714
          </p>
        </div>
      </section>

      {/* Airports */}
      <section className="bg-white text-stone-900 px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="text-[#bd843b] text-[11px] tracking-[4px] uppercase">
              Credentials
            </div>
            <h2 className="font-serif text-[20px] sm:text-[26px] tracking-[6px]">
              AIRPORTS WE&apos;RE BADGED AT
            </h2>
          </div>

          <ul className="divide-y divide-stone-200 border border-stone-200 rounded-sm overflow-hidden">
            {badgedAirports.map((airport) => (
              <li
                key={airport.code}
                className="flex items-center justify-between gap-4 px-5 py-3.5 hover:bg-stone-50 transition-colors"
              >
                <div className="min-w-0">
                  <p className="text-sm text-stone-700">{airport.name}</p>
                  <p className="text-xs text-stone-500 mt-1">
                    {airport.address}
                  </p>
                </div>
                <span className="text-[12px] tracking-[2px] text-[#bd843b] shrink-0">
                  {airport.code}
                </span>
              </li>
            ))}
          </ul>

          <div className="text-center space-y-2 pt-4">
            <div className="text-[#bd843b] text-[11px] tracking-[4px] uppercase">
              Service Areas
            </div>
            <h2 className="font-serif text-[20px] sm:text-[26px] tracking-[6px]">
              OTHER AIRPORTS
            </h2>
          </div>

          <ul className="divide-y divide-stone-200 border border-stone-200 rounded-sm overflow-hidden">
            {serviceAirports.map((airport) => (
              <li
                key={airport.code}
                className="flex items-center justify-between gap-4 px-5 py-3.5 hover:bg-stone-50 transition-colors"
              >
                <div className="min-w-0">
                  <p className="text-sm text-stone-700">{airport.name}</p>
                  <p className="text-xs text-stone-500 mt-1">
                    {airport.address}
                  </p>
                </div>
                <span className="text-[12px] tracking-[2px] text-[#bd843b] shrink-0">
                  {airport.code}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

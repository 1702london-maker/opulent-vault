import Link from "next/link";
import AIConciergeSection from "@/components/AIConciergeSection";

const UK_CITIES = [
  { city: "London", country: "united-kingdom", slug: "united-kingdom-london", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS4cLtPQI76KAWTUP2hOixbBx1qIHoUqwpiaqOiqLlpSNU-ImCaBVkyROsmJ9Fe9t55VzysDHPVGkqZzwDiTYDTTWtJaeWBDX8c9VgFKNHmUHaor3peq9Yw9w5ViAOVcI9TIYWsWd4PdWWOjs5a0Q9Lcbu74useb7_BcMnXnB0kpiGqo-5-hGKXQqCntiYQQW2BI5k_XKYAZSmpr2LUq_hIVx85R2LMod5_mhNh7N0SYMIWmJaAXJD1rCdZuoIjGc8QhQyV8yATih2" },
  { city: "Manchester", country: "united-kingdom", slug: "united-kingdom-manchester", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTwJz6XdlVeWAnLPUNz-JWkyq04b9fdc6endsGyMSD7jF4NSmVsjTf4aCgnnm1KezqFFOE6e6-8dYli-wXtXb39_otZh8Qgnlb3xBSZ67oyfckfR3Jkw3hIF3G1YNuqYBDku095aXgfKsKDwYA2_QH5bqzt4YiBIaOgk7zSiYkfatGIcWpABgxMUaT5DZ4KJdyh7eYsHY4eNUzRSWtbD-bpO3S-4psNRtjXieB5CUlqCvGaK3OzmkNHKj6VoSiDccmyr7vivV0fNuG" },
  { city: "Birmingham", country: "united-kingdom", slug: "united-kingdom-birmingham", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlLqzp5cQSJLWz4cbNcnRWWr-xHkgHDvh9utINDKB8mVz33v7I_C1htKCuPRCL00IW5jKfoNdcY7kU5Lau2Ak3c-VOnRRvn2GH1JpvtIrvOA965QJOM7pgCgg2C4KxzDXejCLyNusbqSk_aoJTZ2X-kTkEDuMDrM71EssIicVGbav42tWGyxxaUOdo66a6Ix01S6meas0VHFARVrYHib61S3zq70j8TmcotVfygKYQyr4UO8VyY1b6BiyYMfo8_Utxi9grFcoCWvgS" },
  { city: "Liverpool", country: "united-kingdom", slug: "united-kingdom-liverpool", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ9wPblxS_9h851VduYKdXpNLrL4sldnk-KoZYFvomJN4BL-QCvHKRqHcQRrjwX5Jt6GbIfXGV6ZR8h_CnottiheyLj0gpzAyz4UsoBwoZzL2VzWU7VKI3b-HSaCzCZBQBJ2QUQURnQBv4ClChRbaE34h4NN9SzVbC4GdeX2qjdl8XUEsZtU3bnWMJrAWWi0PiXkPfnzUMhsdMTmIZs3XoElzHh3K8RatqvVV_-1cXEQCLJulxbcvxSYYeqpcyfT3KkR1oGJNVJNXb" },
  { city: "Edinburgh", country: "united-kingdom", slug: "united-kingdom-edinburgh", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8x8cQTVxSzDweUbqrEDz2apHEpx54KdVGIxfJrVp5tbMdCDCLp3eHIWq1726D0cthCP4m0JAMBKE9sjNwLRPx7a0vTAiymxQ-leCH8Iv2ArmG5Tju_-MTqLVClZUfKiBWQKCn2gUZ7JyvmazVV8aMb70PweB8NcvD1ENhdSvdsb7haGT-ZoNJOgqSPhbuci9J2XmWEopl4a8daWPXkA_RNA4nxsz4ALiz-sA38GXx-1kook8HaCxEPV13Sl_JBwGtNbGjdEHqZmgQ" },
];

const EUROPE_CITIES = [
  { city: "Paris", country: "france", slug: "france-paris" },
  { city: "Monaco", country: "france", slug: "france-monaco" },
  { city: "Nice", country: "france", slug: "france-nice" },
  { city: "Cannes", country: "france", slug: "france-cannes" },
  { city: "Barcelona", country: "spain", slug: "spain-barcelona" },
  { city: "Madrid", country: "spain", slug: "spain-madrid" },
  { city: "Marbella", country: "spain", slug: "spain-marbella" },
  { city: "Lisbon", country: "portugal", slug: "portugal-lisbon" },
  { city: "Porto", country: "portugal", slug: "portugal-porto" },
  { city: "Algarve", country: "portugal", slug: "portugal-algarve" },
  { city: "Milan", country: "italy", slug: "italy-milan" },
  { city: "Rome", country: "italy", slug: "italy-rome" },
  { city: "Florence", country: "italy", slug: "italy-florence" },
  { city: "Lake Como", country: "italy", slug: "italy-lake-como" },
  { city: "Amsterdam", country: "netherlands", slug: "netherlands-amsterdam" },
  { city: "Geneva", country: "switzerland", slug: "switzerland-geneva" },
  { city: "Zurich", country: "switzerland", slug: "switzerland-zurich" },
  { city: "Mykonos", country: "greece", slug: "greece-mykonos" },
  { city: "Santorini", country: "greece", slug: "greece-santorini" },
];

const EU_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAlLqzp5cQSJLWz4cbNcnRWWr-xHkgHDvh9utINDKB8mVz33v7I_C1htKCuPRCL00IW5jKfoNdcY7kU5Lau2Ak3c-VOnRRvn2GH1JpvtIrvOA965QJOM7pgCgg2C4KxzDXejCLyNusbqSk_aoJTZ2X-kTkEDuMDrM71EssIicVGbav42tWGyxxaUOdo66a6Ix01S6meas0VHFARVrYHib61S3zq70j8TmcotVfygKYQyr4UO8VyY1b6BiyYMfo8_Utxi9grFcoCWvgS";

function CityCard({ city, country, slug, img }: { city: string; country: string; slug: string; img: string }) {
  return (
    <Link href={`/destinations/${country}/${slug}`} className="group relative overflow-hidden aspect-[3/4] block">
      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={img} alt={city} data-placeholder="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <p className="font-label-caps text-[10px] text-secondary-fixed uppercase tracking-widest mb-1">{country.replace(/-/g, " ")}</p>
        <h3 className="font-serif text-headline-md text-white">{city}</h3>
      </div>
    </Link>
  );
}

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" src={EU_IMG} alt="Destinations" data-placeholder="true" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <span className="font-label-caps text-label-caps text-secondary-fixed mb-4 block tracking-widest uppercase">Where To Next</span>
          <h1 className="font-serif text-headline-lg md:text-display-xl text-white leading-none">Our Destinations</h1>
        </div>
      </section>

      {/* UK */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-12">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">United Kingdom</span>
          <h2 className="font-serif text-headline-lg text-primary">British Luxury</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {UK_CITIES.map((c) => <CityCard key={c.slug} {...c} />)}
        </div>
      </section>

      {/* Europe */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/20">
        <div className="mb-12">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">Europe</span>
          <h2 className="font-serif text-headline-lg text-primary">Continental Collection</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {EUROPE_CITIES.map((c) => (
            <CityCard key={c.slug} city={c.city} country={c.country} slug={c.slug} img={EU_IMG} />
          ))}
        </div>
      </section>

      <AIConciergeSection />
    </>
  );
}

import { Suspense } from "react";
import { createServerClient } from "@/lib/supabase";
import StaysFilter from "@/components/StaysFilter";
import AIConciergeSection from "@/components/AIConciergeSection";

const FALLBACK_PROPERTIES = [
  { id: "1", title: "The Mayfair Penthouse", city: "London", price_from: 4200, guests: 8, bedrooms: 4, image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTwJz6XdlVeWAnLPUNz-JWkyq04b9fdc6endsGyMSD7jF4NSmVsjTf4aCgnnm1KezqFFOE6e6-8dYli-wXtXb39_otZh8Qgnlb3xBSZ67oyfckfR3Jkw3hIF3G1YNuqYBDku095aXgfKsKDwYA2_QH5bqzt4YiBIaOgk7zSiYkfatGIcWpABgxMUaT5DZ4KJdyh7eYsHY4eNUzRSWtbD-bpO3S-4psNRtjXieB5CUlqCvGaK3OzmkNHKj6VoSiDccmyr7vivV0fNuG" },
  { id: "2", title: "The Glass Pavilion", city: "Palm Springs", price_from: 2400, guests: 6, bedrooms: 4, image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuClvcHo3OJVZREZ0W2NcU1FefgxDjQPW-ZbTlbS9ZOhnF_P1Lw6w1fZgenkG1sl6tTWeLl-lPF6FSMiiiTVdWdQOIWPUAfpn0yPlov9ztAvXmDJjXvbyK9f-3C9UOX2PYoYIo3A-p0BnKcO3gG_tlHXyn6liaFJlkKTAS55Nd_ZytNFgR7hzwNJmiXKm_ddAuV8hfsKyK17c9RtP6-mAAnli2sDL-yXzid9y4Jvaoqp5-lizCYzU87WhjoJRRccWyCOSdt-S8cNVXie" },
  { id: "3", title: "Azure Haven", city: "Maldives", price_from: 3200, guests: 2, bedrooms: 1, image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlLqzp5cQSJLWz4cbNcnRWWr-xHkgHDvh9utINDKB8mVz33v7I_C1htKCuPRCL00IW5jKfoNdcY7kU5Lau2Ak3c-VOnRRvn2GH1JpvtIrvOA965QJOM7pgCgg2C4KxzDXejCLyNusbqSk_aoJTZ2X-kTkEDuMDrM71EssIicVGbav42tWGyxxaUOdo66a6Ix01S6meas0VHFARVrYHib61S3zq70j8TmcotVfygKYQyr4UO8VyY1b6BiyYMfo8_Utxi9grFcoCWvgS" },
];

async function getProperties(type?: string) {
  try {
    const supabase = createServerClient();
    let query = supabase.from("properties").select("*").eq("published", true);
    if (type && type !== "All") {
      query = query.ilike("category", `%${type}%`);
    }
    const { data } = await query.limit(12);
    return data && data.length > 0 ? data : FALLBACK_PROPERTIES;
  } catch {
    return FALLBACK_PROPERTIES;
  }
}

export default async function StaysPage({ searchParams }: { searchParams: { type?: string } }) {
  const type = searchParams.type;
  const properties = await getProperties(type);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTwJz6XdlVeWAnLPUNz-JWkyq04b9fdc6endsGyMSD7jF4NSmVsjTf4aCgnnm1KezqFFOE6e6-8dYli-wXtXb39_otZh8Qgnlb3xBSZ67oyfckfR3Jkw3hIF3G1YNuqYBDku095aXgfKsKDwYA2_QH5bqzt4YiBIaOgk7zSiYkfatGIcWpABgxMUaT5DZ4KJdyh7eYsHY4eNUzRSWtbD-bpO3S-4psNRtjXieB5CUlqCvGaK3OzmkNHKj6VoSiDccmyr7vivV0fNuG" alt="Luxury Stays" data-placeholder="true" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <span className="font-label-caps text-label-caps text-secondary-fixed mb-4 block tracking-widest uppercase">Ultra-Luxury Properties</span>
          <h1 className="font-serif text-headline-lg md:text-display-xl text-white leading-none">Curated Luxury Stays</h1>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Suspense fallback={null}>
          <StaysFilter />
        </Suspense>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {properties.map((p: { id: string; title: string; city: string; price_from: number; guests: number; bedrooms: number; image_url?: string; hero_image_path?: string }) => (
            <div key={p.id} className="group cursor-pointer">
              <div className="overflow-hidden mb-6 aspect-[4/5] relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={p.image_url || p.hero_image_path || "https://lh3.googleusercontent.com/aida-public/AB6AXuClvcHo3OJVZREZ0W2NcU1FefgxDjQPW-ZbTlbS9ZOhnF_P1Lw6w1fZgenkG1sl6tTWeLl-lPF6FSMiiiTVdWdQOIWPUAfpn0yPlov9ztAvXmDJjXvbyK9f-3C9UOX2PYoYIo3A-p0BnKcO3gG_tlHXyn6liaFJlkKTAS55Nd_ZytNFgR7hzwNJmiXKm_ddAuV8hfsKyK17c9RtP6-mAAnli2sDL-yXzid9y4Jvaoqp5-lizCYzU87WhjoJRRccWyCOSdt-S8cNVXie"}
                  alt={p.title}
                  data-placeholder="true"
                />
              </div>
              <h3 className="font-serif text-headline-md mb-2">{p.title}</h3>
              <p className="font-sans text-body-md text-on-surface-variant mb-4">
                {p.city} {p.guests ? `• ${p.guests} Guests` : ""} {p.bedrooms ? `• ${p.bedrooms} Bedrooms` : ""}
              </p>
              {p.price_from && (
                <p className="font-label-caps text-label-caps text-primary">From ${p.price_from.toLocaleString()} / night</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <AIConciergeSection />
    </>
  );
}

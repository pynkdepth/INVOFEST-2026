
/* ─── Data ─────────────────────────────────────────────────────────── */
const sponsors = [
  {
    name: "IndoPrint",
    logo: "https://www.invofest-harkatnegeri.com/assets/sponsor/indo_print.jpg",
    href: "#",
  },
  {
    name: "Plaza Tegal by Horison",
    logo: "https://www.invofest-harkatnegeri.com/assets/sponsor/bahari_inn.jpg",
    href: "https://plazategal.hoteltegal.com/",
  },
  {
    name: "Big Berry",
    logo: "https://www.invofest-harkatnegeri.com/assets/sponsor/big_berry.png",
    href: "#",
  },
  {
    name: "Domainesia",
    logo: "https://www.invofest-harkatnegeri.com/assets/sponsor/domainesia.png",
    href: "#",
  },
  {
    name: "Dicoding",
    logo: "https://www.invofest-harkatnegeri.com/assets/sponsor/dicoding_official.png",
    href: "https://www.dicoding.com/",
  },
];

const mediaPartners = [
  { name: "HMP D3 Teknik Mesin UHN", logo: "https://www.invofest-harkatnegeri.com/assets/media_partner/HMP%20D3%20TEKNIK%20MESIN%20UHN.png" },
  { name: "HMTIKA", logo: "https://www.invofest-harkatnegeri.com/assets/media_partner/LOGO%20HMTIKA.png" },
  { name: "Info Lomba IT", logo: "https://www.invofest-harkatnegeri.com/assets/media_partner/logo%20info%20lomba%20IT.png" },
  { name: "HMP Teknik Komputer", logo: "https://www.invofest-harkatnegeri.com/assets/media_partner/LOGO%20HMP%20TEKNIK%20KOMPUTER%20.png" },
  { name: "Permikomnas", logo: "https://www.invofest-harkatnegeri.com/assets/media_partner/permikomnas.png" },
  { name: "HMTI UMMUS", logo: "https://www.invofest-harkatnegeri.com/assets/media_partner/logo%20HMTI%20UMMUS.png" },
  { name: "HMP D3 Perhotelan", logo: "https://www.invofest-harkatnegeri.com/assets/media_partner/LOGO%20HMP%20D3%20PERHOTELAN.png" },
  { name: "HMP D3 DKV", logo: "https://www.invofest-harkatnegeri.com/assets/media_partner/LOGO%20HMP%20D3%20DKV.png" },
  { name: "BEM", logo: "https://www.invofest-harkatnegeri.com/assets/media_partner/Logo%20BEM.png" },
  { name: "HIMAPIK", logo: "https://www.invofest-harkatnegeri.com/assets/media_partner/LOGO%20HIMAPIK.jpg" },
  { name: "BPM", logo: "https://www.invofest-harkatnegeri.com/assets/media_partner/BPM%20PNG.png" },
  { name: "HMPTI ITB STIKOM Bali", logo: "https://www.invofest-harkatnegeri.com/assets/media_partner/HMPTI_ITB_STIKOM_BALI.png" },
  { name: "Warga Tech", logo: "https://www.invofest-harkatnegeri.com/assets/media_partner/Logo%20warga%20tech.png" },
  { name: "HIMA Elektro", logo: "https://www.invofest-harkatnegeri.com/assets/media_partner/logo%20hima%20elektro.png" },
  { name: "Lomba IT", logo: "https://www.invofest-harkatnegeri.com/assets/media_partner/lomba%20it%20ii.png" },
];

/* ─── Carousel Component (Infinite Scroll) ────────────────────────── */
interface CarouselItem {
  name: string;
  logo: string;
  href?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  cardW?: number;
  cardH?: number;
  gap?: number;
  speed?: number; // Durasi animasi dalam detik (makin besar makin lambat)
}

function LogoCarousel({ items, cardW = 170, cardH = 100, gap = 20, speed = 25 }: CarouselProps) {
  // Gandakan item 2x agar transisi terlihat menyambung tanpa putus
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden w-full py-4 group">
      {/* CSS In JS untuk animasi jalan terus */}
      <style>{`
        @keyframes scroll-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-track {
          display: flex;
          width: max-content;
          animation: scroll-infinite ${speed}s linear infinite;
        }
        .group:hover .animate-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Efek gradasi pudar di pinggir kiri & kanan */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="animate-track" style={{ gap: `${gap}px` }}>
        {duplicatedItems.map((item, idx) => (
          <a
            key={`${item.name}-${idx}`}
            href={item.href ?? "#"}
            target={item.href && item.href !== "#" ? "_blank" : undefined}
            rel="noreferrer"
            draggable={false}
            style={{ minWidth: `${cardW}px`, height: `${cardH}px` }}
            className="flex-shrink-0 flex items-center justify-center bg-white border border-gray-100 rounded-2xl shadow-sm px-5 hover:shadow-md hover:border-red-200 transition-all duration-300"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300"
              style={{ maxHeight: `${cardH * 0.6}px` }}
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.style.display = "none";
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─── Section Heading ───────────────────────────────────────────────── */
function SectionHeading({ prefix, highlight }: { prefix: string; highlight: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-800">
        {prefix}{" "}
        <span className="text-[#C8102E] font-extrabold">{highlight}</span>
      </h2>
      <div className="mt-3 mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-[#C8102E] to-[#e85d7a]" />
    </div>
  );
}

/* ─── Main Export ───────────────────────────────────────────────────── */
export default function Partner() {
  return (
    <section className="bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ── Sponsor ─────────────────────────────────────────────── */}
        <div>
          <SectionHeading prefix="Sponsor" highlight="INVOFEST 2025" />
          <LogoCarousel
            items={sponsors}
            cardW={180}
            cardH={110}
            gap={24}
            speed={20} // Sponsor jalan lebih cepat sedikit
          />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100" />

        {/* ── Media Partner ───────────────────────────────────────── */}
        <div>
          <SectionHeading prefix="Media Partner" highlight="INVOFEST 2025" />
          <LogoCarousel
            items={mediaPartners}
            cardW={140}
            cardH={140}
            gap={18}
            speed={45} // Partner lebih banyak, dibuat lebih lambat agar nyaman dilihat
          />
        </div>

      </div>
    </section>
  );
}
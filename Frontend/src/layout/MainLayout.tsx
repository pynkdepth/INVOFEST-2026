import Header from "../component/Header";
import { Outlet } from "react-router-dom";
import Partner from "./SponsorPartner";
export default function MainLayout() {
  return (
    <>
      <Header />

      <main className="py-24 container mx-auto px-4">
        <Outlet />
      </main>

      {/* ── SPONSOR & MEDIA PARTNER ── */}
      <Partner />

      {/* ── FOOTER ── */}
      <footer className="bg-[#fce8ef] pt-12 pb-0">
        {/* Main footer content */}
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">

          {/* Logo */}
          <div className="flex items-start">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Logo.png"
              alt="INVOFEST Logo"
              className="w-36 object-contain"
              onError={(e) => {
                const el = e.target as HTMLImageElement;
                el.style.display = "none";
                const div = document.createElement("div");
                div.innerHTML = `<span style="font-size:1.5rem;font-weight:900;color:#7B1D3F">INV<span>O</span>FEST</span><br/><span style="font-size:0.6rem;color:#7B1D3F;letter-spacing:0.05em">INFORMATICS VOCATIONAL FESTIVAL</span>`;
                el.parentNode?.insertBefore(div, el);
              }}
            />
          </div>

          {/* Menu Navigasi */}
          <div>
            <h4 className="text-xs font-bold text-gray-700 tracking-widest uppercase mb-5">
              Menu Navigasi
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Beranda", icon: "🏠" },
                { label: "Seminar", icon: "🎤" },
                { label: "Competition", icon: "🏆" },
                { label: "Workshop", icon: "🔧" },
                { label: "Talkshow", icon: "🎙" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    className="text-gray-600 text-sm flex items-center gap-2 hover:text-[#7B1D3F] transition-colors duration-200"
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ikuti Kami */}
          <div>
            <h4 className="text-xs font-bold text-gray-700 tracking-widest uppercase mb-5">
              Ikuti Kami
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm flex items-center gap-2 hover:text-[#7B1D3F] transition-colors duration-200"
                >
                  <span className="text-base">📷</span>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 text-sm flex items-center gap-2 hover:text-[#7B1D3F] transition-colors duration-200"
                >
                  <span className="text-base">▶️</span>
                  Youtube
                </a>
              </li>
            </ul>
          </div>

          {/* Alamat / Map */}
          <div>
            <h4 className="text-xs font-bold text-gray-700 tracking-widest uppercase mb-5">
              Alamat
            </h4>
            <div className="rounded-xl overflow-hidden border border-pink-200 shadow-sm w-full h-36">
              <iframe
                title="Lokasi INVOFEST"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.!2d109.1!3d-6.86!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb1234567890%3A0xabc!2sPoliteknik+Harapan+Bersama+Tegal!5e0!3m2!1sid!2sid!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-pink-200 px-8 py-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} INVOFEST. All Rights Reserved.
            </p>
            <div className="flex items-center gap-3">
              {/* YouTube icon */}
              <a
                href="#"
                className="w-7 h-7 flex items-center justify-center rounded bg-[#7B1D3F] text-white hover:bg-[#5a1530] transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
                </svg>
              </a>
              {/* Instagram icon */}
              <a
                href="#"
                className="w-7 h-7 flex items-center justify-center rounded bg-[#7B1D3F] text-white hover:bg-[#5a1530] transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.9c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-3.2-.1-4.8-1.7-4.9-4.9C2.1 15.6 2 15.2 2 12s0-3.6.1-4.9C2.3 3.9 3.9 2.3 7.1 2.3c1.3-.1 1.6-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 .1 2.7.3.3 2.7.1 7 0 8.3 0 8.7 0 12s0 3.7.1 5c.2 4.3 2.6 6.7 6.9 6.9C8.3 24 8.7 24 12 24s3.7 0 5-.1c4.3-.2 6.7-2.6 6.9-6.9.1-1.3.1-1.7.1-5s0-3.7-.1-5C23.7 2.7 21.3.3 17 .1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
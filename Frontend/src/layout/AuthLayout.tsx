import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full overflow-hidden bg-[#1a0a10]">

      {/* Sisi Kiri */}
      <div className="hidden md:flex relative w-full h-full flex-col items-center justify-center overflow-hidden">

        {/* Radial gradient bg */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,#7B1D3F_0%,#3d0c1f_50%,#1a0a10_100%)]" />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:28px_28px]" />

        {/* Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-white/[0.06]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-white/[0.08]" />

        {/* Glow blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(200,50,90,0.25)_0%,transparent_70%)] blur-[40px]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 px-10 text-center">

          {/* Badge */}
          <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-white/70 bg-white/[0.08] border border-white/[0.15] px-3.5 py-1.5 rounded-full">
            Inovasi untuk Negeri
          </span>

          {/* Maskot */}
          <Link
            to="/"
            title="Kembali ke Beranda"
            className="group relative flex items-center justify-center"
          >
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
              alt="Maskot Invofest"
              className="w-auto h-auto max-h-[300px] max-w-[85%] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white/[0.12] backdrop-blur border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none">
              🏠 Kembali ke Beranda
            </span>
          </Link>

          {/* Heading */}
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight leading-tight">
              INVOFEST 2025
            </h1>
            <p className="text-[13px] text-white/40 mt-1.5">
              Harkat Negeri · Festival Inovasi Mahasiswa
            </p>
          </div>
        </div>
      </div>

      {/* Sisi Kanan */}
      <div className="flex items-center justify-center p-8 h-full overflow-y-auto bg-[#fafafa] relative">

        {/* Top accent bar — desktop only */}
        <div className="hidden md:block absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#7B1D3F] to-[#c9395e]" />

        <div className="w-full max-w-md">

          {/* Mobile logo */}
          <div className="md:hidden flex flex-col items-center mb-8 gap-3">
            <Link to="/" className="flex flex-col items-center gap-2">
              <img
                src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
                alt="Maskot Invofest"
                className="h-20 object-contain"
              />
              <span className="text-[13px] font-semibold text-[#7B1D3F]">
                ← Kembali ke Beranda
              </span>
            </Link>
          </div>

          <Outlet />
        </div>
      </div>

    </div>
  );
}
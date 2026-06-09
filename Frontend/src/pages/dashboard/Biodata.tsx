// src/pages/dashboard/Biodata.tsx

import { useAuthStore } from "../../store/useAuthStore";
import { useState } from "react";

export default function Biodata() {
  const user = useAuthStore((s) => s.user);
  const [imgError, setImgError] = useState(false);

  const info = [
    { label: "NIM", value: user?.nim ?? "-" },
    { label: "Program Studi", value: "D-4 Teknik Informatika" },
    { label: "Fakultas", value: "Sekolah Vokasi" },
    { label: "Kampus", value: "Kota Tegal" },
  ];

  return (
    <div className="px-7 py-8 max-w-2xl mx-auto space-y-6">

      {/* HEADER */}
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-1 h-4 bg-[#7B1D3F] rounded-full" />
          <span className="text-[10px] font-bold text-[#7B1D3F] tracking-widest uppercase">
            Profil
          </span>
        </div>
        <h1 className="text-2xl font-bold text-[#1a0a10] tracking-tight">Biodata</h1>
        <p className="text-sm text-gray-400 mt-1">Informasi pembuat website</p>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

        {/* Banner */}
        <div className="h-28 bg-[#7B1D3F]" />

        <div className="px-6 pb-6">

          {/* Avatar */}
          <div className="-mt-10 mb-5">
            {user?.photo && !imgError ? (
              <img
                src={user.photo}
                alt={user.nama}
                onError={() => setImgError(true)}
                className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-md"
              />
            ) : (
              <div className="w-20 h-20 rounded-2xl bg-[#7B1D3F] border-4 border-white shadow-md flex items-center justify-center">
                <span className="text-3xl font-black text-white">
                  {user?.nama?.charAt(0).toUpperCase() ?? "F"}
                </span>
              </div>
            )}
          </div>

          {/* Nama */}
          <h2 className="text-xl font-bold text-[#1a0a10] mb-1">
            {user?.nama ?? "Fatih Mubarok"}
          </h2>
          <p className="text-sm text-gray-400 mb-6">Administrator — Invofest</p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3">
            {info.map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-3.5">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-[#1a0a10]">{item.value}</p>
              </div>
            ))}

            {/* Project — full width */}
            <div className="col-span-2 bg-rose-50 border border-rose-100 rounded-xl p-3.5">
              <p className="text-[10px] font-bold text-[#7B1D3F] uppercase tracking-wider mb-1">
                Project
              </p>
              <p className="text-sm font-semibold text-[#1a0a10]">
                Invofest — Event Management System
              </p>
              <p className="text-xs text-gray-400 mt-1">
                React + TypeScript · Express · Prisma ORM · Zustand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
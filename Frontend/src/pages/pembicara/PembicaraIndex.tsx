// src/pages/dashboard/pembicara/Index.tsx

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

type Pembicara = {
  id: number;
  name: string;
  role: string;
  email: string;
  photo: string;
};

function Avatar({ name, photo }: { name: string; photo?: string }) {
  const initials = name
    ? name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()
    : "SP";

  if (photo && photo.trim() !== "") {
    return (
      <img
        src={photo}
        alt={name}
        className="w-12 h-12 rounded-2xl object-cover shadow-sm"
        onError={(e) => {
          (e.target as HTMLElement).style.display = "none";
        }}
      />
    );
  }

  return (
    <div className="w-12 h-12 rounded-2xl bg-[#7B1D3F] text-white flex items-center justify-center font-bold shadow-sm text-sm">
      {initials}
    </div>
  );
}

export default function PembicaraIndex() {
  const [speakers, setSpeakers] = useState<Pembicara[]>([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

  const fetchPembicara = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/pembicara`);
      setSpeakers(res.data?.data || []);
    } catch (error) {
      console.error(error);
      alert("Gagal mengambil data pembicara.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin ingin menghapus pembicara ini?")) return;
    try {
      await axios.delete(`${baseUrl}/api/pembicara/${id}`);
      setSpeakers((prev) => prev.filter((item) => item.id !== id));
      alert("Pembicara berhasil dihapus!");
    } catch (error) {
      console.error(error);
      alert("Gagal menghapus pembicara.");
    }
  };

  useEffect(() => {
    fetchPembicara();
  }, [baseUrl]);

  return (
    <div className="min-h-screen bg-[#f7f8fc] px-7 py-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-100 p-8 shadow-sm mb-5">
        <div className="absolute top-0 right-0 w-52 h-52 bg-rose-50 rounded-full blur-3xl opacity-70" />
        <div className="relative z-10 flex justify-between items-start flex-wrap gap-5">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#7B1D3F]">
              <span className="w-2 h-2 rounded-full bg-[#7B1D3F]" />
              Management
            </span>
            <h1 className="text-4xl font-black text-[#1a0a10] mt-3 tracking-tight">
              Pembicara Event
            </h1>
            <p className="text-sm text-gray-400 mt-3 max-w-lg leading-relaxed">
              Kelola pembicara event Invofest dengan tampilan modern, minimalis, dan profesional.
            </p>
          </div>
          <Link
            to="/dashboard/pembicara/create"
            className="bg-[#7B1D3F] hover:bg-[#98234c] text-white px-5 py-3 rounded-2xl text-sm font-bold transition-all shadow-sm hover:shadow-md"
          >
            + Tambah Pembicara
          </Link>
        </div>
      </div>

      {/* TOTAL CARD — terpisah di luar hero */}
      <div className="mb-5">
        <div className="inline-flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-[#7B1D3F] flex items-center justify-center text-xl shadow-sm">
            🎤
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
              Total Pembicara
            </p>
            {loading ? (
              <div className="h-7 w-10 bg-gray-200 rounded-lg animate-pulse mt-1" />
            ) : (
              <p className="text-2xl font-black text-[#1a0a10] leading-none mt-0.5">
                {speakers.length}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              {["No", "Pembicara", "Role", "Email", "Aksi"].map((item) => (
                <th
                  key={item}
                  className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {!loading &&
              speakers.map((item, index) => (
                <tr
                  key={item.id}
                  className="group border-b border-gray-50 hover:bg-gray-50 transition-all duration-300"
                >
                  <td className="px-5 py-5 text-sm text-gray-300 font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </td>
                  <td className="px-5 py-5">
                    <div className="flex items-center gap-4">
                      <Avatar name={item.name} photo={item.photo} />
                      <div>
                        <h3 className="font-bold text-[#1a0a10]">{item.name}</h3>
                        <p className="text-xs text-gray-400 mt-0.5">Speaker Invofest</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5">
                    <span className="text-xs font-semibold bg-rose-50 border border-rose-100 text-[#7B1D3F] px-3 py-1 rounded-xl">
                      {item.role}
                    </span>
                  </td>
                  <td className="px-5 py-5 text-sm text-gray-500">{item.email}</td>
                  <td className="px-5 py-5">
                    <div className="flex gap-2">
                      <Link
                        to={`/dashboard/pembicara/edit/${item.id}`}
                        className="px-4 py-2 text-xs font-semibold rounded-xl bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-100 transition-all"
                      >
                        ✏️ Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-4 py-2 text-xs font-semibold rounded-xl bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 transition-all cursor-pointer"
                      >
                        🗑️ Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {loading && (
          <div className="flex justify-center py-20">
            <div className="animate-pulse text-sm text-gray-400">Memuat data pembicara...</div>
          </div>
        )}

        {!loading && speakers.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 rounded-3xl bg-gray-100 flex items-center justify-center text-4xl mb-4">
              👥
            </div>
            <h3 className="font-bold text-lg text-gray-700">Belum Ada Pembicara</h3>
            <p className="text-sm text-gray-400 mt-1">Daftar pembicara kosong, silakan tambah baru.</p>
          </div>
        )}

        {/* FOOTER TABLE */}
        {!loading && speakers.length > 0 && (
          <div className="px-5 py-4 border-t border-gray-50">
            <p className="text-xs text-gray-400">
              Menampilkan <span className="font-bold text-[#1a0a10]">{speakers.length}</span> pembicara
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
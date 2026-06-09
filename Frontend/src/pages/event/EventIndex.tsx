// src/pages/dashboard/event/index.tsx

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

type Event = {
  id: number;
  name: string;
  category: { id: number; nama: string };
  pembicara: { id: number; name: string; role: string };
  dateEvent: string;
  location: string;
  description: string;
};

function SkeletonRow() {
  return (
    <tr className="border-b border-gray-50">
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <td key={i} className="px-5 py-5">
          <div className="h-4 bg-gray-100 rounded-full animate-pulse" />
        </td>
      ))}
    </tr>
  );
}

export default function EventIndex() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

  const fetchEvents = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/events`);
      setEvents(res.data.data);
    } catch (error: any) {
      console.error(error);
      alert("Gagal mengambil data event.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin ingin menghapus event ini?")) return;
    try {
      await axios.delete(`${baseUrl}/api/events/${id}`);
      setEvents((prev) => prev.filter((item) => item.id !== id));
      alert("Event berhasil dihapus!");
    } catch (error: any) {
      console.error(error);
      alert("Gagal menghapus event.");
    }
  };

  useEffect(() => {
    fetchEvents();
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
            <h1 className="text-4xl font-black text-[#1a0a10] mt-3">Event Invofest</h1>
            <p className="text-sm text-gray-400 mt-3">
              Kelola seluruh event Invofest dengan tampilan modern.
            </p>
          </div>
          <Link
            to="/dashboard/event/create"
            className="bg-[#7B1D3F] hover:bg-[#98234c] text-white px-5 py-3 rounded-2xl text-sm font-bold transition-all shadow-sm"
          >
            + Tambah Event
          </Link>
        </div>
      </div>

      {/* TOTAL CARD — terpisah di luar hero */}
      <div className="mb-5">
        <div className="inline-flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-[#7B1D3F] flex items-center justify-center text-xl shadow-sm">
            🗓️
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
              Total Event
            </p>
            {loading ? (
              <div className="h-7 w-10 bg-gray-200 rounded-lg animate-pulse mt-1" />
            ) : (
              <p className="text-2xl font-black text-[#1a0a10] leading-none mt-0.5">
                {events.length}
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
              {["No", "Nama Event", "Kategori", "Pembicara", "Tanggal", "Lokasi", "Aksi"].map((item) => (
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
            {loading
              ? [1, 2, 3].map((i) => <SkeletonRow key={i} />)
              : events.length === 0
              ? (
                <tr>
                  <td colSpan={7} className="px-5 py-12 text-center text-sm text-gray-400">
                    Belum ada event. Tambah event pertama kamu!
                  </td>
                </tr>
              )
              : events.map((item, index) => (
                  <tr
                    key={item.id}
                    className="group border-b border-gray-50 hover:bg-gray-50 transition-all duration-300"
                  >
                    <td className="px-5 py-5 text-sm text-gray-300 font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </td>
                    <td className="px-5 py-5">
                      <h3 className="font-bold text-[#1a0a10]">{item.name}</h3>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-1">{item.description}</p>
                    </td>
                    <td className="px-5 py-5">
                      <span className="text-xs font-semibold bg-rose-50 border border-rose-100 text-[#7B1D3F] px-3 py-1 rounded-full">
                        {item.category?.nama || "Tanpa Kategori"}
                      </span>
                    </td>
                    <td className="px-5 py-5">
                      <p className="text-sm font-semibold text-[#1a0a10]">
                        {item.pembicara?.name || "-"}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.pembicara?.role || ""}</p>
                    </td>
                    <td className="px-5 py-5 text-sm text-gray-500">
                      {new Date(item.dateEvent).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-5 py-5 text-sm text-gray-500">📍 {item.location}</td>
                    <td className="px-5 py-5">
                      <div className="flex gap-2">
                        <Link
                          to={`/dashboard/event/edit/${item.id}`}
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

        {/* FOOTER TABLE */}
        {!loading && events.length > 0 && (
          <div className="px-5 py-4 border-t border-gray-50">
            <p className="text-xs text-gray-400">
              Menampilkan <span className="font-bold text-[#1a0a10]">{events.length}</span> event
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
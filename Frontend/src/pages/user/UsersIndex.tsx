import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: number;
  username: string;
  foto: string;
};

function SkeletonRow() {
  return (
    <tr className="border-b border-gray-50">
      {[1, 2, 3].map((i) => (
        <td key={i} className="px-5 py-5">
          <div className="h-4 bg-gray-100 rounded-full animate-pulse" />
        </td>
      ))}
    </tr>
  );
}

function UserRow({
  item,
  index,
  onDelete,
}: {
  item: User;
  index: number;
  onDelete: (id: number) => void;
}) {
  const initials = item.username ? item.username.slice(0, 2).toUpperCase() : "U";

  const avatarColors = [
    "bg-[#7B1D3F]",
    "bg-indigo-600",
    "bg-emerald-600",
    "bg-amber-600",
    "bg-sky-600",
  ];
  const color = avatarColors[index % avatarColors.length];

  return (
    <tr className="group border-b border-gray-50 hover:bg-gray-50 transition-all duration-300">
      <td className="px-5 py-5 text-sm text-gray-300 font-mono w-16">
        {String(index + 1).padStart(2, "0")}
      </td>

      <td className="px-5 py-5">
        <div className="flex items-center gap-4">
          {item.foto ? (
            <img
              src={item.foto}
              alt={item.username}
              className="w-11 h-11 rounded-2xl object-cover shadow-sm"
              onError={(e) => {
                // Fallback jika URL rusak/terlalu panjang
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          ) : (
            <div className={`w-11 h-11 rounded-2xl ${color} flex items-center justify-center text-white text-sm font-black shadow-sm`}>
              {initials}
            </div>
          )}
          <div>
            <h3 className="font-bold text-[#1a0a10]">{item.username}</h3>
            <p className="text-xs text-gray-400">User Invofest</p>
          </div>
        </div>
      </td>

      <td className="px-5 py-5">
        <div className="flex gap-2 opacity-70 group-hover:opacity-100 transition-all">
          <Link
            to={`/dashboard/user/edit/${item.id}`}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-100 transition-all"
          >
            ✏️ Edit
          </Link>
          <button
            onClick={() => onDelete(item.id)}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 transition-all cursor-pointer"
          >
            🗑️ Hapus
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function UserIndex() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/users`);
      setUsers(res.data.data || []);
    } catch (error) {
      console.error(error);
      alert("Gagal mengambil data user.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin ingin menghapus user ini?")) return;
    try {
      await axios.delete(`${baseUrl}/api/users/${id}`);
      setUsers((prev) => prev.filter((item) => item.id !== id));
    } catch {
      alert("Gagal menghapus user.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f8fc] px-7 py-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-100 p-8 shadow-sm mb-7">
        <div className="absolute top-0 right-0 w-52 h-52 bg-rose-50 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gray-100 rounded-full blur-3xl opacity-60" />

        <div className="relative z-10 flex justify-between items-start flex-wrap gap-5">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#7B1D3F]">
              <span className="w-2 h-2 rounded-full bg-[#7B1D3F]" />
              Management
            </span>
            <h1 className="text-4xl font-black text-[#1a0a10] mt-3 tracking-tight">
              User
            </h1>
            <p className="text-sm text-gray-400 mt-3 max-w-lg leading-relaxed">
              Kelola seluruh pengguna Invofest dengan tampilan modern, minimalis, dan profesional.
            </p>
          </div>

          <Link
            to="/dashboard/user/create"
            className="bg-[#7B1D3F] hover:bg-[#98234c] text-white px-5 py-3 rounded-2xl text-sm font-bold transition-all shadow-sm hover:shadow-md"
          >
            + Tambah User
          </Link>
        </div>
      </div>

      {/* STAT */}
      {!loading && (
        <div className="mb-6">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-5 py-4 border border-gray-100 shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[#7B1D3F] flex items-center justify-center text-white text-xl shadow-sm">
              👤
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                Total User
              </p>
              <h2 className="text-3xl font-black text-[#1a0a10] mt-1">
                {users.length}
              </h2>
            </div>
          </div>
        </div>
      )}

      {/* TABLE */}
      <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              {["No", "User", "Aksi"].map((h) => (
                <th
                  key={h}
                  className="px-5 py-4 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {loading
              ? [1, 2, 3].map((i) => <SkeletonRow key={i} />)
              : users.map((item, index) => (
                  <UserRow
                    key={item.id}
                    item={item}
                    index={index}
                    onDelete={handleDelete}
                  />
                ))}
          </tbody>
        </table>

        {!loading && users.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 rounded-3xl bg-gray-100 flex items-center justify-center text-4xl mb-4">
              👤
            </div>
            <h3 className="font-bold text-lg text-gray-700">Belum Ada User</h3>
            <p className="text-sm text-gray-400 mt-1">
              Tambahkan user pertama untuk memulai.
            </p>
            <Link
              to="/dashboard/user/create"
              className="mt-5 bg-[#7B1D3F] hover:bg-[#98234c] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all"
            >
              + Tambah Sekarang
            </Link>
          </div>
        )}

        <div className="px-5 py-4 border-t border-gray-100 bg-gray-50">
          <p className="text-xs text-gray-400">
            Menampilkan <span className="font-bold text-[#1a0a10]">{users.length}</span> user
          </p>
        </div>
      </div>
    </div>
  );
}
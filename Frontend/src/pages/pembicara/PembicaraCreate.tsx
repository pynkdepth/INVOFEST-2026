// src/pages/dashboard/pembicara/Create.tsx

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  role: z.string().min(3, "Role minimal 3 karakter"),
  email: z.string().email("Email tidak valid"),
  photo: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function PembicaraCreate() {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Menyelaraskan key payload properti dengan kebutuhan backend
      await axios.post(`${baseUrl}/api/pembicara`, {
        name: data.name,
        role: data.role,
        email: data.email,
        photo: data.photo ?? "",
      });
      alert("Pembicara berhasil ditambahkan!");
      reset();
      navigate("/dashboard/pembicara");
    } catch (error: any) {
      alert(error.response?.data?.message ?? "Gagal menambahkan pembicara.");
    }
  };

  return (
    <div className="px-7 py-8 max-w-2xl mx-auto space-y-6">
      {/* HEADER */}
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-1 h-4 bg-[#7B1D3F] rounded-full" />
          <span className="text-[10px] font-bold text-[#7B1D3F] tracking-widest uppercase">
            Manajemen
          </span>
        </div>
        <h1 className="text-2xl font-bold text-[#1a0a10]">Tambah Pembicara</h1>
        <p className="text-sm text-gray-400 mt-1">
          Tambahkan pengisi materi profesional untuk seminar atau workshop.
        </p>
      </div>

      {/* FORM CARD */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Nama Lengkap</label>
            <input
              {...register("name")}
              placeholder="Contoh: Dr. Eko Prasetyo"
              className="w-full border border-gray-200 px-3 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#7B1D3F] focus:ring-1 focus:ring-[#7B1D3F] transition"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Role / Jabatan</label>
            <input
              {...register("role")}
              placeholder="Contoh: Cloud Engineer Specialist"
              className="w-full border border-gray-200 px-3 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#7B1D3F] focus:ring-1 focus:ring-[#7B1D3F] transition"
            />
            {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email Aktif</label>
            <input
              {...register("email")}
              placeholder="Contoh: pembicara@invofest.com"
              className="w-full border border-gray-200 px-3 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#7B1D3F] focus:ring-1 focus:ring-[#7B1D3F] transition"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">URL Tautan Foto (Opsional)</label>
            <input
              {...register("photo")}
              placeholder="https://example.com/foto.jpg"
              className="w-full border border-gray-200 px-3 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#7B1D3F] focus:ring-1 focus:ring-[#7B1D3F] transition"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => navigate("/dashboard/pembicara")}
              className="flex-1 border border-gray-200 text-gray-500 font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition text-sm"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#7B1D3F] hover:bg-[#9e2550] text-white font-semibold py-2.5 rounded-xl transition text-sm disabled:opacity-50"
            >
              {isSubmitting ? "Menyimpan..." : "Simpan Pembicara"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
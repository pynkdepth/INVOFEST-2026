// src/pages/event/EventCreate.tsx

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(3, "Nama event minimal 3 karakter"),
  categoryId: z.string().min(1, "Kategori wajib dipilih"),
  pembicaraId: z.string().min(1, "Pembicara wajib dipilih"),
  date: z.string().min(1, "Tanggal wajib diisi"),
  location: z.string().min(3, "Lokasi minimal 3 karakter"),
  description: z.string().min(5, "Deskripsi minimal 5 karakter"),
});

type FormData = z.infer<typeof schema>;
type Category = { id: number; nama: string };
type Pembicara = { id: number; name: string; role: string };

export default function EventCreate() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [pembicara, setPembicara] = useState<Pembicara[]>([]);
  
  // Ambil base URL dari environment variable Vercel/Vite
  const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    Promise.all([
      axios.get(`${baseUrl}/api/categories`),
      axios.get(`${baseUrl}/api/pembicara`),
    ])
      .then(([catRes, spkRes]) => {
        setCategories(catRes.data.data);
        setPembicara(spkRes.data.data);
      })
      .catch((error: any) => {
        console.error(error);
        alert("Gagal mengambil data kategori atau pembicara.");
      });
  }, [baseUrl]);

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post(`${baseUrl}/api/events`, {
        name: data.name,
        categoryId: Number(data.categoryId),
        pembicaraId: Number(data.pembicaraId),
        location: data.location,
        dateEvent: new Date(data.date).toISOString(),
        description: data.description,
      });
      alert("Event berhasil dibuat!");
      reset();
      navigate("/dashboard/event");
    } catch (error: any) {
      alert(error.response?.data?.message ?? "Gagal membuat event.");
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
        <h1 className="text-2xl font-bold text-[#1a0a10]">Tambah Event</h1>
        <p className="text-sm text-gray-400 mt-1">Isi form berikut untuk menambah event baru</p>
      </div>

      {/* FORM */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* Nama */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Nama Event</label>
            <input
              {...register("name")}
              placeholder="Contoh: Workshop AI 2025"
              className="w-full border border-gray-200 px-3 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#7B1D3F] focus:ring-1 focus:ring-[#7B1D3F] transition"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          {/* Kategori */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Kategori</label>
            <select
              {...register("categoryId")}
              className="w-full border border-gray-200 px-3 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#7B1D3F] focus:ring-1 focus:ring-[#7B1D3F] transition bg-white"
            >
              <option value="">Pilih Kategori</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.nama}</option>
              ))}
            </select>
            {errors.categoryId && <p className="text-red-500 text-xs mt-1">{errors.categoryId.message}</p>}
          </div>

          {/* Pembicara */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Pembicara</label>
            <select
              {...register("pembicaraId")}
              className="w-full border border-gray-200 px-3 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#7B1D3F] focus:ring-1 focus:ring-[#7B1D3F] transition bg-white"
            >
              <option value="">Pilih Pembicara</option>
              {pembicara.map((p) => (
                <option key={p.id} value={p.id}>{p.name} — {p.role}</option>
              ))}
            </select>
            {errors.pembicaraId && <p className="text-red-500 text-xs mt-1">{errors.pembicaraId.message}</p>}
          </div>

          {/* Tanggal */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Tanggal</label>
            <input
              type="date"
              {...register("date")}
              className="w-full border border-gray-200 px-3 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#7B1D3F] focus:ring-1 focus:ring-[#7B1D3F] transition"
            />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
          </div>

          {/* Lokasi */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Lokasi</label>
            <input
              {...register("location")}
              placeholder="Contoh: Jakarta Convention Center"
              className="w-full border border-gray-200 px-3 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#7B1D3F] focus:ring-1 focus:ring-[#7B1D3F] transition"
            />
            {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
          </div>

          {/* Deskripsi */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Deskripsi</label>
            <textarea
              {...register("description")}
              placeholder="Deskripsi singkat tentang event..."
              rows={4}
              className="w-full border border-gray-200 px-3 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#7B1D3F] focus:ring-1 focus:ring-[#7B1D3F] transition resize-none"
            />
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={() => navigate("/dashboard/event")}
              className="flex-1 border border-gray-200 text-gray-500 font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition text-sm"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#7B1D3F] hover:bg-[#9e2550] text-white font-semibold py-2.5 rounded-xl transition text-sm disabled:opacity-50"
            >
              {isSubmitting ? "Menyimpan..." : "Simpan Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
// src/pages/dashboard/event/edit.tsx

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

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

export default function EventEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  
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

  // Fetch kategori & data event by ID menggunakan prefix /api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, eventRes] = await Promise.all([
          axios.get(`${baseUrl}/api/categories`),
          axios.get(`${baseUrl}/api/events/${id}`),
        ]);

        setCategories(catRes.data.data);

        const e = eventRes.data.data;
        reset({
          name: e.name,
          categoryId: String(e.categoryId),
          date: new Date(e.dateEvent).toISOString().split("T")[0],
          location: e.location,
          description: e.description,
        });
      } catch (error: any) {
        console.error(error);
        alert("Gagal mengambil data event.");
      }
    };

    fetchData();
  }, [id, baseUrl, reset]);

  const onSubmit = async (data: FormData) => {
    try {
      await axios.put(`${baseUrl}/api/events/${id}`, {
        name: data.name,
        categoryId: Number(data.categoryId),
        location: data.location,
        dateEvent: new Date(data.date).toISOString(),
        description: data.description,
      });
      alert("Event berhasil diupdate!");
      navigate("/dashboard/event");
    } catch (error: any) {
      alert(error.response?.data?.message ?? "Gagal mengupdate event.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
      <h1 className="text-2xl font-bold text-[#1a0a10] mb-4">Edit Event</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">Nama Event</label>
          <input
            {...register("name")}
            placeholder="Nama Event"
            className="w-full border p-2.5 rounded-xl text-sm focus:outline-none focus:border-[#7B1D3F]"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">Kategori</label>
          <select {...register("categoryId")} className="w-full border p-2.5 rounded-xl text-sm focus:outline-none focus:border-[#7B1D3F] bg-white">
            <option value="">Pilih Kategori</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nama}
              </option>
            ))}
          </select>
          {errors.categoryId && <p className="text-red-500 text-xs mt-1">{errors.categoryId.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">Tanggal</label>
          <input
            type="date"
            {...register("date")}
            className="w-full border p-2.5 rounded-xl text-sm focus:outline-none focus:border-[#7B1D3F]"
          />
          {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">Lokasi</label>
          <input
            {...register("location")}
            placeholder="Lokasi Event"
            className="w-full border p-2.5 rounded-xl text-sm focus:outline-none focus:border-[#7B1D3F]"
          />
          {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">Deskripsi</label>
          <textarea
            {...register("description")}
            placeholder="Deskripsi Event"
            rows={4}
            className="w-full border p-2.5 rounded-xl text-sm focus:outline-none focus:border-[#7B1D3F] resize-none"
          />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
        </div>

        <div className="flex gap-3 pt-2">
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
            className="flex-1 bg-[#7B1D3F] text-white py-2.5 rounded-xl hover:bg-[#9e2550] transition text-sm disabled:opacity-50"
          >
            {isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
        </div>
      </form>
    </div>
  );
}
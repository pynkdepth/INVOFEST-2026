// src/pages/dashboard/category/edit.tsx

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

// Skema validasi menggunakan 'nama' agar sinkron dengan input backend
const schema = z.object({
  nama: z.string().min(3, "Nama kategori minimal 3 karakter"),
});

type FormData = z.infer<typeof schema>;

export default function CategoryEdit() {
  const { id } = useParams();
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

  // Fetch data berdasarkan ID untuk mengisi form awal
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/categories/${id}`)
      .then((res) => {
        // Pastikan backend mengembalikan struktur res.data.data.nama
        if (res.data?.data) {
          reset({ nama: res.data.data.nama });
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Gagal mengambil data kategori.");
      });
  }, [id, baseUrl, reset]);

  const onSubmit = async (data: FormData) => {
    try {
      await axios.put(`${baseUrl}/api/categories/${id}`, {
        nama: data.nama,
      });
      alert("Kategori berhasil diupdate!");
      navigate("/dashboard/category");
    } catch (error: any) {
      alert(error.response?.data?.message ?? "Gagal mengupdate kategori.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
      <h1 className="text-2xl font-bold text-[#1a0a10] mb-1">Edit Kategori</h1>
      <p className="text-sm text-gray-400 mb-6">Ubah nama kategori event.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Nama Kategori</label>
          <input
            type="text"
            placeholder="Contoh: Seminar"
            {...register("nama")}
            className="w-full border p-2.5 rounded-xl text-sm focus:outline-none focus:border-[#7B1D3F] focus:ring-1 focus:ring-[#7B1D3F]"
          />
          {errors.nama && (
            <p className="text-red-500 text-xs mt-1">{errors.nama.message}</p>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={() => navigate("/dashboard/category")}
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
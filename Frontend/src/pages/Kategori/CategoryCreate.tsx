// src/pages/category/CategoryCreate.tsx

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(3, "Nama kategori minimal 3 karakter"),
});

type FormData = z.infer<typeof schema>;

export default function CategoryCreate() {
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
      await axios.post(`${baseUrl}/api/categories`, {
        nama: data.name,
      });
      alert("Kategori berhasil dibuat!");
      reset();
      navigate("/dashboard/category");
    } catch (error: any) {
      alert(error.response?.data?.message ?? "Gagal membuat kategori.");
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
        <h1 className="text-2xl font-bold text-[#1a0a10]">Tambah Kategori Event</h1>
        <p className="text-sm text-gray-400 mt-1">
          Digunakan untuk mengelompokkan event seperti Seminar, Workshop, dll.
        </p>
      </div>

      {/* FORM */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Nama Kategori</label>
            <input
              type="text"
              placeholder="Contoh: Seminar"
              {...register("name")}
              className="w-full border border-gray-200 px-3 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#7B1D3F] focus:ring-1 focus:ring-[#7B1D3F] transition"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="flex gap-3 pt-1">
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
              className="flex-1 bg-[#7B1D3F] hover:bg-[#9e2550] text-white font-semibold py-2.5 rounded-xl transition text-sm disabled:opacity-50"
            >
              {isSubmitting ? "Menyimpan..." : "Simpan Kategori"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
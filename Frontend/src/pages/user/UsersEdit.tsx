import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const schema = z.object({
  username: z.string().min(3, "Username minimal 3 karakter"),
  password: z
    .string()
    .optional()
    .refine((val) => !val || val.length >= 6, {
      message: "Password minimal 6 karakter",
    }),
  foto: z.string().url("URL foto tidak valid").or(z.literal("")).optional(),
});

type FormData = z.infer<typeof schema>;

export default function UserEdit() {
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
    defaultValues: {
      username: "",
      password: "",
      foto: "",
    },
  });

  useEffect(() => {
    if (!id) return;
    axios
      .get(`${baseUrl}/api/users/${id}`)
      .then((res) => {
        if (res.data?.data) {
          reset({
            username: res.data.data.username || "",
            password: "",
            foto: res.data.data.foto || "",
          });
        }
      })
      .catch(() => alert("Gagal mengambil data user."));
  }, [id, reset, baseUrl]);

  const onSubmit = async (data: FormData) => {
    try {
      const payload: Record<string, string> = {
        username: data.username,
        foto: data.foto ?? "",
      };
      
      if (data.password && data.password.trim() !== "") {
        payload.password = data.password;
      }

      await axios.put(`${baseUrl}/api/users/${id}`, payload);
      alert("User berhasil diupdate!");
      navigate("/dashboard/user");
    } catch (error: any) {
      alert(error.response?.data?.message ?? "Gagal mengupdate user.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f8fc] px-7 py-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-100 p-8 shadow-sm mb-7">
        <div className="absolute top-0 right-0 w-52 h-52 bg-rose-50 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gray-100 rounded-full blur-3xl opacity-60" />

        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#7B1D3F]">
            <span className="w-2 h-2 rounded-full bg-[#7B1D3F]" />
            Management
          </span>
          <h1 className="text-4xl font-black text-[#1a0a10] mt-3 tracking-tight">
            Edit User
          </h1>
          <p className="text-sm text-gray-400 mt-3 max-w-lg leading-relaxed">
            Ubah data pengguna Invofest. Kosongkan password jika tidak ingin mengubahnya.
          </p>
        </div>
      </div>

      {/* FORM */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* Username */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Contoh: johndoe"
              {...register("username")}
              className="w-full border border-gray-200 px-4 py-3 rounded-2xl text-sm focus:outline-none focus:border-[#7B1D3F] focus:ring-1 focus:ring-[#7B1D3F] transition"
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1.5">{errors.username.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Password Baru <span className="text-gray-300 normal-case font-normal">(kosongkan jika tidak diubah)</span>
            </label>
            <input
              type="password"
              placeholder="Minimal 6 karakter"
              {...register("password")}
              className="w-full border border-gray-200 px-4 py-3 rounded-2xl text-sm focus:outline-none focus:border-[#7B1D3F] focus:ring-1 focus:ring-[#7B1D3F] transition"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1.5">{errors.password.message}</p>
            )}
          </div>

          {/* Foto */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              URL Foto <span className="text-gray-300 normal-case font-normal">(opsional)</span>
            </label>
            <input
              type="text"
              placeholder="Contoh: https://example.com/foto.jpg"
              {...register("foto")}
              className="w-full border border-gray-200 px-4 py-3 rounded-2xl text-sm focus:outline-none focus:border-[#7B1D3F] focus:ring-1 focus:ring-[#7B1D3F] transition"
            />
            {errors.foto && (
              <p className="text-red-500 text-xs mt-1.5">{errors.foto.message}</p>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => navigate("/dashboard/user")}
              className="flex-1 border border-gray-200 text-gray-500 font-semibold py-3 rounded-2xl hover:bg-gray-50 transition text-sm"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#7B1D3F] hover:bg-[#9e2550] text-white font-semibold py-3 rounded-2xl transition text-sm disabled:opacity-50"
            >
              {isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
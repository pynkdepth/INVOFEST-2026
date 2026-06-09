// src/pages/Login.tsx

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import Input from "../component/ui/Input";
import { useAuthStore } from "../store/useAuthStore";

const schema = z.object({
  username: z.string().min(2, "NIM harus diisi").max(100),
  password: z.string().min(8, "Minimal 8 karakter").max(100),
});

type FormData = z.infer<typeof schema>;

export default function Login() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const success = login(data.username, data.password);
    if (success) {
      navigate("/dashboard");
    } else {
      setError("username", { message: "NIM atau password salah." });
    }
  };

  return (
    <div className="flex flex-col gap-8">

      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase text-[#7B1D3F]">
          <span className="inline-block w-5 h-0.5 bg-[#7B1D3F] rounded-sm" />
          Invofest 2025
        </span>
        <h1 className="text-[28px] font-bold text-[#1a0a10] tracking-tight leading-tight">
          Selamat Datang
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Masuk untuk melanjutkan ke dashboard kamu
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
        <Input
          label="NIM"
          name="username"
          register={register}
          error={errors.username?.message}
        />

        <div className="flex flex-col gap-1">
          <Input
            label="Password"
            name="password"
            type="password"
            register={register}
            error={errors.password?.message}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#7B1D3F] hover:bg-[#9e2550] active:scale-[0.98] text-white font-semibold text-[15px] py-3 rounded-[10px] transition-all duration-200 tracking-tight mt-1 disabled:opacity-50"
        >
          Masuk →
        </button>
      </form>

      <div className="flex items-center gap-3 text-gray-300 text-xs">
        <div className="flex-1 h-px bg-gray-200" />
        <span>atau</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <p className="text-sm text-center text-gray-500">
        Belum punya akun?{" "}
        <Link to="/register" className="text-[#7B1D3F] font-semibold hover:underline">
          Daftar sekarang
        </Link>
      </p>
    </div>
  );
}
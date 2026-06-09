import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../component/ui/Input";

type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = z
  .object({
    username: z.string().min(2, "Username harus diisi").max(100),
    email: z.string().email("Email tidak valid"),
    password: z.string().min(8, "Minimal 8 karakter"),
    confirmPassword: z.string().min(8, "Minimal 8 karakter"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
  });

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Data Register:", data);
  };

  return (
    <div className="flex flex-col gap-7">

      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="flex items-center gap-1.5 text-[11px] font-semibold  uppercase text-[#7B1D3F]">
          <span className="inline-block w-5 h-0.5 bg-[#7B1D3F] rounded-sm" />
          Invofest 2025
        </span>
        <h1 className="text-[28px] font-bold text-[#1a0a10] tracking-tight leading-tight">
          Buat Akun
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Bergabung dan jadilah bagian dari festival inovasi
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>

        <Input
          label="Username"
          name="username"
          register={register}
          error={errors.username?.message}
        />

        <Input
          label="Email"
          name="email"
          type="email"
          register={register}
          error={errors.email?.message}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Password"
            name="password"
            type="password"
            register={register}
            error={errors.password?.message}
          />
          <Input
            label="Konfirmasi Password"
            name="confirmPassword"
            type="password"
            register={register}
            error={errors.confirmPassword?.message}
          />
        </div>

        <p className="text-xs text-gray-400 -mt-1">
          Minimal 8 karakter, kombinasikan huruf dan angka
        </p>

        <button
          type="submit"
          className="w-full bg-[#7B1D3F] hover:bg-[#9e2550] active:scale-[0.98] text-white font-semibold text-[15px] py-3 rounded-[10px] transition-all duration-200 tracking-tight mt-1"
        >
          Daftar Sekarang →
        </button>
      </form>

      {/* Login link */}
      <p className="text-sm text-center text-gray-500">
        Sudah punya akun?{" "}
        <Link to="/login" className="text-[#7B1D3F] font-semibold hover:underline">
          Login sekarang
        </Link>
      </p>
    </div>
  );
}
import React, { useState } from "react"; // Perbaikan: useState diimpor di sini

interface InputPasswordProps {
  label: string;
  name: string;
  register: any; 
  error?: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({ label, name, register, error }) => {
  // Perbaikan 1: Gunakan [] bukan {} untuk useState
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex flex-col mb-4 relative">
      <label htmlFor={name} className="font-semibold mb-1">
        {label}
      </label>
      
      <div className="relative flex items-center">
        <input
          id={name}
          // Input type berubah dinamis berdasarkan state show
          type={show ? "text" : "password"} 
          {...register(name)}
          className={`border p-2 rounded w-full ${error ? "border-red-500" : "border-gray-300"}`}
        />
        
        {/* Perbaikan 2: Tambahkan type="button" agar tidak men-submit form secara tidak sengaja */}
        <button 
          type="button" 
          onClick={() => setShow(!show)}
          className="absolute right-2 text-sm text-blue-600 hover:underline"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputPassword;
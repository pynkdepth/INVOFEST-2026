interface ButtonProps {
  label: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  label,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyle =
    "px-10 py-3 rounded font-medium transition-all duration-200";

  const variantStyle =
    variant === "primary"
      ? "bg-red-900 text-white hover:bg-red-800"
      : "border border-red-900 text-red-900 hover:bg-red-100";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${className ? className : variantStyle}`}
    >
      {label}
    </button>
  );
}
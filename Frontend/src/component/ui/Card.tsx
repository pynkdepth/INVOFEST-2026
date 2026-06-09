import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-white border border-gray-100 rounded-2xl shadow-md overflow-hidden p-4 ${className}`}
    >
      {children}
    </div>
  );
};
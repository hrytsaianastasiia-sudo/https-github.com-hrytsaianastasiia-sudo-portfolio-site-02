import React from "react";
import { ArrowRight } from "lucide-react";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function InteractiveHoverButton({
  children,
  className = "",
  ...props
}: InteractiveHoverButtonProps) {
  return (
    <button
      className={`group relative w-auto cursor-pointer overflow-hidden rounded-full border border-[#145850] bg-[#145850] py-4 px-14 text-center text-lg font-bold shadow-lg shadow-[#145850]/20 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-xl hover:shadow-[#145850]/30 active:scale-95 ${className}`}
      {...props}
    >
      <div className="flex items-center justify-center gap-3">
        <div className="h-2 w-2 rounded-full bg-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[150]"></div>
        <span className="inline-block text-white transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-[#145850] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight size={20} />
      </div>
    </button>
  );
}

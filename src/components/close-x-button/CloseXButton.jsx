import { X } from "lucide-react";

export function CloseXButton({ onClick }) {
  return (
    <div className="flex justify-start items-center mt-4 md:px-5">
      <button
        type="button"
        onClick={onClick}
        aria-label="Cerrar"
        className="
          w-7 h-7 mb-4 md:mb-20
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
          cursor-pointer
          transition-colors duration-300
          text-gray-400 hover:text-[var(--primary-text-color)]
        "
      >
        <X className="w-full h-full fill-current" />
      </button>
    </div>
  );
}

import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Volver atrás"
      className="hover:text-gray-500 transition mb-4 cursor-pointer"
    >
      <ArrowLeft className="w-5 h-5" />
    </button>
  );
}

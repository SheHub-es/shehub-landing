import { useState, useRef } from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import "@/components/layout/language-selector/languageSelector.css";
import { useHasHover } from "@/hooks/useHasHover";

const languages = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "ca", label: "CAT" },
];

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hasHover = useHasHover();

  const { i18n } = useTranslation();

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("shehub-lang", lang);
    setOpen(false);
  };

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div className="mr-5">
      <div
        ref={dropdownRef}
        className="relative inline-block text-left ml-auto"
        onMouseEnter={hasHover ? handleMouseEnter : undefined}
        onMouseLeave={hasHover ? handleMouseLeave : undefined}
      >
        <button
          onClick={!hasHover ? () => setOpen((prev) => !prev) : undefined}
          className="flex items-center cursor-pointer justify-center py-5 px-1  md:px-2 text-[#BEBEBE] hover:text-[#6861FF] "
        >
          <svg
            className={`sm:hidden w-6 transform transition-transform ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          <Globe size={23} className="text-inherit" />
        </button>

        {/* DROPDOWN */}
        {open && (
          <ul className="language-dropdown-menu">
            {languages.map((lang) => (
              <li
                key={lang.code}
                onClick={() => handleLangChange(lang.code)}
                className="language-option"
              >
                {lang.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

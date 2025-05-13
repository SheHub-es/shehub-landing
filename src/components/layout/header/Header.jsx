import logo from "@/assets/logo.svg";
import LanguageSelector from "@/components/layout/language-selector/LanguageSelector";

export function Header() {
  return (
    <header className="relative z-20 border border-[#e9e9e9] rounded-[3rem] px-2 py-4 h-[70px] shadow-md flex items-center justify-center">
      <a href="/">
        <img
          src={logo}
          alt="logo-shehub"
          className="w-[140px] md:w-[180px] lg:w-[190px] min-w-[100px]"
        />
      </a>

      <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2">
        <div className="hidden sm:block">
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}

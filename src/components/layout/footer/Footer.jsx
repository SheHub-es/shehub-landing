import { useTranslation } from "react-i18next";
import LanguageSelector from "@/components/layout/language-selector/LanguageSelector";
import { Link } from "react-router-dom";
import { PATHS } from "@/constants/paths";

import instagramIcon from "@/assets/icons/instagram.svg";
import instagramIconHover from "@/assets/icons/instagram-hover.svg";
import linkedinIcon from "@/assets/icons/linkedIn.svg";
import linkedinIconHover from "@/assets/icons/linkedIn-hover.svg";


export function Footer() {
  const { t } = useTranslation();

  const trackClick = (label) => {
    window.gtag?.("event", "click_footer_link", {
      event_category: "Footer",
      event_label: label,
    });
  };

const handleEmailClick = () => {
  navigator.clipboard.writeText("info@shehub.es");
  trackClick("Email");
  window.alert(t("emailCopied"));
};


  return (
    <>
      <div className="flex flex-col font-normal sm:flex-row items-center justify-between pb-5 sm:pb-0 pl-8 pr-0 sm:pr-8 gap-1 md:gap-0 border border-[#e9e9e9] rounded-[1.875rem] px-3 sm:h-[70px] shadow-md ">
        <div className="flex items-center w-full sm:w-auto justify-between sm:justify-start">
          <div className="flex flex-row items-center">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/shehub.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-8 h-8 sm:w-6 sm:h-6"
              onClick={() => trackClick("Instagram")}
            >
              <img
                src={instagramIcon}
                alt="Instagram de SheHub"
                className="absolute inset-0 w-8 h-8 sm:w-6 sm:h-6 group-hover:opacity-0 transition-opacity duration-300"
              />
              <img
                src={instagramIconHover}
                alt="Instagram hover"
                className="absolute inset-0 w-8 h-8 sm:w-6 sm:h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/shehub-es/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-8 h-8 sm:w-6 sm:h-6"
              onClick={() => trackClick("LinkedIn")}
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn de SheHub"
                className="absolute inset-0 w-8 h-8 sm:w-6 sm:h-6 group-hover:opacity-0 transition-opacity duration-300"
              />
              <img
                src={linkedinIconHover}
                alt="LinkedIn hover"
                className="absolute inset-0 w-8 h-8 sm:w-6 sm:h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              />
            </a>
            {/* Email */}
            <button
              onClick={handleEmailClick}
              aria-label="Copiar correo"
              className="text-[#BEBEBE] tracking-wider font-normal text-[0.75rem] primary-hover ml-3 cursor-pointer"
            >
              info@shehub.es
            </button>
          </div>

          <div className="block sm:hidden">
            <LanguageSelector />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-start sm:justify-end items-start sm:items-center gap-x-4 w-full text-[#BEBEBE]">
          <Link
            to={PATHS.privacyPolicy}
            className="primary-hover text-[0.75rem] tracking-wider leading-[140%] font-normal"
            onClick={() => trackClick("Privacy")}
          >
            {t("legal_privacy")}
          </Link>
          <Link
            to={PATHS.legalNotice}
            className="primary-hover text-[0.75rem] tracking-wider leading-[140%] font-normal"
            onClick={() => trackClick("LegalNotice")}
          >
            {t("legal_notice")}
          </Link>
        </div>
      </div>
      <div className="h-6"></div>
    </>
  );
}

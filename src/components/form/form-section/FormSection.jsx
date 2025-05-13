import { useNavigate } from "react-router-dom";
import { FormInputs } from "@/components/form/form-inputs/FormInputs";
import { useState } from "react";
import { PATHS } from "@/constants/paths";
import { CloseXButton } from "@/components/close-x-button/CloseXButton";
import { useTranslation, Trans } from "react-i18next";
import linkedinBlueIcon from "@/assets/icons/linkedIn-blue.svg";
import instagramBlueIcon from "@/assets/icons/instagram-blue.svg";

export function FormSection() {
  const [success, setSuccess] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const trackClick = (label) =>
    window.gtag?.("event", "click_footer_link", {
      event_category: "Footer",
      event_label: label,
    });

  const onRequestEnded = (errorMessage) => {
    if (!errorMessage) setSuccess(true);
    else setErrorAlert(errorMessage);
  };

  return (
    <div className="flex flex-col items-center text-[var(--primary-text-color)]">
      <div className="w-full flex justify-start px-4 pt-2">
        <CloseXButton onClick={() => navigate(PATHS.teaserPage)} />
      </div>

      <div className="flex flex-col w-full max-w-[43.75rem] md:px-0">
        {success ? (
          <div className="flex flex-col items-center">
            <div className="block sm:hidden text-center mb2">
              <h1 className="text-5xl font-bold leading-tight">
                <Trans
                  i18nKey="thanks_title_mobile"
                  components={{ br: <br /> }}
                />
              </h1>
            </div>
            <div className="hidden sm:block text-center mb-4 mt-5 md:mt-30">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                {t("thanks_title")}
              </h1>
            </div>

            {/* TEXT 1 */}
            <div className="block sm:hidden">
              <h2 className="text-2xl font-normal leading-tight tracking-wide text-center mb-14">
                <Trans
                  i18nKey="thanks_text_1_mobile"
                  components={{
                    br: <br className="block" />,
                    strong: <strong className="font-bold block mt-6" />,
                  }}
                />
              </h2>
            </div>
            <div className="hidden sm:block">
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-normal leading-tight tracking-wide text-center mb-8 lg:mb-14">
                <Trans
                  i18nKey="thanks_text_1"
                  components={{
                    br: <br className="hidden sm:block" />,
                    strong: <strong className="font-bold block mt-6" />,
                  }}
                />
              </h2>
            </div>

            {/* TEXT 2 */}
            <div className="block sm:hidden">
              <p className="text-2xl font-normal leading-tight tracking-wide text-center mb-20 -mt-8">
                <Trans
                  i18nKey="thanks_text_2_mobile"
                  components={{ br: <br className="block" /> }}
                />
              </p>
            </div>
            <div className="hidden sm:block">
              <p className="text-2xl md:text-3xl lg:text-3xl font-normal leading-tight tracking-wide text-center mb-28 -mt-8">
                <Trans
                  i18nKey="thanks_text_2"
                  components={{ br: <br className="hidden sm:block" /> }}
                />
              </p>
            </div>

            {/* TEXT 3 */}
            <div className="text-center mb-8 px-4">
              <h5 className="font-normal font-['Kanit'] text-xl leading-relaxed tracking-[0.02em] max-w-[21.563rem] mx-auto">
                <Trans
                  i18nKey="thanks_text_3_mobile"
                  components={{
                    br: <br className="block sm:hidden" />
                  }}
                />
              </h5>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center items-center gap-6 mt-6 mb-20 md:mb-16">
              <a
                href="https://www.linkedin.com/company/shehub-es/about/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de SheHub"
                onClick={() => trackClick("LinkedIn")}
                className="w-10 h-10"
              >
                <img
                  src={linkedinBlueIcon}
                  alt="LinkedIn"
                  className="w-full h-full object-contain"
                />
              </a>
              <a
                href="https://www.instagram.com/shehub.es/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de SheHub"
                onClick={() => trackClick("Instagram")}
                className="w-10 h-10"
              >
                <img
                  src={instagramBlueIcon}
                  alt="Instagram"
                  className="w-full h-full object-contain"
                />
              </a>
            </div>

          </div>
        ) : (
          /* error */
          <>
            {errorAlert ? (
              <p className="text-error text-center">{errorAlert}</p>
            ) : (
              <FormInputs onRequestEnded={onRequestEnded} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

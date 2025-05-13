import { useTranslation } from "react-i18next";

export function Button({ onClick, type = "button", variant = "form" }) {
  const { t } = useTranslation();
  const isForm = variant === "form";
  const eventLabel = isForm ? "button-form" : "button-banner";

  return (
    <div className="w-full flex justify-center">
      <button
        type={type}
        onClick={() => {
          window.gtag?.("event", "join_waitlist_click", {
            event_category: "Button",
            event_label: eventLabel,
            value: 1,
          });
          onClick?.();
        }}
        disabled={isForm ? false : undefined}
        className={`
          block

          ${isForm
            ? `
          /* FORM */
          w-full max-w-[18.75rem] sm:max-w-[21.875rem]
          h-11 md:h-[2.875rem]
          tracking-normal
          px-3.5 md:px-4
          text-base md:text-[1.125rem]
            `
            : `
          /* BANNER */

          /* mini (<320px) */
          h-[2.875rem]
          max-[20rem]:w-[16.25rem]
          max-[15.625rem]:h-[2.875rem]
          text-[1.125rem]
          px-2

          /* large mobile (350–639px) */
          min-[18.75rem]:w-[18.125rem]
          min-[18.75rem]:h-[2.875rem]
          min-[18.75rem]:text-[1.188rem]
          min-[18.75rem]:px-3

          /* tablet & desktop (≥640px) */
          sm:w-[30rem]
          sm:h-14
          sm:text-xl
          sm:px-[1.125rem]

          /* desktop big (≥768px) */
          md:w-[30rem]
          md:h-16
          md:text-2xl
          md:px-5
            `
          }

          font-medium

          /* BORDERS & SHAPE */
          border-[0.188rem] border-solid border-white
          rounded-full

          /* SHADOW & TRANSITION */
          shadow-[0_4px_6px_rgba(0,0,0,0.1)]
          transition-colors duration-300 ease-in-out
          hover:brightness-90
          cursor-pointer
          whitespace-nowrap overflow-hidden text-ellipsis
          text-balance
          text-center
          disabled:opacity-50 disabled:cursor-not-allowed

          /* VARIANTS (colors and hover) */
          ${isForm
            ? `
            bg-[linear-gradient(90deg,#ff6a3d,#6a5bff_80%)]
            text-[var(--button-text-color)]
            hover:[background-image:none]
            hover:border-[var(--primary-text-color)]
            hover:text-[var(--primary-text-color)]
          `
            : `
            bg-[var(--button-color)]
            text-[var(--button-text-color)]
            hover:bg-[#F45C0D]
          `
          }
        `}
      >
        {t("cta")}
      </button>
    </div>
  );
}

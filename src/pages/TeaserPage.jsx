import { Trans, useTranslation } from "react-i18next";
import { FeatureGrid } from "@/components/feature-grid/FeatureGrid";
import { MainBannerCtaButton } from "@/components/buttons/MainBannerCtaButton";

export function TeaserPage() {
  useTranslation();

  return (
    <main
      aria-labelledby="hero-title"
      className="flex justify-center px-2 py-10 md:px-12 md:py-16 banner-background rounded-[1.8rem]"
    >
      <div className="w-full max-w-[60rem] flex flex-col items-center rounded-[3rem] bg-transparent">
        <header className="text-center w-full">
          <h1
            id="hero-title"
            className="text-[2rem] md:text-6xl font-bold leading-[1.1] text-white mt-6 -tracking-tight"
          >
            <span className="block md:hidden">
              <Trans i18nKey="main_title_combined_mobile" />
            </span>
            <span className="hidden md:block">
              <Trans i18nKey="main_title_combined" />
            </span>
          </h1>

          <p className="mt-8 md:mt-14 text-sm md:text-2xl text-white font-light leading-tight mx-auto">
            <span className="block sm:hidden">
              <Trans i18nKey="description_combined_mobile" />
            </span>
            <span className="hidden sm:block">
              <Trans i18nKey="description_combined" />
            </span>
          </p>
        </header>

        <section aria-label="Features" className="w-full">
          <FeatureGrid />
        </section>

        <section className="w-full text-center md:mb-6 mt-4 md:mt-2">
          {/* Responsive intro */}
          <p className="text-base md:text-2xl text-white font-light leading-relaxed -tracking-tight mx-auto mb-6">
            <span className="block sm:hidden">
              <Trans i18nKey="intro_combined_mobile" />
            </span>
            <span className="hidden sm:block">
              <Trans i18nKey="intro_combined" />
            </span>
          </p>
        </section>

        <section role="region" aria-label="Join waitlist">
          <MainBannerCtaButton>
            <Trans i18nKey="cta" />
          </MainBannerCtaButton>
        </section>
      </div>
    </main>
  );
}

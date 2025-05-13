import { Trans, useTranslation } from "react-i18next";

export const LegalNotice = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-justify">
      <h4 className="text-2xl font-bold mb-4">{t("legal.title")}</h4>
      <p>
        <Trans i18nKey="legal.identificationTitle" />{" "}
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>{t("legal.name")}</li>
        <li>
          <Trans
            i18nKey="legal.email"
            components={{
              a: (
                <a
                  href="mailto:info@shehub.es"
                  className="text-blue-600 underline"
                />
              ),
            }}
          />
        </li>
      </ul>
      <br />

      <p>
        <Trans i18nKey="legal.purpose" />
      </p>
      <br />

      <p>
        <Trans i18nKey="legal.intellectualProperty" />
      </p>
      <br />

      <p>
        <Trans i18nKey="legal.contentResponsibility" />
      </p>
      <br />

      <p>
        <Trans i18nKey="legal.terms" />
      </p>
      <br />
      <ul className="list-disc list-inside">
        <li>{t("legal.term1")}</li>
        <li>{t("legal.term2")}</li>
        <br />
      </ul>

      <p>
        <Trans i18nKey="legal.cookies" />
      </p>
      <br />

      <p>
        <Trans i18nKey="legal.law" />
      </p>
      <br />
    </div>
  );
};

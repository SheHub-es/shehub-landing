import { Trans, useTranslation } from "react-i18next";
export const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-justify">
      <h4 className="text-2xl font-bold mb-4">{t("legal_privacy_shehub")}</h4>
      <p>
        <Trans i18nKey="privacy.intro" />
      </p>
      <br />
      <p>
        <Trans i18nKey="privacy.commitment" />
      </p>
      <br />
      <p>
        <Trans i18nKey="privacy.collectedDataTitle" />
      </p>
      <ul className="list-disc list-inside">
        <li>{t("privacy.data.name")}</li>
        <li>{t("privacy.data.email")}</li>
        <li>{t("privacy.data.background")}</li>
        <li>{t("privacy.data.city")}</li>
        <li>{t("privacy.data.linkedin")}</li>
      </ul>
      <br />
      <p>
        <Trans i18nKey="privacy.analytics" />
      </p>
      <br />
      <p>
        <Trans i18nKey="privacy.purposeTitle" />
      </p>
      <ul className="list-disc list-inside">
        <li>{t("privacy.purpose.newsletter")}</li>
        <li>{t("privacy.purpose.groups")}</li>
        <li>{t("privacy.purpose.sharing")}</li>
      </ul>{" "}
      <br />
      <p>
        <Trans i18nKey="privacy.legalBase" />
      </p>{" "}
      <br />
      <p>
        <Trans i18nKey="privacy.restrictions" />
      </p>{" "}
      <br />
      <p>
        <Trans i18nKey="privacy.recipientsTitle" />
      </p>
      <ul className="list-disc list-inside">
        <li>{t("privacy.recipients.group")}</li>
        <li>{t("privacy.recipients.mentors")}</li>
        <li>{t("privacy.recipients.team")}</li>
      </ul>
      <br />
      <p>
        <Trans i18nKey="privacy.userRightsTitle" />
      </p>
      <ul className="list-disc list-inside">
        <li>{t("privacy.rights.access")}</li>
        <li>{t("privacy.rights.rectify")}</li>
        <li>{t("privacy.rights.delete")}</li>
        <li>{t("privacy.rights.oppose")}</li>
      </ul>
      <br />
      <p>
        <Trans
          i18nKey="privacy.contact"
          components={{
            a: (
              <a
                href="mailto:info@shehub.es"
                className="text-blue-600 underline"
              />
            ),
          }}
        />
      </p>
      <br />
      <p>
        <Trans i18nKey="privacy.security" />
      </p>
      <br />
      <p>
        <Trans i18nKey="privacy.retention" />
      </p>
      <br />
      <p>
        <Trans i18nKey="privacy.transfers" />
      </p>
    </div>
  );
};

/* global gtag */
import { useState, useTransition, useEffect } from "react";
import { Button } from "@/components/buttons/Button";
import { Timestamp } from "firebase/firestore";
import { setFirebaseApplicant } from "@/api/firebase/setFirebaseApplicant";
import { useTranslation } from "react-i18next";
import { InputField } from "@/components/form/form-inputs/InputField";

export function FormInputs({ onRequestEnded }) {
  const { t, i18n } = useTranslation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isMentor, setIsMentor] = useState(false);
  const [isPending, startTransition] = useTransition();

  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorRole, setErrorRole] = useState("");

  const [utmSource, setUtmSource] = useState(null);
  const [utmMedium, setUtmMedium] = useState(null);
  const [utmCampaign, setUtmCampaign] = useState(null);

  useEffect(() => {
    setUtmSource(localStorage.getItem("utm_source"));
    setUtmMedium(localStorage.getItem("utm_medium"));
    setUtmCampaign(localStorage.getItem("utm_campaign"));
  }, []);

  const clearErrors = () => {
    setErrorFirstName("");
    setErrorLastName("");
    setErrorEmail("");
    setErrorRole("");
  };

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = () => {
    clearErrors();
    let hasError = false;

    if (!firstName.trim()) {
      setErrorFirstName(t("form_error_required"));
      hasError = true;
    }
    if (!lastName.trim()) {
      setErrorLastName(t("form_error_required"));
      hasError = true;
    }
    if (!role.trim()) {
      setErrorRole(t("form_error_required"));
      hasError = true;
    }
    if (!validateEmail(email.trim())) {
      setErrorEmail(t("form_error_email"));
      hasError = true;
    }
    if (hasError) return;

    const data = {
      firstName,
      lastName,
      email,
      role,
      mentor: isMentor,
      timestamp: Timestamp.now(),
      utmSource,
      utmMedium,
      utmCampaign,
      language: i18n.language,
    };

    startTransition(async () => {
      const firebaseMessage = await setFirebaseApplicant(email, data);
      gtag("event", "form_submitted", {
        event_category: "Form",
        event_label: "waitlist-form",
      });
      onRequestEnded(firebaseMessage);
      window.scrollTo(0, 0);
    });
  };

  const isFormValid =
    firstName.trim() &&
    lastName.trim() &&
    role.trim() &&
    validateEmail(email);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      autoComplete="on"
      className="flex flex-col items-center"
    >
      <div className="w-full max-w-[18.75rem] sm:max-w-[21.875rem] px-4 mb-10 flex flex-col items-start">
        <h2 className="text-lg md:text-[1.6rem] font-semibold leading-tight tracking-normal mb-2 text-[var(--primary-text-color)]">
          {t("form_title")}
        </h2>
        <h3 className="text-lg md:text-[1.6rem] font-extralight leading-tight tracking-normal text-[var(--primary-text-color)]">
          {t("form_subtitle")}
        </h3>
      </div>

      <div className="w-full max-w-[18.75rem] sm:max-w-[22.875rem] px-4 space-y-4">
        <InputField
          id="first-name"
          label={t("form_name")}
          placeholder={t("form_placeholder_name")}
          value={firstName}
          onChange={setFirstName}
          autoComplete="given-name"
          error={errorFirstName}
        />

        <InputField
          id="last-name"
          label={t("form_lastname")}
          placeholder={t("form_placeholder_lastname")}
          value={lastName}
          onChange={setLastName}
          autoComplete="family-name"
          error={errorLastName}
        />

        <InputField
          id="email"
          type="email"
          label={t("form_email")}
          placeholder={t("form_placeholder_email")}
          value={email}
          onChange={(val) => {
            setEmail(val);
            setErrorEmail(validateEmail(val) ? "" : t("form_error_email"));
          }}
          autoComplete="email"
          error={errorEmail}
        />

        <InputField
          id="role"
          label={t("form_position")}
          placeholder={t("form_placeholder_position")}
          value={role}
          onChange={setRole}
          autoComplete="organization-title"
          error={errorRole}
          tooltip={{
            id: "roleTooltip",
            content: t("form_tooltip_position"),
            style: { backgroundColor: "#6861ff", color: "#fff", padding: "0.5rem", borderRadius: "0.5rem" },
            className: `
              text-[0.7rem]
              font-tooltip
              font-normal
              tracking-normal
              leading-[1rem]
              whitespace-normal
              max-w-[16rem]
              sm:max-w-[20rem]
              md:max-w-[24rem]
              lg:max-w-[31rem]
            `,
          }}
          tooltipPosition="right"
        />

        <div className="flex items-center space-x-1 -mt-3">
          <input
            id="mentor"
            name="mentor"
            type="checkbox"
            checked={isMentor}
            onChange={(e) => setIsMentor(e.target.checked)}
            className="w-4 h-4 accent-[var(--primary-text-color)]"
          />
          <label htmlFor="mentor" className={`text-base ${isMentor ? "text-[var(--primary-text-color)]" : "text-[var(--neutral-text-color)]"}`}>
            {t("form_checkbox_mentor")}
          </label>
        </div>

        <div className="flex justify-center mt-8">
          <Button type="submit" active={isFormValid} disabled={isPending}>
            {isPending ? t("form_sending") : t("form_cta")}
          </Button>
        </div>

        <p className="text-[0.625rem] tracking-tighter text-[var(--neutral-text-color)] text-center mt-10 mb-10 md:mb-34">
          {t("form_disclaimer")}
        </p>
      </div>
    </form>
  );
}

import { Route, Routes } from "react-router-dom";
import { TeaserPage } from "@/pages/TeaserPage";
import { RegisterForm } from "@/pages/RegisterForm";
import { PATHS } from "@/constants/paths";
import { ScrollToTop } from "@/router/ScrollToTop";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
import { LegalNotice } from "@/pages/LegalNotice";

export function Router() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<TeaserPage />} />
        <Route path={PATHS.teaserPage} element={<TeaserPage />} />
        <Route path={PATHS.registerForm} element={<RegisterForm />} />
        <Route path={PATHS.privacyPolicy} element={<PrivacyPolicy />} />
        <Route path={PATHS.legalNotice} element={<LegalNotice />} />
      
      </Routes>
    </>
  );
}

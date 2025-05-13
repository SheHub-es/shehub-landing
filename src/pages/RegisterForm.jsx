import { FormSection } from "@/components/form/form-section/FormSection";
import logoWhite from "@/assets/logo-white.svg";

export function RegisterForm() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-auto lg:shadow-md rounded-[3rem] overflow-visible">
      {/* LEFT SIDE*/}
      <div className="relative flex flex-col justify-center rounded-[3rem] bg-[#FAFAFA] lg:shadow-sm">
        <FormSection />
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:flex items-center justify-center background-form rounded-[3rem]">
        <img src={logoWhite} alt="background-image" className="p-10" />
      </div>
    </div>
  );
}

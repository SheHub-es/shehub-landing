import dangerIcon from "@/assets/icons/danger-icon.svg";

export const ErrorMessage = ({ message }) => {
  return (
    <p className="mt-2 text-xs text-[#D80A0A] flex items-center gap-1 h-2">
      {message && (
        <>
          <img src={dangerIcon} alt="Error" className="w-4 h-4" />
          {message}
        </>
      )}
    </p>
  );
};

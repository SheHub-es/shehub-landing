import { ErrorMessage } from "@/components/common/ErrorMessage";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Info } from "lucide-react";
export function InputField({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  autoComplete,
  type = "text",
  tooltip,
  tooltipPosition,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className={`flex items-center font-medium text-base leading-6 mb-[0.10rem] ${error
          ? "text-[var(--error-color)]"
          : value
            ? "text-[var(--primary-text-color)]"
            : "text-[var(--neutral-text-color)]"
          }`}
      >
        {label}
        {tooltip && (
          <>
            <span data-tooltip-id={tooltip.id} className="ml-1 inline-flex cursor-pointer">
              <Info size={22} />
            </span>
            <ReactTooltip
              id={tooltip.id}
              place={tooltipPosition || "top"}
              effect="solid"
              style={tooltip.style}
              className={tooltip.className}
            >
              {tooltip.content}
            </ReactTooltip>
          </>
        )}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `error-${id}` : undefined}
        className={`
        w-full h-10 sm:h-[2.188rem] rounded-[1.875rem] border-2 transition
        py-[0.625rem] px-[0.875rem] 
        focus:outline-none focus:border focus:border-[var(--primary-text-color)] focus:ring focus:ring-[var(--primary-text-color)]
        placeholder:font-light placeholder:text-xs placeholder:leading-6 tracking-normal text-sm font-normal
          ${error
            ? "border-[var(--error-color)] bg-red-100 placeholder-red-300 text-[var(--error-color)]"
            : value
              ? "border-2 border-[var(--primary-text-color)] bg-[var(--primary-text-color)]/10 placeholder-[var(--primary-text-color)]/20"
              : "border-2 border-gray-300 bg-white placeholder-gray-400"
          }
        `}
      />

      {error && (
        <ErrorMessage
          id={`error-${id}`}
          message={error}
          role="alert"
          aria-live="assertive"
        />
      )}
    </div>
  );
}


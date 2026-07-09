type MadIndustryIconProps = {
  name: string;
  className?: string;
};

export function MadIndustryIcon({ name, className }: MadIndustryIconProps) {
  const iconClass = className ? `mad-industry-box__icon-svg ${className}` : "mad-industry-box__icon-svg";

  switch (name) {
    case "healthcare":
      return (
        <svg className={iconClass} viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <path
            d="M18 34h8v14h12V34h8V22H38V10H26v12H18v14z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M12 40c4 4 8 6 14 6h12c6 0 10-2 14-6"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="46" cy="18" r="6" stroke="currentColor" strokeWidth="2.2" />
          <path d="M46 15v6M43 18h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case "fintech":
      return (
        <svg className={iconClass} viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <rect x="10" y="16" width="20" height="32" rx="3" stroke="currentColor" strokeWidth="2.2" />
          <rect x="34" y="16" width="20" height="32" rx="3" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="20" cy="28" r="4" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="44" cy="36" r="4" stroke="currentColor" strokeWidth="2.2" />
          <path
            d="M28 32c4 2 8 2 12 0"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "real-estate":
      return (
        <svg className={iconClass} viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <path
            d="M10 30 32 12l22 18v20H10V30z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M24 50V34h16v16"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M22 42c3 2 6 3 10 3s7-1 10-3"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "ecommerce":
      return (
        <svg className={iconClass} viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <path
            d="M12 24h40l-4 22H16L12 24z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M22 24l4-8h12l4 8" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <circle cx="24" cy="50" r="3" fill="currentColor" />
          <circle cx="42" cy="50" r="3" fill="currentColor" />
        </svg>
      );
    case "logistics":
      return (
        <svg className={iconClass} viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <path
            d="M10 18h30v24H10V18z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M40 26h10l6 8v8H40V26z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="46" r="4" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="48" cy="46" r="4" stroke="currentColor" strokeWidth="2.2" />
        </svg>
      );
    case "maritime":
      return (
        <svg className={iconClass} viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <path
            d="M32 10c8 8 12 14 12 20a12 12 0 1 1-24 0c0-6 4-12 12-20z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M18 44h28l-4 8H22l-4-8z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path d="M14 52h36" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg className={iconClass} viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="2.2" />
        </svg>
      );
  }
}

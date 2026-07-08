type SemIconProps = {
  className?: string;
};

export function SemIcon({ className }: SemIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
    >
      <circle cx="19" cy="19" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M25.5 25.5L33 33"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11 35H37"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 35V28M20 35V24M26 35V27M32 35V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 28L20 24L26 27L32 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

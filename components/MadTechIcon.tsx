type MadTechIconProps = {
  name: string;
  className?: string;
};

export function MadTechIcon({ name, className }: MadTechIconProps) {
  const iconClass = className ? `mad-tech-card__icon-svg ${className}` : "mad-tech-card__icon-svg";

  switch (name) {
    case "ios":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.8 12.2c.02-2.2 1.8-3.26 1.88-3.32-1.02-1.5-2.62-1.7-3.18-1.73-1.36-.14-2.66.8-3.34.8-.7 0-1.78-.78-2.94-.76-1.52.02-2.92.88-3.7 2.24-1.58 2.74-.4 6.8 1.12 9.02.76 1.1 1.66 2.34 2.84 2.3 1.14-.05 1.58-.74 2.96-.74 1.38 0 1.76.74 2.96.72 1.22-.02 1.98-1.12 2.72-2.22.86-1.24 1.22-2.44 1.24-2.5-.03-.01-2.38-.91-2.4-3.61zm-2.2-6.6c.62-.76 1.04-1.82.92-2.88-.9.04-1.98.6-2.62 1.36-.58.67-1.08 1.74-.94 2.77 1 .08 2.02-.51 2.64-1.25z"
          />
        </svg>
      );
    case "android":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6 18c0 .55.45 1 1 1h1v2.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v2.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1v-7H6v7zm10.5-11.5c.83 0 1.5-.67 1.5-1.5S17.33 3.5 16.5 3.5 15 4.17 15 5s.67 1.5 1.5 1.5zm-9 0C8.33 6.5 9 5.83 9 5S8.33 3.5 7.5 3.5 6 4.17 6 5s.67 1.5 1.5 1.5zM17.5 7H6.5c-.97 0-1.75.78-1.75 1.75v7.5c0 .97.78 1.75 1.75 1.75h11c.97 0 1.75-.78 1.75-1.75v-7.5C19.25 7.78 18.47 7 17.5 7z"
          />
        </svg>
      );
    case "cross":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 3 4 9v12h6v-7h4v7h6V9l-8-6zm0 2.2 6 4.5v9.3h-2v-7H8v7H6v-9.3l6-4.5z"
          />
        </svg>
      );
    case "api":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M8.5 7 7 8.5 9.5 11 7 13.5 8.5 15 12 11.5 15.5 15 17 13.5 14.5 11 17 8.5 15.5 7 12 10.5 8.5 7z"
          />
        </svg>
      );
    case "cloud":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
          />
        </svg>
      );
    case "ai":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a2 2 0 1 1 0 4h-1.1a7.001 7.001 0 0 1-12.8 0H5a2 2 0 1 1 0-4h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
          />
        </svg>
      );
    case "database":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zm0 14c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4zm0 6c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4z"
          />
        </svg>
      );
    case "devops":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="m12 2 1.09 3.36h3.55L14.18 7.5l1.09 3.36L12 8.72 8.73 10.86 9.82 7.5 7.36 5.36h3.55L12 2zm-7 9 1.09 3.36h3.55L7.18 16.5l1.09 3.36L5 17.72 1.73 19.86 2.82 16.5.36 14.36h3.55L5 11zm14 0 1.09 3.36h3.55L21.18 16.5l1.09 3.36L19 17.72l-3.27 2.14 1.09-3.36-2.46-2.14h3.55L19 11z"
          />
        </svg>
      );
    case "analytics":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M3 13h4v8H3v-8zm6-6h4v14H9V7zm6 3h4v11h-4V10z" />
        </svg>
      );
    case "payments":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-8H4V6h16v4z"
          />
        </svg>
      );
    default:
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 2 2 7l10 5 10-5-10-5zm0 7L2 14l10 5 10-5-10-5z" />
        </svg>
      );
  }
}

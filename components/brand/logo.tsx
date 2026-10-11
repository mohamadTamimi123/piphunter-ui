import clsx from "clsx";

export const LogoMark = ({
  size = 36,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height={size}
    viewBox="0 0 48 48"
    width={size}
  >
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="ph-grad"
        x1="0"
        x2="48"
        y1="0"
        y2="48"
      >
        <stop stopColor="#FF9A4D" />
        <stop offset="1" stopColor="#F2416B" />
      </linearGradient>
    </defs>
    <rect fill="url(#ph-grad)" height="48" rx="13" width="48" />
    <circle
      cx="24"
      cy="24"
      opacity="0.95"
      r="11.5"
      stroke="#fff"
      strokeWidth="2.4"
    />
    <path
      d="M24 7.5v6M24 34.5v6M7.5 24h6M34.5 24h6"
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth="2.4"
    />
    <path
      d="M17.5 28.5l4.5-4.5 3.5 3 6-7"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.6"
    />
    <path
      d="M27.5 20h4v4"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.6"
    />
  </svg>
);

export const Logo = ({
  size = 36,
  className,
  subtitle,
}: {
  size?: number;
  className?: string;
  subtitle?: string;
}) => (
  <div className={clsx("flex items-center gap-2.5", className)}>
    <LogoMark size={size} />
    <div className="flex flex-col leading-tight ltr text-left">
      <span className="font-bold text-lg tracking-tight text-foreground">
        Pip<span className="text-primary">Hunter</span>
      </span>
      {subtitle && (
        <span className="text-[11px] text-default-500 rtl text-right">
          {subtitle}
        </span>
      )}
    </div>
  </div>
);

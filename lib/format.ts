const faNumber = new Intl.NumberFormat("fa-IR");

export const num = (n: number | string) => faNumber.format(Number(n || 0));
export const pct = (n: number | string) =>
  `${faNumber.format(Number(n || 0))}٪`;
export const usd = (n: number | string) =>
  `$${Number(n || 0).toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
export const toman = (rial: number | string) =>
  `${faNumber.format(Math.round(Number(rial || 0) / 10))} تومان`;
export const shortSize = (n: number | string) => {
  const v = Number(n);

  return v >= 1000 ? `${v / 1000}K` : String(v);
};

export const date = (value: string | null | undefined) =>
  value
    ? new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(value))
    : "";

export const RISK_LABEL: Record<string, { label: string; className: string }> =
  {
    low: { label: "ریسک کم", className: "bg-success/15 text-success" },
    medium: { label: "ریسک متوسط", className: "bg-warning/15 text-warning" },
    high: { label: "ریسک بالا", className: "bg-danger/15 text-danger" },
  };

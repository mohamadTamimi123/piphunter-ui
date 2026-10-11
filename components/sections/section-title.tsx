import clsx from "clsx";

export function SectionTitle({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center text-center gap-3 mb-12",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-primary text-sm font-semibold tracking-wide px-3 py-1 rounded-full bg-primary/10">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold leading-snug">{title}</h2>
      {description && (
        <p className="text-default-500 max-w-2xl leading-8">{description}</p>
      )}
    </div>
  );
}

export function Container({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      className={clsx("max-w-7xl mx-auto px-6 py-20 scroll-mt-20", className)}
      id={id}
    >
      {children}
    </section>
  );
}

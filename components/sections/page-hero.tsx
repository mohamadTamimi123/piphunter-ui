export function PageHero({
  title,
  description,
  eyebrow,
}: {
  title: string;
  description?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-divider">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] glow pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-6 py-20 text-center flex flex-col items-center gap-4">
        {eyebrow && (
          <span className="text-primary text-sm font-semibold px-3 py-1 rounded-full bg-primary/10">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-black leading-snug">
          {title}
        </h1>
        {description && (
          <p className="text-default-500 text-lg leading-9 max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

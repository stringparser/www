type PageHeroProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
};

export function PageHero({
  title,
  subtitle,
  children,
  backgroundImage = "/static/img/rotating-sky.jpg",
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[42vh] items-center justify-center overflow-hidden px-6 py-24 text-center text-white md:px-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 text-lg text-white/85">{subtitle}</p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

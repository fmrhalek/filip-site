const ITEMS = [
  "Brand Identity",
  "Digital Products",
  "Motion Design",
  "Art Direction",
  "Type Design",
  "Web Development",
];

export function Marquee() {
  const loop = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <section
      aria-label="Capabilities ticker"
      className="relative overflow-hidden border-y border-ink/10 bg-ink py-6 text-bone md:py-10"
    >
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {loop.map((item, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center font-display text-5xl tracking-[-0.02em] md:mx-14 md:text-8xl"
          >
            {item}
            <span className="ml-8 text-accent md:ml-14">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

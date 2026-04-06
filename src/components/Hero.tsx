export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-[1fr_1.1fr] bg-cream">
      <div className="flex flex-col justify-end px-6 md:px-16 pt-32 pb-12 md:pb-20 z-2">
        <div
          className="text-[0.65rem] tracking-[0.25em] uppercase text-deep-sage mb-8 font-medium animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Crafted Home &amp; Body Care
        </div>
        <h1
          className="font-[var(--font-heading)] text-[clamp(3rem,5vw,4.5rem)] font-light leading-[1.1] text-soft-black mb-8 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          Come home.<br />
          Feel <em className="italic text-pine">elevated</em>.
        </h1>
        <p
          className="text-base leading-[1.7] text-charcoal max-w-[420px] font-light mb-10 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          Plant-based home and body care, thoughtfully crafted in Thailand. For
          those who believe everyday rituals deserve more intention.
        </p>
        <div
          className="flex flex-col md:flex-row gap-4 items-start animate-fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          <a href="#products" className="btn-primary">
            Explore Collection
          </a>
          <button onClick={onOpenModal} className="btn-outline">
            Become a Member
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1200&q=80"
          alt="Warm minimalist home with natural light"
          className="absolute inset-0 md:static"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream to-transparent md:via-transparent z-1 pointer-events-none" />
      </div>
    </section>
  );
}

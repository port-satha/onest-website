const items = [
  "Plant-Based",
  "Thai-Crafted",
  "Kindness Scent",
  "Own Factory in Ratchaburi",
  "✈ Worldwide Shipping",
];

export default function BrandBar() {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-14 flex-wrap px-6 md:px-12 py-5 md:py-7 bg-soft-black text-stone/45 text-[0.45rem] md:text-[0.6rem] tracking-[0.22em] uppercase">
      {items.map((item, i) => (
        <span key={item} className="flex items-center gap-4 md:gap-14">
          {i > 0 && (
            <span className="w-[3px] h-[3px] rounded-full bg-stone/25 shrink-0" />
          )}
          <span>{item}</span>
        </span>
      ))}
    </div>
  );
}

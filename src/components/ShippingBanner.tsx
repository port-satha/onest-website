const zones = [
  {
    icon: "🇹🇭",
    title: "Thailand",
    detail: "Free shipping over ฿1,500\nDelivery in 2–3 days",
  },
  {
    icon: "🌏",
    title: "Asia Pacific",
    detail: "Singapore, Taiwan, Japan, HK\nDelivery in 5–7 days",
  },
  {
    icon: "✈️",
    title: "Worldwide",
    detail: "We ship to 50+ countries\nDelivery in 7–14 days",
  },
];

export default function ShippingBanner() {
  return (
    <div className="bg-cream">
      <div className="section-container flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 py-8 md:py-12">
        {zones.map((z) => (
          <div key={z.title} className="flex items-center gap-4">
            <div className="w-11 h-11 border-[1.5px] border-pine rounded-full flex items-center justify-center text-[1.1rem] shrink-0">
              {z.icon}
            </div>
            <div>
              <h4 className="font-[var(--font-heading)] text-base font-medium mb-0.5 text-soft-black">
                {z.title}
              </h4>
              <p className="text-[0.72rem] text-stone font-light leading-[1.4] whitespace-pre-line">
                {z.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

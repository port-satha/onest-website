"use client";

import { useState, useEffect } from "react";

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const countries = [
  "Singapore",
  "Japan",
  "Taiwan",
  "Hong Kong",
  "South Korea",
  "Malaysia",
  "Indonesia",
  "Vietnam",
  "Australia",
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "Canada",
  "Other",
];

export default function MembershipModal({
  isOpen,
  onClose,
}: MembershipModalProps) {
  const [memberType, setMemberType] = useState<"thai" | "international">(
    "thai"
  );
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      type: memberType,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      birthday: formData.get("birthday"),
      country: memberType === "international" ? formData.get("country") : "Thailand",
      scentPreference: formData.get("scent"),
      consentMarketing: formData.get("consent") === "on",
      signupDate: new Date().toISOString(),
      source: "homepage",
    };

    try {
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 3000);
      }
    } catch {
      // silently handle
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] bg-soft-black/60 backdrop-blur-[6px] flex items-center justify-center p-4 md:p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="bg-warm-white max-w-[520px] w-full p-8 md:p-12 relative max-h-[90vh] overflow-y-auto"
        style={{ animation: "modalIn 0.3s ease" }}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-6 bg-transparent border-none text-[1.2rem] cursor-pointer text-stone hover:text-charcoal transition-colors duration-300 p-2"
          aria-label="Close modal"
        >
          &times;
        </button>

        {success ? (
          <div className="text-center py-12">
            <h3 className="font-[var(--font-heading)] text-[1.8rem] font-light mb-4 text-soft-black">
              Welcome to the circle
            </h3>
            <p className="text-[0.85rem] text-stone font-light leading-[1.6]">
              We&apos;ll be in touch with scent stories and member-only moments.
            </p>
          </div>
        ) : (
          <>
            <h3 className="font-[var(--font-heading)] text-[1.8rem] font-light mb-2 text-soft-black">
              Join the onest circle
            </h3>
            <p className="text-[0.82rem] text-stone font-light mb-8 leading-[1.6]">
              Free membership. Scent stories, early access, birthday rewards,
              and invitations — delivered to you wherever you are.
            </p>

            <div className="flex gap-0 mb-8 border border-charcoal/12">
              <button
                type="button"
                onClick={() => setMemberType("thai")}
                className={`flex-1 py-3 bg-transparent border-none font-[var(--font-body)] text-[0.72rem] tracking-[0.1em] uppercase cursor-pointer transition-all duration-300 ${
                  memberType === "thai"
                    ? "bg-pine text-warm-white"
                    : "text-stone"
                }`}
              >
                Thailand
              </button>
              <button
                type="button"
                onClick={() => setMemberType("international")}
                className={`flex-1 py-3 bg-transparent border-none font-[var(--font-body)] text-[0.72rem] tracking-[0.1em] uppercase cursor-pointer transition-all duration-300 ${
                  memberType === "international"
                    ? "bg-pine text-warm-white"
                    : "text-stone"
                }`}
              >
                International
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.62rem] tracking-[0.12em] uppercase text-stone font-medium">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder={memberType === "thai" ? "Somchai" : "John"}
                    required
                    className="px-4 py-3 border border-charcoal/12 bg-transparent font-[var(--font-body)] text-[0.85rem] text-charcoal outline-none focus:border-pine transition-colors duration-300 placeholder:text-stone"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.62rem] tracking-[0.12em] uppercase text-stone font-medium">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    placeholder={memberType === "thai" ? "Rak-dee" : "Doe"}
                    required
                    className="px-4 py-3 border border-charcoal/12 bg-transparent font-[var(--font-body)] text-[0.85rem] text-charcoal outline-none focus:border-pine transition-colors duration-300 placeholder:text-stone"
                  />
                </div>
              </div>

              <div className="mb-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.62rem] tracking-[0.12em] uppercase text-stone font-medium">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    required
                    className="px-4 py-3 border border-charcoal/12 bg-transparent font-[var(--font-body)] text-[0.85rem] text-charcoal outline-none focus:border-pine transition-colors duration-300 placeholder:text-stone"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.62rem] tracking-[0.12em] uppercase text-stone font-medium">
                    {memberType === "thai"
                      ? "Phone / LINE ID"
                      : "Phone (with country code)"}
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder={
                      memberType === "thai"
                        ? "08X-XXX-XXXX"
                        : "+1 555-123-4567"
                    }
                    className="px-4 py-3 border border-charcoal/12 bg-transparent font-[var(--font-body)] text-[0.85rem] text-charcoal outline-none focus:border-pine transition-colors duration-300 placeholder:text-stone"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.62rem] tracking-[0.12em] uppercase text-stone font-medium">
                    Birthday
                  </label>
                  <input
                    name="birthday"
                    type="date"
                    className="px-4 py-3 border border-charcoal/12 bg-transparent font-[var(--font-body)] text-[0.85rem] text-charcoal outline-none focus:border-pine transition-colors duration-300"
                  />
                </div>
              </div>

              {memberType === "international" && (
                <div className="mb-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.62rem] tracking-[0.12em] uppercase text-stone font-medium">
                      Country
                    </label>
                    <select
                      name="country"
                      className="px-4 py-3 border border-charcoal/12 bg-transparent font-[var(--font-body)] text-[0.85rem] text-charcoal outline-none focus:border-pine transition-colors duration-300 cursor-pointer"
                    >
                      <option value="">Select your country</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              <div className="mb-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.62rem] tracking-[0.12em] uppercase text-stone font-medium">
                    Your Favourite Scent (optional)
                  </label>
                  <select
                    name="scent"
                    className="px-4 py-3 border border-charcoal/12 bg-transparent font-[var(--font-body)] text-[0.85rem] text-charcoal outline-none focus:border-pine transition-colors duration-300 cursor-pointer"
                  >
                    <option value="">I&apos;d like to discover</option>
                    <option value="everpine">
                      Everpine — Forest &amp; grounding
                    </option>
                    <option value="chalene-rose">
                      Chalene Rose — Rose &amp; warm wood
                    </option>
                    <option value="neroli-garden">
                      Neroli Garden — Citrus &amp; green
                    </option>
                    <option value="white-tea-retreat">
                      White Tea Retreat — Clean &amp; calm
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex items-start gap-2.5 my-6 text-[0.75rem] text-stone leading-[1.5]">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  className="mt-0.5 accent-pine w-3.5 h-3.5 shrink-0"
                />
                <label htmlFor="consent">
                  I&apos;d like to receive scent stories, new arrivals, and
                  member-only offers from onest. You can unsubscribe anytime.
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-pine text-warm-white border border-pine font-[var(--font-body)] text-[0.72rem] tracking-[0.15em] uppercase cursor-pointer transition-all duration-300 font-normal hover:bg-soft-black hover:border-soft-black disabled:opacity-50"
              >
                {submitting ? "Joining..." : "Join the Circle"}
              </button>
              <p className="text-[0.65rem] text-stone text-center mt-4 leading-[1.5]">
                No spam, ever. Just the things that matter.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

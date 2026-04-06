# Claude Code Prompt: Build onest Website (Next.js + Vercel)

## Project Overview

Build a production-ready website for **onest** — a premium Thai plant-based home & body care brand. The site serves two purposes: **brand storytelling** and **e-commerce** (future Shopify/Stripe integration). Deploy to Vercel.

This is a real brand. Website: instagram.com/onest.care | Tagline: "Elevated Home Living"

---

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **Language**: TypeScript
- **Deployment**: Vercel (connect to GitHub repo `onest-website`)
- **Font loading**: next/font/google (Cormorant Garamond + DM Sans)
- **Images**: Next.js Image component, placeholder images from Unsplash for now (will be replaced with real product photography later)
- **Forms**: React Hook Form for membership signup
- **Analytics-ready**: Add Google Analytics / Meta Pixel script slots in layout
- **i18n-ready**: Structure for future Thai + English language support

---

## Design System

### Brand Identity
- **Brand name**: onest (always lowercase)
- **Tagline**: "Crafted Home & Body Care for Elevated Living"
- **Brand position**: "Your home is your recharge station" — helping purposeful people transform daily routines into moments of restoration
- **Personality**: The wise friend meets the creative local. Intentional, mindful, grounded, Thai pride, artisan quality
- **Design direction**: "Warm minimalism with quiet confidence" — NOT Aesop-cold, NOT Nécessaire-clinical. onest's own lane.

### Color Palette (Tailwind custom config)
```
cream:       #F6F1EB
warm-white:  #FEFCF9
stone:       #D4C9BC
sage:        #A8B5A0
deep-sage:   #7A8E70
pine:        #3D5A3A  (primary action color)
charcoal:    #2C2B28
soft-black:  #1A1918
rose-mist:   #E8D5CE
golden:      #C4A97D
neroli:      #E5D4B0
```

### Typography
- **Display/Headings**: Cormorant Garamond — weights: 300 (main), 400, 500, 600 + italic
- **Body/UI**: DM Sans — weights: 300, 400, 500
- **Heading sizes**: Use clamp() for fluid responsive sizing
- **Body size**: 0.95rem, line-height 1.8
- **Label/Tag style**: 0.6-0.72rem, letter-spacing 0.12-0.25em, uppercase, DM Sans weight 500

### Design Principles
- Generous whitespace, editorial feel
- Subtle hover animations (translateY, opacity, border reveals)
- Gradient overlays on images for text readability
- No harsh borders — use rgba(44,43,40,0.06-0.12) for subtle dividers
- Buttons: pill-like with letter-spacing, uppercase, pine green primary
- Mobile-first responsive, nav collapses to hamburger menu on mobile

---

## Site Structure (Pages)

### 1. Homepage (`/`)
Sections in order:

**a) Navigation (fixed)**
- Logo: "onest" (lowercase, DM Sans, 500 weight, letter-spacing 0.12em)
- Links: Our Story, Kindness Scent, Products, Visit Us, Join Us (opens membership modal)
- CTA button: "Shop Now" (outlined)
- Mobile: hamburger menu with slide-out drawer

**b) Hero (full viewport height)**
- Split layout: left text (60%) + right full-bleed image (40%)
- Left fade gradient overlay on image edge
- Tag: "Crafted Home & Body Care"
- H1: "Come home. Feel *elevated*." (italic "elevated" in pine green)
- Subtitle: "Plant-based home and body care, thoughtfully crafted in Thailand. For those who believe everyday rituals deserve more intention."
- Two CTAs: "Explore Collection" (primary) + "Become a Member" (outline, opens modal)
- Animate in with staggered fadeUp on load

**c) Brand Trust Bar**
- Dark background (soft-black)
- Items: Plant-Based · Thai-Crafted · Kindness Scent · Own Factory in Ratchaburi · ✈ Worldwide Shipping
- Separated by small dots
- Small uppercase text, low opacity

**d) Philosophy / Our Story Section**
- Two-column: image left (4:5 aspect ratio) + text right
- H2: "Your home is your recharge station."
- Two paragraphs about the founder story
- Three value pillars below a subtle divider: Intentional / Plant-Based / Thai-Made
- Each with Cormorant Garamond h4 heading + short description

**e) Kindness Scent Collection**
- Two-column header: text left + image right (dark section, soft-black bg)
- H2: "The Kindness Scent Collection"
- Below: 4 scent cards in a row (full width, 1px gap)
- Each card: large faded number (01-04), scent moment tag (golden uppercase), scent name (Cormorant), hover reveals description
- Scents:
  1. Everpine — "Evening Wind-Down" — forest floor after rain
  2. Chalene Rose — "Gentle Beginnings" — soft rose and warm wood
  3. Neroli Garden — "Bright Clarity" — citrus blossom and green leaf
  4. White Tea Retreat — "Deep Restoration" — clean white tea and linen
- Hover: gradient overlay + description reveal animation

**f) Products Grid**
- Centered header: "Essentials for Elevated Living"
- 4-column grid of product cards
- Each card: image (3:4), tag badge (top-left), product name, type, price in THB
- Featured products:
  1. Ambient Parfum — Home Fragrance — ฿1,490 (Bestseller)
  2. Body Cleanser — Everpine — ฿690 (Personal Care)
  3. Perfume Balm — Signature Collection — ฿949 (New)
  4. Fabric Fragrance — Textile Care — ฿590 (Home Care)
- Hover: translateY(-4px) lift
- "View All Products" link below grid

**g) Shipping Info Banner**
- Cream background, 3 items centered with icons
- Thailand: Free shipping over ฿1,500, 2-3 days
- Asia Pacific (SG, TW, JP, HK): 5-7 days
- Worldwide (50+ countries): 7-14 days

**h) Lifestyle Triptych**
- 3-column full-bleed image grid (no gap)
- Images: evening home ritual / store exterior / hands with product
- No text overlay, pure visual breathing room

**i) Ritual Banner**
- Centered text on warm-white background
- Tag: "The Evening Ritual"
- H2: "Recharge tonight. Create tomorrow."
- Body text about the evening wind-down ritual
- CTA: "Discover Your Ritual"

**j) Store Locations**
- Header: "Visit Our Homes" + "View All Locations" button
- 3-column grid of store cards
- Each: image (4:3) + type tag + store name + address + hours
- Stores:
  1. Song Wat — Flagship — 1198 Song Wat Road, Samphanthawong — Daily 11:00-19:00
  2. Talat Noi — Neighbourhood — Soi Wanit 2, Samphanthawong — Sat-Sun 10:00-18:00
  3. Siam Discovery — Retail Partner — Siam Discovery 2F, Pathum Wan — Daily 10:00-22:00
- Hover: translateY(-4px) lift

**k) Membership CTA + Social**
- Pine green background section
- H2: "Join the onest circle"
- Subtitle about member benefits
- 3 perks with check marks: Early access / Birthday rewards / Members-only events
- CTA button: "Become a Member — Free" (cream bg, opens modal)
- Divider, then social links: Instagram, Facebook, TikTok, LINE

**l) Footer**
- Soft-black background
- Brand name, tagline, copyright "© 2026 Kind Collective Co., Ltd."

---

### 2. About Page (`/about`)
- Extended founder story (Port & wife, COVID origin, Ratchaburi factory)
- Brand values deep-dive
- "Kindness Scent Philosophy" section explaining the experience-first approach
- Team/factory images (placeholder for now)

### 3. Products Page (`/products`)
- Filter by category: All / Home Care / Personal Care / New
- Product grid (responsive: 4-col desktop, 2-col mobile)
- Each product card links to individual product page

### 4. Product Detail Page (`/products/[slug]`)
- Large product image gallery (placeholder)
- Product name, price, description
- Scent selector (if applicable)
- "Add to Cart" button (placeholder — will connect to Shopify/Stripe later)
- Shipping info (Thailand / Asia / Worldwide)
- Related products carousel
- **E-commerce note**: Structure the product data as a typed Product interface so it's easy to connect to Shopify Storefront API or Stripe later

### 5. Store Locator Page (`/stores`)
- List of all store locations with addresses and hours
- Embedded Google Maps (or placeholder map)
- "Get Directions" links

### 6. Contact Page (`/contact`)
- Contact form (name, email, message)
- Store addresses
- Social media links
- LINE QR code placeholder

---

## Membership System (Critical Feature)

### Membership Modal (Global Component)
- Triggered from: nav "Join Us" link, hero CTA, membership section CTA, footer
- Modal with backdrop blur overlay, close on X / overlay click / ESC
- Animate in with fadeUp

### Form Fields
- **Toggle**: Thailand / International (changes form behavior)
- First Name, Last Name
- Email (required)
- Phone / LINE ID (Thai mode) OR Phone with country code (International mode)
- Birthday (date picker — for birthday rewards)
- Country selector (International mode only — dropdown with: Singapore, Japan, Taiwan, Hong Kong, South Korea, Malaysia, Indonesia, Vietnam, Australia, US, UK, Germany, France, Canada, Other)
- Favourite Scent (optional dropdown: Everpine, Chalene Rose, Neroli Garden, White Tea Retreat, "I'd like to discover")
- Consent checkbox for marketing communications
- Submit button: "Join the Circle"

### Backend / API
- Create API route: `POST /api/membership`
- For now: store submissions in a JSON file or log to console
- Structure the data so it can easily connect to:
  - **Brevo (Sendinblue)** for email marketing
  - **LINE OA** for Thai members (via LINE Messaging API)
  - **HubSpot** or similar CRM
- Include fields: `type` (thai/international), `firstName`, `lastName`, `email`, `phone`, `birthday`, `country`, `scentPreference`, `consentMarketing`, `signupDate`, `source` (which page/CTA triggered signup)
- Return success/error response, show toast notification on success

---

## E-Commerce Readiness

### Product Data Structure
```typescript
interface Product {
  id: string;
  slug: string;
  name: string;
  nameThSlug: string; // for future Thai language
  category: 'home-care' | 'personal-care' | 'gift-set' | 'collaborative';
  price: number; // in THB
  currency: 'THB';
  description: string;
  scent?: string;
  images: string[];
  tags: string[]; // e.g., 'bestseller', 'new', 'limited'
  inStock: boolean;
  shippingZones: ('thailand' | 'asia-pacific' | 'worldwide')[];
}
```

### Shipping Zones
```typescript
const shippingZones = {
  thailand: { label: 'Thailand', deliveryDays: '2-3', freeAbove: 1500 },
  'asia-pacific': { label: 'Asia Pacific', deliveryDays: '5-7', countries: ['SG','TW','JP','HK','KR','MY'] },
  worldwide: { label: 'Worldwide', deliveryDays: '7-14', note: '50+ countries' }
};
```

### Cart (Placeholder)
- Add to cart button on product pages (stores in localStorage for now)
- Cart icon in nav with count badge
- Cart drawer/page showing items
- "Checkout" button that shows "Coming soon — Shop on Shopee/LINE" with links
- Structure so Shopify Storefront API or Stripe can be dropped in later

---

## Placeholder Images

Use these Unsplash images for now (will be replaced with real onest photography):

- Hero: `https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1200&q=80` (warm home interior)
- Philosophy: `https://images.unsplash.com/photo-1556760544-74068565f05c?w=800&q=80` (botanical crafting)
- Scent hero: `https://images.unsplash.com/photo-1547793549-70faf88c9c8e?w=900&q=80` (botanical ingredients)
- Product 1: `https://images.unsplash.com/photo-1629198688000-71f23e745571?w=500&q=80`
- Product 2: `https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500&q=80`
- Product 3: `https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80`
- Product 4: `https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=500&q=80`
- Lifestyle 1: `https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80`
- Lifestyle 2: `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80`
- Lifestyle 3: `https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80`
- Store 1: `https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=600&q=80`
- Store 2: `https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&q=80`
- Store 3: `https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80`

---

## SEO & Meta

- Title: "onest — Crafted Home & Body Care for Elevated Living"
- Description: "Plant-based home and body care, thoughtfully crafted in Thailand. Transform your daily rituals into moments of restoration."
- OG Image: hero image
- Structured data: LocalBusiness schema for store locations
- Sitemap generation
- robots.txt

---

## Deployment

1. Initialize Next.js project with TypeScript + Tailwind
2. Push to GitHub repo: `onest-website`
3. Connect to Vercel for automatic deployments
4. Domain: will configure `onest.care` later (for now use Vercel default URL)

---

## Priority Order

Build in this order:
1. Project setup (Next.js + Tailwind + fonts + color tokens)
2. Layout (nav + footer + membership modal as global components)
3. Homepage (all sections from the prototype)
4. Membership API route
5. Products page + product detail page
6. About page
7. Store locator page
8. Contact page
9. Cart placeholder
10. SEO + meta + analytics slots

---

## Reference

The HTML prototype file `onest-homepage-v5.html` is the approved design reference. Match its visual feel exactly — the colors, typography, spacing, hover effects, and overall warm minimalist mood. The prototype is a single HTML file; the production version should be component-based Next.js with proper routing, but visually identical.

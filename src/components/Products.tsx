"use client";

import { useState } from "react";

type Product = {
  name: string;
  scents: string;
  size: string;
  price: string;
  tag?: string;
  image: string;
  imgClass: string;
};

type Subcategory = {
  name: string;
  count: string;
  products: Product[];
};

type Category = {
  id: string;
  label: string;
  subcategories: Subcategory[];
};

const categories: Category[] = [
  {
    id: "living",
    label: "The Living Space",
    subcategories: [
      {
        name: "Surfaces & Textiles Care",
        count: "4 Products",
        products: [
          { name: "Dish Soap", scents: "Pine Forest", size: "500 ml", price: "฿350", tag: "Bestseller", image: "/images/product-spray.jpg", imgClass: "img-living" },
          { name: "Surface Cleaner", scents: "White Tea Retreat", size: "500 ml", price: "฿390", image: "/images/product-bottle.jpg", imgClass: "img-living" },
          { name: "Dry Wool Wash", scents: "Coming Soon", size: "", price: "TBA", tag: "New", image: "/images/product-pump.jpg", imgClass: "img-living" },
          { name: "Wood Oil", scents: "Coming Soon", size: "", price: "TBA", tag: "New", image: "/images/product-jar.jpg", imgClass: "img-living" },
        ],
      },
      {
        name: "Atmospheric Presence",
        count: "3 Products · 7 Scents",
        products: [
          { name: "Ambient Parfum", scents: "7 scents available", size: "100 ml", price: "฿1,490", tag: "Signature", image: "/images/product-diffuser.jpg", imgClass: "img-atmos" },
          { name: "Ambient Reed Diffuser", scents: "Pine Forest · Chalene Rose · White Tea", size: "130 ml", price: "฿1,290", image: "/images/product-amber.jpg", imgClass: "img-atmos" },
          { name: "Bloom & Blossoms", scents: "Natural & Unscented", size: "100 ml", price: "฿890", image: "/images/product-bloom.jpg", imgClass: "img-atmos" },
        ],
      },
      {
        name: "Sleep & Linen",
        count: "2 Products",
        products: [
          { name: "Pillow Spray", scents: "Coming Soon", size: "", price: "TBA", tag: "New", image: "/images/lifestyle-evening.jpg", imgClass: "img-sleep" },
          { name: "Fabric Fragrance", scents: "Cotton Musk · Wild Mint", size: "100 ml", price: "฿590", image: "/images/lifestyle-interior.jpg", imgClass: "img-sleep" },
        ],
      },
    ],
  },
  {
    id: "personal",
    label: "The Personal Space",
    subcategories: [
      {
        name: "Daily Hand & Body",
        count: "4 Products",
        products: [
          { name: "Hand Wash", scents: "Chalene Rose · Serene Tea · Neroli Garden", size: "300 ml", price: "฿490", image: "/images/product-pump.jpg", imgClass: "img-body" },
          { name: "Body Cleanser", scents: "Everpine · Chalene Rose · Neroli Garden", size: "300 ml", price: "฿690", tag: "Bestseller", image: "/images/product-bodycare.jpg", imgClass: "img-body" },
          { name: "Satin-Veil Body Lotion", scents: "Everpine · Chalene Rose · Neroli Garden", size: "280 ml", price: "฿790", image: "/images/lifestyle-selfcare.jpg", imgClass: "img-body" },
          { name: "Body Mist", scents: "Chalene Rose · more coming", size: "", price: "TBA", tag: "New", image: "/images/product-spray.jpg", imgClass: "img-body" },
        ],
      },
      {
        name: "Hair Care",
        count: "3 Products · Coming Q3",
        products: [
          { name: "Shampoo", scents: "Scent TBD", size: "", price: "TBA", tag: "Coming Soon", image: "/images/product-jar.jpg", imgClass: "img-hair" },
          { name: "Conditioner", scents: "Scent TBD", size: "", price: "TBA", tag: "Coming Soon", image: "/images/product-bottle.jpg", imgClass: "img-hair" },
          { name: "Hair Mist", scents: "Scent TBD", size: "", price: "TBA", tag: "Coming Soon", image: "/images/product-amber.jpg", imgClass: "img-hair" },
        ],
      },
      {
        name: "Signature Scent",
        count: "1 Product · 8 Scents",
        products: [
          { name: "Perfume Balm", scents: "8 signature scents", size: "", price: "฿949", tag: "Hero Launch", image: "/images/product-diffuser.jpg", imgClass: "img-scent" },
        ],
      },
    ],
  },
  {
    id: "curated",
    label: "Curated Living",
    subcategories: [
      {
        name: "Collections",
        count: "4 Sets",
        products: [
          { name: "Kitchen Set", scents: "White Tea · Pine Forest · Neroli", size: "3 pieces", price: "฿1,190", image: "/images/store-songwat.jpg", imgClass: "img-set" },
          { name: "The Skin Veil Duet", scents: "Everpine · Chalene Rose · Neroli", size: "2 pieces", price: "฿1,390", image: "/images/store-talatnoi.jpg", imgClass: "img-set" },
          { name: "Ambient Parfum Discovery", scents: "All 7 scents · 10ml × 7", size: "Discovery", price: "฿1,890", tag: "Gift", image: "/images/store-siam.jpg", imgClass: "img-set" },
          { name: "Starter Set", scents: "Choose your scent", size: "3 pieces", price: "฿990", image: "/images/philosophy-botanical.jpg", imgClass: "img-set" },
        ],
      },
      {
        name: "Only at onest",
        count: "Exclusives",
        products: [
          { name: "Kindness Tote Bag", scents: "onest exclusive", size: "Canvas", price: "฿590", image: "/images/lifestyle-interior.jpg", imgClass: "img-merch" },
          { name: "Bag Charm", scents: "onest exclusive", size: "", price: "฿390", image: "/images/lifestyle-selfcare.jpg", imgClass: "img-merch" },
        ],
      },
    ],
  },
];

const imgGradients: Record<string, string> = {
  "img-living": "linear-gradient(155deg, #E8E2D8, #A8B5A0)",
  "img-atmos": "linear-gradient(155deg, #E5DDD3, #E5D4B0)",
  "img-sleep": "linear-gradient(155deg, #E8E4DE, #E8D5CE)",
  "img-body": "linear-gradient(155deg, #F0E8E2, #E8D5CE)",
  "img-hair": "linear-gradient(155deg, #EDE5D5, #A8B5A0)",
  "img-scent": "linear-gradient(155deg, #E5DDD3, #C4A97D)",
  "img-set": "linear-gradient(155deg, #F6F1EB, #D4C9BC)",
  "img-merch": "linear-gradient(155deg, #EDEBE7, #D8D3CB)",
};

export default function Products() {
  const [activeTab, setActiveTab] = useState("living");

  return (
    <section id="products" style={{ padding: '8rem 3rem', maxWidth: '1300px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, marginBottom: '1rem' }}>
          Essentials for Elevated Living
        </h2>
        <p style={{ fontSize: '0.85rem', color: '#2C2B28', fontWeight: 300, maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
          Home care that feels like self-care. Body care that honours your ritual. Curated sets for the moments that matter.
        </p>
      </div>

      {/* Category Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 0, marginBottom: '4rem', borderBottom: '1px solid rgba(44,43,40,0.08)' }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className="font-body"
            style={{
              padding: '1rem 2.5rem',
              fontSize: '0.7rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: activeTab === cat.id ? '#3D5A3A' : '#D4C9BC',
              cursor: 'pointer',
              border: 'none',
              background: 'none',
              fontWeight: activeTab === cat.id ? 500 : 400,
              position: 'relative',
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => { if (activeTab !== cat.id) e.currentTarget.style.color = '#2C2B28'; }}
            onMouseLeave={e => { if (activeTab !== cat.id) e.currentTarget.style.color = '#D4C9BC'; }}
          >
            {cat.label}
            <span style={{
              position: 'absolute',
              bottom: '-1px',
              left: 0,
              right: 0,
              height: '2px',
              background: '#3D5A3A',
              transform: activeTab === cat.id ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.3s ease',
            }} />
          </button>
        ))}
      </div>

      {/* Category Panels */}
      {categories.map((cat) => (
        <div key={cat.id} style={{ display: activeTab === cat.id ? 'block' : 'none' }}>
          {cat.subcategories.map((subcat) => (
            <div key={subcat.name} style={{ marginBottom: '4rem' }}>
              {/* Subcategory Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem', paddingBottom: '0.8rem', borderBottom: '1px solid rgba(44,43,40,0.06)' }}>
                <div className="font-heading" style={{ fontSize: '1.4rem', fontWeight: 400, color: '#1A1918' }}>{subcat.name}</div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D4C9BC' }}>{subcat.count}</div>
              </div>

              {/* Product Grid */}
              <div className="product-grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                {subcat.products.map((p) => (
                  <div
                    key={p.name + p.scents}
                    style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{ aspectRatio: '3/4', marginBottom: '1rem', borderRadius: '2px', position: 'relative', overflow: 'hidden', background: imgGradients[p.imgClass] || '#F6F1EB' }}>
                      {p.tag && (
                        <span style={{ position: 'absolute', top: '0.8rem', left: '0.8rem', fontSize: '0.52rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FEFCF9', background: 'rgba(26,25,24,0.5)', backdropFilter: 'blur(8px)', padding: '0.25rem 0.6rem', zIndex: 3 }}>
                          {p.tag}
                        </span>
                      )}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image} alt={p.name} className="img-fill" />
                    </div>
                    <div className="font-heading" style={{ fontSize: '1.05rem', fontWeight: 400, marginBottom: '0.2rem' }}>{p.name}</div>
                    <div style={{ fontSize: '0.65rem', color: '#7A8E70', letterSpacing: '0.05em', marginBottom: '0.35rem', fontWeight: 400 }}>{p.scents}</div>
                    {p.size && <div style={{ fontSize: '0.68rem', color: '#D4C9BC', marginBottom: '0.35rem' }}>{p.size}</div>}
                    <div style={{ fontSize: '0.85rem', fontWeight: 500 }}>{p.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* View All */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href="#" style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#3D5A3A', textDecoration: 'none', paddingBottom: '2px', borderBottom: '1px solid #3D5A3A', transition: 'all 0.3s' }}
          onMouseEnter={e => { e.currentTarget.style.color = '#7A8E70'; e.currentTarget.style.borderColor = '#7A8E70'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#3D5A3A'; e.currentTarget.style.borderColor = '#3D5A3A'; }}
        >
          View Full Collection →
        </a>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          section { padding: 4rem 1.5rem !important; }
          section > div:nth-child(2) { overflow-x: auto; justify-content: flex-start !important; -webkit-overflow-scrolling: touch; }
          section > div:nth-child(2) > button { white-space: nowrap; padding: 0.8rem 1.5rem !important; font-size: 0.62rem !important; }
        }
      `}</style>
    </section>
  );
}

"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandBar from "@/components/BrandBar";
import Philosophy from "@/components/Philosophy";
import Scents from "@/components/Scents";
import Products from "@/components/Products";
import ShippingBanner from "@/components/ShippingBanner";
import Lifestyle from "@/components/Lifestyle";
import Ritual from "@/components/Ritual";
import Stores from "@/components/Stores";
import Membership from "@/components/Membership";
import Footer from "@/components/Footer";
import MembershipModal from "@/components/MembershipModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <Hero onOpenModal={() => setModalOpen(true)} />
      <BrandBar />
      <Philosophy />
      <Scents />
      <Products />
      <ShippingBanner />
      <Lifestyle />
      <Ritual />
      <Stores />
      <Membership onOpenModal={() => setModalOpen(true)} />
      <Footer />
      <MembershipModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

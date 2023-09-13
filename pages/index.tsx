import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ProductsSection from "../components/ProductsSection";
import AuditSection from "../components/AuditSection";
import VaultCraftSection from "../components/VaultCraftSection";
import ImpactSection from "../components/ImpactSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import CommunitySection from "../components/CommunitySection";
import ExplainerSection from "../components/ExplainerSection";
import HeroSection from "../components/HeroSection";


const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      router.replace(window.location.pathname);
    }
  }, [router.pathname]);

  return (
    <div className="absolute left-0 right-0 flex flex-col">
      <HeroSection />
      <ExplainerSection />
      <ProductsSection />
      <AuditSection />
      <VaultCraftSection />
      <CommunitySection />
      <ImpactSection />
      {/* <FaqSection /> */}
      <Footer />
    </div >
  );
};

export default IndexPage;

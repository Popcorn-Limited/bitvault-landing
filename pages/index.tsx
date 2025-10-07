import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/HeroSection";
import localFont from "next/font/local";
import { Herr_Von_Muellerhoff } from "next/font/google";
import InvestorSection from "@/components/InvestorSection";
import CardsSection from "@/components/CardsSection";
import { ModalRoot } from "@/components/modal/ModalService";

const khTeka = localFont({
  src: "../public/KH_Teka/KHTeka-Regular.woff",
  variable: "--font-kh-teka",
});

const handwritten = Herr_Von_Muellerhoff({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-herr-von-muller",
});

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      router.replace(window.location.pathname);
    }
  }, [router.pathname]);

  return (
    <div className={`${khTeka.variable} font-sans bg-background`}>
      <div
        className="min-h-svh w-full grid grid-rows-[auto_1fr]"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url('/images/background.png') no-repeat center/cover",
        }}
      >
        <Navbar />
        <main className="flex items-center justify-center px-4">
          <div className="w-full max-w-[1200px] flex flex-col items-center gap-6 md:gap-10 -translate-y-[4vh] md:-translate-y-[6vh]">
            <HeroSection />
            <InvestorSection />
          </div>
        </main>
      </div>

      <div
        className="min-h-screen w-full"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url('/images/background.png') no-repeat center/cover",
        }}
      >
        <CardsSection />
        <ModalRoot />
      </div>
    </div>
  );
};

export default IndexPage;

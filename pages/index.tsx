import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/HeroSection";
import localFont from 'next/font/local'
import { Herr_Von_Muellerhoff } from 'next/font/google'
import InvestorSection from "@/components/InvestorSection";

const khTeka = localFont({
  src: '../public/KH_Teka/KHTeka-Regular.woff',
  variable: '--font-kh-teka'
})

const handwritten = Herr_Von_Muellerhoff({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-herr-von-muller'
})

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
        className="min-h-screen w-full flex flex-col justify-between"
        style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/background.png') no-repeat center center/cover",
        }}
      >
        <Navbar />
        <HeroSection />
        <InvestorSection />
      </div>
    </div>
  );
};

export default IndexPage;
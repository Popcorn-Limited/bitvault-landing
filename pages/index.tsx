import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/HeroSection";
import localFont from 'next/font/local'
import { Herr_Von_Muellerhoff } from 'next/font/google'

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
    <div className={`${khTeka.variable} ${handwritten.variable} font-sans`}>
      <div
        className="absolute left-0 right-0 min-h-screen w-full flex flex-col justify-between bg-black bg-cover bg-center bg-no-repeat text-white font-kh-teka"
        style={{
          backgroundImage: "url('/images/background.png')", // Replace with your image path
        }}
      >
        <Navbar />
        <HeroSection />
        <Footer />
      </div >
    </div>
  );
};

export default IndexPage;
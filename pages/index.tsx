import { useRouter } from "next/router";
import { useEffect } from "react";
import { HeroSection, GetStartedSection, CardsSection, Partners, Footer } from "@/components/Sections";


const IndexPage = ({
    isLoaded
}: {
    isLoaded: true
}) => {
  const router = useRouter();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      router.replace(window.location.pathname);``
    }
  }, [router.pathname]);

  return (
    <div className="absolute left-0 right-0 flex flex-col bg-[#000000] text-white">
        <HeroSection isLoaded={isLoaded}  />
        <GetStartedSection />
        <a id="HowItWorks"></a>
        <CardsSection />
        <Partners />
        <a id="Footer"></a>
        <Footer />
    </div >
  );
};

export default IndexPage;

import { useState } from "react";
import tokenbvUSD from "../public/images/bvusd.svg";
import tokensbvUSD from "../public/images/sbvusd.svg";
import { Card } from "./Card";
import { BorrowModal } from "./BorrowModal";

const imageUrl =
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop";

const sbvUSDBullets = [
  "Allocated to market-neutral & private credit",
  "Managed by institutional partners",
  "Backed 100% by bluechip stablecoins",
  "Open to all (ex. U.S. persons)",
  "No minimums",
];

const bvUSDBullets = [
  "Earn REAL YIELD on Bitcoin",
  "Overcollateralized Borrowing",
  "KYB required, minimum 1 BTC",
];

export default function CardsSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1000px",
        margin: "0 auto",
        marginTop: "100px",
      }}
    >
      {/* Title */}
      <h1 className="text-white text-7xl md:text-7xl font-medium leading-none text-center">
        Welcome to BitVault{" "}
      </h1>
      <h2 className="text-white text-2xl leading-none text-center mt-4">
        Unlock capital efficiency with Bitcoin-backed borrowing or
        institutional-yield strategies
      </h2>

      {/* Cards Container */}
      <div
        style={{
          padding: "30px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >
        <Card
          tokenImage={tokensbvUSD}
          backgroundColor="#1A1F2B"
          textColor="white"
          imageUrl={imageUrl}
          badgeText="sbvUSD"
          apy="12%"
          headline="Institutional-Grade Yield"
          subhead="Open to All"
          bullets={sbvUSDBullets}
          ctaText="Earn Now"
          onCta={() =>
            window.open("https://app.bitvault.finance/buy", "_blank")
          }
        />

        <Card
          tokenImage={tokenbvUSD}
          backgroundColor="#F9FAFB"
          textColor="black"
          imageUrl={imageUrl}
          badgeText="bvUSD"
          headline="Institutional Borrowing"
          bullets={bvUSDBullets}
          ctaText="Borrow Now"
          onCta={() => setIsOpen(true)}
        />
        {isOpen && <BorrowModal onClose={() => setIsOpen(false)} />}
      </div>
    </section>
  );
}

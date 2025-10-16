import tokenbvUSD from "../public/images/bvusd.svg";
import tokensbvUSD from "../public/images/sbvusd.svg";
import { Card } from "./Card";
import { useModal } from "./modal/ModalService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { WhitelistModal } from "./modal/WhitelistModal";
import { BorrowModal } from "./modal/BorrowModal";

const sbvUSDBullets = [
  "Allocated to market-neutral strategies and private credit",
  "Managed by institutional partners",
  "Backed 100% by bluechip stablecoins",
  "Open to all (ex. U.S. persons)",
  "No minimums for public access (coming soon)",
];

const bvUSDBullets = [
  "Earn REAL YIELD on your Bitcoin",
  "Overcollateralized Borrowing",
  "KYB required, minimum 1 BTC",
];

function useSharedHeights() {
  const [vars, setVars] = useState({
    ["--intro-h" as any]: "340px",
    ["--apy-h" as any]: "36px",
  });

  useEffect(() => {
    const calc = () => {
      const intro = Math.max(280, Math.min(window.innerHeight * 0.34, 380));
      const apy = Math.max(28, Math.min(window.innerHeight * 0.05, 44));
      setVars({
        ["--intro-h" as any]: `${Math.round(intro)}px`,
        ["--apy-h" as any]: `${Math.round(apy)}px`,
      });
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return vars as React.CSSProperties;
}

export function CardsRow({ children }: { children: React.ReactNode }) {
  const cssVars = useSharedHeights();
  return <div style={cssVars}>{children}</div>;
}

export default function CardsSection() {
  const router = useRouter();
  const { setVisible: setModalVisibility, setContent: setModalContent } = useModal()

  return (
    <section
      className="w-full md:w-1/2"
      style={{
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "grid",
        gridTemplateRows: "auto auto 1fr",
        justifyItems: "center",
        textAlign: "center",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "3rem",
          fontWeight: 400,
          lineHeight: 1,
          textAlign: "center",
          marginTop: 40,
        }}
      >
        Welcome to BitVault
      </h1>
      <h2
        style={{
          fontSize: 22,
          fontWeight: 400,
          color: "#a2a2a2ff",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Unlock capital efficiency with Bitcoin-backed borrowing or
        institutional-yield strategies
      </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        <Card
          tokenImage={tokenbvUSD}
          backgroundColor="#F6AE3F"
          textColor="black"
          imageUrl={"/images/sbvUSDBackground.jpg"}
          badgeText="sbvUSD"
          apy="12%"
          headline="Institutional-Grade Yield"
          subhead="Open to Select Partners"
          bullets={sbvUSDBullets}
          cta={{
            label: "Earn Now",
            onClick: () => router.push("https://app.bitvault.finance/earn"),
            textColor: "#F6AE3F",
            textHoverColor: "white",
            buttonColor: "black",
            hoverColor: "#23262F",
            borderColor: "black",
            borderHoverColor: "#23262F",
          }}
          cta2={{
            label: "Join Whitelist",
            onClick: () => {
              setModalContent(<WhitelistModal />);
              setModalVisibility(true);
            },
            textColor: "black",
            textHoverColor: "black",
            buttonColor: "#F6AE3F",
            hoverColor: "#E49D2F",
            borderColor: "black",
            borderHoverColor: "black",
          }}
        />

        <Card
          tokenImage={tokensbvUSD}
          backgroundColor="#23262F"
          textColor="white"
          imageUrl={"/images/bvUSDBackground.jpg"}
          badgeText="bvUSD"
          headline="Institutional Borrowing"
          bullets={bvUSDBullets}
          cta={{
            label: "Borrow Now",
            onClick: () => {
              setModalContent(<BorrowModal />);
              setModalVisibility(true);
            },
            textColor: "#F6AE3F",
            textHoverColor: "black",
            buttonColor: "black",
            hoverColor: "#F6AE3F",
          }}
        />
      </div>
    </section>
  );
}

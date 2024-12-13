import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainActionButton from "./common/MainActionButton";
import SecondaryActionButton from "./common/SecondaryActionButton";

export default function HeroSection(): JSX.Element {
  const router = useRouter();
  const [tvl, setTvl] = useState<string>("0");

  const formatter: Intl.NumberFormat = Intl.NumberFormat("en", {
    //@ts-ignore
    notation: "compact",
  });

  useEffect(() => {
    fetch("https://api.llama.fi/protocol/vaultcraft").then(
      res => res.json().then(
        res => setTvl(formatter.format(res.currentChainTvls.Ethereum + res.currentChainTvls.staking))
      ))
  }, [])

  return (
    <div className="flex-col h-full min-h-[600px] px-8 md:px-24 pt-12 pb-40">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-2/3 mt-12">
          <h2 className="text-primaryGreen text-8xl md:text-9xl font-handwritten leading-none">v2 era</h2>
          <h1 className="text-white text-8xl md:text-9xl font-medium leading-none">Institutional grade, <br /> tokenized yield with perpetual options</h1>
          <div className="flex flex-row gap-4 w-60 mt-8">
            <MainActionButton label="Earn" handleClick={() => router.push("https://app.vaultcraft.io/vaults")} />
            <SecondaryActionButton label="Build" handleClick={() => router.push("https://docs.vaultcraft.io/products/v2-safe-smart-vaults/developer-docs")} />
          </div>
          <div className="w-72 md:w-56 bg-customNeutral100 bg-opacity-40 rounded-full border border-primaryGreen p-4 mt-24">
            <p className="text-center text-4xl font-bold font-mono tracking-wider">TVL ${tvl}</p>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img src="/images/heroImage.svg" alt="hero-image" className="h-[80%]" />
        </div>
      </div>
    </div>
  );
}
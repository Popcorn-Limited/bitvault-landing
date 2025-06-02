import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainActionButton from "./common/MainActionButton";


const formatter: Intl.NumberFormat = Intl.NumberFormat("en", {
  //@ts-ignore
  notation: "compact",
});

export default function HeroSection(): JSX.Element {
  const router = useRouter();
  const [tvl, setTvl] = useState<string>(formatter.format(200_000_000));
  const [apy, setApy] = useState<number>(10);

  return (
    <div className="flex-col h-full px-2 md:px-12 xl:px-24 z-10 mb-24">
      <div className="flex flex-col justify-between">

        <div className="space-y-8 mt-4">
          <div>
            <h3 className="text-primaryGold text-xl leading-none text-end">TVL</h3>
            <h4 className="text-white text-3xl font-bold leading-none text-end">{tvl}</h4>
          </div>
          <div>
            <h3 className="text-primaryGold text-xl leading-none text-end">APY</h3>
            <h4 className="text-white text-3xl font-bold leading-none text-end">{apy}%</h4>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-white text-7xl md:text-8xl font-medium leading-none text-center">Institutional, <br /> Bitcoin-Backed USD</h1>
          <h2 className="text-gray-400 text-3xl leading-none text-center mt-4">A stablecoin earning secure, risk adjusted yield</h2>
          <div className="mx-auto w-60 mt-8">
            <MainActionButton label="Launch App" handleClick={() => router.push("https://app.bitvault.finance/")} />
          </div>
        </div>
      </div>

      <div>
      </div>
    </div>
  );
}
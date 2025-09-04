import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainActionButton from "./common/MainActionButton";

const formatter: Intl.NumberFormat = Intl.NumberFormat("en", {
  //@ts-ignore
  notation: "compact",
});

export default function HeroSection(): JSX.Element {
  const router = useRouter();

  return (
    <div className="flex-col h-full px-2 md:px-12 xl:px-24 z-10 mb-24 mt-10">
      <div className="flex flex-col justify-between">
        <div className="">
          <h1 className="text-white text-5xl md:text-6xl font-medium leading-none text-center">
            Institutional, <br /> Bitcoin-Backed USD
          </h1>
          <h2 className="text-gray-400 text-lg md:text-xl leading-none text-center mt-4">
            A stablecoin earning secure, risk adjusted yield
          </h2>
          <div className="mx-auto w-60 mt-8">
            <MainActionButton
              label="Launch App"
              handleClick={() => router.push("https://app.bitvault.finance/")}
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
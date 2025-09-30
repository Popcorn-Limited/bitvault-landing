import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

const formatter: Intl.NumberFormat = Intl.NumberFormat("en", {
  //@ts-ignore
  notation: "compact",
});

export default function Navbar({ showApy = true }: { showApy?: boolean }) {
  const [tvl, setTvl] = useState<string>(formatter.format(200_000_000));
  const [apy, setApy] = useState<number>(12);

  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center justify-between w-full z-10 px-8 md:px-12 xl:px-24 py-4 bg-black border-b border-white/10 text-white">

        <Link
          href={`/`}
          passHref
          className="flex flex-row items-center gap-2"
        >
          <img
            src="/images/favicon.svg"
            alt="Logo"
            className="w-12 h-12 md:w-10 md:h-10 text-white"
          />
          <h2 className="text-3xl font-bold leading-none">
            BitVault
          </h2>
        </Link>

        <div className="flex flex-row items-center gap-4">
          <Link
            href={`https://docs.bitvault.finance/`}
            target="_blank"
            passHref
          >
            <h2 className="text-xl leading-none hover:text-secondaryGold">
              Docs
            </h2>
          </Link>
          <Link
            href={`https://bitvault.finance/media`}
            target="_blank"
            passHref
          >
            <h2 className="text-xl leading-none hover:text-secondaryGold">
              Media
            </h2>
          </Link>
          <Popover className="relative focus:outline-none text-center">
            <PopoverButton className="focus:outline-none border-none">
              <h2 className="text-xl leading-none hover:text-secondaryGold mt-1">
                Community
              </h2>
            </PopoverButton>
            <PopoverPanel anchor="bottom" className="flex flex-col mt-2 py-4 px-4 space-y-2 text-center text-white bg-customNeutral300 rounded-lg border border-white/10">
              <Link
                href={`https://x.com/BitVaultFinance`}
                target="_blank"
                passHref
              >
                <h2 className="text-xl leading-none hover:text-secondaryGold text-center mx-auto">
                  X (Twitter)
                </h2>
              </Link>
              <Link
                href={`https://t.me/bitvaultfinance`}
                target="_blank"
                passHref
              >
                <h2 className="text-xl leading-none hover:text-secondaryGold mx-auto">
                  Telegram
                </h2>
              </Link>
            </PopoverPanel>
          </Popover>
        </div>

        <div className="w-40"></div>

      </div>

      <div className="hidden sm:block space-y-8 mt-4 px-2 sm:px-12 xl:px-24">
      {showApy && (

      <div>
        <h3 className="text-primaryGold text-xl leading-none text-end">APY</h3>
        <h4 className="text-white text-3xl font-bold leading-none text-end">{apy}%</h4>
      </div>
      )}
    </div>


    </div>
  );
}
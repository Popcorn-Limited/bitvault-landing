import Link from "next/link";

export default function Navbar(): JSX.Element {
  return (
    <div className="">
      <div className="flex flex-row items-center justify-between w-full z-10 px-8 md:px-12 xl:px-24 py-4 bg-black border-b border-white/10 text-white">
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
        <Link
          href={`https://docs.bitvault.finance/`}
          passHref
        >
          <h2 className="text-xl leading-none hover:text-secondaryGold">
            Docs
          </h2>
        </Link>
      </div>
    </div>
  );
}
import { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import SocialMediaLinks from "@/components/common/SocialMediaLinks";
import NavbarLinks from "@/components/common/NavbarLinks";
import MainActionButton from "./MainActionButton";
import SecondaryActionButton from "./SecondaryActionButton";

export default function Navbar(): JSX.Element {
  const router = useRouter();
  const [menuVisible, toggleMenu] = useState<boolean>(false);

  return (
    <div className="px-8 md:px-12 xl:px-24 pt-8">
      <div className="flex flex-row items-center justify-between w-full z-10 px-4 py-4 rounded-lg bg-customNeutral100 bg-opacity-50 text-white">
        <div className="flex flex-row items-center gap-6">
          <div>
            <Link
              href={`/`}
              passHref
            >
              <img
                src="/images/icons/popLogoWhite.svg"
                alt="Logo"
                className="w-12 h-12 md:w-10 md:h-10 text-white"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <Link href="https://docs.vaultcraft.io/" passHref>
            <p className="font-light text-xl">Docs</p>
          </Link>
          <div className="w-48 hidden md:block">
            <BuyVCXButton />
          </div>
          <div className="w-48">
            <SecondaryActionButton label="Launch App" handleClick={() => router.push("https://app.vaultcraft.io")} />
          </div>
        </div>
      </div >
      <Transition show={menuVisible} as={Fragment}>
        <div className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur transition-opacity z-50
            data-[closed]:opacity-0 
            data-[enter]:duration-300 data-[enter]:data-[closed]:ease-out
            data-[leave]:duration-200 data-[leave]:data-[closed]:ease-in
              `} />
        <Dialog as="div" className="relative z-50" open={menuVisible} onClose={() => toggleMenu(false)}>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-x-0 top-0 bottom-0 w-[320px] flex">
                <DialogPanel className="h-full w-full flex flex-col justify-between pt-12 px-8 shadow-xl bg-primaryGreen overflow-y-scroll">
                  <div className="flex flex-1 flex-col w-full space-y-4">
                    <div className="mb-6">
                      <Link href={`/`} passHref>
                        <img
                          src="/images/icons/popLogoWhite.svg"
                          alt="Logo"
                          className="w-12 h-12 md:w-10 md:h-10 text-white"
                        />
                      </Link>
                    </div>
                    <div
                      className="flex flex-col space-y-6 flex-1"
                      onClick={() => toggleMenu(false)}
                    >
                      <NavbarLinks />
                      <div className="md:hidden space-y-4">
                        <BuyVCXButton />
                      </div>
                    </div>
                    <div className="pt-12 md:pt-0">
                      <p className="text-customNeutral200">
                        VaultCraft is a DeFi yield-optimizing protocol with
                        customizable asset strategies that instantly zap your
                        crypto from any chain into the highest yield-generating
                        products across DeFi in 1 click.
                      </p>
                      <div className="flex justify-between pb-12 mt-12">
                        <SocialMediaLinks
                          color="#23262F"
                          color2="#dfff1c"
                          size="24"
                        />
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </div>

          <button
            className="text-customGray500 fixed top-8 right-8 p-6 bg-customNeutral100 z-50 rounded-full flex justify-center items-center w-12 h-12"
            onClick={() => toggleMenu(false)}
          >
            <div className="block w-10 bg-transparent">
              <span
                aria-hidden="true"
                className={`block h-0.5 w-8 bg-white transform transition duration-500 ease-in-out rounded-3xl ${menuVisible ? "rotate-45 translate-y-0.5" : "-translate-y-2"}`}
              ></span>
              <span
                aria-hidden="true"
                className={`block h-0.5 w-8 bg-white transform transition duration-500 ease-in-out rounded-3xl ${menuVisible ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                aria-hidden="true"
                className={`block h-0.5 w-8 bg-white transform transition duration-500 ease-in-out rounded-3xl ${menuVisible ? "-rotate-45 -translate-y-0.5" : "translate-y-2"}`}
              ></span>
            </div>
          </button>
        </Dialog>
      </Transition>
    </div>
  );
}

function BuyVCXButton(): JSX.Element {
  return (
    <>
      <button
        className={`w-48 px-4 py-2 rounded bg-white border border-white font-semibold text-base text-black
                  transition-all ease-in-out duration-500 hover:bg-primaryGreen hover:border-primaryGreen
                  disabled:bg-customGray100 disabled:border-customGray100 disabled:text-white disabled:cursor-not-allowed
                  disabled:hover:border-customGray100 disabled:hover:bg-customGray100 disabled:hover:text-white
                  hidden md:flex flex-row items-center justify-center`}
        type="button"
        onClick={() =>
          window.open("https://swap.cow.fi/#/1/swap/WETH/VCX", "_blank")
        }
      >
        <img
          src="https://icons.llamao.fi/icons/protocols/cowswap?w=48&h=48"
          className="w-5 h-5 rounded-full border border-white mt-0.5"
        />
        <p className="ml-2 font-bold text-lg">Buy VCX</p>
      </button>
      <button
        className={`w-48 px-4 py-2 rounded bg-black border border-black font-semibold text-base text-primaryGreen
        transition-all ease-in-out duration-500 hover:bg-white hover:border-white hover:text-black
        disabled:bg-customGray100 disabled:border-customGray100 disabled:text-white disabled:cursor-not-allowed
        disabled:hover:border-customGray100 disabled:hover:bg-customGray100 disabled:hover:text-white
        md:hidden flex flex-row items-center justify-center`}
        type="button"
        onClick={() =>
          window.open("https://swap.cow.fi/#/1/swap/WETH/VCX", "_blank")
        }
      >
        <img
          src="https://icons.llamao.fi/icons/protocols/cowswap?w=48&h=48"
          className="w-5 h-5 rounded-full border border-customGray500"
        />
        <p className="ml-2 mb-1">Buy VCX</p>
      </button>
    </>
  );
}
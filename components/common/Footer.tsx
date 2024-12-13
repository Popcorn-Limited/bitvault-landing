import Link from "next/link";
import React from "react";
import SocialMediaLinks from "@/components/common/SocialMediaLinks";

type FooterLink = {
  label: string;
  href: string;
};

const InvestorLinks = [
  {
    label: "Jump Crypto",
    href: "https://jumpcrypto.com/",
  },
  {
    label: "New Form",
    href: "https://www.newformcap.com/",
  },
  {
    label: "Big Brain",
    href: "https://www.bigbrain.holdings/",
  },
  {
    label: "The LAO",
    href: "https://thelao.io/",
  },
]

const AuditLinks = [
  {
    label: "Immunefi",
    href: "https://immunefi.com/",
  },
  {
    label: "BlockSec",
    href: "https://blocksec.com/"
  },
  {
    label: "Code4rena",
    href: "https://code4rena.com/",
  },
  {
    label: "Palading",
    href: "https://paladinsec.co/",
  },
  {
    label: "Zokyo",
    href: "https://zokyo.io/"
  }
];

const ProductLinks = [
  {
    label: "Smart Vaults",
    href: "/vaults",
  },
  {
    label: "Boost Vaults",
    href: "/boost",
  },
  {
    label: "Manage",
    href: "/manage",
  },
];

const GeneralLinks = [
  {
    label: "VaultCraft",
    href: "/",
  },
  {
    label: "Gitbook",
    href: "https://docs.vaultcraft.io/welcome-to-vaultcraft/introduction",
  },
  {
    label: "Disclaimer",
    href: "/disclaimer",
  },
  {
    label: "Dev Docs",
    href: "https://hackmd.io/yY8KpIVxQYGft6fHSxfHCg",
  },
];

const BugBountyLinks = [
  {
    label: "Immunefi",
    href: "https://immunefi.com/bounty/vaultcraft/",
  },
];

const GovernanceLinks = [
  {
    label: "Forum",
    href: "https://forum.vaultcraft.io/",
  },
  {
    label: "Snapshot",
    href: "https://snapshot.org/#/popcorn-snapshot.eth",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-10">
      <section className="w-full flex flex-col md:flex-row space-between px-8 md:px-24 py-8">
        <div className="w-full md:w-1/2 md:mr-8">
          <div className="">
            <span className="flex flex-row items-center gap-2 mb-2">
              <img
                src="/images/icons/popLogoWhite.svg"
                alt="Logo"
                className="w-4 h-4 mb-1.5"
              />
              <p className="text-white">VaultCraft</p>
            </span>
            <p className="text-customGray100">
              Deploy custom, automated DeFi yield strategies & optimize with perpetual call options. <br /><br /> Censorship-resistant & user-friendly.
            </p>
          </div>
          <div className="flex flex-row space-x-6 mt-6">
            <SocialMediaLinks color="#fff" color2="#23262F" size="24" />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-wrap md:flex-row mt-8 md:mt-0 justify-end">

          <div className="w-1/2 md:w-1/5">
            <p className="text-white font-bold leading-6 tracking-1">
              Investors
            </p>
            <div className="flex flex-col">
              {InvestorLinks.map((link: FooterLink) => (
                <Link
                  key={link.label}
                  href={link.href}
                  passHref
                  className="text-customGray100 hover:text-primaryGreen leading-6 mt-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-1/2 md:w-1/5">
            <p className="text-white font-bold leading-6 tracking-1">
              Audited By
            </p>
            <div className="flex flex-col">
              {AuditLinks.map((link: FooterLink) => (
                <Link
                  key={link.label}
                  href={link.href}
                  passHref
                  className="text-customGray100 hover:text-primaryGreen leading-6 mt-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-1/2 md:w-1/5">
            <p className="text-white font-bold leading-6 tracking-1">
              Products
            </p>
            <div className="flex flex-col">
              {ProductLinks.map((link: FooterLink) => (
                <Link
                  key={link.label}
                  href={link.href}
                  passHref
                  className="text-customGray100 hover:text-primaryGreen leading-6 mt-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-1/2 md:w-1/5">
            <p className="text-white font-bold leading-6 tracking-1">
              Governance
            </p>
            <div className="flex flex-col">
              {GovernanceLinks.map((link: FooterLink) => (
                <Link
                  key={link.label}
                  href={link.href}
                  passHref
                  target="_blank"
                  className="text-customGray100 hover:text-primaryGreen leading-6 mt-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-1/2 md:w-1/5">
            <p className="text-white font-bold leading-6 tracking-1">
              Bug Bounty
            </p>
            <div className="flex flex-col">
              {BugBountyLinks.map((link: FooterLink) => (
                <Link
                  key={link.label}
                  href={link.href}
                  passHref
                  target="_blank"
                  className="text-customGray100 hover:text-primaryGreen leading-6 mt-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </footer >
  );
};

export default Footer;

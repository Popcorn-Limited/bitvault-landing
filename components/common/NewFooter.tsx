// components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleBackToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-black text-neutral-300">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/bannerfooter.png')",
        }}
      />
      <div className="relative mx-auto w-full max-w-7xl h-[342px] px-6 py-10 md:py-14 flex flex-col justify-end">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:items-stretch">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/LogoIcon.png"
                alt=""
                className="object-contain"
                width={45}
                height={40}
              />
              <span className="text-2xl font-semibold text-white text-[38px]">
                Bitvault
              </span>
            </div>

            <div className="mt-6 flex items-center gap-4 text-white/80">
              <IconX
                aria-label="X"
              />
              {/* <IconDiscord
                aria-label="Discord"
              /> */}
              <IconTelegram
                aria-label="Telegram"
              />
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col">
            <h3 className="mb-3 text-sm font-medium text-white">Links</h3>
            <ul className="mt-auto space-y-2 text-white/85">
              <li>
                <Link
                  href="https://docs.bitvault.finance/"
                  className="hover:text-white"
                >
                  Docs
                </Link>
              </li>
              <li>
                {/* <Link href="/community" className="hover:text-white">Community</Link> */}
              </li>
              <li>
                <Link href="/media" className="hover:text-white">
                  Media Kit
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 self-end flex justify-end">
            <button
              onClick={handleBackToTop}
              className="flex items-center gap-2 rounded-full text-white/90 hover:text-white"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-black shadow">
                <IconArrowUp className="h-4 w-4" />
              </span>
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>

        <div className="mt-8 h-px w-full bg-white/30" />

        <div className="mt-4 flex items-center justify-between text-sm text-white/80">
          <span>Bitvault {year}</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}

function IconArrowUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M12 19V5" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="m6 11 6-6 6 6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconX() {
  return (
    <div className="flex items-center gap-3">
      <a
        href="https://x.com/BitVaultFinance"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (Twitter)"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md
               text-white/80 hover:text-white focus-visible:outline-none
               focus-visible:ring-2 focus-visible:ring-white/30"
      >
        <Image
          src="/images/twitter.png"
          alt=""
          className="object-contain"
          width={40}
          height={40}
        />
      </a>
    </div>
  );
}

function IconDiscord() {
  return (
    <div className="flex items-center gap-3">
      <a
        href="https://x.com/BitVaultFinance"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (Twitter)"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md
   text-white/80 hover:text-white focus-visible:outline-none
   focus-visible:ring-2 focus-visible:ring-white/30"
      >
        <Image
          src="/images/discord.png"
          alt=""
          className="object-contain"
          width={40}
          height={40}
        />
      </a>
    </div>
  );
}

function IconTelegram() {
  return (
    <div className="flex items-center gap-3">
      <a
        href="https://t.me/bitvaultTG"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (Twitter)"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md
   text-white/80 hover:text-white focus-visible:outline-none
   focus-visible:ring-2 focus-visible:ring-white/30"
      >
        <Image
          src="/images/telegram.png"
          alt=""
          className="object-contain"
          width={40}
          height={40}
        />
      </a>
    </div>
  );
}

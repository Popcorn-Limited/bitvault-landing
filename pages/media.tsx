import React, { ReactNode } from "react";
import Navbar from "@/components/common/Navbar";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import NewFooter from "@/components/common/NewFooter";

const khTeka = localFont({
  src: "../public/KH_Teka/KHTeka-Regular.woff",
  variable: "--font-kh-teka",
});

export default function MediaPage() {
  return (
    <>
      <div className={`${khTeka.variable} bg-background`}>
        <div
          className="min-h-svh w-full grid grid-rows-[auto_1fr]"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url('/images/background.png') repeat center center",
            backgroundAttachment: "fixed",
          }}
        >
          <Navbar showApy={false} />
          <main className="flex items-center justify-center px-4 mb-36">
            <div className="w-full max-w-[1200px] flex flex-col items-center">
              <h1 className="text-3xl tracking-tight mt-20 mb-4 text-white sm:text-[48px]">
                Media Kit
              </h1>
              <p className="text-[#D7D7D7] font-light line-clamp-2 text-center leading-6 mb-24 max-w-3xl text-sm text-white text-neutral-300 sm:text-[20px]">
                Please adhere to the following guidelines on the proper usage of
                our logo, word mark, and media assets you may need for your
                marketing communications.
              </p>

              <Section
                link="/images/nameLogo.zip"
                title="Bitvault lockup"
                note="Use this version when you need a full representation of the brand in more formal or prominent placements. Such as headers, presentations or marketing materials. "
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <AssetCard>
                    <AssetBox>
                      <Image
                        src="/images/NameLogoBlack.png"
                        alt=""
                        fill
                        className="object-contain object-center p-20"
                      />
                    </AssetBox>
                  </AssetCard>
                  <AssetCard>
                    <AssetBox dark>
                      <Image
                        src="/images/NameLogoWhite.png"
                        alt=""
                        fill
                        className="object-contain object-center p-20"
                      />
                    </AssetBox>
                  </AssetCard>
                </div>
              </Section>

              <Section
                link="/images/logo.zip"
                title="Bitvault logo"
                note="It's a compact version ideal for more constrained spaces like social media avatars or favicons where full lockups aren’t practical."
              >
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                  <AssetCard>
                    <AssetBox dark>
                      <Image src="/images/LogoWhite.png" alt="" fill className="object-contain object-center p-24"/>
                    </AssetBox>
                  </AssetCard>
                  <AssetCard>
                    <AssetBox>
                      <Image src="/images/LogoBlack.png" alt="" fill                         className="object-contain object-center p-24"
                      />
                    </AssetBox>
                  </AssetCard>
                  <AssetCard>
                    <AssetBox dark>
                      <Image src="/images/LogoYellow.png" alt="" fill className="object-contain object-center p-24"/>
                    </AssetBox>
                  </AssetCard>
                  <AssetCard>
                    <AssetBox orange>
                      <Image src="/images/LogoYellowWhite.png" alt="" fill className="object-contain object-center p-24"/>
                    </AssetBox>
                  </AssetCard>
                </div>
              </Section>

              <Section
                link="/images/names.zip"
                title="Bitvault wordmark"
                note="Use for titles, headers, or when horizontal space is limited."
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <AssetCard>
                    <AssetBox>
                      <Image
                        src="/images/NameBlack.png"
                        alt=""
                        fill
                        className="object-contain object-center p-24"                      />
                    </AssetBox>
                  </AssetCard>
                  <AssetCard>
                    <AssetBox dark>
                      <Image
                        src="/images/NameWhite.png"
                        alt=""
                        fill
                        className="object-contain object-center p-24"                      />
                    </AssetBox>
                  </AssetCard>
                </div>
              </Section>

              <Section link="" title="Colors">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
                  <SwatchCenter label="F6AE3F" className="bg-[#F6AE3F]" />
                  <SwatchCenter
                    label="Gradient"
                    className="bg-gradient-to-b from-[#FF9B00] to-[#FFC873]"
                  />
                </div>
              </Section>

              <Section link="/images/background.zip" title="Patterns">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
                  {" "}
                  <AssetCard>
                    <AssetBox>
                      <Image
                        src="/images/Patterns.png"
                        alt=""
                        fill
                        className="object-cover"                  />
                    </AssetBox>
                  </AssetCard>
                  <AssetCard>
                    <AssetBox>
                      <Image
                        src="/images/Patterns2.png"
                        alt=""
                        fill
                        className="object-contain"                      />
                    </AssetBox>
                  </AssetCard>
                </div>
              </Section>

              <p className="text-center leading-6 mt-3 max-w-3xl text-sm text-neutral-300 sm:text-[16px] text-[#868686]">
                By using our logos, you agree to follow the brand guidelines
                above.
              </p>

              <div className="mt-4 flex justify-centler">
                <DownloadZipButton />
              </div>
            </div>
          </main>
          <NewFooter />
        </div>
      </div>
    </>
  );
}

function Section({
  title,
  note,
  children,
  link,
}: {
  title: string;
  note?: string;
  children: ReactNode;
  link: string;
}) {
  return (
    <section className="mb-10 sm:mb-14 justify-items-center">
      <p className="text-center font-light leading-6 max-w-3xl mb-8 text-white sm:text-[24px]">
        {title}
      </p>
      {children}
      {note && (
        <p className="text-center leading-6 mt-3 max-w-3xl text-sm text-neutral-300 sm:text-[16px] text-[#868686]">
          {note}
        </p>
      )}
      {link !== "" && (
        <Guideline>
          <InlineLink href={link}>
            Download
            <Image width="16" height="16" alt="" src="/images/Download.png" />
          </InlineLink>
        </Guideline>
      )}
    </section>
  );
}

function AssetCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/60 shadow-md backdrop-blur">
      {children}
    </div>
  );
}

function AssetBox({
  dark = false,
  orange = false,
  children,
}: {
  dark?: boolean;
  orange?: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={[
        "relative h-[320px] w-[555px] overflow-hidden rounded-xl",
        dark ? "bg-neutral-950" : orange ? "bg-gradient-to-b from-[#FF9B00] to-[#FFC873]": "bg-neutral-50",
      ].join(" ")}
    >
      <div className="absolute inset-0 grid place-items-center text-xs  text-neutral-400"></div>
      {children}
    </div>
  );
}

function Guideline({ children }: { children: ReactNode }) {
  return (
    <p className="mt-2 text-center text-[16px] text-[#868686] text-xs text-neutral-300">
      {children}
    </p>
  );
}

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      className={"inline-flex items-center gap-2 whitespace-nowrap mt-4"}
      href={href}
    >
      {children}
    </Link>
  );
}

function Swatch({
  title,
  subtitle,
  className = "",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/60 shadow-md backdrop-blur\">
      <div
        className={["h-[320px] w-[555px] rounded-lg", className].join(" ")}
      />
      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm text-white">{title}</span>
        {subtitle && (
          <span className="text-xs text-neutral-400">{subtitle}</span>
        )}
      </div>
    </div>
  );
}

function SwatchCenter({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/60 shadow-md backdrop-blur">
      <div
        className={["relative h-[320px] w-[555px] rounded-lg", className].join(
          " "
        )}
      >
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-white text-base text-[24px] ">{label}</span>
        </div>
      </div>
    </div>
  );
}

function DownloadZipButton() {
  const handleClick = () => {
    const a = document.createElement("a");
    a.href = "/images/bitvault-media-kit.zip";
    a.setAttribute("download", "bitvault-media-kit.zip");
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full px-2 py-2.5 rounded bg-primaryGold border border-primaryGold font-semibold text-base text-black
                 transition-all ease-in-out duration-500 hover:bg-secondaryGold hover:border-secondaryGold
                 disabled:bg-customGray100 disabled:border-customGray100 disabled:text-white disabled:cursor-not-allowed"
    >
      Download All
    </button>
  );
}

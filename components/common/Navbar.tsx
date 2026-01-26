import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MainActionButton from "./MainActionButton";
import { useRouter } from "next/router";

const formatter: Intl.NumberFormat = Intl.NumberFormat("en", {
  //@ts-ignore
  notation: "compact",
});

export default function Navbar({ showApy = true }: { showApy?: boolean }) {
  const mobileNavRef = useRef<HTMLElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  
  // Escape key handler for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const mobileNav = mobileNavRef.current;
        const menuBtn = menuBtnRef.current;
        if (mobileNav?.classList.contains("active")) {
          mobileNav.classList.remove("active");
          menuBtn?.classList.remove("active");
          document.body.style.overflow = "";
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleMobileMenu = () => {
    const mobileNav = mobileNavRef.current;
    const menuBtn = menuBtnRef.current;

    mobileNav?.classList.toggle("active");
    menuBtn?.classList.toggle("active");

    if (mobileNav?.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <div className="">
      <header className="header">
        <a href="/" className="logo">
          <div className="logo-icon">
            <img src="/images/favicon.svg" alt="BitVault" />
          </div>
          <span className="logo-text">BitVault</span>
        </a>

        <nav className="nav-links">
          <a href="https://docs.bitvault.finance/" target="_blank" rel="noopener noreferrer" className="nav-link">Docs</a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/media" className="nav-link">Media</a>
          <a href="/bitvaultreferrals.html" className="nav-link">Rewards</a>
          <a href="https://t.me/bitvaultfinance" target="_blank" rel="noopener noreferrer" className="nav-link">Community</a>
        </nav>

        <div className="nav-spacer"></div>

        {/* Mobile Menu Button */}
        <button ref={menuBtnRef} className="mobile-menu-btn" aria-label="Toggle menu" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      <nav ref={mobileNavRef} className="mobile-nav" id="mobileNav">
        <a href="https://docs.bitvault.finance/" target="_blank" rel="noopener noreferrer" className="nav-link" onClick={toggleMobileMenu}>Docs</a>
        <a href="/blog" className="nav-link" onClick={toggleMobileMenu}>Blog</a>
        <a href="/media" className="nav-link" onClick={toggleMobileMenu}>Media</a>
        <a href="/bitvaultreferrals.html" className="nav-link" onClick={toggleMobileMenu}>Rewards</a>
        <a href="https://t.me/bitvaultfinance" target="_blank" rel="noopener noreferrer" className="nav-link" onClick={toggleMobileMenu}>Community</a>
      </nav>
    </div>
  );
}
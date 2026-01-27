import Link from "next/link";
import { useEffect, useRef } from "react";


export default function Navbar() {
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
        <Link legacyBehavior href="/" passHref>
          <a className="logo">
            <div className="logo-icon">
              <img src="/images/favicon.svg" alt="BitVault" />
            </div>
            <span className="logo-text">BitVault</span>
          </a>
        </Link>

        <nav className="nav-links">
          <Link legacyBehavior href="https://docs.bitvault.finance/" passHref>
            <a target="_blank" rel="noopener noreferrer" className="nav-link">Docs</a>
          </Link>
          <Link legacyBehavior href="/blog" passHref>
            <a className="nav-link">Blog</a>
          </Link>
          <Link legacyBehavior href="/media" passHref>
            <a className="nav-link">Media</a>
          </Link>
          <Link legacyBehavior href="/bitvaultreferrals.html" passHref>
            <a className="nav-link">Rewards</a>
          </Link>
          <Link legacyBehavior href="https://t.me/bitvaultfinance" passHref>
            <a target="_blank" rel="noopener noreferrer" className="nav-link">Community</a>
          </Link>
        </nav>

        <div className="header-buttons">
          <a href="https://t.me/bitvaultfinance" target="_blank" className="btn btn-secondary btn-header btn-contact">
            <span className="btn-text">Contact Us</span>
          </a>
          <a href="https://app.bitvault.finance/" className="btn btn-primary btn-header">
            <span className="btn-text">Launch App</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button ref={menuBtnRef} className="mobile-menu-btn" aria-label="Toggle menu" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      <nav ref={mobileNavRef} className="mobile-nav" id="mobileNav">
        <Link legacyBehavior href="https://docs.bitvault.finance/" passHref>
          <a target="_blank" rel="noopener noreferrer" className="nav-link" onClick={toggleMobileMenu}>Docs</a>
        </Link>
        <Link legacyBehavior href="/blog" passHref>
          <a className="nav-link" onClick={toggleMobileMenu}>Blog</a>
        </Link>
        <Link legacyBehavior href="/media" passHref>
          <a className="nav-link" onClick={toggleMobileMenu}>Media</a>
        </Link>
        <Link legacyBehavior href="/bitvaultreferrals.html" passHref>
          <a className="nav-link" onClick={toggleMobileMenu}>Rewards</a>
        </Link>
        <Link legacyBehavior href="https://t.me/bitvaultfinance" passHref>
          <a target="_blank" rel="noopener noreferrer" className="nav-link" onClick={toggleMobileMenu}>Community</a>
        </Link>
      </nav>
    </div>
  );
}
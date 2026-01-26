"use client";

import Link from "next/link";


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-bg" aria-hidden="true"></div>
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link legacyBehavior href="/" passHref>
              <a className="logo">
                <div className="logo-icon">
                  <img src="/images/LogoIcon.png" alt="BitVault" />
                </div>
                <span className="logo-text">Bitvault</span>
              </a>
            </Link>
            <div className="footer-social">
              <Link legacyBehavior href="https://x.com/BitVaultFinance" passHref>
                <a target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                  <img src="/images/twitter.png" alt="Twitter" />
                </a>
              </Link>
              <Link legacyBehavior href="https://t.me/bitvaultfinance" passHref>
                <a target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                  <img src="/images/telegram.png" alt="Telegram" />
                </a>
              </Link>
            </div>
          </div>

          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li>
                <Link legacyBehavior href="https://docs.bitvault.finance/" passHref>
                  <a target="_blank" rel="noopener noreferrer">Docs</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/media" passHref>
                  <a >Media Kit</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-back-to-top">
            <button className="back-to-top-btn" onClick={scrollToTop}>
              <span className="back-to-top-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 19V5" strokeWidth="1.5" strokeLinecap="round"></path>
                  <path d="m6 11 6-6 6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <span>Bitvault 2026</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer >
  );
}
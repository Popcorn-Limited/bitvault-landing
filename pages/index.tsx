import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const IndexPage = () => {
  const typedTextRef = useRef<HTMLSpanElement>(null);

  // Typed text effect
  useEffect(() => {
    const typedElement = typedTextRef.current;
    if (!typedElement) return;

    const text = "Institutional USD backed by Bitcoin and tokenized equities.";
    let index = 0;
    const speed = 40;

    function type() {
      if (typedElement && index < text.length) {
        typedElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      }
    }

    const timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  // Odometer effect for APY values
  useEffect(() => {
    const apyValues = document.querySelectorAll(".card-apy-value, .apy-value");

    apyValues.forEach((el) => {
      const text = el.textContent?.trim();
      if (!text) return;

      let html = "";
      for (let i = 0; i < text.length; i++) {
        const delay = i * 0.1;
        html += `<span class="odometer-digit" style="animation-delay: ${delay}s">${text[i]}</span>`;
      }
      el.innerHTML = html;
      el.classList.add("odometer");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".odometer-digit").forEach((digit) => {
              (digit as HTMLElement).style.animationPlayState = "running";
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    apyValues.forEach((el) => {
      el.querySelectorAll(".odometer-digit").forEach((digit) => {
        (digit as HTMLElement).style.animationPlayState = "paused";
      });
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <title>BitVault - Bitcoin-Anchored On-Chain Credit</title>
        <meta name="description" content="Institutional USD backed by Bitcoin and tokenized equities." />

        {/* Open Graph / Social Sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BitVault - Bitcoin-Anchored On-Chain Credit" />
        <meta property="og:description" content="Institutional USD backed by Bitcoin and tokenized equities." />
        <meta property="og:image" content="https://bitvault.finance/images/og-image.jpg" />
        <meta property="og:url" content="https://bitvault.finance/" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BitVault - Bitcoin-Anchored On-Chain Credit" />
        <meta name="twitter:description" content="Institutional USD backed by Bitcoin and tokenized equities." />
        <meta name="twitter:image" content="https://bitvault.finance/images/og-image.jpg" />

        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Background for iOS compatibility */}
      <div className="page-background" aria-hidden="true"></div>

      {/* Hero Section Background */}
      <div className="hero-bg">
        {/* Header */}
        <Navbar />

        {/* APY Display */}
        <div className="apy-display">
          <div className="apy-label">APY</div>
          <div className="apy-value">12%</div>
        </div>

        {/* Hero Content */}
        <main className="hero-main">
          <div className="hero-content">
            <div className="hero">
              <h1 className="hero-title">
                Bitcoin-Anchored <br /> On-Chain Credit
              </h1>
              <p className="hero-subtitle">
                <span ref={typedTextRef} className="typed-text"></span>
                <span className="typed-cursor"></span>
              </p>

              {/* Collateral Ticker */}
              <div className="ticker-wrapper">
                <div className="ticker">
                  {/* BTC Variants */}
                  <span className="ticker-item"><img src="/images/logos/assets/BTC.svg" alt="BTC" /> BTC</span>
                  <span className="ticker-item"><img src="/images/logos/assets/WBTC.svg" alt="WBTC" /> WBTC</span>
                  <span className="ticker-item"><img src="/images/logos/assets/cbBTC.svg" alt="cbBTC" /> cbBTC</span>
                  <span className="ticker-item"><img src="/images/logos/assets/tBTC.svg" alt="tBTC" /> tBTC</span>
                  <span className="ticker-item"><img src="/images/logos/assets/LBTC.svg" alt="LBTC" /> LBTC</span>
                  <span className="ticker-item"><img src="/images/logos/assets/enzoBTC.svg" alt="enzoBTC" /> enzoBTC</span>
                  {/* Bluechip Stocks */}
                  <span className="ticker-item ticker-stock"><img src="/images/logos/assets/apple.svg" alt="AAPL" /> AAPL</span>
                  <span className="ticker-item ticker-stock"><img src="/images/logos/assets/microsoft.svg" alt="MSFT" /> MSFT</span>
                  <span className="ticker-item ticker-stock"><img src="/images/logos/assets/google.svg" alt="GOOGL" /> GOOGL</span>
                  <span className="ticker-item ticker-stock"><img src="/images/logos/assets/amazon.svg" alt="AMZN" /> AMZN</span>
                  <span className="ticker-item ticker-stock"><img src="/images/logos/assets/nvidia.svg" alt="NVDA" /> NVDA</span>
                  <span className="ticker-item ticker-stock"><img src="/images/logos/assets/meta.svg" alt="META" /> META</span>
                  <span className="ticker-item ticker-stock"><img src="/images/logos/assets/tesla.svg" alt="TSLA" /> TSLA</span>
                  {/* Duplicated for seamless loop */}
                  <span className="ticker-item"><img src="/images/logos/assets/BTC.svg" alt="BTC" /> BTC</span>
                  <span className="ticker-item"><img src="/images/logos/assets/WBTC.svg" alt="WBTC" /> WBTC</span>
                  <span className="ticker-item"><img src="/images/logos/assets/cbBTC.svg" alt="cbBTC" /> cbBTC</span>
                  <span className="ticker-item"><img src="/images/logos/assets/tBTC.svg" alt="tBTC" /> tBTC</span>
                  <span className="ticker-item"><img src="/images/logos/assets/LBTC.svg" alt="LBTC" /> LBTC</span>
                  <span className="ticker-item"><img src="/images/logos/assets/enzoBTC.svg" alt="enzoBTC" /> enzoBTC</span>
                  <span className="ticker-item ticker-stock"><img src="/images/logos/assets/apple.svg" alt="AAPL" /> AAPL</span>
                  <span className="ticker-item ticker-stock"><img src="/images/logos/assets/microsoft.svg" alt="MSFT" /> MSFT</span>
                  <span className="ticker-item ticker-stock"><img src="/images/logos/assets/google.svg" alt="GOOGL" /> GOOGL</span>
                  <span className="ticker-item ticker-stock"><img src="/images/logos/assets/amazon.svg" alt="AMZN" /> AMZN</span>
                  <span className="ticker-item ticker-stock"><img src="/images/logos/assets/nvidia.svg" alt="NVDA" /> NVDA</span>
                  <span className="ticker-item ticker-stock"><img src="/images/logos/assets/meta.svg" alt="META" /> META</span>
                  <span className="ticker-item ticker-stock"><img src="/images/logos/assets/tesla.svg" alt="TSLA" /> TSLA</span>
                </div>
              </div>

              <div className="hero-cta">
                <button className="btn btn-primary btn-gradient-border">
                  <span className="btn-text">Launch App</span>
                </button>
              </div>
            </div>

            {/* Investors Section */}
            <section className="investors-section">
              <h2 className="investors-label">Backed by</h2>
              <div className="investors-grid">
                <img src="/images/investors/gsr.png" alt="GSR" className="investor-logo" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <img src="/images/investors/gemini.png" alt="Gemini" className="investor-logo" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <img src="/images/investors/auros.png" alt="Auros" className="investor-logo small" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <img src="/images/investors/keyrock.png" alt="Keyrock" className="investor-logo" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <img src="/images/investors/newForm.png" alt="NewForm" className="investor-logo small" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <img src="/images/investors/v3v.png" alt="V3V" className="investor-logo small" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
            </section>
          </div>
        </main>

        {/* Scroll Indicator */}
        <div className="scroll-indicator" onClick={scrollToHowItWorks}>
          <span>Scroll</span>
          <div className="chevron"></div>
        </div>
      </div>

      {/* How It Works */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <h2 className="section-title">How it works</h2>

          <div className="steps-container">
            {/* Curved connecting line */}
            <div className="steps-curve">
              <svg viewBox="0 0 800 60" fill="none" preserveAspectRatio="none">
                <path d="M 0 50 Q 200 0, 400 30 Q 600 60, 800 10" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
              </svg>
            </div>

            <div className="steps-grid">
              <div className="step-card">
                <div className="step-dot"></div>
                <div className="step-header">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M9 21V9" />
                    </svg>
                  </div>
                  <h3 className="step-title">Borrow</h3>
                </div>
                <p className="step-desc">Borrow bvUSD against Bitcoin, wrapped BTC, or tokenized equity on any EVM chain. One protocol, any collateral, anywhere. Retain full exposure while unlocking on-chain liquidity.</p>
              </div>

              <div className="step-card">
                <div className="step-dot"></div>
                <div className="step-header">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v12M9 9h6M9 15h6" />
                    </svg>
                  </div>
                  <h3 className="step-title">Mint</h3>
                </div>
                <p className="step-desc">Convert approved stablecoins into bvUSD via instant on-chain swap. Deployable across the EVM.</p>
              </div>

              <div className="step-card">
                <div className="step-dot"></div>
                <div className="step-header">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="step-title">Stake</h3>
                </div>
                <p className="step-desc">Stake bvUSD to receive sbvUSD, a liquid yield-accruing token. Yields auto-compound. Withdraw to bvUSD at any time.</p>
              </div>

              <div className="step-card">
                <div className="step-dot"></div>
                <div className="step-header">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h3 className="step-title">Earn</h3>
                </div>
                <p className="step-desc">Earn institutional-grade yield on your Bitcoin and tokenized equity. Use what you&apos;ve minted to scale your position and cycle back to Mint.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section Background */}
      <div className="cards-bg">
        <section className="cards-section">
          <h2 className="cards-section-title">Products</h2>
          <p className="cards-section-subtitle">BitVault is an institutional on-chain credit layer for the world&apos;s most liquid, regulated collateral — with Bitcoin as the reserve anchor.</p>

          <div className="product-cards">
            {/* bvUSD Card */}
            <div className="product-card dark">
              <div className="card-intro">
                <div className="card-banner" style={{ backgroundImage: "url('/images/bvUSDBackground.jpg')" }}></div>
                <div className="card-badge-row">
                  <img src="/images/bvusd.svg" alt="bvUSD" className="card-token-icon" />
                  <span className="card-badge-text">bvUSD</span>
                </div>
                <div className="card-apy-row">
                  {/* No APY for bvUSD */}
                </div>
                <div>
                  <div className="card-headline">Institutional Borrowing</div>
                </div>
              </div>
              <div className="card-divider"></div>
              <ul className="card-features">
                <li><span className="check" aria-hidden="true">&#10003;</span><span>Borrow against Bitcoin and tokenized equity</span></li>
                <li><span className="check" aria-hidden="true">&#10003;</span><span>Overcollateralized borrowing</span></li>
                <li><span className="check" aria-hidden="true">&#10003;</span><span>KYC/KYB required</span></li>
              </ul>
              <div className="card-cta">
                <button className="btn btn-primary" onClick={() => window.open("https://app.bitvault.finance", "_blank")}>
                  <span className="btn-text">Borrow Now</span>
                </button>
              </div>
            </div>

            {/* sbvUSD Card */}
            <div className="product-card gold">
              <div className="card-intro">
                <div className="card-banner" style={{ backgroundImage: "url('/images/sbvUSDBackground.jpg')" }}></div>
                <div className="card-badge-row">
                  <img src="/images/sbvusd.svg" alt="sbvUSD" className="card-token-icon" />
                  <span className="card-badge-text">sbvUSD</span>
                </div>
                <div className="card-apy-row">
                  <span className="card-apy-value">12%</span>
                  <span className="card-apy-label">APY</span>
                </div>
                <div>
                  <div className="card-headline">Institutional-Grade Yield</div>
                </div>
              </div>
              <div className="card-divider"></div>
              <ul className="card-features">
                <li><span className="check" aria-hidden="true">&#10003;</span><span>Allocated to market-neutral strategies</span></li>
                <li><span className="check" aria-hidden="true">&#10003;</span><span>Managed by institutional partners</span></li>
                <li><span className="check" aria-hidden="true">&#10003;</span><span>Backed 100% by bluechip stablecoins</span></li>
              </ul>
              <div className="card-cta">
                <button className="btn btn-secondary" onClick={() => window.open("https://app.bitvault.finance", "_blank")}>
                  <span className="btn-text">Earn Now</span>
                </button>
              </div>
            </div>

            {/* BitVault Rewards Card */}
            <div className="product-card blue">
              <div className="card-intro">
                <div className="card-banner" style={{ background: "url('/images/background.png') center/cover no-repeat" }}></div>
                <div className="card-badge-row">
                  <img src="/images/favicon.svg" alt="BitVault" className="card-token-icon" />
                  <span className="card-badge-text">BitVault Rewards</span>
                </div>
                <div className="card-apy-row">
                  {/* No APY for Rewards */}
                </div>
                <div>
                  <div className="card-headline">Earn Points & Rewards</div>
                </div>
              </div>
              <div className="card-divider"></div>
              <ul className="card-features">
                <li><span className="check" aria-hidden="true">&#10003;</span><span>Earn points for protocol activity</span></li>
                <li><span className="check" aria-hidden="true">&#10003;</span><span>Multipliers for early adopters</span></li>
                <li><span className="check" aria-hidden="true">&#10003;</span><span>Referral bonuses</span></li>
              </ul>
              <div className="card-cta">
                <button className="btn btn-primary" onClick={() => window.open("https://app.bitvault.finance", "_blank")}>
                  <span className="btn-text">Coming Soon</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Ecosystem Partners */}
      <section className="ecosystem-section" id="partners">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ecosystem Partners</h2>
            <p className="section-subtitle">Integrated with leading tokenized asset platforms for institutional-grade collateral</p>
          </div>

          <div className="ecosystem-grid">
            <div className="partner-card">
              <div className="partner-logo">
                <img src="/images/logos/tokenized-equities/Ondo_Logo_0.svg" alt="Ondo" />
              </div>
              <a href="https://ondo.finance" target="_blank" rel="noopener noreferrer" className="partner-link">
                ondo.finance
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>

            <div className="partner-card">
              <div className="partner-logo">
                <img src="/images/logos/tokenized-equities/NicePng_litecoin-logo-png_1410532 (1).png" alt="Gemini" />
              </div>
              <a href="https://gemini.com" target="_blank" rel="noopener noreferrer" className="partner-link">
                gemini.com
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>

            <div className="partner-card">
              <div className="partner-logo">
                <img src="/images/logos/tokenized-equities/Robinhood.svg" alt="Robinhood" />
              </div>
              <a href="https://robinhood.com" target="_blank" rel="noopener noreferrer" className="partner-link">
                robinhood.com
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>

            <div className="partner-card">
              <div className="partner-logo">
                <img src="/images/logos/tokenized-equities/Kraken.svg" alt="Kraken" />
              </div>
              <a href="https://kraken.com" target="_blank" rel="noopener noreferrer" className="partner-link">
                kraken.com
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>

            <div className="partner-card">
              <div className="partner-logo">
                <img src="/images/logos/tokenized-equities/Morpho-logo-horizontal-darkmode.svg" alt="Morpho" className="no-filter" />
              </div>
              <a href="https://morpho.xyz" target="_blank" rel="noopener noreferrer" className="partner-link">
                morpho.xyz
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>

            <div className="partner-card">
              <div className="partner-logo">
                <img src="/images/logos/tokenized-equities/Aave logo.png" alt="Aave" />
              </div>
              <a href="https://aave.com" target="_blank" rel="noopener noreferrer" className="partner-link">
                aave.com
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>

            <div className="partner-card">
              <div className="partner-logo">
                <img src="/images/logos/tokenized-equities/xStocks.svg" alt="xStocks" />
              </div>
              <a href="https://xstocks.io" target="_blank" rel="noopener noreferrer" className="partner-link">
                xstocks.io
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>

            <div className="partner-card">
              <div className="partner-logo">
                <img src="/images/logos/tokenized-equities/centrifuge-logo.svg" alt="Centrifuge" />
              </div>
              <a href="https://centrifuge.io/" target="_blank" rel="noopener noreferrer" className="partner-link">
                centrifuge.io
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default IndexPage;

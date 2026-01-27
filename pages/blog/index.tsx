import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export default function Blog() {
  return (
    <div className="hero-bg">
      <Navbar />
      <div className="page-background" aria-hidden="true"></div>
      <main className="main container">
        <header className="page-header">
          <h1 className="page-title">Blog</h1>
          <p className="page-subtitle">Insights on Bitcoin, tokenized assets, stablecoins, and the future of institutional DeFi.</p>
        </header>

        <section className="blog-grid" aria-label="Blog posts">
          <article>
            <a href="/blog/tokenized-equity" className="blog-card">
              <div className="blog-card-image">
                <img src="/images/background.png" alt="Tokenized Equity as Stablecoin Collateral" loading="lazy" />
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="blog-card-tag">Research</span>
                  <time className="blog-card-date" dateTime="2026-01-24">January 24, 2026</time>
                </div>
                <h2 className="blog-card-title">Tokenized Equity: The Next Frontier for Stablecoin Collateral</h2>
                <p className="blog-card-excerpt">How the convergence of DeFi and traditional finance is creating a superior collateral class for institutional stablecoins. Large-cap equities offer 30-day annualized volatility of 15-25%, compared to Bitcoin's typical range of 50-80%.</p>
                <span className="blog-card-read-more" aria-hidden="true">
                  Read Article
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          </article>

          <article>
            <a href="/blog/central-bank-liquidity-divergence" className="blog-card">
              <div className="blog-card-image">
                <img src="/images/background.png" alt="Central Bank Liquidity Analysis" loading="lazy" />
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="blog-card-tag">Macro</span>
                  <time className="blog-card-date" dateTime="2025-12-20">December 20, 2025</time>
                </div>
                <h2 className="blog-card-title">Central Bank Liquidity Divergence and Bitcoin Consolidation</h2>
                <p className="blog-card-excerpt">How global monetary fragmentation is strengthening the case for BTC-backed stablecoins. The Fed has initiated Treasury purchases while the BOJ raised rates to 30-year highs - a divergence that signals structural stress in global liquidity coordination.</p>
                <span className="blog-card-read-more" aria-hidden="true">
                  Read Article
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
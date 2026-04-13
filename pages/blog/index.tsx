import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Link from "next/link";



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
          <BlogPostCard title="Infrastructure Is the Alpha" excerpt="Q1's $137M in exploits, the sovereign Bitcoin race, and an emerging AI defense layer reveal that the teams building compliance frameworks and perfecting risk management are quietly positioning for the biggest unlock in DeFi's history." date="April 13, 2026" link="/blog/infrastructure-is-the-alpha" tag="Research" image="/images/blog/infrastructure-is-the-alpha.svg" />
          <BlogPostCard title="The RWA Yield Landscape: From Tokenized Equities to Volatility Harvesting" excerpt="How the $27B RWA market, on-chain lending against real-world collateral, and volatility harvesting engines are converging to create institutional-grade yield." date="March 26, 2026" link="/blog/rwa-yield-landscape" tag="Research" image="/images/blog/rwa-yield-landscape.svg" />
          <BlogPostCard title="From 59% to 72%: How We Rebuilt Our Bitcoin Signal Model" excerpt="Walk-forward validation exposed critical failures in two classifiers. Here's how we recalibrated our model to achieve 71.9% directional accuracy—and why honest validation is the only path to predictive edge." date="January 28, 2026" link="/blog/model-v351-calibration" tag="Engineering" />
          <BlogPostCard title="Inside BitVault's Bitcoin Analytics Platform: A Quantitative Approach to BTC Signals" excerpt="How we built a Wild Bootstrap OLS regression model with 59% directional accuracy—and what we learned about separating signal from noise. An in-depth look at the methodology behind BitVault's internal Bitcoin analytics platform." date="January 27, 2026" link="/blog/bitcoin-analytics-platform" tag="Research" />
          <BlogPostCard title="Tokenized Equity: The Next Frontier for Stablecoin Collateral" excerpt="How the convergence of DeFi and traditional finance is creating a superior collateral class for institutional stablecoins. Large-cap equities offer 30-day annualized volatility of 15-25%, compared to Bitcoin's typical range of 50-80%." date="January 24, 2026" link="/blog/tokenized-equity" tag="Research" />
          <BlogPostCard title="Central Bank Liquidity Divergence and Bitcoin Consolidation" excerpt="How global monetary fragmentation is strengthening the case for BTC-backed stablecoins. The Fed has initiated Treasury purchases while the BOJ raised rates to 30-year highs - a divergence that signals structural stress in global liquidity coordination." date="December 20, 2025" link="/blog/central-bank-liquidity-divergence" tag="Macro" />
        </section>
      </main>
      <Footer />
    </div >
  );
}

function BlogPostCard({ title, excerpt, date, link, tag, image }: { title: string, excerpt: string, date: string, link: string, tag: string, image?: string }) {
  return (
    <article>
      <Link href={link} legacyBehavior passHref>
        <a className="blog-card">
          <div className="blog-card-image">
            <img src={image || "/images/background.png"} alt={title} loading="lazy" />
          </div>
          <div className="blog-card-content">
            <div className="blog-card-meta">
              <span className="blog-card-tag">{tag}</span>
              <time className="blog-card-date" dateTime={date}>
                {date}
              </time>
            </div>
            <h2 className="blog-card-title">
              {title}
            </h2>
            <p className="blog-card-excerpt">
              {excerpt}
            </p>
            <span className="blog-card-read-more" aria-hidden="true">
              Read Article
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </a>
      </Link>
    </article>
  );
}
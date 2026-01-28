import Link from "next/link"

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function BlogPost() {
  return (
    <>
      <div className="hero-bg">
        <Navbar />
        <div className="page-background" aria-hidden="true"></div>
        <main className="main container">
          <article className="article">
            <div className="article-header">
              <Link href="/blog" legacyBehavior passHref>
                <a className="article-back">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Back to Blog
                </a>
              </Link>

              <div className="article-meta">
                <span className="article-tag">Engineering</span>
                <span className="article-date">January 28, 2026</span>
              </div>

              <h1 className="article-title">From 59% to 72%: How We Rebuilt Our Bitcoin Signal Model</h1>
              <p className="article-subtitle">Walk-forward validation revealed uncomfortable truths about our model. Two classifiers were performing worse than a coin flip. Here&apos;s how we fixed it.</p>
            </div>

            <div className="article-content">
              <div className="hero-stat-box">
                <div className="hero-stat-main">71.9%</div>
                <div className="hero-stat-label">Two-Stage Directional Accuracy</div>
                <div className="hero-stat-sublabel">Walk-forward validated on 230+ out-of-sample trades</div>

                <div className="hero-stat-comparison">
                  <div className="comparison-item">
                    <div className="comparison-value old">59.2%</div>
                    <div className="comparison-label">v3.4.0 Accuracy</div>
                  </div>
                  <div className="comparison-item">
                    <div className="comparison-value new">71.9%</div>
                    <div className="comparison-label">v3.5.1 Accuracy</div>
                  </div>
                  <div className="comparison-item">
                    <div className="comparison-value new">+12.7%</div>
                    <div className="comparison-label">Improvement</div>
                  </div>
                </div>
              </div>

              <h2>The Problem We Discovered</h2>

              <p>In our <a href="/bitvault-landing2/blog/bitcoin-analytics-platform">previous blog post</a>, we described our Wild Bootstrap OLS regression model achieving 59.2% directional accuracy. We were proud of that number. It represented a statistically significant edge over random chance.</p>

              <p>Then we ran walk-forward validation.</p>

              <p>Walk-forward validation is the gold standard for testing trading models. Unlike backtesting (which can overfit to historical data), walk-forward validation simulates real trading: train on past data, predict the future, record the outcome, roll forward, repeat. No peeking at future information.</p>

              <p>The results were sobering.</p>

              <div className="callout danger">
                <div className="callout-title">What Walk-Forward Validation Revealed</div>
                <p>Two of our six classifiers were performing <strong>worse than a coin flip</strong>. The Weekend Effect classifier, which we believed had 72% accuracy based on in-sample testing, actually achieved only 29.9% in live conditions. The Tail Risk classifier managed 39.1%.</p>
              </div>

              <p>These weren&apos;t minor underperformers. These were classifiers actively hurting our signal by voting in the wrong direction more often than not. Every time they cast a vote, they were more likely to be wrong than right.</p>

              <h2>Why Did This Happen?</h2>

              <p>The answer lies in the difference between <strong>in-sample</strong> and <strong>out-of-sample</strong> performance.</p>

              <p>When we built v3.4.0, we validated using traditional cross-validation: randomly split the data, train on some, test on others, aggregate results. This approach has a fatal flaw for time-series data: it leaks future information into the training process.</p>

              <p>The Weekend Effect pattern, for example, appeared highly significant when we could &quot;see&quot; both Friday and the subsequent Monday in our training data. But in real trading, you only know Friday&apos;s close. You don&apos;t know what Monday will bring. The pattern that seemed crystal clear in hindsight became noise in real-time.</p>

              <h3>The Classifiers That Failed</h3>

              <div className="data-table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Classifier</th>
                      <th>Expected Accuracy</th>
                      <th>Actual Accuracy</th>
                      <th>Gap</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>WeekendEffect</strong></td>
                      <td>72.0%</td>
                      <td style={{ color: "#ef4444" }}>29.9%</td>
                      <td style={{ color: "#ef4444" }}>-42.1%</td>
                      <td><span className="badge-disabled">DISABLED</span></td>
                    </tr>
                    <tr>
                      <td><strong>TailRiskContrarian</strong></td>
                      <td>62.0%</td>
                      <td style={{ color: "#ef4444" }}>39.1%</td>
                      <td style={{ color: "#ef4444" }}>-22.9%</td>
                      <td><span className="badge-disabled">DISABLED</span></td>
                    </tr>
                    <tr>
                      <td><strong>SentimentContrarian</strong></td>
                      <td>67.0%</td>
                      <td style={{ color: "#fbbf24" }}>51.1%</td>
                      <td style={{ color: "#fbbf24" }}>-15.9%</td>
                      <td><span className="badge-reduced">REDUCED</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>The Weekend Effect classifier was our worst offender. A 29.9% accuracy means it was wrong 70% of the time. If we had simply inverted its signal, we would have achieved 70% accuracy from that classifier alone. But that would be curve-fitting. The honest conclusion: the pattern doesn&apos;t work in live trading.</p>

              <h2>The Solution: Two-Stage Prediction + Calibration</h2>

              <p>We didn&apos;t just disable the failing classifiers and call it a day. We rebuilt the model architecture from scratch, implementing two major innovations:</p>

              <div className="improvement-grid">
                <div className="improvement-card highlight">
                  <h4>1. Two-Stage Prediction</h4>
                  <p><strong>Stage 1: Direction Classification</strong> — A 4-classifier ensemble votes on whether BTC will go up or down. Each classifier specializes in a different signal type.</p>
                  <p style={{ marginTop: "12px" }}><strong>Stage 2: Magnitude Regression</strong> — Once direction is established with high confidence, we estimate how much BTC will move using OLS regression.</p>
                </div>
                <div className="improvement-card highlight">
                  <h4>2. Calibrated Weights</h4>
                  <p>Instead of using theoretical weights from in-sample analysis, we calibrated each classifier&apos;s weight based on its actual walk-forward performance.</p>
                  <p style={{ marginTop: "12px" }}>High performers (64%+ accuracy) got boosted. Near-random performers (50%) got reduced. Below-random performers got disabled.</p>
                </div>
                <div className="improvement-card">
                  <h4>3. On-Chain Valuation</h4>
                  <p>We added SOPR (Spent Output Profit Ratio) and MVRV Z-Score as a new classifier. On-chain metrics showed 68.7% accuracy in walk-forward validation — our second-best performer.</p>
                </div>
                <div className="improvement-card">
                  <h4>4. Live Monitoring</h4>
                  <p>The model now tracks its own performance in real-time. If accuracy drops below thresholds, automated alerts fire. We&apos;ll know immediately if the model starts degrading.</p>
                </div>
              </div>

              <h2>The New Classifier Weights</h2>

              <p>After calibration, here&apos;s how the weights changed:</p>

              <div className="data-table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Classifier</th>
                      <th>Validated Accuracy</th>
                      <th>Old Weight</th>
                      <th>New Weight</th>
                      <th>Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>TechnicalMomentum</strong></td>
                      <td style={{ color: "#10b981" }}>64.3%</td>
                      <td>0.25</td>
                      <td>0.36</td>
                      <td><span className="badge-boost">+44%</span></td>
                    </tr>
                    <tr>
                      <td><strong>OnChainValuation</strong></td>
                      <td style={{ color: "#10b981" }}>68.7%</td>
                      <td>0.22</td>
                      <td>0.317</td>
                      <td><span className="badge-boost">+44%</span></td>
                    </tr>
                    <tr>
                      <td><strong>FlowDynamics</strong></td>
                      <td>59.2%</td>
                      <td>0.15</td>
                      <td>0.18</td>
                      <td><span className="badge-boost">+20%</span></td>
                    </tr>
                    <tr>
                      <td><strong>SentimentContrarian</strong></td>
                      <td style={{ color: "#fbbf24" }}>51.1%</td>
                      <td>0.20</td>
                      <td>0.12</td>
                      <td><span className="badge-reduced">-40%</span></td>
                    </tr>
                    <tr>
                      <td><strong>TailRiskContrarian</strong></td>
                      <td style={{ color: "#ef4444" }}>39.1%</td>
                      <td>0.10</td>
                      <td>0.012</td>
                      <td><span className="badge-disabled">DISABLED</span></td>
                    </tr>
                    <tr>
                      <td><strong>WeekendEffect</strong></td>
                      <td style={{ color: "#ef4444" }}>29.9%</td>
                      <td>0.08</td>
                      <td>0.012</td>
                      <td><span className="badge-disabled">DISABLED</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>The top two classifiers—TechnicalMomentum and OnChainValuation—now control <strong>67.7%</strong> of the signal weight. These are the patterns that actually work in live trading.</p>

              <h2>Regime-Specific Calibration</h2>

              <p>We also discovered that the model performs very differently across market regimes:</p>

              <div className="stat-box">
                <div className="stat-grid">
                  <div className="stat-item">
                    <div className="stat-value success">78.4%</div>
                    <div className="stat-label">Bull Market</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value success">72.1%</div>
                    <div className="stat-label">Accumulation</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">58.3%</div>
                    <div className="stat-label">Bear Market</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value danger">16.0%</div>
                    <div className="stat-label">Capitulation</div>
                  </div>
                </div>
              </div>

              <p>The model excels in bull markets and accumulation phases. It struggles during capitulation. This makes intuitive sense: capitulation events are characterized by extreme, unpredictable moves that defy historical patterns.</p>

              <p>In v3.5.1, we apply regime-specific position multipliers:</p>
              <ul>
                <li><strong>Bull/Accumulation:</strong> 1.1x position sizing (high confidence)</li>
                <li><strong>Neutral:</strong> 1.0x position sizing (standard)</li>
                <li><strong>Bear:</strong> 0.7x position sizing (reduced confidence)</li>
                <li><strong>Capitulation/Correction:</strong> 0.3x position sizing (defensive)</li>
              </ul>

              <h2>Why This Should Work Better</h2>

              <p>The improvements in v3.5.1 aren&apos;t based on finding new alpha. They&apos;re based on <strong>removing sources of negative alpha</strong> and <strong>concentrating weight on what actually works</strong>.</p>

              <div className="callout success">
                <div className="callout-title">The Key Insight</div>
                <p>A model that correctly identifies and removes broken components will outperform a model that averages across both working and broken components. We didn&apos;t make the good classifiers better—we stopped letting the bad ones vote.</p>
              </div>

              <p>The 71.9% accuracy isn&apos;t a theoretical number from in-sample testing. It&apos;s the actual hit rate from walk-forward validation across 230+ trades spanning multiple market regimes. The model predicted the direction correctly 166 times out of 230.</p>

              <h2>What We&apos;re Monitoring</h2>

              <p>V3.5.1 includes a live monitoring system that tracks:</p>

              <ul>
                <li><strong>7-day rolling accuracy</strong> — Alert if drops below 55%</li>
                <li><strong>Classifier drift</strong> — Alert if any classifier&apos;s accuracy shifts 15%+ from baseline</li>
                <li><strong>Losing streaks</strong> — Alert after 5 consecutive incorrect predictions</li>
                <li><strong>Calibration error</strong> — Alert if predicted confidence doesn&apos;t match actual win rate</li>
                <li><strong>Regime-specific degradation</strong> — Alert if performance drops in specific market conditions</li>
              </ul>

              <p>If the model starts failing, we&apos;ll know within days, not months. This is the difference between quantitative trading and blind faith.</p>

              <h2>Explore the Updated Platform</h2>

              <p>The new model is live at <a href="https://mischa0x.com/bitvault2" target="_blank">mischa0x.com/bitvault2</a>. You can see:</p>

              <ul>
                <li>The two-stage prediction output (direction + magnitude)</li>
                <li>Classifier votes and confidence levels</li>
                <li>Real-time model health status</li>
                <li>Historical accuracy tracking</li>
              </ul>

              <p>The original dashboard at <a href="https://mischa0x.com/bitvault">/bitvault</a> remains available for comparison.</p>

              <hr />

              <div className="cta-section">
                <h3>Try the New Model</h3>
                <p>See how v3.5.1&apos;s two-stage prediction compares to the original. The model health badge in the header shows real-time accuracy.</p>
                <div className="cta-buttons">
                  <a href="/bitvault2" className="btn btn-primary">
                    Launch BitVault v2
                  </a>
                  <a href="https://x.com/BitVaultFinance" target="_blank" className="btn btn-secondary">
                    Follow Updates
                  </a>
                </div>
              </div>

              <hr />

              <h2>Lessons Learned</h2>

              <p>Building this model taught us several hard lessons:</p>

              <ol>
                <li><strong>In-sample results lie.</strong> A pattern that looks perfect in backtesting may not survive contact with reality. Always use walk-forward validation.</li>
                <li><strong>Popular indicators can be noise.</strong> The Weekend Effect and derivatives data (funding rates, open interest) showed zero or negative predictive power. Don&apos;t trade on narratives—trade on validated signals.</li>
                <li><strong>Subtraction beats addition.</strong> Removing two broken classifiers improved accuracy more than any single new feature could have.</li>
                <li><strong>Monitor relentlessly.</strong> Markets change. Patterns decay. A model that works today may fail tomorrow. Build monitoring from day one.</li>
              </ol>

              <p>The 71.9% accuracy in v3.5.1 isn&apos;t the end of this journey. It&apos;s a checkpoint. We&apos;ll continue validating, calibrating, and improving. When the model starts degrading—and it will eventually—we&apos;ll catch it early and adapt.</p>

              <p>That&apos;s the difference between quantitative trading and gambling.</p>

              <hr />

              <p><em>Model version: v3.5.1 | Calibration date: January 28, 2026 | Validation trades: 230+ | Walk-forward accuracy: 71.9%</em></p>

            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}

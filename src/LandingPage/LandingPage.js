import React, { useEffect, useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [bubbles, setBubbles] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Track download function
  const trackDownload = () => {
    // Log download event (with Google Analytics, Firebase, etc.)
    console.log('App download initiated');
    // Replace with the actual path to your APK file
    window.location.href = '/bua-app.apk';
  };

  // Generate random bubbles
  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = [];
      const bubbleCount = 20;
      
      for (let i = 0; i < bubbleCount; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * 100 + 40,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.6 + 0.15,
          speed: Math.random() * 1.5 + 0.5,
          direction: Math.random() > 0.5 ? 1 : -1
        });
      }
      
      setBubbles(newBubbles);
    };
    
    generateBubbles();
    
    // Animation interval
    const interval = setInterval(() => {
      setBubbles(prevBubbles => 
        prevBubbles.map(bubble => ({
          ...bubble,
          y: bubble.y - (bubble.speed * 0.1),
          x: bubble.x + (Math.sin(bubble.y / 30) * bubble.direction * 0.15),
          // Reset bubbles that go off screen
          ...(bubble.y < -10 ? { y: 110, x: Math.random() * 100 } : {})
        }))
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container">
      {/* Header/Navigation */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <span className="logo-icon">
              <img src="./logoOption6.png" alt="Bua logo" />
            </span>
            <span className="logo-text">Bua</span>
          </div>
          
          {/* Beta Badge */}
          <div className="beta-badge">Beta</div>
          
          {/* Hamburger menu button for mobile */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          
          {/* Navigation menu */}
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <a href="#" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#how-it-works" className="nav-link" onClick={() => setMenuOpen(false)}>How It Works</a>
            <a href="#benefits" className="nav-link" onClick={() => setMenuOpen(false)}>Benefits</a>
            <a href="#target-users" className="nav-link" onClick={() => setMenuOpen(false)}>Who Benefits</a>
            <a href="#footer" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>

      {/* 🟢 Hero section (Above the Fold) */}
      <div className="landing-container">
        {/* Animated bubbles */}
        {bubbles.map(bubble => (
          <div
            key={bubble.id}
            className="bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              background: `rgba(255, 255, 255, ${bubble.opacity})`,
              boxShadow: `0 0 ${bubble.size / 2.5}px rgba(255, 255, 255, 0.8)`
            }}
          />
        ))}
        
        {/* Content container with glow effect */}
        <div className="content-container">
          <h1 className="main-heading">
            <span className="heading-intro">The Future of Payments</span>
            <span className="heading-highlight">0.1% Fees, No Limits, Full Control</span>
          </h1>
          
          <p className="description">
            Transact as much as you want at just 0.1% per transaction. Move points instantly and off-ramp to your bank whenever needed.
          </p>
          
          {/* Download button with hover effect and tracking */}
          <button className="download-button" onClick={trackDownload}>
            <span className="button-content">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 17V3" />
                <path d="m6 11 6 6 6-6" />
                <path d="M19 21H5" />
              </svg>
              Download for Android
            </span>
            <span className="button-hover"></span>
          </button>
        </div>
        
        {/* Decorative gradient circle */}
        <div className="decorative-circle-container">
          <div className="decorative-circle"></div>
        </div>
      </div>

      {/* 🔵 How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-heading">How It Works</h2>
            <h3 className="section-subheading">Simple, Fast, and Efficient</h3>
          </div>
          
          <div className="points-system-intro">
            <div className="points-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <div className="points-info">
              <h3>Points Per Unit System</h3>
              <p>Bua uses a points system instead of actual currency, providing stability and flexibility across borders. Each point maintains a consistent value, eliminating exchange rate concerns and enabling seamless global transactions.</p>
            </div>
          </div>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <line x1="2" y1="10" x2="22" y2="10"></line>
                </svg>
              </div>
              <h3 className="step-title">1. Deposit Funds</h3>
              <p className="step-description">Onboard with a one-time 1-2% fee and get started immediately. Your currency converts to points.</p>
            </div>
            
            <div className="step">
              <div className="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="17 1 21 5 17 9"></polyline>
                  <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                  <polyline points="7 23 3 19 7 15"></polyline>
                  <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                </svg>
              </div>
              <h3 className="step-title">2. Transact Freely</h3>
              <p className="step-description">Enjoy unlimited, near-instant point transfers at just 0.1% fee regardless of location.</p>
            </div>
            
            <div className="step">
              <div className="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                  <rect x="9" y="9" width="12" height="10" rx="2"></rect>
                </svg>
              </div>
              <h3 className="step-title">3. Off-Ramp Anytime</h3>
              <p className="step-description">Convert points back to your preferred currency and withdraw to your bank with minimal fees.</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* 🟠 Why Choose Us Section */}
      <section id="benefits" className="benefits-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-heading">Why Choose Us?</h2>
            <h3 className="section-subheading">Key Advantages That Set Us Apart</h3>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1v22"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div className="benefit-info">
                <h3>Ultra-Low Fees</h3>
                <p>Just <strong>0.1% per transaction</strong> inside the system, compared to traditional services' 2-5%.</p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <div className="benefit-info">
                <h3>Unlimited Transactions</h3>
                <p>No daily limits or hidden fees. Transfer as much as you need, whenever you need.</p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <line x1="2" y1="10" x2="22" y2="10"></line>
                </svg>
              </div>
              <div className="benefit-info">
                <h3>Seamless Bank Integration</h3>
                <p>Off-ramp directly to your preferred bank anytime with minimal friction.</p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="benefit-info">
                <h3>Designed for High-Volume Users</h3>
                <p>Perfect for businesses, traders, and frequent senders who need reliability and speed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔴 Who Benefits The Most Section */}
      <section id="target-users" className="target-users-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-heading">Who Benefits The Most?</h2>
            <h3 className="section-subheading">Perfect For These Use Cases</h3>
          </div>
          
          <div className="user-cases">
            <div className="user-case">
              <div className="user-case-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="user-case-title">Businesses & Freelancers</h3>
              <p className="user-case-description">Save thousands on transaction fees with our ultra-low 0.1% rate.</p>
            </div>
            
            <div className="user-case">
              <div className="user-case-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="user-case-title">International Points Transfers</h3>
              <p className="user-case-description">Lower fees than banks and traditional remittance services.</p>
            </div>
            
            <div className="user-case">
              <div className="user-case-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="user-case-title">Large Transactions</h3>
              <p className="user-case-description">No caps, no crazy percentage fees, just 0.1% regardless of amount.</p>
            </div>
            
            <div className="user-case">
              <div className="user-case-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v4l3 3"></path>
                  <path d="M9 17a3 3 0 1 0 6 0"></path>
                </svg>
              </div>
              <h3 className="user-case-title">Everyday People</h3>
              <p className="user-case-description">Send points to friends and family without the hefty fees of traditional services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🟣 On/Off-Ramp Advantage Section */}
      <section className="onramp-section">
        <div className="section-container">
          <div className="onramp-content">
            <h2 className="onramp-heading">Unbeatable Transaction Economics</h2>
            <p className="onramp-description">
              Unlike banks that charge you on every transaction, we only apply a small 1-2% fee when you enter or exit. 
              Once inside, you transact for just 0.1%—saving you big in the long run!
            </p>
            <div className="onramp-illustration">
              <div className="onramp-diagram">
                <div className="onramp-item entry">
                  <div className="onramp-label">Entry</div>
                  <div className="onramp-fee">1-2% Fee</div>
                </div>
                <div className="onramp-item inside">
                  <div className="onramp-label">Inside System</div>
                  <div className="onramp-fee">0.1% Fee</div>
                </div>
                <div className="onramp-item exit">
                  <div className="onramp-label">Exit</div>
                  <div className="onramp-fee">1-2% Fee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🟢 Final Call to Action */}
      <section className="final-cta-section">
        <div className="section-container">
          <h2 className="final-cta-heading">Ready to experience low-fee transactions?</h2>
          <button className="download-button" onClick={trackDownload}>
            <span className="button-content">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 17V3" />
                <path d="m6 11 6 6 6-6" />
                <path d="M19 21H5" />
              </svg>
              Download for Android
            </span>
            <span className="button-hover"></span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <span className="logo-text">Bua</span>
          </div>
          
          <div className="social-links">
            <a href="https://x.com/buabetatech" className="social-link x-logo" aria-label="X (Twitter)">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5549 21H20.7996L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/>
              </svg>
            </a>
            <a href="mailto:info@buabeta.tech" className="social-link email-link" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
          
          <div className="copyright">
            &copy; 2025 Bua Tech. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
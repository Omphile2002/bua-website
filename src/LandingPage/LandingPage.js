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

  // Generate random bubbles - increased size range
  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = [];
      const bubbleCount = 20; // Increased bubble count
      
      for (let i = 0; i < bubbleCount; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * 100 + 40, // Increased size range from (20-80) to (40-140)
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.6 + 0.15, // Slightly increased opacity
          speed: Math.random() * 1.5 + 0.5, // Adjusted for smoother movement with larger bubbles
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
          x: bubble.x + (Math.sin(bubble.y / 30) * bubble.direction * 0.15), // Adjusted for smoother movement
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
            <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#footer" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero section */}
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
              boxShadow: `0 0 ${bubble.size / 2.5}px rgba(255, 255, 255, 0.8)` // Increased glow effect
            }}
          />
        ))}
        
        {/* Content container with glow effect */}
        <div className="content-container">
          <h1 className="main-heading">
            <span className="heading-intro">Welcome to the</span>
            <span className="heading-highlight">Bua</span>
          </h1>
          
          <p className="description">
            Join the new wave of transacting on your own terms. Bua is the future of digital transacting.
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

      {/* About section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-heading-container">
            <h2 className="about-heading">Revolutionize Your Transactions</h2>
          </div>
          
          <div className="about-content">
            <div className="about-text">
            <h3 className="about-subheading">We Are Not A Cryptocurrency</h3>
              <p>Bua is redefining digital transactions through our innovative Points Per Unit system. Unlike cryptocurrencies that rely on blockchain technology, Bua offers a more accessible, stable, and user-friendly approach to global transactions.</p>
              
              <p>We're built on a simple yet powerful premise: returning financial freedom to people by eliminating the barriers of traditional banking and the volatility of cryptocurrencies. Experience the future of digital exchange with Bua.</p>
              
              <ul className="feature-list">
                <li>
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div className="feature-info">
                    <h3>Seamless Global Transactions</h3>
                    <p>With Bua's Points Per Unit (PPU), send and receive value anywhere in the world instantly, without worrying about exchange rates or international fees.</p>
                  </div>
                </li>
                <li>
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 1v22"></path>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <div className="feature-info">
                    <h3>Ultra-Low Transaction Fees</h3>
                    <p>Enjoy transparent pricing with fees starting at just 0.1%, decreasing with transaction volume. No hidden charges, ever.</p>
                  </div>
                </li>
                <li>
                  <div className="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                  <div className="feature-info">
                    <h3>Intuitive Digital Wallet</h3>
                    <p>Our sleek, user-friendly interface makes managing your finances effortless. Send payments with just a few taps and track your transaction history in real-time.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="about-image">
              <div className="image-placeholder">
                <div className="image-bg"></div>
                <div className="image-circles"></div>
                <div className="image-content">
                  <div className="image-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85 1 6.5 2.5L23 10"></path>
                      <path d="M23 6v4h-4"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="placeholder-text">
                    Transactions Reimagined
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <span className="logo-text">Bua</span>
          </div>
          
          {/*<div className="footer-links">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
            <a href="#" className="footer-link">Contact</a>
          </div>*/}
          
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
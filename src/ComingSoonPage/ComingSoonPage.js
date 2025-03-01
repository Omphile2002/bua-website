import React, { useEffect, useState } from 'react';
import './ComingSoonPage.css';

const ComingSoonPage = () => {
  const [bubbles, setBubbles] = useState([]);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate countdown to March 3, 2025
  useEffect(() => {
    const launchDate = new Date('March 3, 2025 00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = launchDate - now;
      
      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };
    
    // Initial update
    updateCountdown();
    
    // Update every second
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

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
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <span className="logo-icon">
              <img src="./logoOption6.png" alt="Bua logo" />
            </span>
            <span className="logo-text">Bua</span>
          </div>
          <div className="beta-badge">Beta</div>
        </div>
      </header>

      {/* Coming Soon section */}
      <div className="coming-soon-container">
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
        
        {/* Content container */}
        <div className="content-container">
          <h1 className="main-heading">
            <span className="heading-intro">Welcome to</span>
            <span className="heading-highlight">Bua</span>
          </h1>
          
          <div className="coming-soon-text">
            <p>Coming Soon...</p>
          </div>
          
          {/* Launch date */}
          <div className="launch-date">
            <p>3 March 2025</p>
          </div>
          
          {/* Countdown timer */}
          <div className="countdown-container">
            <div className="countdown-item">
              <div className="countdown-value">{countdown.days}</div>
              <div className="countdown-label">Days</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">{countdown.hours}</div>
              <div className="countdown-label">Hours</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">{countdown.minutes}</div>
              <div className="countdown-label">Minutes</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">{countdown.seconds}</div>
              <div className="countdown-label">Seconds</div>
            </div>
          </div>
          
          {/* Subscribe form 
          <div className="subscribe-container">
            <p className="subscribe-text">Get notified when we launch</p>
            <form className="subscribe-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="subscribe-input"
                required
              />
              <button type="submit" className="subscribe-button">
                Notify Me
              </button>
            </form>
          </div>*/}
        </div>
        
        {/* Decorative gradient circle */}
        <div className="decorative-circle-container">
          <div className="decorative-circle"></div>
        </div>
      </div>

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <span className="logo-text">Bua</span>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-link x-logo" aria-label="X (Twitter)">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5549 21H20.7996L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/>
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

export default ComingSoonPage;
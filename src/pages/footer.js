import React from "react";
import { useNavigate } from 'react-router-dom';

export default function ModernFooter() {
  const navigate = useNavigate();

  // Navigation handlers matching your App.js routes
  const handlePrivacyClick = (e) => {
    e.preventDefault();
    navigate('/privacy');
  };

  const handleTermsClick = (e) => {
    e.preventDefault();
    navigate('/terms');
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    navigate('/about');
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/contact');
  };

  // Service page handlers - matching /services/* routes from App.js
  const handleRenewableClick = (e) => {
    e.preventDefault();
    navigate('/services/renewable-energy');
  };

  const handleBarcodeClick = (e) => {
    e.preventDefault();
    navigate('/services/barcode-automation');
  };

  const handleMepClick = (e) => {
    e.preventDefault();
    navigate('/services/mep-solutions');
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    navigate('/services');
  };

  return (
    <>
      <style>{`
        .footer {
          background: #0a0f1e;
          color: #f8fafc;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23475569" fill-opacity="0.05"><circle cx="40" cy="40" r="1.5"/></g></g></svg>');
          animation: backgroundFloat 25s linear infinite;
        }

        @keyframes backgroundFloat {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(80px) translateY(80px); }
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .footer-top {
          padding: 80px 20px 60px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          border-bottom: 1px solid rgba(148, 163, 184, 0.2);
        }

        .footer-brand {
          animation: slideUp 1s ease-out;
        }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .brand-logo {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 30px;
          background: linear-gradient(45deg, #ffffff, #cbd5e1, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: logoGlow 3s ease-in-out infinite alternate;
        }

        @keyframes logoGlow {
          0% { filter: brightness(1); }
          100% { filter: brightness(1.3); }
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-link {
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1.2rem;
          backdrop-filter: blur(10px);
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
        }

        .footer-column {
          animation: slideUp 1s ease-out;
        }

        .footer-column:nth-child(2) { animation-delay: 0.2s; }
        .footer-column:nth-child(3) { animation-delay: 0.4s; }
        .footer-column:nth-child(4) { animation-delay: 0.6s; }
        .footer-column:nth-child(5) { animation-delay: 0.8s; }

        .column-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 25px;
          color: #f1f5f9;
          position: relative;
          padding-bottom: 10px;
        }

        .column-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: linear-gradient(90deg, #ffffff, #cbd5e1);
          border-radius: 1px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-link {
          margin-bottom: 12px;
        }

        .footer-link a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          display: block;
          padding: 5px 0;
          position: relative;
          cursor: pointer;
        }

        .footer-link a::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1px;
          background: #ffffff;
          transition: width 0.3s ease;
        }

        .footer-link a:hover {
          color: #ffffff;
          transform: translateX(5px);
        }

        .footer-link a:hover::before {
          width: 100%;
        }

        .contact-info {
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .contact-item {
          margin-bottom: 15px;
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.6;
          word-break: break-word;
        }

        .footer-bottom {
          padding: 30px 20px;
          text-align: center;
          background: rgba(10, 15, 30, 0.5);
          backdrop-filter: blur(10px);
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }

        .footer-bottom-links a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .footer-bottom-links a:hover {
          color: #ffffff;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 60px 20px 40px;
          }

          .brand-logo {
            font-size: 2rem;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }

          .footer-bottom-links {
            justify-content: center;
          }

          .social-links {
            justify-content: flex-start;
            margin-top: 20px;
          }
        }

        @media (max-width: 480px) {
          .footer-top {
            padding: 50px 15px 30px;
            gap: 35px;
          }

          .brand-logo {
            font-size: 1.8rem;
          }

          .column-title {
            font-size: 1.2rem;
          }

          .footer-bottom {
            padding: 25px 15px;
          }

          .footer-bottom-links {
            gap: 20px;
          }

          .social-links {
            gap: 12px;
            flex-wrap: wrap;
            margin-top: 20px;
          }

          .social-link {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            {/* Brand & Contact Column */}
            <div className="footer-brand">
              <div className="brand-logo">Halo Technologies</div>
              <h3 className="column-title" style={{fontSize: '1.3rem', marginBottom: '25px'}}>Get In Touch</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span>#4/1, Rudra Chambers, 2nd Floor, 4th Main, Between 8th & 9th Cross, Malleshwaram, Bengaluru – 560003</span>
                </div>
                <div className="contact-item">
                  <span>+91 98443 42719</span>
                </div>
                <div className="contact-item">
                  <span>+91 91393 51697</span>
                </div>
                <div className="contact-item">
                  <span>halotechnologies04@gmail.com</span>
                </div>
                <div className="contact-item">
                  <span>www.halotechnologies.com</span>
                </div>
              </div>
              <div className="social-links" style={{marginTop: '30px'}}>
                <a href="https://www.facebook.com" className="social-link" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.twitter.com" className="social-link" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com" className="social-link" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/halo.technologies" className="social-link" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com" className="social-link" aria-label="YouTube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Our Services Column */}
            <div className="footer-column">
              <h3 className="column-title">Our Services</h3>
              <ul className="footer-links">
                <li className="footer-link">
                  <a onClick={handleRenewableClick}>Renewable Energy</a>
                </li>
                <li className="footer-link">
                  <a onClick={handleBarcodeClick}>Barcode & Automation</a>
                </li>
                <li className="footer-link">
                  <a onClick={handleMepClick}>MEP Solutions</a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="footer-column">
              <h3 className="column-title">Company</h3>
              <ul className="footer-links">
                <li className="footer-link">
                  <a onClick={handleAboutClick}>About Us</a>
                </li>
                <li className="footer-link">
                  <a onClick={handleContactClick}>Contact</a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="footer-column">
              <h3 className="column-title">Resources</h3>
              <ul className="footer-links">
                <li className="footer-link">
                  <a onClick={handlePrivacyClick}>Privacy Policy</a>
                </li>
                <li className="footer-link">
                  <a onClick={handleTermsClick}>Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="copyright">
                © 2025 Halo Technologies. All rights reserved.
              </div>
              <div className="footer-bottom-links">
                <a onClick={handlePrivacyClick}>Privacy Policy</a>
                <a onClick={handleTermsClick}>Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CookieConsent = () => {
  const navigate = useNavigate();
  const [showBanner, setShowBanner] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    performance: false,
    advertisement: false
  });

  const handleAcceptAll = () => {
    setCookiePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      performance: true,
      advertisement: true
    });
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    setCookiePreferences({
      necessary: true,
      functional: false,
      analytics: false,
      performance: false,
      advertisement: false
    });
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    setShowSettings(false);
    setShowBanner(false);
  };

  const togglePreference = (category) => {
    if (category === 'necessary') return;
    setCookiePreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handlePrivacyPolicy = () => {
    navigate('/privacy');
  };

  if (!showBanner && !showSettings) return null;

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && !showSettings && (
        <div className="cookie-banner">
          <div className="cookie-banner-content">
            <div className="cookie-text">
              <h3 className="cookie-title">
                We value your privacy
              </h3>
              <p className="cookie-description">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.{' '}
                <button
                  onClick={handlePrivacyPolicy}
                  className="cookie-policy-link"
                >
                  Cookie Policy
                </button>
              </p>
            </div>
            <div className="cookie-buttons">
              <button
                onClick={() => setShowSettings(true)}
                className="btn btn-outline"
              >
                Customize
              </button>
              <button
                onClick={handleRejectAll}
                className="btn btn-outline"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                className="btn btn-primary"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="modal-overlay">
          <div className="modal-container">
            {/* Header */}
            <div className="modal-header">
              <h2 className="modal-title">
                Customize Consent Preferences
              </h2>
            </div>

            {/* Content */}
            <div className="modal-content">
              <p className="modal-description">
                We use cookies to help you navigate efficiently and perform certain functions. You will find detailed information about all cookies under each consent category below. The cookies that are categorized as "Necessary" are stored on your browser as they are essential for enabling the basic functionalities of the site.
              </p>

              {/* Cookie Categories */}
              <div className="cookie-categories">
                {/* Necessary */}
                <div className="cookie-category">
                  <div className="category-header">
                    <h3 className="category-title">Necessary</h3>
                    <span className="always-active">Always Active</span>
                  </div>
                  <p className="category-description">
                    Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.
                  </p>
                </div>

                {/* Functional */}
                <div className="cookie-category">
                  <div className="category-header">
                    <h3 className="category-title">Functional</h3>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.functional}
                        onChange={() => togglePreference('functional')}
                      />
                      <span className="toggle-slider" data-checked={cookiePreferences.functional}>
                        <span className="toggle-thumb" data-checked={cookiePreferences.functional} />
                      </span>
                    </label>
                  </div>
                  <p className="category-description">
                    Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.
                  </p>
                </div>

                {/* Analytics */}
                <div className="cookie-category">
                  <div className="category-header">
                    <h3 className="category-title">Analytics</h3>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.analytics}
                        onChange={() => togglePreference('analytics')}
                      />
                      <span className="toggle-slider" data-checked={cookiePreferences.analytics}>
                        <span className="toggle-thumb" data-checked={cookiePreferences.analytics} />
                      </span>
                    </label>
                  </div>
                  <p className="category-description">
                    Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.
                  </p>
                </div>

                {/* Performance */}
                <div className="cookie-category">
                  <div className="category-header">
                    <h3 className="category-title">Performance</h3>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.performance}
                        onChange={() => togglePreference('performance')}
                      />
                      <span className="toggle-slider" data-checked={cookiePreferences.performance}>
                        <span className="toggle-thumb" data-checked={cookiePreferences.performance} />
                      </span>
                    </label>
                  </div>
                  <p className="category-description">
                    Performance cookies are used to understand and analyze the key performance indexes of the website which helps in delivering a better user experience for the visitors.
                  </p>
                </div>

                {/* Advertisement */}
                <div className="cookie-category">
                  <div className="category-header">
                    <h3 className="category-title">Advertisement</h3>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.advertisement}
                        onChange={() => togglePreference('advertisement')}
                      />
                      <span className="toggle-slider" data-checked={cookiePreferences.advertisement}>
                        <span className="toggle-thumb" data-checked={cookiePreferences.advertisement} />
                      </span>
                    </label>
                  </div>
                  <p className="category-description">
                    Advertisement cookies are used to provide visitors with customized advertisements based on the pages you visited previously and to analyze the effectiveness of the ad campaigns.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button
                onClick={handleRejectAll}
                className="btn btn-outline"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                className="btn btn-secondary"
              >
                Accept All
              </button>
              <button
                onClick={handleSavePreferences}
                className="btn btn-primary"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        * {
          box-sizing: border-box;
        }

        /* Cookie Banner */
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #f5f5f5;
          border-top: 1px solid #ddd;
          padding: 20px;
          z-index: 9999;
          box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        }

        .cookie-banner-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .cookie-text {
          flex: 1;
          min-width: 0;
        }

        .cookie-title {
          margin: 0 0 10px 0;
          font-size: 1.2rem;
          font-weight: 600;
          color: #333;
        }

        .cookie-description {
          margin: 0;
          font-size: 0.95rem;
          color: #555;
          line-height: 1.5;
        }

        .cookie-policy-link {
          background: none;
          border: none;
          color: #007bff;
          text-decoration: underline;
          cursor: pointer;
          padding: 0;
          font: inherit;
        }

        .cookie-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          flex-shrink: 0;
        }

        /* Buttons */
        .btn {
          padding: 10px 24px;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 500;
          border-radius: 4px;
          white-space: nowrap;
          border: none;
          transition: all 0.2s;
          min-height: 44px;
        }

        .btn-primary {
          background-color: #FF9933;
          color: white;
        }

        .btn-primary:hover {
          background-color: #e68a2e;
        }

        .btn-secondary {
          background-color: #333;
          color: white;
        }

        .btn-secondary:hover {
          background-color: #555;
        }

        .btn-outline {
          border: 2px solid #333;
          background-color: transparent;
          color: #333;
        }

        .btn-outline:hover {
          background-color: #f0f0f0;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,0.5);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          overflow-y: auto;
        }

        .modal-container {
          background-color: white;
          border-radius: 8px;
          max-width: 700px;
          width: 100%;
          max-height: 90vh;
          overflow: auto;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          padding: 24px;
          border-bottom: 1px solid #e0e0e0;
          background: white;
          position: sticky;
          top: 0;
          z-index: 1;
        }

        .modal-title {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 600;
          color: #333;
        }

        .modal-content {
          padding: 24px;
          flex: 1;
          overflow-y: auto;
        }

        .modal-description {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .cookie-categories {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cookie-category {
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          padding: 16px;
        }

        .category-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          gap: 12px;
        }

        .category-title {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: #333;
        }

        .always-active {
          font-size: 0.85rem;
          color: #666;
          font-weight: 500;
          flex-shrink: 0;
        }

        .category-description {
          margin: 0;
          font-size: 0.9rem;
          color: #666;
          line-height: 1.5;
        }

        /* Toggle Switch */
        .toggle {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 24px;
          flex-shrink: 0;
        }

        .toggle input {
          display: none;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: 0.3s;
          border-radius: 24px;
        }

        .toggle-slider[data-checked="true"] {
          background-color: #FF9933;
        }

        .toggle-thumb {
          position: absolute;
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.3s;
          border-radius: 50%;
        }

        .toggle-thumb[data-checked="true"] {
          left: 28px;
        }

        .modal-footer {
          padding: 20px 24px;
          border-top: 1px solid #e0e0e0;
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          background: white;
          position: sticky;
          bottom: 0;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .cookie-banner {
            padding: 16px;
          }

          .cookie-banner-content {
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
          }

          .cookie-text {
            min-width: 100%;
          }

          .cookie-title {
            font-size: 1.1rem;
          }

          .cookie-description {
            font-size: 0.9rem;
          }

          .cookie-buttons {
            flex-direction: column;
            width: 100%;
          }

          .cookie-buttons .btn {
            width: 100%;
            justify-content: center;
          }

          .modal-overlay {
            padding: 0;
            align-items: flex-end;
          }

          .modal-container {
            max-height: 95vh;
            border-radius: 12px 12px 0 0;
            margin: 0;
          }

          .modal-header {
            padding: 20px 16px;
          }

          .modal-title {
            font-size: 1.25rem;
          }

          .modal-content {
            padding: 20px 16px;
          }

          .modal-description {
            font-size: 0.9rem;
          }

          .cookie-category {
            padding: 14px;
          }

          .category-title {
            font-size: 1rem;
          }

          .category-description {
            font-size: 0.85rem;
          }

          .modal-footer {
            padding: 16px;
            flex-direction: column-reverse;
            gap: 10px;
          }

          .modal-footer .btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .cookie-banner {
            padding: 12px;
          }

          .cookie-title {
            font-size: 1rem;
            margin-bottom: 8px;
          }

          .cookie-description {
            font-size: 0.85rem;
          }

          .btn {
            font-size: 0.9rem;
            padding: 12px 20px;
          }

          .modal-title {
            font-size: 1.15rem;
          }

          .category-header {
            gap: 8px;
          }

          .always-active {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
};

export default CookieConsent;
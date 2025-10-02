import React, { useState } from 'react';

// Import all logos from components/assets folder
import adaniLogo from '../components/assets/adani.jpeg';
import aplapolloLogo from '../components/assets/aplapollo.png';
import ashirvadLogo from '../components/assets/ashirvad.png';
import britanniaLogo from '../components/assets/britannia.png';
import deyeLogo from '../components/assets/deye.png';
import enphaseLogo from '../components/assets/enphase.png';
import epragathiLogo from '../components/assets/epragathi.jpeg';
import exedyLogo from '../components/assets/exedy.png';
import hexLogo from '../components/assets/hex.png';
import jswLogo from '../components/assets/jsw.png';
import loomLogo from '../components/assets/loom.png';
import manthriLogo from '../components/assets/manthri.jpeg';
import nationalPublicLogo from '../components/assets/national public.jpeg';
import nhaiLogo from '../components/assets/nhai.jpeg';
import saatvikLogo from '../components/assets/saatvik.png';
import sobhaLogo from '../components/assets/sobha.png';
import solisLogo from '../components/assets/solis.png';
import sriVinayakaLogo from '../components/assets/sri vinayaka.png';
import studerLogo from '../components/assets/studer.png';
import tataLogo from '../components/assets/tata.png';
import vOneHotelLogo from '../components/assets/v one hotel.jpeg';
import vidyashilpLogo from '../components/assets/vidyashilp.png';
import wareeLogo from '../components/assets/waaree.png';

const PartnersPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // First row - 12 logos (scroll left to right)
  const row1Partners = [
    { id: 1, name: 'Adani Group', logo: adaniLogo },
    { id: 2, name: 'Apla Apollo', logo: aplapolloLogo },
    { id: 3, name: 'Ashirvad Pipes', logo: ashirvadLogo },
    { id: 4, name: 'Britannia Industries', logo: britanniaLogo },
    { id: 5, name: 'Deye', logo: deyeLogo },
    { id: 6, name: 'Enphase Energy', logo: enphaseLogo },
    { id: 7, name: 'E Pragathi', logo: epragathiLogo },
    { id: 8, name: 'Exedy', logo: exedyLogo },
    { id: 9, name: 'Hex Technologies', logo: hexLogo },
    { id: 10, name: 'JSW Group', logo: jswLogo },
    { id: 11, name: 'Loom Solar', logo: loomLogo },
    { id: 12, name: 'Manthri Developers', logo: manthriLogo }
  ];

  // Second row - 11 logos (scroll right to left)
  const row2Partners = [
    { id: 13, name: 'National Public School', logo: nationalPublicLogo },
    { id: 14, name: 'NHAI', logo: nhaiLogo },
    { id: 15, name: 'Saatvik Green Energy', logo: saatvikLogo },
    { id: 16, name: 'Sobha Limited', logo: sobhaLogo },
    { id: 17, name: 'Solis', logo: solisLogo },
    { id: 18, name: 'Sri Vinayaka', logo: sriVinayakaLogo },
    { id: 19, name: 'Studer Innotec', logo: studerLogo },
    { id: 20, name: 'Tata Group', logo: tataLogo },
    { id: 21, name: 'V One Hotels', logo: vOneHotelLogo },
    { id: 22, name: 'Vidyashilp Academy', logo: vidyashilpLogo },
    { id: 23, name: 'Waaree', logo: wareeLogo }
  ];

  const [activeCategory, setActiveCategory] = useState('All');

  const styles = {
    container: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
      background: '#ffffff',
      color: '#292a45ff',
      minHeight: '100vh',
      width: '100%',
      overflowX: 'hidden'
    },
    hero: {
      padding: '4rem 5%',
      textAlign: 'center',
      background: '#000000',
      color: '#ffffff',
      minHeight: '50vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    label: {
      fontSize: '0.7rem',
      letterSpacing: '3px',
      fontWeight: 500,
      marginBottom: '1.5rem',
      opacity: 0.5,
      textTransform: 'uppercase'
    },
    heroTitle: {
      fontSize: '2.5rem',
      fontWeight: 900,
      lineHeight: 1.1,
      letterSpacing: '-2px',
      textTransform: 'uppercase',
      marginBottom: '1.5rem'
    },
    heroSubtitle: {
      fontSize: '1.1rem',
      maxWidth: '900px',
      margin: '0 auto',
      lineHeight: 1.7,
      opacity: 0.7,
      fontWeight: 300,
      padding: '0 1rem'
    },
    partnersSection: {
      padding: '4rem 0',
      background: '#ffffff',
      overflow: 'hidden',
      width: '100%'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '3rem',
      padding: '0 5%'
    },
    sectionLabel: {
      fontSize: '0.7rem',
      letterSpacing: '3px',
      fontWeight: 500,
      marginBottom: '1.5rem',
      opacity: 0.5,
      textTransform: 'uppercase'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 900,
      letterSpacing: '-2px',
      textTransform: 'uppercase',
      marginBottom: '2rem'
    },
    scrollContainer: {
      width: '100%',
      overflow: 'hidden',
      position: 'relative',
      padding: '2rem 0',
      marginBottom: '1rem'
    },
    scrollTrack: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
      willChange: 'transform'
    },
    scrollTrackLeftToRight: {
      animation: 'scrollLeftToRight 40s linear infinite'
    },
    scrollTrackRightToLeft: {
      animation: 'scrollRightToLeft 40s linear infinite'
    },
    logoItem: {
      flexShrink: 0,
      width: '120px',
      height: '90px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#ffffff',
      borderRadius: '8px',
      padding: '1rem',
      transition: 'all 0.3s ease',
      border: '1px solid #f0f0f0'
    },
    logoImage: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
      opacity: 0.9,
      transition: 'all 0.3s ease'
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes scrollLeftToRight {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          @keyframes scrollRightToLeft {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .logo-item:hover {
            transform: scale(1.05);
          }

          .logo-item:hover img {
            opacity: 1;
          }

          /* Mobile Responsive Styles */
          @media (max-width: 768px) {
            .hero-section {
              padding: 3rem 5% !important;
              min-height: 40vh !important;
            }

            .hero-title {
              font-size: 2rem !important;
              letter-spacing: -1px !important;
            }

            .hero-subtitle {
              font-size: 1rem !important;
              padding: 0 0.5rem !important;
            }

            .section-title {
              font-size: 2rem !important;
              letter-spacing: -1px !important;
            }

            .section-label {
              font-size: 0.65rem !important;
              letter-spacing: 2px !important;
            }

            .logo-item-responsive {
              width: 100px !important;
              height: 75px !important;
              padding: 0.75rem !important;
            }

            .scroll-track {
              gap: 1.5rem !important;
            }

            .partners-section {
              padding: 3rem 0 !important;
            }

            .section-header {
              margin-bottom: 2rem !important;
            }
          }

          @media (max-width: 480px) {
            .hero-section {
              padding: 2.5rem 5% !important;
              min-height: 35vh !important;
            }

            .hero-title {
              font-size: 1.75rem !important;
              margin-bottom: 1rem !important;
            }

            .hero-subtitle {
              font-size: 0.95rem !important;
              line-height: 1.6 !important;
            }

            .label {
              font-size: 0.6rem !important;
              letter-spacing: 2px !important;
              margin-bottom: 1rem !important;
            }

            .section-title {
              font-size: 1.75rem !important;
            }

            .logo-item-responsive {
              width: 90px !important;
              height: 65px !important;
              padding: 0.5rem !important;
            }

            .scroll-track {
              gap: 1.25rem !important;
            }

            .scroll-container {
              padding: 1.5rem 0 !important;
            }

            .partners-section {
              padding: 2.5rem 0 !important;
            }
          }

          @media (min-width: 769px) and (max-width: 1024px) {
            .hero-title {
              font-size: 3.5rem !important;
            }

            .section-title {
              font-size: 3rem !important;
            }

            .logo-item-responsive {
              width: 130px !important;
              height: 95px !important;
            }
          }

          @media (min-width: 1025px) {
            .hero-section {
              min-height: 70vh !important;
              padding: 6rem 5% !important;
            }

            .hero-title {
              font-size: 5rem !important;
            }

            .hero-subtitle {
              font-size: 1.5rem !important;
            }

            .section-title {
              font-size: 3.5rem !important;
            }

            .logo-item-responsive {
              width: 140px !important;
              height: 100px !important;
            }

            .scroll-track {
              gap: 2.5rem !important;
            }

            .partners-section {
              padding: 6rem 0 !important;
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="hero-section" style={styles.hero}>
        <div className="label" style={styles.label}>WHO WE WORK WITH</div>
        <h1 className="hero-title" style={styles.heroTitle}>Our Partners</h1>
        <p className="hero-subtitle" style={styles.heroSubtitle}>
          Building success through strategic partnerships with industry leaders
        </p>
      </section>

      {/* Partners Section */}
      <section className="partners-section" style={styles.partnersSection}>
        <div className="section-header" style={styles.sectionHeader}>
          <div className="section-label" style={styles.sectionLabel}>TRUSTED BY THE BEST</div>
          <h2 className="section-title" style={styles.sectionTitle}>Premium Partnerships</h2>
        </div>

        {/* First Row - Left to Right */}
        <div className="scroll-container" style={styles.scrollContainer}>
          <div className="scroll-track" style={{...styles.scrollTrack, ...styles.scrollTrackLeftToRight}}>
            {[...row1Partners, ...row1Partners, ...row1Partners].map((partner, index) => (
              <div key={`row1-${index}`} className="logo-item logo-item-responsive" style={styles.logoItem}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={styles.logoImage}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="scroll-container" style={styles.scrollContainer}>
          <div className="scroll-track" style={{...styles.scrollTrack, ...styles.scrollTrackRightToLeft}}>
            {[...row2Partners, ...row2Partners, ...row2Partners].map((partner, index) => (
              <div key={`row2-${index}`} className="logo-item logo-item-responsive" style={styles.logoItem}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={styles.logoImage}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
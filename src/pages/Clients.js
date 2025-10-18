import React from 'react';

// Import all logos
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
  // Partners / Brands
  const partners = [
    { name: 'Apla Apollo', logo: aplapolloLogo },
    { name: 'Ashirvad Pipes', logo: ashirvadLogo },
    { name: 'Hex Technologies', logo: hexLogo },
    { name: 'E Pragathi', logo: epragathiLogo },
    { name: 'Exedy', logo: exedyLogo },
    { name: 'Enphase Energy', logo: enphaseLogo },
    { name: 'Deye', logo: deyeLogo },
    { name: 'Solis', logo: solisLogo },
    { name: 'Loom Solar', logo: loomLogo },
    { name: 'Waaree', logo: wareeLogo },
    { name: 'Saatvik Green Energy', logo: saatvikLogo },
    { name: 'Studer Innotec', logo: studerLogo }
  ];

  // Clients
  const clients = [
    { name: 'Adani Group', logo: adaniLogo },
    { name: 'JSW Group', logo: jswLogo },
    { name: 'Tata Group', logo: tataLogo },
    { name: 'Britannia Industries', logo: britanniaLogo },
    { name: 'Manthri Developers', logo: manthriLogo },
    { name: 'Sobha Limited', logo: sobhaLogo },
    { name: 'National Public School', logo: nationalPublicLogo },
    { name: 'Vidyashilp Academy', logo: vidyashilpLogo },
    { name: 'V One Hotels', logo: vOneHotelLogo },
    { name: 'NHAI', logo: nhaiLogo },
    { name: 'Sri Vinayaka', logo: sriVinayakaLogo }
  ];

  const styles = {
    container: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
      background: '#ffffff',
      color: '#292a45',
      minHeight: '100vh',
      width: '100%',
      overflowX: 'hidden'
    },
    hero: {
      padding: '4rem 5%',
      textAlign: 'center',
      background: '#000',
      color: '#fff',
      minHeight: '50vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    label: {
      fontSize: '0.8rem',
      letterSpacing: '3px',
      fontWeight: 500,
      marginBottom: '1rem',
      opacity: 0.6,
      textTransform: 'uppercase'
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 900,
      letterSpacing: '-1px',
      textTransform: 'uppercase',
      marginBottom: '1rem'
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      maxWidth: '900px',
      margin: '0 auto',
      lineHeight: 1.7,
      opacity: 0.8
    },
    section: {
      padding: '4rem 5%',
      overflow: 'hidden',
      width: '100%'
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    sectionLabel: {
      fontSize: '0.8rem',
      letterSpacing: '3px',
      opacity: 0.6,
      textTransform: 'uppercase',
      marginBottom: '0.5rem'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 800,
      letterSpacing: '-1px',
      textTransform: 'uppercase'
    },
    scrollContainer: {
      width: '100%',
      overflow: 'hidden',
      padding: '2rem 0'
    },
    scrollTrack: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
      willChange: 'transform'
    },
    scrollLeftToRight: {
      animation: 'scrollLeftToRight 40s linear infinite'
    },
    scrollRightToLeft: {
      animation: 'scrollRightToLeft 40s linear infinite'
    },
    logoItem: {
      flexShrink: 0,
      width: '140px',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fff',
      borderRadius: '10px',
      padding: '1rem',
      transition: 'all 0.3s ease',
      border: '1px solid #f0f0f0',
      cursor: 'pointer'
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
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
        @keyframes scrollRightToLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .logo-item:hover {
          transform: scale(1.05);
        }
        .logo-item:hover img {
          opacity: 1;
        }
        `}
      </style>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.label}>WHO WE WORK WITH</div>
        <h1 style={styles.heroTitle}>Our Network</h1>
        <p style={styles.heroSubtitle}>
          Collaborating with trusted industry leaders across solar panels, barcode automation, and MEP solutions.
        </p>
      </section>

      {/* Partners / Brands */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionLabel}>TECHNOLOGY & SUPPLY PARTNERS</div>
          <h2 style={styles.sectionTitle}>Our Brands</h2>
        </div>
        <div style={styles.scrollContainer}>
          <div style={{ ...styles.scrollTrack, ...styles.scrollLeftToRight }}>
            {[...partners, ...partners].map((partner, index) => (
              <div key={`partner-${index}`} className="logo-item" style={styles.logoItem}>
                <img src={partner.logo} alt={partner.name} style={styles.logoImage} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients / Projects */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionLabel}>PROJECTS & COLLABORATIONS</div>
          <h2 style={styles.sectionTitle}>Our Clients</h2>
        </div>
        <div style={styles.scrollContainer}>
          <div style={{ ...styles.scrollTrack, ...styles.scrollRightToLeft }}>
            {[...clients, ...clients].map((client, index) => (
              <div key={`client-${index}`} className="logo-item" style={styles.logoItem}>
                <img src={client.logo} alt={client.name} style={styles.logoImage} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;

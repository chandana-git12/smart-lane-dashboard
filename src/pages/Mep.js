import React, { useState, useEffect, useRef } from 'react';

const MEPSolutions = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.dataset.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-id]');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const styles = {
    container: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
      color: '#000000',
      background: '#ffffff',
      minHeight: '100vh',
      overflow: 'hidden'
    },
    hero: {
      padding: window.innerWidth <= 768 ? '6rem 5%' : '12rem 5%',
      background: '#ffffff',
      color: '#000000',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    sectionLabel: {
      fontSize: '0.75rem',
      letterSpacing: '4px',
      fontWeight: 500,
      marginBottom: '2rem',
      opacity: 0.5,
      textTransform: 'uppercase'
    },
    heroTitle: {
      fontSize: window.innerWidth <= 768 ? '1.8rem' : '3.5rem',
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: '-4px',
      maxWidth: '1400px',
      margin: '0 auto',
      textTransform: 'uppercase'
    },
    heroSubtitle: {
      fontSize: window.innerWidth <= 768 ? '0.95rem' : '1.2rem',
      maxWidth: '1000px',
      margin: '3rem auto 0',
      lineHeight: 1.8,
      opacity: 0.7,
      fontWeight: 300
    },
    section: {
      padding: window.innerWidth <= 768 ? '6rem 5%' : '10rem 5%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    sectionBlack: {
      background: '#ffffff',
      color: '#000000'
    },
    sectionWhite: {
      background: '#000000',
      color: '#ffffff'
    },
    fullscreenImage: {
      minHeight: '100vh',
      background: '#000000',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      color: '#ffffff',
      padding: '5%'
    },
    imageOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.6)'
    },
    imageContent: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      maxWidth: '1200px'
    },
    imageText: {
      fontSize: window.innerWidth <= 768 ? '2rem' : '3.5rem',
      fontWeight: 900,
      lineHeight: 1.1,
      letterSpacing: '-3px',
      textTransform: 'uppercase'
    },
    sectionTitle: {
      fontSize: window.innerWidth <= 768 ? '2rem' : '3.5rem',
      fontWeight: 900,
      marginBottom: '3rem',
      letterSpacing: '-3px',
      lineHeight: 1,
      textTransform: 'uppercase'
    },
    contentBox: {
      maxWidth: '1400px',
      margin: '0 auto',
      width: '100%'
    },
    aboutText: {
      fontSize: window.innerWidth <= 768 ? '0.95rem' : '1.2rem',
      lineHeight: 1.9,
      maxWidth: '1000px',
      margin: '3rem auto 0',
      fontWeight: 300,
      opacity: 0.8
    },
    solutionsGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
      gap: window.innerWidth <= 768 ? '4rem' : '6rem',
      marginTop: '6rem'
    },
    solutionBlock: {
      padding: 0,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    solutionTitle: {
      fontSize: window.innerWidth <= 768 ? '1.3rem' : '1.8rem',
      fontWeight: 800,
      marginBottom: '2rem',
      letterSpacing: '-2px',
      textTransform: 'uppercase'
    },
    solutionItem: {
      marginBottom: '2rem',
      paddingBottom: '2rem',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
    },
    solutionItemTitle: {
      fontSize: window.innerWidth <= 768 ? '1rem' : '1.15rem',
      fontWeight: 700,
      marginBottom: '0.8rem',
      letterSpacing: '-0.5px'
    },
    solutionItemText: {
      fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem',
      lineHeight: 1.7,
      opacity: 0.7
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(5, 1fr)',
      gap: window.innerWidth <= 768 ? '3rem' : '4rem',
      marginTop: '6rem'
    },
    benefitCard: {
      padding: 0,
      minHeight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    benefitTitle: {
      fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.3rem',
      fontWeight: 800,
      marginBottom: '1rem',
      letterSpacing: '-1px'
    },
    benefitText: {
      fontSize: '0.9rem',
      lineHeight: 1.7,
      opacity: 0.7
    },
    industriesGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)',
      gap: window.innerWidth <= 768 ? '2rem' : '3rem',
      marginTop: '6rem'
    },
    industryCard: {
      padding: window.innerWidth <= 768 ? '2rem 0' : '2.5rem 0',
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      textAlign: 'left',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    industryText: {
      fontSize: window.innerWidth <= 768 ? '1rem' : '1.1rem',
      fontWeight: 700,
      letterSpacing: '-0.5px'
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div 
          data-id="hero-label"
          style={{
            ...styles.sectionLabel,
            opacity: visibleElements.has('hero-label') ? 0.5 : 0,
            transform: visibleElements.has('hero-label') ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          MEP & TURNKEY PROJECTS
        </div>
        <h1 
          data-id="hero-title"
          style={{
            ...styles.heroTitle,
            opacity: visibleElements.has('hero-title') ? 1 : 0,
            transform: visibleElements.has('hero-title') ? 'scale(1)' : 'scale(0.9)',
            transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
          }}
        >
          Engineering That Performs
        </h1>
        <p 
          data-id="hero-subtitle"
          style={{
            ...styles.heroSubtitle,
            opacity: visibleElements.has('hero-subtitle') ? 0.7 : 0,
            transform: visibleElements.has('hero-subtitle') ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
          }}
        >
          Comprehensive design, supply, installation, testing, and commissioning of mechanical, electrical, and plumbing systems. We ensure that every system operates efficiently, safely, and in full compliance with international standards and local regulations.
        </p>
      </section>

      {/* Full Screen Image 1 */}
      <section 
        data-id="image-1"
        style={{
          ...styles.fullscreenImage,
          backgroundImage: 'url("https://t4.ftcdn.net/jpg/02/68/38/27/360_F_268382702_aTv13LESP1nauO5464fPptPBXycPN1Ln.jpg")',
          opacity: visibleElements.has('image-1') ? 1 : 0,
          transition: 'opacity 2s ease-out'
        }}
      >
        <div style={styles.imageOverlay}></div>
        <div style={styles.imageContent}>
          <p 
            style={{
              ...styles.imageText,
              transform: visibleElements.has('image-1') ? 'translateY(0)' : 'translateY(50px)',
              opacity: visibleElements.has('image-1') ? 1 : 0,
              transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
            }}
          >
            End-to-End MEP Solutions with Quality and Performance
          </p>
        </div>
      </section>

      {/* About Section */}
      <section style={{...styles.section, ...styles.sectionBlack}}>
        <div style={styles.contentBox}>
          <div 
            data-id="about-label"
            style={{
              ...styles.sectionLabel,
              opacity: visibleElements.has('about-label') ? 0.5 : 0,
              transform: visibleElements.has('about-label') ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            INTRODUCTION
          </div>
          <h2 
            data-id="about-title"
            style={{
              ...styles.sectionTitle,
              opacity: visibleElements.has('about-title') ? 1 : 0,
              transform: visibleElements.has('about-title') ? 'translateX(0)' : 'translateX(-80px)',
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            COMPREHENSIVE MEP SYSTEMS
          </h2>
          <p 
            data-id="about-text"
            style={{
              ...styles.aboutText,
              opacity: visibleElements.has('about-text') ? 0.8 : 0,
              transform: visibleElements.has('about-text') ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
            }}
          >
            We deliver end-to-end MEP solutions with a focus on quality, performance, sustainability, and reliability. For residential, commercial, and industrial projects, we specialize in providing design, supply, installation, testing, and commissioning services that ensure every system operates efficiently and safely in full compliance with international standards.
          </p>
        </div>
      </section>

      {/* Engineering Solutions Section */}
      <section style={{...styles.section, ...styles.sectionBlack}}>
        <div style={styles.contentBox}>
          <div 
            data-id="solutions-label"
            style={{
              ...styles.sectionLabel,
              opacity: visibleElements.has('solutions-label') ? 0.5 : 0,
              transition: 'all 1s ease-out'
            }}
          >
            CORE SERVICES
          </div>
          <h2 
            data-id="solutions-title"
            style={{
              ...styles.sectionTitle,
              opacity: visibleElements.has('solutions-title') ? 1 : 0,
              transform: visibleElements.has('solutions-title') ? 'scale(1)' : 'scale(0.9)',
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            MEP CONTRACTORS
          
          </h2>
          <div style={styles.solutionsGrid}>
            {[
              {
                id: 'hvac',
                title: 'HVAC SYSTEMS',
                items: [
                  { title: 'G.I & P.I Ducting', text: 'Fabrication and installation of Galvanized Iron and Pre-Insulated duct systems designed for efficient air distribution with vibration isolation and noise reduction' },
                  { title: 'Chilled Water Piping', text: 'Complete chilled water network installation with chillers, air handling units, and fan coil units, fully insulated and pressure tested' },
                  { title: 'Ventilation Systems', text: 'Fresh air supply and exhaust systems for basements, car parks, kitchens, and process areas with motorized dampers and air filters' },
                  { title: 'Package & DX Units', text: 'Supply and installation of energy-efficient cooling solutions including VRF/VRV systems with complete control integration' }
                ]
              },
              {
                id: 'fire-safety',
                title: 'FIRE PROTECTION',
                items: [
                  { title: 'Hydrant & Sprinkler Systems', text: 'Design and installation of fire hydrant systems, automatic sprinklers, and hose reels with pressure-tested piping networks' },
                  { title: 'Fire Alarm Systems', text: 'Conventional and addressable fire detection systems with smoke detectors, heat sensors, and manual call points fully integrated' },
                  { title: 'Fire Suppression', text: 'Clean agent systems, CO₂, and FM200 solutions for sensitive areas like data centers and electrical panels' },
                  { title: 'Emergency Lighting', text: 'Installation of emergency lighting and exit signage compliant with international safety codes' }
                ]
              },
              {
                id: 'plumbing',
                title: 'PLUMBING WORKS',
                items: [
                  { title: 'Water Supply Systems', text: 'Installation of domestic water supply networks with PPR/CPVC piping, pumps, valves, and pressure testing' },
                  { title: 'Water Filtration', text: 'Advanced filtration, softening, and purification systems including reverse osmosis and UV treatment' },
                  { title: 'Sewage & Drainage', text: 'Underground and surface drainage works with Sewage Treatment Plants for wastewater recycling and reuse' },
                  { title: 'Rainwater Harvesting', text: 'Design and implementation of rainwater harvesting systems promoting sustainable water management' }
                ]
              },
              {
                id: 'electrical',
                title: 'ELECTRICAL SYSTEMS',
                items: [
                  { title: 'Power Distribution', text: 'HT and LT switchgears, main and sub-distribution boards with load balancing and energy monitoring' },
                  { title: 'Backup Power', text: 'Diesel generator sets with acoustic enclosures and UPS systems for uninterrupted power supply' },
                  { title: 'Automation & Control', text: 'Building Management Systems, smart automation for HVAC, lighting, and energy management' },
                  { title: 'Lighting & Safety', text: 'Energy-efficient LED lighting, street lighting, CCTV surveillance, and fire alarm system integration' }
                ]
              },
              {
                id: 'security',
                title: 'SECURITY SYSTEMS',
                items: [
                  { title: 'Access Control', text: 'Biometric and RFID-based access control systems with intercom and visitor management integration' },
                  { title: 'CCTV Surveillance', text: 'Intelligent CCTV networks enabling 24/7 monitoring and incident management' },
                  { title: 'Cable Management', text: 'Cable trays, raceways, and conduiting with proper earthing and lightning protection' },
                  { title: 'Safety Systems', text: 'Comprehensive grounding solutions and lightning protection ensuring system and personnel safety' }
                ]
              },
              {
                id: 'specialized',
                title: 'SPECIALIZED SERVICES',
                items: [
                  { title: 'Kitchen Exhaust Systems', text: 'Kitchen hood exhaust and make-up air systems with electrostatic precipitators and carbon filters' },
                  { title: 'LPG/NG Distribution', text: 'Liquefied Petroleum Gas and Natural Gas distribution networks with regulators and safety valves' },
                  { title: 'Swimming Pool Works', text: 'Complete pool piping, filtration, circulation, lighting and temperature control systems' },
                  { title: 'Testing & Commissioning', text: 'Comprehensive TAB services, system testing, and validation for performance and compliance' }
                ]
              }
            ].map((solution, index) => (
              <div 
                key={solution.id}
                data-id={solution.id}
                style={{
                  ...styles.solutionBlock,
                  opacity: visibleElements.has(solution.id) ? 1 : 0,
                  transform: visibleElements.has(solution.id) ? 'translateY(0)' : 'translateY(60px)',
                  transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${0.15 * index}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <h3 style={styles.solutionTitle}>{solution.title}</h3>
                {solution.items.map((item, i) => (
                  <div 
                    key={i}
                    style={{
                      ...styles.solutionItem,
                      animation: visibleElements.has(solution.id) ? `slideInLeft 0.6s ease-out ${0.1 * i}s forwards` : 'none',
                      borderBottom: i === solution.items.length - 1 ? 'none' : '1px solid rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div style={styles.solutionItemTitle}>{item.title}</div>
                    <p style={styles.solutionItemText}>{item.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Image 2 */}
      <section 
        data-id="image-2"
        style={{
          ...styles.fullscreenImage,
          backgroundImage: 'url("https://t4.ftcdn.net/jpg/02/85/42/47/360_F_285424792_20FEeDQolxxMSnVM0s5y062Mp3oa1bCt.jpg")',
          opacity: visibleElements.has('image-2') ? 1 : 0,
          transition: 'opacity 2s ease-out'
        }}
      >
        <div style={styles.imageOverlay}></div>
        <div style={styles.imageContent}>
          <p 
            style={{
              ...styles.imageText,
              transform: visibleElements.has('image-2') ? 'scale(1)' : 'scale(0.9)',
              opacity: visibleElements.has('image-2') ? 1 : 0,
              transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
            }}
          >
            Quality, Sustainability, and Reliability in Every Project
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{...styles.section, ...styles.sectionBlack}}>
        <div style={styles.contentBox}>
          <div 
            data-id="benefits-label"
            style={{
              ...styles.sectionLabel,
              opacity: visibleElements.has('benefits-label') ? 0.5 : 0,
              transition: 'all 1s ease-out'
            }}
          >
            ADVANTAGES
          </div>
          <h2 
            data-id="benefits-title"
            style={{
              ...styles.sectionTitle,
              opacity: visibleElements.has('benefits-title') ? 1 : 0,
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            WHY CHOOSE US
          </h2>
          <div style={styles.benefitsGrid}>
            {[
              { title: 'Qualified Engineers', text: 'Certified engineers and technicians with extensive MEP expertise' },
              { title: 'Standards Compliance', text: 'Full compliance with ASHRAE, NFPA, SMACNA, IS, and BS standards' },
              { title: 'Advanced Planning', text: 'Rigorous project planning, supervision, and quality control' },
              { title: 'After-Sales Support', text: 'Reliable maintenance and comprehensive after-sales support' },
              { title: 'Safety & Sustainability', text: 'Commitment to safety, sustainability, and optimal performance' }
            ].map((benefit, index) => (
              <div 
                key={index}
                data-id={`benefit-${index}`}
                style={{
                  ...styles.benefitCard,
                  opacity: visibleElements.has(`benefit-${index}`) ? 1 : 0,
                  transform: visibleElements.has(`benefit-${index}`) ? 'translateY(0)' : 'translateY(50px)',
                  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.15 * index}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={styles.benefitTitle}>{benefit.title}</div>
                <p style={styles.benefitText}>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section style={{...styles.section, ...styles.sectionWhite}}>
        <div style={styles.contentBox}>
          <div 
            data-id="industries-label"
            style={{
              ...styles.sectionLabel,
              opacity: visibleElements.has('industries-label') ? 0.5 : 0,
              transition: 'all 1s ease-out'
            }}
          >
            SECTORS WE SERVE
          </div>
          <h2 
            data-id="industries-title"
            style={{
              ...styles.sectionTitle,
              opacity: visibleElements.has('industries-title') ? 1 : 0,
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
              color: '#ffffff'
            }}
          >
            INDUSTRIES WE SERVE
          </h2>
          <div style={styles.industriesGrid}>
            {[
              'Commercial Complexes & IT Parks',
              'Office Spaces & Corporate Buildings',
              'Manufacturing & Industrial Facilities',
              'Warehouses & Logistics Hubs',
              'Hospitals & Healthcare Institutions',
              'Educational Institutions & Campuses',
              'Hotels & Hospitality Sector',
              'Retail & Large Residential Projects'
            ].map((industry, index) => (
              <div 
                key={index}
                data-id={`industry-${index}`}
                style={{
                  ...styles.industryCard,
                  opacity: visibleElements.has(`industry-${index}`) ? 1 : 0,
                  transform: visibleElements.has(`industry-${index}`) ? 'translateX(0)' : 'translateX(-30px)',
                  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.12 * index}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(10px)';
                  e.currentTarget.style.borderColor = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div style={{...styles.industryText, color: '#ffffff'}}>{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MEPSolutions;
import React, { useState, useEffect, useRef } from 'react';

const ThermalTransferRibbons = () => {
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
      fontSize: window.innerWidth <= 768 ? '1.8rem' : '3.2rem',
      fontWeight: 900,
      lineHeight: 1.1,
      letterSpacing: '-3px',
      textTransform: 'uppercase'
    },
    sectionTitle: {
      fontSize: window.innerWidth <= 768 ? '1.8rem' : '3.2rem',
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
    ribbonsGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)',
      gap: window.innerWidth <= 768 ? '4rem' : '6rem',
      marginTop: '6rem'
    },
    ribbonBlock: {
      padding: 0,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    ribbonTitle: {
      fontSize: window.innerWidth <= 768 ? '1.4rem' : '1.8rem',
      fontWeight: 800,
      marginBottom: '2rem',
      letterSpacing: '-2px',
      textTransform: 'uppercase'
    },
    ribbonText: {
      fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem',
      lineHeight: 1.7,
      opacity: 0.7,
      marginBottom: '1.5rem'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
      gap: window.innerWidth <= 768 ? '3rem' : '4rem',
      marginTop: '6rem'
    },
    featureCard: {
      padding: 0,
      minHeight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    featureTitle: {
      fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.3rem',
      fontWeight: 800,
      marginBottom: '1rem',
      letterSpacing: '-1px'
    },
    featureText: {
      fontSize: '0.9rem',
      lineHeight: 1.7,
      opacity: 0.7
    },
    applicationsGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(5, 1fr)',
      gap: window.innerWidth <= 768 ? '2rem' : '3rem',
      marginTop: '6rem'
    },
    applicationCard: {
      padding: window.innerWidth <= 768 ? '2rem 0' : '2.5rem 0',
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      textAlign: 'left',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    applicationText: {
      fontSize: window.innerWidth <= 768 ? '0.95rem' : '1rem',
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
          THERMAL TRANSFER RIBBONS
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
          Premium Quality Thermal Transfer Ribbons
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
          Our Thermal Transfer Ribbons (TTR) are engineered to deliver consistent, high-quality print 
          performance across a wide range of labeling applications. Whether you need crisp text, sharp 
          barcodes, or durable images, our ribbons are designed to meet the most demanding industrial 
          and commercial needs.
        </p>
      </section>

      {/* Full Screen Image 1 */}
      <section 
        data-id="image-1"
        style={{
          ...styles.fullscreenImage,
          backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600")',
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
            Precision printing for every substrate and environment
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section style={{...styles.section, ...styles.sectionBlack}}>
        <div style={styles.contentBox}>
          <div 
            data-id="intro-label"
            style={{
              ...styles.sectionLabel,
              opacity: visibleElements.has('intro-label') ? 0.5 : 0,
              transform: visibleElements.has('intro-label') ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            COMPLETE RANGE
          </div>
          <h2 
            data-id="intro-title"
            style={{
              ...styles.sectionTitle,
              opacity: visibleElements.has('intro-title') ? 1 : 0,
              transform: visibleElements.has('intro-title') ? 'translateX(0)' : 'translateX(-80px)',
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            Ribbon Types for Every Application
          </h2>
          <p 
            data-id="intro-text"
            style={{
              ...styles.aboutText,
              opacity: visibleElements.has('intro-text') ? 0.8 : 0,
              transform: visibleElements.has('intro-text') ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
            }}
          >
            We offer a complete range of ribbon types to match your specific substrate and printing requirements. 
            From cost-effective wax ribbons to extreme-duty resin formulations, our portfolio covers every need 
            from retail labels to industrial asset tracking.
          </p>
        </div>
      </section>

      {/* Ribbon Types Section */}
      <section style={{...styles.section, ...styles.sectionBlack}}>
        <div style={styles.contentBox}>
          <div style={styles.ribbonsGrid}>
            {[
              {
                id: 'wax-ribbons',
                title: '1. Wax Ribbons',
                text: 'Ideal for paper-based labels, wax ribbons provide excellent print clarity and contrast. They are cost-effective, suitable for general-purpose printing, and perform well in low to moderate environmental conditions such as retail labeling, shipping, and warehouse applications.'
              },
              {
                id: 'wax-resin-ribbons',
                title: '2. Wax-Resin Ribbons',
                text: 'These combine the benefits of wax and resin formulations, offering enhanced durability and smudge resistance. Wax-Resin ribbons are perfect for semi-gloss papers, synthetics, and coated materials used in logistics, pharmaceuticals, and inventory labeling. They strike the right balance between print quality and resistance to abrasion, heat, and chemicals.'
              },
              {
                id: 'resin-ribbons',
                title: '3. Resin Ribbons',
                text: 'Designed for extreme durability, Resin ribbons are ideal for synthetic labels such as polyester, polypropylene, and vinyl. They ensure superior resistance to harsh environments, solvents, abrasion, and high temperatures, making them suitable for industrial, automotive, chemical, and laboratory applications where long-lasting print quality is essential.'
              },
              {
                id: 'tto-ribbons',
                title: '4. TTO Ribbons',
                text: 'TTO (Thermal Transfer Overprinting) ribbons are formulated for flexible packaging films and high-speed coding applications. They deliver precise, sharp prints on plastic films, foils, and flexible packaging, commonly used in food, pharmaceutical, and cosmetic industries. These ribbons offer excellent adhesion, fast printing speeds, and superior resistance to smudging and fading.'
              }
            ].map((ribbon, index) => (
              <div 
                key={ribbon.id}
                data-id={ribbon.id}
                style={{
                  ...styles.ribbonBlock,
                  opacity: visibleElements.has(ribbon.id) ? 1 : 0,
                  transform: visibleElements.has(ribbon.id) ? 'translateY(0)' : 'translateY(60px)',
                  transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${0.2 * index}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <h3 style={styles.ribbonTitle}>{ribbon.title}</h3>
                <p style={styles.ribbonText}>{ribbon.text}</p>
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600")',
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
            Superior adhesion and resistance for demanding environments
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section style={{...styles.section, ...styles.sectionBlack}}>
        <div style={styles.contentBox}>
          <div 
            data-id="features-label"
            style={{
              ...styles.sectionLabel,
              opacity: visibleElements.has('features-label') ? 0.5 : 0,
              transition: 'all 1s ease-out'
            }}
          >
            PRODUCT EXCELLENCE
          </div>
          <h2 
            data-id="features-title"
            style={{
              ...styles.sectionTitle,
              opacity: visibleElements.has('features-title') ? 1 : 0,
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            Key Features
          </h2>
          <div style={styles.featuresGrid}>
            {[
              { title: 'High Print Definition', text: 'Crystal-clear barcodes, logos, and text with exceptional sharpness and contrast' },
              { title: 'Universal Compatibility', text: 'Works seamlessly with all major thermal transfer printer brands and models' },
              { title: 'Superior Resistance', text: 'Excellent chemical, abrasion, and temperature resistance that varies by ribbon type' },
              { title: 'Extended Shelf Life', text: 'Long-lasting performance and consistent quality throughout the product lifecycle' },
              { title: 'Custom Configurations', text: 'Available in multiple widths, lengths, and core sizes to fit your specific needs' },
              { title: 'Reliable Performance', text: 'Consistent print quality across thousands of labels with minimal printer maintenance' }
            ].map((feature, index) => (
              <div 
                key={index}
                data-id={`feature-${index}`}
                style={{
                  ...styles.featureCard,
                  opacity: visibleElements.has(`feature-${index}`) ? 1 : 0,
                  transform: visibleElements.has(`feature-${index}`) ? 'translateY(0)' : 'translateY(50px)',
                  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.15 * index}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={styles.featureTitle}>{feature.title}</div>
                <p style={styles.featureText}>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section style={{...styles.section, ...styles.sectionWhite}}>
        <div style={styles.contentBox}>
          <div 
            data-id="applications-label"
            style={{
              ...styles.sectionLabel,
              opacity: visibleElements.has('applications-label') ? 0.5 : 0,
              transition: 'all 1s ease-out'
            }}
          >
            USE CASES
          </div>
          <h2 
            data-id="applications-title"
            style={{
              ...styles.sectionTitle,
              opacity: visibleElements.has('applications-title') ? 1 : 0,
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
              color: '#ffffff'
            }}
          >
            Applications
          </h2>
          <div style={styles.applicationsGrid}>
            {[
              'Barcode Labels & Product Identification',
              'Shipping, Retail, and Warehouse Tags',
              'Food & Beverage Packaging',
              'Pharmaceutical and Healthcare Labeling',
              'Industrial & Asset Tracking'
            ].map((application, index) => (
              <div 
                key={index}
                data-id={`application-${index}`}
                style={{
                  ...styles.applicationCard,
                  opacity: visibleElements.has(`application-${index}`) ? 1 : 0,
                  transform: visibleElements.has(`application-${index}`) ? 'translateX(0)' : 'translateX(-30px)',
                  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.12 * index}s`,
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
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
                <div style={{...styles.applicationText, color: '#ffffff'}}>{application}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThermalTransferRibbons;
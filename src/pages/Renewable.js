import React, { useState, useEffect, useRef } from 'react';

const RenewableEnergy = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [scrollY, setScrollY] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      color: '#1a1a1a',
      background: '#f5f5f5',
      minHeight: '100vh',
      overflow: 'hidden'
    },
    hero: {
      padding: 'clamp(4rem, 12vh, 10rem) 5%',
      background: 'linear-gradient(135deg, #2c3e50 0%, #1a1a1a 100%)',
      color: '#ffffff',
      minHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative'
    },
    sectionLabel: {
      fontSize: 'clamp(0.65rem, 1.2vw, 0.7rem)',
      letterSpacing: '2.5px',
      fontWeight: 600,
      marginBottom: '1rem',
      opacity: 0.6,
      textTransform: 'uppercase',
      color: '#666'
    },
    heroTitle: {
      fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)',
      fontWeight: 800,
      lineHeight: 1.3,
      letterSpacing: '-1px',
      maxWidth: '1200px',
      margin: '0 auto',
      textTransform: 'uppercase'
    },
    heroSubtitle: {
      fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
      maxWidth: '900px',
      margin: '1.5rem auto 0',
      lineHeight: 1.7,
      opacity: 0.85,
      fontWeight: 400
    },
    section: {
      padding: 'clamp(3rem, 8vh, 6rem) 5%',
      minHeight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative'
    },
    sectionGrey: {
      background: '#f5f5f5',
      color: '#1a1a1a'
    },
    sectionWhite: {
      background: '#ffffff',
      color: '#1a1a1a'
    },
    fullscreenImage: {
      minHeight: '60vh',
      background: '#2c3e50',
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
      background: 'rgba(0, 0, 0, 0.5)'
    },
    imageContent: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      maxWidth: '1000px'
    },
    imageText: {
      fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
      fontWeight: 800,
      lineHeight: 1.3,
      letterSpacing: '-1px',
      textTransform: 'uppercase'
    },
    sectionTitle: {
      fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
      fontWeight: 800,
      marginBottom: '1rem',
      letterSpacing: '-1px',
      lineHeight: 1.2,
      textTransform: 'uppercase',
      textAlign: 'center'
    },
    sectionSubtitle: {
      fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
      fontWeight: 600,
      marginBottom: '1.5rem',
      letterSpacing: '-0.3px',
      lineHeight: 1.4,
      opacity: 0.85,
      textAlign: 'center'
    },
    contentBox: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%'
    },
    aboutText: {
      fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
      lineHeight: 1.8,
      maxWidth: '900px',
      margin: '1.5rem auto 0',
      fontWeight: 400,
      opacity: 0.8,
      textAlign: 'center'
    },
    tagline: {
      fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
      lineHeight: 1.6,
      maxWidth: '800px',
      margin: '1rem auto 2rem',
      fontWeight: 400,
      opacity: 0.7,
      fontStyle: 'italic',
      textAlign: 'center'
    },
    solutionsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'clamp(1.5rem, 3vw, 2.5rem)',
      marginTop: 'clamp(2.5rem, 5vw, 4rem)'
    },
    solutionBlock: {
      padding: 'clamp(1.5rem, 3vw, 2rem)',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid rgba(0, 0, 0, 0.06)'
    },
    solutionTitle: {
      fontSize: 'clamp(1rem, 2vw, 1.2rem)',
      fontWeight: 700,
      marginBottom: '0.8rem',
      letterSpacing: '-0.3px',
      textTransform: 'uppercase',
      color: '#2c3e50'
    },
    solutionText: {
      fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
      lineHeight: 1.7,
      opacity: 0.75,
      color: '#444'
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 'clamp(1.5rem, 3vw, 2.5rem)',
      marginTop: 'clamp(2.5rem, 5vw, 4rem)'
    },
    benefitCard: {
      padding: 'clamp(1.5rem, 3vw, 2rem)',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      minHeight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid rgba(0, 0, 0, 0.06)'
    },
    benefitTitle: {
      fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
      fontWeight: 700,
      marginBottom: '0.6rem',
      letterSpacing: '-0.2px',
      textTransform: 'uppercase',
      color: '#2c3e50'
    },
    benefitText: {
      fontSize: 'clamp(0.85rem, 1.6vw, 0.95rem)',
      lineHeight: 1.6,
      opacity: 0.75,
      color: '#444'
    },
    industriesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 'clamp(1.5rem, 3vw, 2rem)',
      marginTop: 'clamp(2.5rem, 5vw, 4rem)'
    },
    industryCard: {
      padding: 'clamp(1.2rem, 2.5vw, 1.8rem)',
      background: '#ffffff',
      borderRadius: '12px',
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid rgba(0, 0, 0, 0.06)'
    },
    industryText: {
      fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
      fontWeight: 600,
      letterSpacing: '-0.2px',
      textTransform: 'uppercase',
      color: '#2c3e50'
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
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
            color: 'rgba(255, 255, 255, 0.6)',
            opacity: visibleElements.has('hero-label') ? 0.6 : 0,
            transform: visibleElements.has('hero-label') ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          RENEWABLE ENERGY SOLUTIONS
        </div>
        <h1 
          data-id="hero-title"
          style={{
            ...styles.heroTitle,
            opacity: visibleElements.has('hero-title') ? 1 : 0,
            transform: visibleElements.has('hero-title') ? 'scale(1)' : 'scale(0.95)',
            transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
          }}
        >
          POWERING A SUSTAINABLE FUTURE WITH SOLAR & WIND ENERGY
        </h1>
        <p 
          data-id="hero-subtitle"
          style={{
            ...styles.heroSubtitle,
            opacity: visibleElements.has('hero-subtitle') ? 0.85 : 0,
            transform: visibleElements.has('hero-subtitle') ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
          }}
        >
          At Halo Technologies, we deliver reliable, efficient, and future-ready renewable energy 
          solutions for businesses, communities, and households.
        </p>
      </section>

      {/* Full Screen Image 1 */}
      <section 
        data-id="image-1"
        style={{
          ...styles.fullscreenImage,
          backgroundImage: 'url("https://dn5z2jafg7hv0.cloudfront.net/blog/wp-content/uploads/2022/06/14160107/Solar-Panel-In-India.jpg")',
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
            HARNESSING THE POWER OF NATURE FOR CLEAN, SUSTAINABLE ENERGY
          </p>
        </div>
      </section>

      {/* About Section */}
      <section style={{...styles.section, ...styles.sectionGrey}}>
        <div style={styles.contentBox}>
          <div 
            data-id="about-label"
            style={{
              ...styles.sectionLabel,
              opacity: visibleElements.has('about-label') ? 0.6 : 0,
              transform: visibleElements.has('about-label') ? 'translateY(0)' : 'translateY(-20px)',
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
              transform: visibleElements.has('about-title') ? 'translateY(0)' : 'translateY(-30px)',
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            CLEAN ENERGY CLEAR SAVINGS
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
            At Halo Technologies, we believe energy should be clean, affordable, and future-ready. Our advanced 
            renewable energy solutions are designed to meet the needs of residential, commercial, industrial, and 
            institutional clients. From solar rooftops to large-scale wind systems, we help you reduce costs, achieve 
            energy independence, and contribute to a greener planet.
          </p>
        </div>
      </section>

      {/* Solar Solutions Section */}
      <section style={{...styles.section, ...styles.sectionWhite}}>
        <div style={styles.contentBox}>
          <div 
            data-id="solar-label"
            style={{
              ...styles.sectionLabel,
              opacity: visibleElements.has('solar-label') ? 0.6 : 0,
              transition: 'all 1s ease-out'
            }}
          >
            SOLAR POWER SOLUTIONS
          </div>
          <h2 
            data-id="solar-title"
            style={{
              ...styles.sectionTitle,
              opacity: visibleElements.has('solar-title') ? 1 : 0,
              transform: visibleElements.has('solar-title') ? 'scale(1)' : 'scale(0.95)',
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            HARNESS THE POWER OF THE SUN
          </h2>
          <h3 
            data-id="solar-subtitle"
            style={{
              ...styles.sectionSubtitle,
              opacity: visibleElements.has('solar-subtitle') ? 0.85 : 0,
              transition: 'all 1s ease-out 0.3s'
            }}
          >
            With Our Reliable And Scalable Solar Systems
          </h3>
          <p 
            data-id="solar-tagline"
            style={{
              ...styles.tagline,
              opacity: visibleElements.has('solar-tagline') ? 0.7 : 0,
              transition: 'all 1s ease-out 0.4s'
            }}
          >
            Turn your rooftops into powerhouses of clean energy.
          </p>
          <div style={styles.solutionsGrid}>
            {[
              {
                id: 'solar-rooftop',
                title: 'ROOFTOP & GROUND-MOUNT INSTALLATIONS',
                text: 'Ideal for homes, offices, factories, and institutions'
              },
              {
                id: 'solar-systems',
                title: 'ON-GRID, OFF-GRID & HYBRID SYSTEMS',
                text: 'Tailored to your requirements, whether connected to the grid, fully independent, or a hybrid with backup'
              },
              {
                id: 'solar-design',
                title: 'DESIGN & INSTALLATION',
                text: 'Expert engineering, professional setup, and guaranteed performance'
              },
              {
                id: 'solar-monitoring',
                title: 'MONITORING & MAINTENANCE',
                text: 'Smart monitoring tools and regular upkeep for maximum efficiency'
              }
            ].map((solution, index) => (
              <div 
                key={solution.id}
                data-id={solution.id}
                style={{
                  ...styles.solutionBlock,
                  opacity: visibleElements.has(solution.id) ? 1 : 0,
                  transform: visibleElements.has(solution.id) ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${0.15 * index}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                }}
              >
                <h3 style={styles.solutionTitle}>{solution.title}</h3>
                <p style={styles.solutionText}>{solution.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wind Energy Section */}
      <section style={{...styles.section, ...styles.sectionGrey}}>
        <div style={styles.contentBox}>
          <div 
            data-id="wind-label"
            style={{
              ...styles.sectionLabel,
              opacity: visibleElements.has('wind-label') ? 0.6 : 0,
              transition: 'all 1s ease-out'
            }}
          >
            WIND ENERGY SYSTEMS
          </div>
          <h2 
            data-id="wind-title"
            style={{
              ...styles.sectionTitle,
              opacity: visibleElements.has('wind-title') ? 1 : 0,
              transform: visibleElements.has('wind-title') ? 'scale(1)' : 'scale(0.95)',
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            CAPTURE THE NATURAL POWER OF WIND
          </h2>
          <h3 
            data-id="wind-subtitle"
            style={{
              ...styles.sectionSubtitle,
              opacity: visibleElements.has('wind-subtitle') ? 0.85 : 0,
              transition: 'all 1s ease-out 0.3s'
            }}
          >
            With Cutting-Edge Turbine Solutions
          </h3>
          <p 
            data-id="wind-tagline"
            style={{
              ...styles.tagline,
              opacity: visibleElements.has('wind-tagline') ? 0.7 : 0,
              transition: 'all 1s ease-out 0.4s'
            }}
          >
            Power your future with limitless wind energy.
          </p>
          <div style={styles.solutionsGrid}>
            {[
              {
                id: 'wind-assessment',
                title: 'SITE EVALUATION & WIND ASSESSMENT',
                text: 'Detailed analysis to identify high-yield wind zones'
              },
              {
                id: 'wind-epi',
                title: 'ENGINEERING, PROCUREMENT & INSTALLATION',
                text: 'End-to-end execution by our expert team'
              },
              {
                id: 'wind-turbines',
                title: 'TURBINE ENERGY SOLUTIONS',
                text: 'Customized small to large-scale wind energy systems'
              },
              {
                id: 'wind-monitoring',
                title: 'MONITORING & MAINTENANCE',
                text: 'Advanced monitoring with predictive servicing for uninterrupted energy flow'
              }
            ].map((solution, index) => (
              <div 
                key={solution.id}
                data-id={solution.id}
                style={{
                  ...styles.solutionBlock,
                  opacity: visibleElements.has(solution.id) ? 1 : 0,
                  transform: visibleElements.has(solution.id) ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${0.15 * index}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                }}
              >
                <h3 style={styles.solutionTitle}>{solution.title}</h3>
                <p style={styles.solutionText}>{solution.text}</p>
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
          backgroundImage: 'url("https://dn5z2jafg7hv0.cloudfront.net/blog/wp-content/uploads/2022/06/14160107/Solar-Panel-In-India.jpg")',
          opacity: visibleElements.has('image-2') ? 1 : 0,
          transition: 'opacity 2s ease-out'
        }}
      >
        <div style={styles.imageOverlay}></div>
        <div style={styles.imageContent}>
          <p 
            style={{
              ...styles.imageText,
              transform: visibleElements.has('image-2') ? 'scale(1)' : 'scale(0.95)',
              opacity: visibleElements.has('image-2') ? 1 : 0,
              transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
            }}
          >
            ENGINEERING SUSTAINABLE ENERGY SOLUTIONS FOR GENERATIONS TO COME
          </p>
        </div>
      </section>

      {/* Net Metering Section */}
      <section style={{...styles.section, ...styles.sectionWhite}}>
        <div style={styles.contentBox}>
          <div 
            data-id="services-label"
            style={{
              ...styles.sectionLabel,
              opacity: visibleElements.has('services-label') ? 0.6 : 0,
              transition: 'all 1s ease-out'
            }}
          >
            NET METERING SERVICES
          </div>
          <h2 
            data-id="services-title"
            style={{
              ...styles.sectionTitle,
              opacity: visibleElements.has('services-title') ? 1 : 0,
              transform: visibleElements.has('services-title') ? 'translateY(0)' : 'translateY(-30px)',
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            MAKE YOUR ENERGY WORK FOR YOU
          </h2>
          <h3 
            data-id="net-metering-subtitle"
            style={{
              ...styles.sectionSubtitle,
              opacity: visibleElements.has('net-metering-subtitle') ? 0.85 : 0,
              transition: 'all 1s ease-out 0.3s'
            }}
          >
            With Net Metering Solutions
          </h3>
          <p 
            data-id="net-metering-tagline"
            style={{
              ...styles.tagline,
              opacity: visibleElements.has('net-metering-tagline') ? 0.7 : 0,
              transition: 'all 1s ease-out 0.4s'
            }}
          >
            Earn credits by supplying excess energy back to the grid.
          </p>
          <div style={styles.solutionsGrid}>
            {[
              {
                id: 'net-metering-gov',
                title: 'GOVERNMENT LIAISON & APPROVALS',
                text: 'We handle the paperwork and utility permissions'
              },
              {
                id: 'net-metering-load',
                title: 'LOAD CALCULATION & COMPLIANCE',
                text: 'Accurate system design for safe integration with the grid'
              },
              {
                id: 'net-metering-integration',
                title: 'METER INTEGRATION & DOCUMENTATION',
                text: 'Hassle-free setup with utility companies'
              }
            ].map((service, index) => (
              <div 
                key={service.id}
                data-id={service.id}
                style={{
                  ...styles.solutionBlock,
                  opacity: visibleElements.has(service.id) ? 1 : 0,
                  transform: visibleElements.has(service.id) ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${0.15 * index}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                }}
              >
                <h3 style={styles.solutionTitle}>{service.title}</h3>
                <p style={styles.solutionText}>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Feasibility Section */}
      <section style={{...styles.section, ...styles.sectionGrey}}>
        <div style={styles.contentBox}>
          <div 
            data-id="feasibility-label"
            style={{
              ...styles.sectionLabel,
              opacity: visibleElements.has('feasibility-label') ? 0.6 : 0,
              transition: 'all 1s ease-out'
            }}
          >
            TECHNICAL FEASIBILITY & TURNKEY PROJECTS
          </div>
          <h2 
            data-id="feasibility-title"
            style={{
              ...styles.sectionTitle,
              opacity: visibleElements.has('feasibility-title') ? 1 : 0,
              transform: visibleElements.has('feasibility-title') ? 'translateY(0)' : 'translateY(-30px)',
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            FROM CONCEPT TO COMMISSIONING
          </h2>
          <h3 
            data-id="feasibility-subtitle"
            style={{
              ...styles.sectionSubtitle,
              opacity: visibleElements.has('feasibility-subtitle') ? 0.85 : 0,
              transition: 'all 1s ease-out 0.3s'
            }}
          >
            We Provide Complete Project Execution
          </h3>
          <p 
            data-id="feasibility-tagline"
            style={{
              ...styles.tagline,
              opacity: visibleElements.has('feasibility-tagline') ? 0.7 : 0,
              transition: 'all 1s ease-out 0.4s'
            }}
          >
            We take care of everything—so you enjoy uninterrupted clean power.
          </p>
          <div style={styles.solutionsGrid}>
            {[
              {
                id: 'feasibility-studies',
                title: 'TECHNICAL FEASIBILITY STUDIES',
                text: 'Site analysis, energy forecasts, and ROI calculations'
              },
              {
                id: 'custom-solutions',
                title: 'CUSTOM SOLUTIONS',
                text: 'Solar, wind, or hybrid systems tailored to your exact needs'
              },
              {
                id: 'turnkey-execution',
                title: 'TURNKEY PROJECT EXECUTION',
                text: 'End-to-end service covering design, supply, installation, and support'
              }
            ].map((service, index) => (
              <div 
                key={service.id}
                data-id={service.id}
                style={{
                  ...styles.solutionBlock,
                  opacity: visibleElements.has(service.id) ? 1 : 0,
                  transform: visibleElements.has(service.id) ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${0.15 * index}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                }}
              >
                <h3 style={styles.solutionTitle}>{service.title}</h3>
                <p style={styles.solutionText}>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{...styles.section, ...styles.sectionWhite}}>
        <div style={styles.contentBox}>
          <div 
            data-id="why-label"
            style={{
              ...styles.sectionLabel,
              opacity: visibleElements.has('why-label') ? 0.6 : 0,
              transition: 'all 1s ease-out'
            }}
          >
            WHY CHOOSE HALO TECHNOLOGIES
          </div>
          <h2 
            data-id="why-title"
            style={{
              ...styles.sectionTitle,
              opacity: visibleElements.has('why-title') ? 1 : 0,
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            CHOOSE CLEAN ENERGY THAT PAYS BACK
          </h2>
          <h3 
            data-id="why-subtitle"
            style={{
              ...styles.sectionSubtitle,
              opacity: visibleElements.has('why-subtitle') ? 0.85 : 0,
              transition: 'all 1s ease-out 0.3s'
            }}
          >
            For You And The Planet
          </h3>
          <div style={styles.benefitsGrid}>
            {[
              { title: '10+ YEARS EXPERIENCE', text: 'Proven track record in renewable energy projects' },
              { title: 'EXPERT TEAM', text: 'Specialists in solar, wind & hybrid energy systems' },
              { title: 'END-TO-END SERVICES', text: 'Complete support from design to maintenance' },
              { title: 'MAXIMUM SAVINGS', text: 'Proven solutions with optimal energy savings' },
              { title: 'SUSTAINABILITY FIRST', text: 'Strong commitment to green practices' }
            ].map((benefit, index) => (
              <div 
                key={index}
                data-id={`benefit-${index}`}
                style={{
                  ...styles.benefitCard,
                  opacity: visibleElements.has(`benefit-${index}`) ? 1 : 0,
                  transform: visibleElements.has(`benefit-${index}`) ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.12 * index}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
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
      <section style={{...styles.section, ...styles.sectionGrey}}>
        <div style={styles.contentBox}>
          <div 
            data-id="industries-label"
            style={{
              ...styles.sectionLabel,
              opacity: visibleElements.has('industries-label') ? 0.6 : 0,
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
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            INDUSTRIES WE SERVE
          </h2>
          <div style={styles.industriesGrid}>
            {[
              'RESIDENTIAL BUILDINGS & HOUSING SOCIETIES',
              'COMMERCIAL COMPLEXES & IT PARKS',
              'EDUCATIONAL INSTITUTIONS & HOSPITALS',
              'MANUFACTURING INDUSTRIES & WAREHOUSES',
              'AGRICULTURAL & RURAL ELECTRIFICATION PROJECTS'
            ].map((industry, index) => (
              <div 
                key={index}
                data-id={`industry-${index}`}
                style={{
                  ...styles.industryCard,
                  opacity: visibleElements.has(`industry-${index}`) ? 1 : 0,
                  transform: visibleElements.has(`industry-${index}`) ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.1 * index}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={styles.industryText}>{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RenewableEnergy;
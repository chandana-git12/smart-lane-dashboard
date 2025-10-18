import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import RenImage from '../components/assets/Ren.jpg';

const serviceImages = {
  electrical: "https://www.wsp.com/-/media/service/global/image/healthcare/optegra_building-services-small.jpg",
  barcode: "https://qtrak.net/content/uploads/2019/04/products-qtrak-app.jpg",
  renewable: RenImage,
};

const Services = () => {
  const navigate = useNavigate();
  const [hoveredService, setHoveredService] = useState(null);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const observerRef = useRef(null);

  const services = [
    {
      id: 'renewable',
      number: '/01',
      title: 'Renewable Energy',
      description: 'Solar Power Solutions including rooftop & ground-mounted installations (On-Grid, Off-Grid, Hybrid). Wind Energy Systems, Net Metering support, and comprehensive Technical Feasibility Studies.',
      tech: 'Clean Energy',
      path: '/services/renewable-energy'
    },
    {
      id: 'barcode',
      number: '/02',
      title: 'Barcode & Automation',
      description: 'Customized automation solutions to streamline operations. Barcode systems for accurate tracking and process efficiency with seamless integration into existing business workflows.',
      tech: 'Automation Systems',
      path: '/services/barcode-automation'
    },
    {
      id: 'electrical',
      number: '/03',
      title: 'MEP Solutions',
      description: 'End-to-end Mechanical, Electrical, and Plumbing (MEP) design and execution. Compliance-driven solutions for commercial, industrial, and institutional projects with focus on safety, reliability, and cost optimization.',
      tech: 'MEP Solutions',
      path: '/services/mep-solutions'
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleServiceClick = (path) => {
    console.log('Navigating to:', path); // Debug log
    navigate(path);
  };

  const handleServiceInteraction = (serviceId) => {
    if (isMobile) {
      setHoveredService(hoveredService === serviceId ? null : serviceId);
    } else {
      setHoveredService(serviceId);
    }
  };

  const handleServiceLeave = () => {
    if (!isMobile) {
      setHoveredService(null);
    }
  };

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

  return (
    <>
      <style>{`
        .services-container {
          width: 100%;
          margin: 0;
          padding: 80px 40px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background: #000000;
          min-height: 100vh;
          color: #ffffff;
        }

        .header-section {
          text-align: center;
          margin: 0 auto 80px auto;
          max-width: 1400px;
        }

        .main-title {
          font-size: clamp(1.8rem, 5vw, 3.5rem);
          font-weight: 300;
          line-height: 1.3;
          color: #ffffff;
          margin-bottom: 40px;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .main-title span {
          display: block;
          margin: 5px 0;
          font-weight: 700;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 300;
          color: #ffffff;
          margin-bottom: 60px;
        }

        .services-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .service-item {
          position: relative;
          cursor: pointer;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          grid-template-areas: "content image title";
          align-items: center;
          padding: 40px 20px;
          border-bottom: 1px solid #333333;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background-color: #111111;
          min-height: 280px;
        }

        .service-item:last-child {
          border-bottom: none;
        }

        .service-item:hover,
        .service-item.active {
          background-color: #222222;
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.1);
        }

        .service-content {
          grid-area: content;
          padding-left: 40px;
          max-width: 450px;
        }

        .service-number {
          font-size: 1.2rem;
          color: #f39c12;
          margin-bottom: 30px;
          font-weight: 600;
        }

        .service-description {
          font-size: 1.6rem;
          line-height: 1.4;
          color: #cccccc;
          font-weight: 300;
          margin: 0;
        }

        .service-image-container {
          grid-area: image;
          width: 300px;
          height: 200px;
          overflow: hidden;
          border-radius: 8px;
          margin: 0 40px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease-out;
        }

        .service-item:hover .service-image-container,
        .service-item.active .service-image-container {
          opacity: 1;
          transform: translateY(0);
        }

        .service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          transition: all 0.5s ease;
        }

        .service-item:hover .service-image,
        .service-item.active .service-image {
          transform: scale(1.02);
        }

        .service-title-section {
          grid-area: title;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-right: 40px;
          position: relative;
        }

        .service-title {
          font-size: 5rem;
          font-weight: 700;
          color: #f39c12;
          margin: 0;
          line-height: 0.9;
          text-align: center;
          transition: all 0.3s ease;
        }

        .service-item:hover .service-title,
        .service-item.active .service-title {
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .service-item {
            grid-template-columns: 1fr;
            grid-template-areas: 
              "content"
              "image"
              "title";
            text-align: center;
            min-height: auto;
            padding: 40px 20px;
          }

          .service-content {
            padding-left: 0;
            max-width: 100%;
          }

          .service-image-container {
            margin: 20px auto;
            width: 80%;
            max-width: 400px;
          }

          .service-title-section {
            padding-right: 0;
          }

          .service-title {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .services-container {
            padding: 40px 20px;
          }

          .service-item {
            padding: 30px 0;
            min-height: auto;
          }

          .service-description {
            font-size: 1.3rem;
          }

          .service-title {
            font-size: 2.5rem;
          }

          .service-image-container {
            width: 90%;
            height: 180px;
            margin: 20px auto;
          }

          .service-item.active .service-image-container {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 480px) {
          .service-title {
            font-size: 2rem;
          }

          .service-description {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <div className="services-container">
        <div className="header-section">
          <h1 
            className="main-title"
            data-id="main-title"
            style={{
              opacity: visibleElements.has('main-title') ? 1 : 0,
              transform: visibleElements.has('main-title') ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            <span>Powering businesses with innovative</span>
            <span>
              <span style={{ color: '#f39c12' }}>electrical solutions</span> and sustainable
            </span>
            <span>energy systems that drive efficiency and growth across industries.</span>
          </h1>
        </div>

        <div className="services-section">
          <h2 
            className="section-title"
            data-id="section-title"
            style={{
              opacity: visibleElements.has('section-title') ? 1 : 0,
              transform: visibleElements.has('section-title') ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            Our Services
          </h2>
          
          <div className="services-list">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`service-item ${hoveredService === service.id ? 'active' : ''}`}
                data-id={service.id}
                onClick={() => handleServiceClick(service.path)}
                onMouseEnter={() => handleServiceInteraction(service.id)}
                onMouseLeave={handleServiceLeave}
                style={{
                  opacity: visibleElements.has(service.id) ? 1 : 0,
                  transform: visibleElements.has(service.id) ? 'translateX(0)' : (index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)'),
                  transition: 'all 0.8s ease-out'
                }}
              >
                <div className="service-content">
                  <div className="service-number">{service.number}</div>
                  <p className="service-description">{service.description}</p>
                </div>
                
                <div className="service-image-container">
                  <img 
                    src={serviceImages[service.id]} 
                    alt={service.title} 
                    className="service-image"
                  />
                </div>
                
                <div className="service-title-section">
                  <h3 className="service-title">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
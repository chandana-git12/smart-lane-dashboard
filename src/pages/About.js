import React, { useState, useEffect } from 'react';
import A1Image from '../components/assets/a1.jpg';
import A2Image from '../components/assets/a2.jpg';
import A3Image from '../components/assets/a3.jpg';

export default function HaloTechnologies() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    A1Image,
    A2Image,
    A3Image
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const insights = [
    { number: '5000+', label: 'Projects Completed' },
    { number: '2000+', label: 'Happy Clients' },
    { number: '100+', label: 'Expert Team Members' },
    { number: '10+', label: 'Years of Excellence' }
  ];

  return (
    <div style={{ background: 'white' }}>
      {/* Hero Slider */}
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        {heroImages.map((img, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100vh',
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out'
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ textAlign: 'center', color: 'white', padding: '20px' }}>
                <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', fontWeight: '700', marginBottom: '20px' }}>
                  Halo Technologies
                </h1>
                <p style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', fontWeight: '300' }}>
                  Engineering a Sustainable Future
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Dots */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          zIndex: 10
        }}>
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: currentSlide === index ? '40px' : '12px',
                height: '12px',
                borderRadius: '6px',
                border: 'none',
                background: currentSlide === index ? 'white' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>

      {/* About Us Section */}
      <section style={{
        padding: 'clamp(40px, 10vw, 100px) 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 60px)' }}>
          <p style={{ color: '#1e3a8a', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', fontWeight: '600', letterSpacing: '2px', marginBottom: '10px' }}>
            SINCE 2014
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)', fontWeight: '700', color: '#1a1a1a', marginBottom: '30px' }}>
            About Halo Technologies
          </h2>
          <div style={{ width: '80px', height: '4px', background: '#ff9933', margin: '0 auto 40px' }}></div>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', lineHeight: '1.8', color: '#555', maxWidth: '900px', margin: '0 auto' }}>
            Established in 2014, Halo Technologies is a future-driven engineering and technology company delivering innovative solutions in Renewable Energy, Barcode Automation, and MEP Services. Headquartered in Bengaluru with operations across India, we enable businesses to adopt sustainable practices, enhance efficiency, and remain future-ready.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section style={{
        padding: 'clamp(40px, 8vw, 80px) 20px',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px'
          }}>
            {/* Mission */}
            <div style={{
              background: 'white',
              padding: 'clamp(30px, 5vw, 50px)',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <p style={{ color: '#1e3a8a', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', fontWeight: '600', letterSpacing: '1.5px', marginBottom: '15px' }}>
                OUR MISSION
              </p>
              <h3 style={{ fontSize: 'clamp(1.3rem, 4vw, 1.8rem)', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a' }}>
                Sustainable Solutions
              </h3>
              <p style={{ color: '#666', lineHeight: '1.8', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                To deliver sustainable, intelligent, and cost-effective solutions in renewable energy, MEP engineering, and automation, enabling businesses to operate more efficiently while contributing to a greener planet.
              </p>
            </div>

            {/* Vision */}
            <div style={{
              background: 'white',
              padding: 'clamp(30px, 5vw, 50px)',
              borderRadius: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <p style={{ color: '#1e3a8a', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', fontWeight: '600', letterSpacing: '1.5px', marginBottom: '15px' }}>
                OUR VISION
              </p>
              <h3 style={{ fontSize: 'clamp(1.3rem, 4vw, 1.8rem)', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a' }}>
                Global Leadership
              </h3>
              <p style={{ color: '#666', lineHeight: '1.8', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                To be recognized as a leader in turnkey engineering and renewable energy solutions, driving innovation and sustainability for industries and communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Co-Founder Section */}
      <section style={{
        padding: 'clamp(40px, 10vw, 100px) 20px',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 60px)' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)', fontWeight: '700', color: '#1a1a1a', marginBottom: '20px' }}>
              Leadership Team
            </h2>
            <div style={{ width: '80px', height: '4px', background: '#00a651', margin: '0 auto' }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'clamp(30px, 5vw, 50px)',
            justifyItems: 'center'
          }}>
            {/* Founder */}
            <div style={{
              textAlign: 'center',
              maxWidth: '320px'
            }}>
              <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: '700', marginBottom: '8px', color: '#1a1a1a' }}>
                THIMMAPPA POOJA
              </h3>
              <p style={{ color: '#ff9933', fontSize: 'clamp(0.9rem, 2vw, 1rem)', fontWeight: '600', marginBottom: '15px' }}>
                Founder & CEO
              </p>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
                Visionary leader with 15+ years of experience in renewable energy and sustainable engineering solutions.
              </p>
            </div>

            {/* Co-Founder */}
            <div style={{
              textAlign: 'center',
              maxWidth: '320px'
            }}>
              <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: '700', marginBottom: '8px', color: '#1a1a1a' }}>
                VEENA HARANAHALLI
              </h3>
              <p style={{ color: '#1e3a8a', fontSize: 'clamp(0.9rem, 2vw, 1rem)', fontWeight: '600', marginBottom: '15px' }}>
                Co-Founder & CTO
              </p>
              <p style={{ color: '#666', lineHeight: '1.6', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
                Technology expert specializing in automation systems and innovative MEP solutions for modern infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section style={{
        padding: 'clamp(40px, 10vw, 100px) 20px',
        background: 'white',
        color: '#1a1a1a'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 60px)' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)', fontWeight: '700', marginBottom: '20px' }}>
              Our Impact
            </h2>
            <div style={{ width: '80px', height: '4px', background: '#ff9933', margin: '0 auto' }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 'clamp(20px, 4vw, 40px)',
            textAlign: 'center'
          }}>
            {insights.map((insight, index) => (
              <div key={index} style={{
                padding: 'clamp(20px, 3vw, 30px)',
                transition: 'transform 0.3s ease'
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <h3 style={{
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: '#1e3a8a'
                }}>
                  {insight.number}
                </h3>
                <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontWeight: '400', color: '#666' }}>
                  {insight.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
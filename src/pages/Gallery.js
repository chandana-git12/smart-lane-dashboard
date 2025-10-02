import React, { useState, useEffect } from 'react';

const ProjectGallery = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Halo's solar energy revolution",
      description: "The renewable energy leader is turning up the power on sustainable solutions—using advanced technology and expertise to transform India's energy landscape.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Solar Energy"
    },
    {
      id: 2,
      title: "3kW residential solar breakthrough",
      description: "Medium-scale residential installations delivering clean energy solutions across Bangalore with cutting-edge monitoring and grid-tie capabilities.",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      category: "Solar Energy"
    },
    {
      id: 3,
      title: "Commercial solar innovation",
      description: "5kW installations powering businesses with smart grid integration, battery backup systems, and real-time performance optimization technology.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Solar Energy"
    },
    {
      id: 4,
      title: "Industrial scale solar mastery",
      description: "50kW installations in Tumkur district featuring advanced SCADA systems, real-time monitoring, and optimized energy distribution for manufacturing facilities.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Solar Energy"
    },
    {
      id: 5,
      title: "Utility-scale solar excellence",
      description: "100kW installation in Yadagiri district contributing to regional grid stability with advanced inverter technology and comprehensive weather monitoring systems.",
      image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Solar Energy"
    },
    {
      id: 6,
      title: "Mega solar project leadership",
      description: "210kW installation in Chitradurga district powering rural communities with smart grid technology and efficient energy distribution across multiple villages.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Solar Energy"
    },
    {
      id: 7,
      title: "Massive renewable transformation",
      description: "400kW installation in Bagalakote featuring cutting-edge bifacial panels, AI-powered maintenance systems, and serving multiple districts with clean energy.",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Solar Energy"
    },
    {
      id: 8,
      title: "Agricultural solar revolution",
      description: "Solar-powered water pumping systems in Hassan district revolutionizing irrigation, helping farmers reduce costs while significantly increasing crop yields.",
      image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Agriculture"
    },
    {
      id: 9,
      title: "Hybrid power innovation",
      description: "Advanced hybrid inverter systems combining solar, grid, and battery power with intelligent switching technology for uninterrupted energy supply.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Agriculture"
    },
    {
      id: 10,
      title: "Wind energy excellence",
      description: "State-of-the-art wind turbine installations across Karnataka harnessing natural wind potential with smart grid integration for maximum efficiency.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Wind Energy"
    },
    {
      id: 11,
      title: "Industrial turbo systems",
      description: "High-efficiency turbine systems for industrial applications delivering consistent power output with advanced engineering solutions in demanding environments.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Turbo Energy"
    }
  ];

  // Auto-play every 4 seconds
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, projects.length]);

  const goToNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const goToPrevious = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentProjectData = projects[currentProject];

  // Set CSS variable for mobile background image
  useEffect(() => {
    document.documentElement.style.setProperty('--mobile-bg-image', `url(${currentProjectData.image})`);
  }, [currentProjectData.image]);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#000000',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '20px' : '0 80px',
      }}
    >
      {isMobile ? (
        // Mobile Layout - Vertical Card
        <div
          style={{
            width: '90%',
            maxWidth: '380px',
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Mobile Image */}
          <div
            style={{
              width: '100%',
              height: '220px',
              backgroundImage: `url(${currentProjectData.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          
          {/* Mobile Content */}
          <div
            style={{
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
            }}
          >
            <h1
              style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                margin: '0 0 12px 0',
                lineHeight: '1.3',
                color: '#ffffff',
                letterSpacing: '-0.01em',
              }}
            >
              {currentProjectData.title}
            </h1>

            <p
              style={{
                fontSize: '0.9rem',
                lineHeight: '1.4',
                margin: '0',
                color: '#b3b3b3',
                fontWeight: '400',
              }}
            >
              {currentProjectData.description}
            </p>
          </div>
        </div>
      ) : (
        // Desktop Layout - Side by Side
        <>
          {/* Left side - Sharp Rectangle Image */}
          <div
            style={{
              width: '45%',
              height: '60vh',
              position: 'relative',
              marginRight: '60px',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: `linear-gradient(135deg, 
                  rgba(255,107,107,0.8) 0%, 
                  rgba(255,142,83,0.8) 25%, 
                  rgba(255,193,7,0.8) 50%, 
                  rgba(156,39,176,0.8) 75%, 
                  rgba(103,58,183,0.8) 100%)`,
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
              }}
            >
              <img
                src={currentProjectData.image}
                alt={currentProjectData.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'all 0.8s ease-in-out',
                  opacity: 0.9,
                }}
              />
              
              {/* Gradient overlay for better text contrast */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(255,107,107,0.3) 0%, rgba(156,39,176,0.3) 100%)',
                  mixBlendMode: 'multiply',
                }}
              />

              {/* Animated light effects */}
              <div
                style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: `radial-gradient(circle, 
                    rgba(255,255,255,0.1) 0%, 
                    transparent 30%, 
                    rgba(255,255,255,0.05) 70%, 
                    transparent 100%)`,
                  animation: 'rotate 20s linear infinite',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div
            style={{
              width: '45%',
              color: 'white',
              paddingLeft: '20px',
            }}
          >
            <h1
              style={{
                fontSize: '3.2rem',
                fontWeight: '700',
                margin: '0 0 20px 0',
                lineHeight: '1.2',
                color: '#ffffff',
                letterSpacing: '-0.01em',
              }}
            >
              {currentProjectData.title}
            </h1>

            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                margin: '0 0 40px 0',
                color: '#b3b3b3',
                fontWeight: '400',
                maxWidth: '500px',
              }}
            >
              {currentProjectData.description}
            </p>
          </div>
        </>
      )}

      {/* Navigation Controls - Same for both layouts */}

      {/* Bottom Controls */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '80px',
          zIndex: 10,
        }}
      >
        <button
          onClick={togglePlayPause}
          style={{
            width: '40px',
            height: '40px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: '#b3b3b3',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.color = '#b3b3b3';
          }}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
      </div>

      {/* Right Navigation */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '80px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          zIndex: 10,
        }}
      >
        <button
          onClick={goToPrevious}
          style={{
            width: '40px',
            height: '40px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: '#b3b3b3',
            fontSize: '16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.color = '#b3b3b3';
          }}
        >
          ←
        </button>

        <div
          style={{
            color: '#b3b3b3',
            fontSize: '14px',
            fontWeight: '500',
            padding: '0 10px',
          }}
        >
          {currentProject + 1}/{projects.length}
        </div>

        <button
          onClick={goToNext}
          style={{
            width: '40px',
            height: '40px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            color: '#b3b3b3',
            fontSize: '16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            e.target.style.color = '#b3b3b3';
          }}
        >
          →
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* Touch Devices - Larger Touch Targets */
        @media (hover: none) and (pointer: coarse) {
          button {
            min-height: 44px !important;
            min-width: 44px !important;
          }
          
          button:active {
            transform: scale(0.95) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectGallery;
import React, { useState, useRef, useEffect } from "react";

// Solar system cards data
const cards = [
  { 
    image: "https://i.pinimg.com/736x/71/fa/ca/71faca59b3dda6383d812bc11ec48857.jpg",
    title: "On-Grid Solar System",
    description: "Connected to utility grid"
  },
  { 
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    title: "Hybrid Solar System",
    description: "Grid + Battery backup"
  },
  { 
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
    title: "Off-Grid Solar System",
    description: "Complete energy independence"
  },
];

function Card({ image, title, description, index }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const imgRef = useRef(null);
  const cardRef = useRef(null);
  
  const isFromLeft = index % 2 === 0;

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      {
        rootMargin: '200px',
        threshold: 0,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll animation effect - circular clockwise motion
  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress for this specific card (0 to 1)
      // Animation range: 1.2 viewport heights for smoother sequential animation
      const animationRange = windowHeight * 1.5;
      const cardTop = rect.top;
      
      // Start animation when card is 1.2vh below screen, end when it's 0.2vh above
      let progress;
      
      if (cardTop < -windowHeight * 0.2) {
        // Card has scrolled past
        progress = 1;
      } else if (cardTop > windowHeight * 1.2) {
        // Card hasn't started yet
        progress = 0;
      } else {
        // Card is animating
        progress = (windowHeight * 1.2 - cardTop) / animationRange;
        progress = Math.max(0, Math.min(1, progress));
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = (e) => {
    console.error('Image failed to load:', e);
  };

  // Simple circular clockwise motion
  // Path: back-bottom -> front-center -> back-top
  const getTransform = () => {
    const progress = scrollProgress;
    
    // Angle for semicircle: 180deg to 360deg (π to 2π)
    const angle = Math.PI + (progress * Math.PI);
    
    // Circular path radius - adjust for mobile
    const isMobile = window.innerWidth <= 768;
    const radius = isMobile ? 150 : 250;
    
    // Calculate circular position
    // Y-axis: bottom to top movement
    const translateY = -Math.sin(angle) * radius;
    
    // Z-axis: back to front to back (depth)
    const translateZ = Math.cos(angle) * radius;
    
    // X-axis: alternating left and right based on card index
    // Reduce horizontal movement on mobile
    const direction = isFromLeft ? -1 : 1;
    const translateX = isMobile ? 0 : direction * 150;
    
    // Scale based on depth (smaller when far, bigger when near)
    const scale = 0.6 + ((translateZ + radius) / (radius * 2)) * 0.6;
    
    return {
      transform: `
        perspective(1500px)
        translateX(${translateX}px)
        translateY(${translateY}px)
        translateZ(${translateZ}px)
        scale(${scale})
      `,
      opacity: 1,
      zIndex: Math.floor(scale * 100),
    };
  };

  const transformStyle = getTransform();

  return (
    <div
      ref={cardRef}
      className="responsive-card"
      style={{
        margin: "5vh auto",
        borderRadius: "12px",
        width: "95%",
        maxWidth: 1300,
        height: 700,
        boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
        position: "relative",
        overflow: "hidden",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#1a1a1a",
        ...transformStyle,
        transition: "all 0.05s linear",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Loading spinner */}
      {!isLoaded && isInView && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
            color: "#ffa500",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "4px solid #333",
              borderTop: "4px solid #ffa500",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto 10px",
            }}
          />
          Loading...
        </div>
      )}

      {/* Image element - only render when in view */}
      {isInView && (
        <>
          <img
            ref={imgRef}
            src={image}
            alt={title}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: isLoaded ? 1 : 0,
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          
          {/* Overlay with title and description */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)",
              padding: "clamp(20px, 5vw, 40px) clamp(15px, 4vw, 30px) clamp(15px, 3vw, 25px)",
              zIndex: 2,
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 0.5s ease-in-out 0.3s",
            }}
          >
            <h3
              style={{
                color: "#ffa500",
                fontSize: "clamp(1.2rem, 4vw, 1.8rem)",
                fontWeight: "700",
                margin: "0 0 8px 0",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                color: "#fff",
                fontSize: "clamp(0.85rem, 2.5vw, 1rem)",
                margin: 0,
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}
            >
              {description}
            </p>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .responsive-card {
            width: 95% !important;
            margin: 8vh auto !important;
            height: clamp(350px, 60vw, 500px) !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }

        @media (max-width: 480px) {
          .responsive-card {
            width: 98% !important;
            margin: 6vh auto !important;
            height: clamp(280px, 70vw, 400px) !important;
          }
        }

        @media (max-width: 360px) {
          .responsive-card {
            width: 98% !important;
            margin: 5vh auto !important;
            height: 250px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function SolarCardsSection() {
  return (
    <section 
      style={{ 
        position: "relative",
        width: "100%",
        minHeight: "80vh",
        paddingTop: "10vh",
        paddingBottom: "30px",
        backgroundImage: "url('https://images.pexels.com/photos/9893729/pexels-photo-9893729.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        transformStyle: "preserve-3d",
        perspective: "1500px",
      }}
    >
      {/* Background Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Cards Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            index={index}
          />
        ))}
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          section {
            min-height: 60vh !important;
            padding-top: 8vh !important;
            padding-bottom: 25px !important;
          }
        }

        @media (max-width: 480px) {
          section {
            min-height: 50vh !important;
            padding-top: 5vh !important;
            padding-bottom: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
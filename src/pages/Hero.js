import React from "react";

const Home = () => {
  const videoUrl = 'https://v.ftcdn.net/03/97/20/66/700_F_397206620_jxSJTIrFsVKR5AeeOabLfSxsnlKsoIXO_ST.mp4';

  const styles = {
    homePage: {
      fontFamily: "Arial, sans-serif",
      margin: 0,
      padding: 0,
      width: "100vw",
      position: "relative",
    },
    heroSection: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      position: "relative",
      margin: 0,
      padding: 0,
    },
    videoBackground: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.5)",
      zIndex: 1,
    },
    heroContent: {
      position: "relative",
      zIndex: 2,
      maxWidth: "700px",
      textAlign: "center",
      animation: "fadeInUp 1s ease-out",
      padding: "0 20px",
    },
    heading: {
      fontSize: "60px",
      lineHeight: "1.2",
      marginBottom: "20px",
      fontWeight: "700",
    },
    highlight: {
      color: "#f39c12",
    },
  };

  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html, body, #root {
            width: 100%;
            height: 100%;
            overflow-y: auto;
          }
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
          @media (max-width: 768px) {
            .hero-heading {
              font-size: 40px !important;
            }
          }
        `}
      </style>

      <div style={styles.homePage}>
        <section style={styles.heroSection}>
          <video
            style={styles.videoBackground}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
          </video>

          <div style={styles.overlay}></div>

          <div style={styles.heroContent}>
            <h1 style={{ ...styles.heading }} className="hero-heading">
              <span style={styles.highlight}>Powering</span> Business{" "}
              <span style={styles.highlight}>Empowering</span> Futures
            </h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
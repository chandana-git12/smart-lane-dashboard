import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.navbar-container')) {
        setMobileMenuOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(255, 255, 255, 0.98)' : '#ffffff',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      padding: '0 5%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.05)',
      height: '80px',
      transition: 'all 0.3s ease',
      maxWidth: '100vw',
      boxSizing: 'border-box'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      zIndex: 1002,
      flex: '0 0 auto'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'transform 0.3s ease'
    },
    logoImage: {
      width: isMobile ? '100px' : '140px',
      height: isMobile ? '40px' : '60px',
      objectFit: 'contain',
      display: 'block'
    },
    navLinksContainer: {
      display: 'flex',
      gap: '5px',
      alignItems: 'center',
      height: '100%'
    },
    navLink: {
      color: '#1e293b',
      textDecoration: 'none',
      fontSize: '15px',
      fontWeight: '500',
      padding: '10px 18px',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    activeNavLink: {
      color: '#667eea',
      fontWeight: '600',
      background: 'rgba(102, 126, 234, 0.1)'
    },
    dropdown: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    dropdownTrigger: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    dropdownArrow: {
      fontSize: '10px',
      transition: 'transform 0.3s ease',
      transform: servicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
    },
    dropdownMenu: {
      position: 'absolute',
      top: 'calc(100% + 10px)',
      left: '0',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
      minWidth: '240px',
      zIndex: 1001,
      border: '1px solid rgba(0, 0, 0, 0.08)',
      overflow: 'hidden',
      opacity: servicesDropdownOpen ? 1 : 0,
      visibility: servicesDropdownOpen ? 'visible' : 'hidden',
      transform: servicesDropdownOpen ? 'translateY(0)' : 'translateY(-10px)',
      transition: 'all 0.3s ease'
    },
    dropdownItem: {
      color: '#1e293b',
      textDecoration: 'none',
      padding: '14px 20px',
      display: 'block',
      fontSize: '15px',
      transition: 'all 0.3s ease',
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
    },
    hamburger: {
      display: 'none',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '30px',
      height: '24px',
      cursor: 'pointer',
      zIndex: 1002,
      padding: '0'
    },
    bar: {
      height: '3px',
      width: '100%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '3px',
      transition: 'all 0.3s ease',
      transformOrigin: 'center'
    },
    mobileMenu: {
      position: 'fixed',
      top: '80px',
      left: 0,
      right: 0,
      bottom: 0,
      background: '#ffffff',
      transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      overflowY: 'auto',
      padding: '20px 0',
      zIndex: 999,
      boxShadow: mobileMenuOpen ? '0 10px 40px rgba(0, 0, 0, 0.2)' : 'none'
    },
    mobileNavLink: {
      color: '#1e293b',
      textDecoration: 'none',
      fontSize: '18px',
      fontWeight: '500',
      padding: '16px 5%',
      display: 'flex',
      alignItems: 'center',
      transition: 'all 0.3s ease',
      borderLeft: '4px solid transparent'
    },
    activeMobileNavLink: {
      color: '#667eea',
      fontWeight: '600',
      background: 'rgba(102, 126, 234, 0.08)',
      borderLeft: '4px solid #667eea'
    },
    mobileSubMenu: {
      background: 'rgba(102, 126, 234, 0.05)',
      paddingLeft: 'calc(5% + 20px)',
      fontSize: '16px',
      borderLeft: '4px solid transparent'
    },
    overlay: {
      position: 'fixed',
      top: '80px',
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(4px)',
      zIndex: 998,
      opacity: mobileMenuOpen ? 1 : 0,
      visibility: mobileMenuOpen ? 'visible' : 'hidden',
      transition: 'all 0.3s ease'
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      subItems: [
        { name: 'Renewable Energy', path: '/services/renewable-energy' },
        { name: 'Barcode & Automation', path: '/services/barcode-automation' },
        { name: 'MEP Solutions', path: '/services/mep-solutions' },
      ]
    },
    { name: 'Careers', path: '/', redirectToHome: true }, // Redirect to home
    { name: 'Blogs', path: '/', redirectToHome: true },   // Redirect to home
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;
  const isServicesActive = () => location.pathname.startsWith('/services');

  const handleNavLinkClick = (item) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    
    // If it's a redirect to home item, navigate to home
    if (item.redirectToHome) {
      navigate('/');
    }
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
          
          body {
            padding-top: 80px;
            overflow-x: hidden;
          }

          @media (max-width: 1024px) {
            .nav-links-desktop {
              display: none !important;
            }
            .hamburger-menu {
              display: flex !important;
            }
          }
          
          @media (min-width: 1025px) {
            .nav-links-desktop {
              display: flex !important;
            }
            .hamburger-menu {
              display: none !important;
            }
            
            .nav-link:not(.active):hover {
              background: rgba(102, 126, 234, 0.1);
              color: #667eea;
            }
            
            .dropdown-item:hover {
              background: rgba(102, 126, 234, 0.1);
              color: #667eea;
              padding-left: 24px;
            }
          }

          @media (max-width: 1024px) {
            .mobile-nav-link:hover {
              background: rgba(102, 126, 234, 0.08);
              color: #667eea;
            }
          }

          @media (max-width: 480px) {
            .logo-text {
              font-size: 22px !important;
            }
            
            .navbar-container {
              height: 70px !important;
            }
            
            body {
              padding-top: 70px !important;
            }
            
            .mobile-menu {
              top: 70px !important;
            }
            
            .overlay {
              top: 70px !important;
            }
          }

          .logo:hover {
            transform: scale(1.05);
          }

          .navbar-container {
            width: 100%;
          }

          @media (max-width: 1200px) and (min-width: 1025px) {
            .nav-link {
              font-size: 14px !important;
              padding: 8px 14px !important;
            }
          }
        `}
      </style>

      {mobileMenuOpen && <div style={styles.overlay} onClick={() => setMobileMenuOpen(false)} />}

      <nav className="navbar-container" style={styles.navbar}>
        <div style={styles.logoContainer}>
          <Link to="/" style={styles.logo} onClick={() => handleNavLinkClick({})} className="logo">
            <img 
              src={logo} 
              alt="Halo Technologies" 
              style={styles.logoImage}
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="nav-links-desktop" style={styles.navLinksContainer}>
          {navItems.map((item) => (
            item.hasDropdown ? (
              <div key={item.name} style={styles.dropdown} ref={dropdownRef}>
                <div
                  style={{
                    ...styles.navLink,
                    ...(isServicesActive() ? styles.activeNavLink : {}),
                  }}
                  className={`nav-link ${isServicesActive() ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setServicesDropdownOpen(!servicesDropdownOpen);
                  }}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <span style={styles.dropdownTrigger}>
                    {item.name}
                    <span style={styles.dropdownArrow}>▼</span>
                  </span>
                </div>
                <div 
                  style={styles.dropdownMenu}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  {item.subItems.map((subItem, index) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      style={{
                        ...styles.dropdownItem,
                        borderBottom: index === item.subItems.length - 1 ? 'none' : styles.dropdownItem.borderBottom
                      }}
                      className="dropdown-item"
                      onClick={() => handleNavLinkClick(item)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  ...styles.navLink,
                  ...(isActive(item.path) && !item.redirectToHome ? styles.activeNavLink : {}),
                }}
                className={`nav-link ${isActive(item.path) && !item.redirectToHome ? 'active' : ''}`}
                onClick={() => handleNavLinkClick(item)}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        {/* Hamburger Menu */}
        <div
          className="hamburger-menu"
          style={styles.hamburger}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span style={{
            ...styles.bar,
            transform: mobileMenuOpen ? 'rotate(45deg) translateY(11px)' : 'none'
          }}></span>
          <span style={{
            ...styles.bar,
            opacity: mobileMenuOpen ? 0 : 1
          }}></span>
          <span style={{
            ...styles.bar,
            transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-11px)' : 'none'
          }}></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu" style={styles.mobileMenu}>
        {navItems.map((item) => (
          <React.Fragment key={item.name}>
            <Link
              to={item.path}
              style={{
                ...styles.mobileNavLink,
                ...(isActive(item.path) && !item.redirectToHome || (item.hasDropdown && isServicesActive()) ? styles.activeMobileNavLink : {}),
              }}
              className="mobile-nav-link"
              onClick={item.hasDropdown ? (e) => e.preventDefault() : () => handleNavLinkClick(item)}
            >
              {item.name}
              {item.hasDropdown && <span style={{ marginLeft: 'auto' }}>▼</span>}
            </Link>
            {item.hasDropdown && item.subItems.map((subItem) => (
              <Link
                key={subItem.name}
                to={subItem.path}
                style={{
                  ...styles.mobileNavLink,
                  ...styles.mobileSubMenu,
                  ...(isActive(subItem.path) ? styles.activeMobileNavLink : {})
                }}
                className="mobile-nav-link"
                onClick={() => handleNavLinkClick(item)}
              >
                {subItem.name}
              </Link>
            ))}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Navbar;
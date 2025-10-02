import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

// Import Navbar
import Navbar from './components/common/Navbar';

// Import Footer and Chatbot
import ModernFooter from './pages/footer';
import HaloBot from './pages/SolarChatbot';

// Import your page components
import Home from './pages/Home';
import About from './pages/About';
import Barcode from './pages/Barcode';
import Choose from './pages/Choose';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import CookieConsent from './pages/CookieConsent';
import Gallery from './pages/Gallery';
import Hero from './pages/Hero';
import Mep from './pages/Mep';
import Privacy from './pages/privacy';
import Renewable from './pages/Renewable';
import Service from './pages/Service';
import SolarChatbot from './pages/SolarChatbot';
import Terms from './pages/terms';
import Blogs from './pages/Blogs';
import Careers from './pages/Careers';

function App() {
  return (
    <CookiesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          {/* Service routes - matching the paths in Navbar/Footer/Services */}
          <Route path="/services" element={<Service />} />
          <Route path="/services/renewable-energy" element={<Renewable />} />
          <Route path="/services/barcode-automation" element={<Barcode />} />
          <Route path="/services/mep-solutions" element={<Mep />} />
          
          {/* Keep old routes for backward compatibility if needed */}
          <Route path="/renewable" element={<Renewable />} />
          <Route path="/barcode" element={<Barcode />} />
          <Route path="/mep" element={<Mep />} />
          
          <Route path="/choose" element={<Choose />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/service" element={<Service />} />
          <Route path="/solar-chatbot" element={<SolarChatbot />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <ModernFooter />
        <CookieConsent />
        <SolarChatbot />
      </Router>
    </CookiesProvider>
  );
}

export default App;
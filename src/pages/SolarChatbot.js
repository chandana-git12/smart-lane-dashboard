import React, { useState, useRef, useEffect } from 'react';

const HaloBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWidget, setShowWidget] = useState(true);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! Welcome to HaloBot. We deliver pan India and provide Renewable Energy, Barcode Automation, and MEP Services. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const chatInputRef = useRef(null);

  // Scroll detection to show/hide widget
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowWidget(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && chatInputRef.current) {
      setTimeout(() => chatInputRef.current.focus(), 100);
    }
  }, [isOpen]);

  // Company knowledge base
  const companyResponses = {
    greetings: [
      "Hello! Welcome to HaloBot. We deliver pan India and provide Renewable Energy, Barcode Automation, and MEP Services. How can I help you today?",
      "Hi! We serve clients across India. Are you looking for renewable energy, barcode automation, or MEP services?",
      "We specialize in renewable energy solutions, barcode automation, and MEP services with pan India delivery. Our goal is to deliver smart, sustainable, and efficient solutions."
    ],
    services: [
      "We specialize in Renewable Energy solutions, Barcode Automation, and Mechanical, Electrical & Plumbing (MEP) services with pan India delivery.",
      "Our three main service areas are: 1) Renewable Energy (Solar & Wind systems), 2) Barcode Automation solutions, and 3) Complete MEP services for all types of projects. We serve clients across India."
    ],
    renewable: [
      "We provide renewable energy solutions for homes, businesses, and industries across India. Our solar energy systems help reduce electricity costs and support a cleaner environment.",
      "Our renewable energy services include solar rooftop systems, hybrid setups, large-scale renewable projects, and battery backup systems with monitoring and maintenance. Available pan India.",
      "Yes, we provide solar rooftop solutions for residential buildings, industrial renewable projects, and can guide you with solar subsidies and government benefits. We deliver across India."
    ],
    solar: [
      "We design and install customized solar power systems including rooftop & ground-mounted installations (On-Grid, Off-Grid, Hybrid) with durable and efficient solar panels. Services available pan India.",
      "Our solar solutions include rooftop systems, hybrid setups, battery backup, net metering support, and comprehensive technical feasibility studies.",
      "Yes, we can guide you with solar subsidies and policies. We provide solar rooftop solutions and handle end-to-end renewable projects from concept to commissioning across India."
    ],
    barcode: [
      "We provide complete barcode automation solutions to streamline operations. Our barcode systems ensure accurate tracking and process efficiency with seamless integration into existing business workflows. Available pan India.",
      "Barcode automation helps improve business efficiency and reduces manual errors. We offer barcode software integration with ERP systems, scanners, printers, and QR code solutions.",
      "Our barcode solutions include cloud-based tracking, smart warehouse solutions, and support for retail, logistics, and manufacturing industries across India."
    ],
    automation: [
      "Our automation systems include barcode scanners, printers, software integration with ERP systems, and cloud-based tracking solutions. We serve clients throughout India.",
      "We provide scalable barcode automation for any business size, with 24/7 support, real-time tracking, and solutions that work with Android and iOS."
    ],
    mep: [
      "MEP stands for Mechanical, Electrical, and Plumbing services. We provide complete MEP services for residential and commercial projects with design and execution. Available pan India.",
      "Our MEP services include HVAC systems, electrical wiring and panels, plumbing and drainage, fire protection systems, and ensure compliance with industry standards.",
      "We handle both design and execution of MEP works, providing energy-efficient solutions, maintenance services, and cover industries, offices, and hospitals across India."
    ],
    electrical: [
      "We handle wiring, distribution boards, electrical panels, lighting, and complete electrical services ensuring safety and compliance as our top priorities.",
      "Our electrical works include power distribution, lighting systems, and we use advanced tools for installation with long-term support and AMC for electrical projects."
    ],
    plumbing: [
      "Our plumbing services include piping, drainage, water supply systems, and we ensure leak-proof solutions for large-scale projects.",
      "We provide plumbing design for residential and industrial solutions with our team ensuring reliable and efficient water management systems."
    ],
    hvac: [
      "Yes, we provide HVAC design, installation, and maintenance for homes, offices, and industries ensuring comfort and energy savings.",
      "Our HVAC systems ensure high efficiency, reliability, and we deliver cost-effective solutions with proper ventilation and temperature control."
    ],
    maintenance: [
      "Yes, we provide AMC (Annual Maintenance Contracts) for Renewable Energy, Barcode, and MEP services with 24/7 customer support across India.",
      "We offer long-term support, maintenance contracts, and inspection services for all our renewable energy, barcode automation, and MEP projects."
    ],
    consultation: [
      "Yes, we offer free consultation and project assessment before execution. We can schedule a consultation call and provide customized proposals for clients across India.",
      "We provide consultation before project execution, site surveys for solar installation, and technical guidance for all our services."
    ]
  };

  const getResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return companyResponses.greetings[Math.floor(Math.random() * companyResponses.greetings.length)];
    }
    
    if (lowerMessage.includes('service') && !lowerMessage.includes('mep') && !lowerMessage.includes('barcode') && !lowerMessage.includes('solar')) {
      return companyResponses.services[Math.floor(Math.random() * companyResponses.services.length)];
    }
    
    if (lowerMessage.includes('renewable') || lowerMessage.includes('clean energy') || lowerMessage.includes('green energy')) {
      return companyResponses.renewable[Math.floor(Math.random() * companyResponses.renewable.length)];
    }
    
    if (lowerMessage.includes('solar') || lowerMessage.includes('panel') || lowerMessage.includes('rooftop')) {
      return companyResponses.solar[Math.floor(Math.random() * companyResponses.solar.length)];
    }
    
    if (lowerMessage.includes('barcode') || lowerMessage.includes('qr') || lowerMessage.includes('inventory')) {
      return companyResponses.barcode[Math.floor(Math.random() * companyResponses.barcode.length)];
    }
    
    if (lowerMessage.includes('automation') || lowerMessage.includes('erp') || lowerMessage.includes('scanner')) {
      return companyResponses.automation[Math.floor(Math.random() * companyResponses.automation.length)];
    }
    
    if (lowerMessage.includes('mep') || lowerMessage.includes('mechanical') || lowerMessage.includes('electrical') || lowerMessage.includes('plumbing')) {
      return companyResponses.mep[Math.floor(Math.random() * companyResponses.mep.length)];
    }
    
    if (lowerMessage.includes('electrical') || lowerMessage.includes('wiring') || lowerMessage.includes('lighting')) {
      return companyResponses.electrical[Math.floor(Math.random() * companyResponses.electrical.length)];
    }
    
    if (lowerMessage.includes('plumbing') || lowerMessage.includes('piping') || lowerMessage.includes('water')) {
      return companyResponses.plumbing[Math.floor(Math.random() * companyResponses.plumbing.length)];
    }
    
    if (lowerMessage.includes('hvac') || lowerMessage.includes('ventilation') || lowerMessage.includes('air conditioning')) {
      return companyResponses.hvac[Math.floor(Math.random() * companyResponses.hvac.length)];
    }
    
    if (lowerMessage.includes('maintenance') || lowerMessage.includes('amc') || lowerMessage.includes('support')) {
      return companyResponses.maintenance[Math.floor(Math.random() * companyResponses.maintenance.length)];
    }
    
    if (lowerMessage.includes('consultation') || lowerMessage.includes('consult') || lowerMessage.includes('advice')) {
      return companyResponses.consultation[Math.floor(Math.random() * companyResponses.consultation.length)];
    }
    
    if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('quote')) {
      return "We provide customized quotations based on your specific requirements. Please share your project details and we'll send you a detailed proposal. You can also request a free consultation for accurate pricing.";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('call') || lowerMessage.includes('phone')) {
      return "You can share your contact details and our team will reach out to you directly. We also provide free consultation and project assessment before execution.";
    }
    
    return "I can help you with information about our Renewable Energy solutions, Barcode Automation systems, and MEP services. We serve clients across India. What specific aspect would you like to know more about?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        content: getResponse(inputValue),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div
        className="chat-button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #0f172a, #1e293b)',
          cursor: 'pointer',
          zIndex: 1000,
          display: showWidget ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(15, 23, 42, 0.4), 0 2px 8px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'scale(0.95)' : 'scale(1)',
          border: '3px solid #f9fafb',
        }}
        onMouseEnter={(e) => {
          if (!isOpen) e.target.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          if (!isOpen) e.target.style.transform = 'scale(1)';
        }}
      >
        <div style={{
          fontSize: isOpen ? '20px' : '24px',
          color: 'white',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>
          {isOpen ? '✕' : '💬'}
        </div>
      </div>

      {/* Chat Window */}
      <div
        className="chat-window"
        style={{
          position: 'fixed',
          bottom: '96px',
          right: '24px',
          width: '380px',
          height: '520px',
          borderRadius: '12px',
          background: '#ffffff',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          zIndex: 999,
          transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.95)',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: '1px solid #e5e7eb',
        }}
      >
        {/* Header */}
        <div
          className="chat-header"
          style={{
            background: 'linear-gradient(135deg, #0f172a, #1e293b)',
            padding: '20px 24px',
            color: 'white',
            borderRadius: '12px 12px 0 0',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              🏢
            </div>
            <div>
              <div style={{ fontWeight: '600', fontSize: '16px', marginBottom: '2px' }}>
                HaloBot
              </div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>
                <span style={{
                  display: 'inline-block',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#10b981',
                  marginRight: '6px'
                }}></span>
                Pan India • Renewable Energy • Barcode • MEP
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div
          className="chat-messages"
          style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            background: '#f8fafc',
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)',
            backgroundSize: '20px 20px',
          }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start',
                marginBottom: '16px',
                alignItems: 'flex-end',
                gap: '8px',
              }}
            >
              {message.type === 'bot' && (
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    flexShrink: 0,
                    marginBottom: '2px',
                  }}
                >
                  🏢
                </div>
              )}
              <div
                style={{
                  maxWidth: '75%',
                  padding: '12px 16px',
                  borderRadius: message.type === 'user' 
                    ? '16px 16px 4px 16px' 
                    : '16px 16px 16px 4px',
                  background: message.type === 'user' 
                    ? 'linear-gradient(135deg, #0f172a, #1e293b)'
                    : '#ffffff',
                  color: message.type === 'user' ? 'white' : '#374151',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  boxShadow: message.type === 'user' 
                    ? 'none'
                    : '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
                  border: message.type === 'bot' ? '1px solid #e5e7eb' : 'none',
                }}
              >
                {message.content}
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div style={{ 
              display: 'flex', 
              justifyContent: 'flex-start', 
              marginBottom: '16px',
              alignItems: 'flex-end',
              gap: '8px',
            }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0f172a, #1e293b)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  flexShrink: 0,
                  marginBottom: '2px',
                }}
              >
                🏢
              </div>
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '16px 16px 16px 4px',
                  background: '#ffffff',
                  fontSize: '14px',
                  color: '#9ca3af',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
                  border: '1px solid #e5e7eb',
                }}
              >
                <div style={{
                  display: 'flex',
                  gap: '2px',
                }}>
                  <div style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: '#9ca3af',
                    animation: 'typing 1.4s infinite ease-in-out',
                  }}></div>
                  <div style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: '#9ca3af',
                    animation: 'typing 1.4s infinite ease-in-out 0.2s',
                  }}></div>
                  <div style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: '#9ca3af',
                    animation: 'typing 1.4s infinite ease-in-out 0.4s',
                  }}></div>
                </div>
                <span style={{ marginLeft: '6px' }}>HaloBot is typing...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div
          className="chat-input-container"
          style={{
            padding: '20px',
            background: 'white',
            borderTop: '1px solid #e5e7eb',
            borderRadius: '0 0 12px 12px',
          }}
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end' }}>
            <input
              ref={chatInputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about our services..."
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '20px',
                border: '2px solid #e5e7eb',
                outline: 'none',
                fontSize: '14px',
                transition: 'border-color 0.2s',
                background: '#f9fafb',
                resize: 'none',
                minHeight: '44px',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#1e293b';
                e.target.style.background = 'white';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e5e7eb';
                e.target.style.background = '#f9fafb';
              }}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: 'none',
                background: inputValue.trim() ? 'linear-gradient(135deg, #0f172a, #1e293b)' : '#e5e7eb',
                color: inputValue.trim() ? 'white' : '#9ca3af',
                cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                transition: 'all 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                if (inputValue.trim()) {
                  e.target.style.transform = 'scale(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (inputValue.trim()) {
                  e.target.style.transform = 'scale(1)';
                }
              }}
            >
              ➤
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
        }
        
        @media (max-width: 768px) {
          .chat-window {
            width: calc(100vw - 24px) !important;
            height: calc(100vh - 100px) !important;
            max-height: 600px !important;
            right: 12px !important;
            bottom: 84px !important;
            border-radius: 16px !important;
          }
          
          .chat-button {
            width: 56px !important;
            height: 56px !important;
            bottom: 16px !important;
            right: 12px !important;
          }
        }
        
        @media (max-width: 480px) {
          .chat-window {
            width: 100vw !important;
            height: 100vh !important;
            max-height: 100vh !important;
            right: 0 !important;
            bottom: 0 !important;
            border-radius: 0 !important;
            border: none !important;
          }
          
          .chat-button {
            width: 52px !important;
            height: 52px !important;
            bottom: 12px !important;
            right: 12px !important;
          }
          
          .chat-header {
            padding: 16px 20px !important;
          }
          
          .chat-messages {
            padding: 16px !important;
          }
          
          .chat-input-container {
            padding: 16px !important;
          }
        }
      `}</style>
    </>
  );
};

export default HaloBot;
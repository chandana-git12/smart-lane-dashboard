import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ownerPhone = "919844342719";
    const ownerEmail = "halotechnologies04@gmail.com";

    const textMessage = `New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const whatsappLink = `https://wa.me/${ownerPhone}?text=${encodeURIComponent(
      textMessage
    )}`;

    const mailtoLink = `mailto:${ownerEmail}?subject=New Contact Message&body=${encodeURIComponent(
      textMessage
    )}`;

    const choice = window.prompt(
      "How would you like to send this message?\nType: '1' for WhatsApp, '2' for Email"
    );

    if (choice === "1") {
      window.open(whatsappLink, "_blank");
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSubmitted(false);
      }, 2000);
    } else if (choice === "2") {
      window.location.href = mailtoLink;
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSubmitted(false);
      }, 2000);
    } else {
      alert("No valid option selected.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8f9fa",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        color: "#1a1a1a",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          padding: "6rem 2rem 4rem",
          textAlign: "center",
          background: "linear-gradient(135deg, #ffffff 0%, #f0f3f7 100%)",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
            fontWeight: "800",
            marginBottom: "0.8rem",
            color: "#1a2847",
            letterSpacing: "-0.5px",
          }}
        >
          Get in Touch
        </h1>
        <p
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            fontWeight: "400",
            opacity: 0.7,
            maxWidth: "700px",
            margin: "0 auto",
            color: "#4a5568",
            lineHeight: 1.6,
          }}
        >
          Have a project in mind? Let's discuss how we can help you with comprehensive MEP solutions. Fill out the form below and we'll get back to you shortly.
        </p>
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "4rem 2rem",
        }}
      >
        {/* Contact Form */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            padding: "3rem",
            boxShadow: "0 2px 12px rgba(26, 40, 71, 0.08)",
            border: "1px solid #e5e7eb",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              marginBottom: "2.5rem",
              color: "#1a2847",
              textAlign: "center",
            }}
          >
            Send us a Message
          </h2>

          {submitted && (
            <div
              style={{
                padding: "1.2rem",
                background: "#d4edda",
                color: "#155724",
                borderRadius: "8px",
                marginBottom: "1.5rem",
                fontSize: "0.95rem",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Message sent successfully! We'll be in touch soon.
            </div>
          )}

          <div>
            <div style={{ marginBottom: "1.8rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.6rem",
                  fontWeight: "600",
                  color: "#1a2847",
                  fontSize: "0.95rem",
                }}
              >
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                style={{
                  width: "100%",
                  padding: "0.9rem 1.1rem",
                  border: "2px solid #e5e7eb",
                  borderRadius: "8px",
                  background: "#f8f9fa",
                  fontSize: "0.95rem",
                  fontFamily: "inherit",
                  transition: "all 0.3s ease",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#1a2847";
                  e.target.style.background = "#ffffff";
                  e.target.style.boxShadow = "0 0 0 3px rgba(26, 40, 71, 0.05)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
                  e.target.style.background = "#f8f9fa";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <div style={{ marginBottom: "1.8rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.6rem",
                  fontWeight: "600",
                  color: "#1a2847",
                  fontSize: "0.95rem",
                }}
              >
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                style={{
                  width: "100%",
                  padding: "0.9rem 1.1rem",
                  border: "2px solid #e5e7eb",
                  borderRadius: "8px",
                  background: "#f8f9fa",
                  fontSize: "0.95rem",
                  fontFamily: "inherit",
                  transition: "all 0.3s ease",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#1a2847";
                  e.target.style.background = "#ffffff";
                  e.target.style.boxShadow = "0 0 0 3px rgba(26, 40, 71, 0.05)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
                  e.target.style.background = "#f8f9fa";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <div style={{ marginBottom: "1.8rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.6rem",
                  fontWeight: "600",
                  color: "#1a2847",
                  fontSize: "0.95rem",
                }}
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                style={{
                  width: "100%",
                  padding: "0.9rem 1.1rem",
                  border: "2px solid #e5e7eb",
                  borderRadius: "8px",
                  background: "#f8f9fa",
                  fontSize: "0.95rem",
                  fontFamily: "inherit",
                  transition: "all 0.3s ease",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#1a2847";
                  e.target.style.background = "#ffffff";
                  e.target.style.boxShadow = "0 0 0 3px rgba(26, 40, 71, 0.05)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
                  e.target.style.background = "#f8f9fa";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.6rem",
                  fontWeight: "600",
                  color: "#1a2847",
                  fontSize: "0.95rem",
                }}
              >
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your MEP project requirements..."
                style={{
                  width: "100%",
                  padding: "0.9rem 1.1rem",
                  border: "2px solid #e5e7eb",
                  borderRadius: "8px",
                  background: "#f8f9fa",
                  fontSize: "0.95rem",
                  fontFamily: "inherit",
                  minHeight: "140px",
                  resize: "vertical",
                  transition: "all 0.3s ease",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#1a2847";
                  e.target.style.background = "#ffffff";
                  e.target.style.boxShadow = "0 0 0 3px rgba(26, 40, 71, 0.05)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb";
                  e.target.style.background = "#f8f9fa";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              style={{
                width: "100%",
                padding: "1.1rem",
                background: "#1a2847",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                letterSpacing: "0.5px",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#0f1729";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 16px rgba(26, 40, 71, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#1a2847";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <div
          style={{
            marginTop: "3rem",
            textAlign: "center",
            color: "#4a5568",
            fontSize: "0.95rem",
          }}
        >
          <p>
            We typically respond within 24 hours. For urgent matters, please contact us directly at <strong style={{ color: "#1a2847" }}>+91 98443 42719</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
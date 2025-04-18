import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1f2937",
        color: "white",
        padding: "4rem 2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {/* Company Info */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Real Estate
          </h3>
          <p style={{ color: "#9ca3af", lineHeight: "1.6" }}>
            Your trusted partner in finding the perfect property. We specialize
            in residential and commercial real estate solutions.
          </p>
        </div>

        {/* Contact Information */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Contact Info
          </h3>
          <div style={{ color: "#9ca3af", lineHeight: "1.6" }}>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@realestate.com</p>
            <p>
              123 Real Estate Street
              <br />
              City, State 12345
            </p>
          </div>
        </div>

        {/* Business Hours */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Business Hours
          </h3>
          <div style={{ color: "#9ca3af", lineHeight: "1.6" }}>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "2rem auto 0",
          paddingTop: "2rem",
          borderTop: "1px solid #374151",
          textAlign: "center",
          color: "#9ca3af",
        }}
      >
        <p>
          &copy; {new Date().getFullYear()} Real Estate. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

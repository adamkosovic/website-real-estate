import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#f3f4f6",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            maxWidth: "600px",
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              color: "#1f2937",
              lineHeight: "1.2",
            }}
          >
            Find Your Perfect Property
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#4b5563",
              lineHeight: "1.6",
            }}
          >
            Discover exceptional properties in prime locations. From luxury
            homes to smart investments, we help you find the perfect real estate
            opportunity.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              style={{
                backgroundColor: "#2563eb",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.375rem",
                fontSize: "1rem",
                fontWeight: "500",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            >
              View Properties
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                color: "#2563eb",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.375rem",
                fontSize: "1rem",
                fontWeight: "500",
                border: "2px solid #2563eb",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

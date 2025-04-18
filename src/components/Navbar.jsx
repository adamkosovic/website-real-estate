import React from "react";

const Navbar = ({ transparent = false }) => {
  return (
    <nav
      style={{
        backgroundColor: transparent ? "transparent" : "white",
        boxShadow: transparent
          ? "none"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        padding: "1rem 0",
        margin: transparent ? "0" : "1rem 1rem",
        borderRadius: transparent ? "0" : "0.5rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo/Brand - Top Left */}
          <div style={{ width: "25%", paddingLeft: "2rem" }}>
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: transparent ? "white" : "#2563eb",
              }}
            >
              Real Estate
            </span>
          </div>

          {/* Navigation Links - Center */}
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <a
              href="#"
              style={{
                color: transparent ? "white" : "#374151",
                padding: "0.5rem 0.75rem",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              Home
            </a>
            <a
              href="#"
              style={{
                color: transparent ? "white" : "#374151",
                padding: "0.5rem 0.75rem",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              About
            </a>
            <a
              href="#"
              style={{
                color: transparent ? "white" : "#374151",
                padding: "0.5rem 0.75rem",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              Projects
            </a>
            <a
              href="#"
              style={{
                color: transparent ? "white" : "#374151",
                padding: "0.5rem 0.75rem",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              Testimonials
            </a>
          </div>

          {/* Sign Up Button - Top Right */}
          <div
            style={{
              width: "25%",
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "2rem",
            }}
          >
            <button
              style={{
                backgroundColor: transparent ? "transparent" : "white",
                color: transparent ? "white" : "black",
                fontWeight: "500",
                padding: "0.4rem 1rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                border: transparent ? "2px solid white" : "1px solid #e5e7eb",
                cursor: "pointer",
                boxShadow: transparent
                  ? "none"
                  : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                minWidth: "100px",
                textAlign: "center",
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

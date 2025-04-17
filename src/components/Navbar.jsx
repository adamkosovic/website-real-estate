import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "white",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        padding: "1rem 0",
        margin: "1rem 1rem",
        borderRadius: "0.5rem",
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
                color: "#2563eb",
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
                color: "#374151",
                padding: "0.5rem 0.75rem",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: "500",
              }}
            >
              Home
            </a>
            <a
              href="#"
              style={{
                color: "#374151",
                padding: "0.5rem 0.75rem",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: "500",
              }}
            >
              About
            </a>
            <a
              href="#"
              style={{
                color: "#374151",
                padding: "0.5rem 0.75rem",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: "500",
              }}
            >
              Projects
            </a>
            <a
              href="#"
              style={{
                color: "#374151",
                padding: "0.5rem 0.75rem",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: "500",
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
                backgroundColor: "#2563eb",
                color: "white",
                fontWeight: "500",
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                border: "none",
                cursor: "pointer",
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

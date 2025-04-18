import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import headerImage from "../assets/images/header.jpg";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div
        style={{
          position: "relative",
          height: "700px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Background Image with Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${headerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Navbar positioned over the image */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <Navbar transparent={true} />
        </div>

        {/* Text Content */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              maxWidth: "700px",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
              lineHeight: "1.2",
              marginBottom: "2rem",
            }}
          >
            Explore homes that fit your dreams
          </h1>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <button
              style={{
                backgroundColor: "transparent",
                color: "white",
                fontWeight: "500",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                border: "2px solid white",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Projects
            </button>
            <button
              style={{
                backgroundColor: "#2563eb",
                color: "white",
                fontWeight: "500",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />
    </div>
  );
};

export default App;

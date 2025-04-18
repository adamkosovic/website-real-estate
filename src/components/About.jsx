import React from "react";
import aboutImage from "../assets/images/aboutus.jpg";

const About = () => {
  return (
    <div
      style={{
        padding: "8rem 2rem",
        backgroundColor: "#f9fafb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ fontWeight: "bold" }}>About</span>
          <span
            style={{
              borderBottom: "1px solid black",
              fontWeight: "200",
              display: "inline-block",
              width: "auto",
              fontSize: "2rem",
            }}
          >
            Our Brand
          </span>
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            color: "#6b7280",
            marginBottom: "4rem",
            maxWidth: "500px",
            margin: "0 auto 4rem",
          }}
        >
          Passionate About Properties, Dedicated to Your Vision
        </p>

        {/* Main content with image and text */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          {/* Left side - Image */}
          <div
            style={{
              position: "relative",
              height: "500px",
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transform: "scale(1.1)",
              transformOrigin: "right center",
            }}
          >
            <img
              src={aboutImage}
              alt="About Us"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "right center",
                transform: "scale(1.2)",
              }}
            />
          </div>

          {/* Right side - Text content */}
          <div style={{ textAlign: "left" }}>
            {/* Statistics in two columns */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
                marginBottom: "2rem",
              }}
            >
              {/* Column 1 */}
              <div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "500",
                    color: "#1f2937",
                    marginBottom: "0.5rem",
                  }}
                >
                  10+
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#6b7280",
                  }}
                >
                  Years of Excellence
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "500",
                    color: "#1f2937",
                    marginBottom: "0.5rem",
                  }}
                >
                  12+
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#6b7280",
                  }}
                >
                  Projects Completed
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "500",
                    color: "#1f2937",
                    marginBottom: "0.5rem",
                  }}
                >
                  20+
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#6b7280",
                  }}
                >
                  Mn. Sq Ft. delivered
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "500",
                    color: "#1f2937",
                    marginBottom: "0.5rem",
                  }}
                >
                  25+
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#6b7280",
                  }}
                >
                  Ongoing Projects
                </div>
              </div>
            </div>

            {/* Brief description text */}
            <p
              style={{
                fontSize: "0.95rem",
                color: "#4b5563",
                marginBottom: "2rem",
                lineHeight: "1.5",
              }}
            >
              With our proven track record and dedicated team, we deliver
              exceptional results for our clients. Our approach combines market
              expertise with personalized service to help you achieve your real
              estate goals.
            </p>

            {/* Call to action button */}
            <button
              style={{
                backgroundColor: "#2563eb",
                color: "white",
                fontWeight: "400",
                padding: "0.7rem 1.5rem",
                borderRadius: "0.5rem",
                fontSize: "0.9rem",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";

const Customer = () => {
  return (
    <div
      style={{
        padding: "8rem 2rem",
        backgroundColor: "#ffffff",
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
          <span style={{ fontWeight: "bold" }}>Customer</span>
          <span
            style={{
              borderBottom: "1px solid black",
              fontWeight: "200",
              display: "inline-block",
              width: "auto",
              fontSize: "2rem",
            }}
          >
            Testimonials
          </span>
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            color: "#6b7280",
            marginBottom: "4rem",
            maxWidth: "600px",
            margin: "0 auto 4rem",
          }}
        >
          What Our Clients Say About Our Services
        </p>

        {/* Testimonial Cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              width: "350px",
              padding: "2rem",
              backgroundColor: "#f9fafb",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                color: "#4b5563",
                marginBottom: "1.5rem",
                lineHeight: "1.6",
              }}
            >
              "Working with this team was an absolute pleasure. They delivered
              our dream home exactly as we envisioned it."
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#e5e7eb",
                }}
              />
              <div>
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#1f2937",
                    marginBottom: "0.25rem",
                  }}
                >
                  John Smith
                </h4>
                <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                  Homeowner
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              width: "350px",
              padding: "2rem",
              backgroundColor: "#f9fafb",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                color: "#4b5563",
                marginBottom: "1.5rem",
                lineHeight: "1.6",
              }}
            >
              "The attention to detail and professionalism throughout the entire
              process exceeded our expectations."
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#e5e7eb",
                }}
              />
              <div>
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#1f2937",
                    marginBottom: "0.25rem",
                  }}
                >
                  Sarah Johnson
                </h4>
                <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                  Business Owner
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            style={{
              width: "350px",
              padding: "2rem",
              backgroundColor: "#f9fafb",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                color: "#4b5563",
                marginBottom: "1.5rem",
                lineHeight: "1.6",
              }}
            >
              "Their expertise in real estate development helped us create a
              successful commercial property investment."
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#e5e7eb",
                }}
              />
              <div>
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#1f2937",
                    marginBottom: "0.25rem",
                  }}
                >
                  Michael Brown
                </h4>
                <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                  Investor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;

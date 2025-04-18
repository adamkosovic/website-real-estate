import React from "react";

const Contact = () => {
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
          <span style={{ fontWeight: "bold" }}>Contact</span>
          <span
            style={{
              borderBottom: "1px solid black",
              fontWeight: "200",
              display: "inline-block",
              width: "auto",
              fontSize: "2rem",
            }}
          >
            Us
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
          Get in Touch with Our Real Estate Experts
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "4rem",
            flexWrap: "wrap",
          }}
        >
          {/* Contact Form */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              maxWidth: "500px",
            }}
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{
                    flex: "1",
                    minWidth: "200px",
                    padding: "0.75rem",
                    borderRadius: "0.375rem",
                    border: "1px solid #e5e7eb",
                    fontSize: "1rem",
                  }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  style={{
                    flex: "1",
                    minWidth: "200px",
                    padding: "0.75rem",
                    borderRadius: "0.375rem",
                    border: "1px solid #e5e7eb",
                    fontSize: "1rem",
                  }}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                style={{
                  padding: "0.75rem",
                  borderRadius: "0.375rem",
                  border: "1px solid #e5e7eb",
                  fontSize: "1rem",
                }}
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                style={{
                  padding: "0.75rem",
                  borderRadius: "0.375rem",
                  border: "1px solid #e5e7eb",
                  fontSize: "1rem",
                  resize: "vertical",
                }}
              />
              <button
                type="submit"
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
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

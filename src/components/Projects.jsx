import React, { useState } from "react";
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import project5 from "../assets/images/project5.jpg";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      image: project1,
      title: "Luxury Apartments",
      location: "Downtown",
      price: "$450,000",
    },
    {
      id: 2,
      image: project2,
      title: "Modern Villa",
      location: "Suburbs",
      price: "$850,000",
    },
    {
      id: 3,
      image: project3,
      title: "Business Complex",
      location: "Business District",
      price: "$1,200,000",
    },
    {
      id: 4,
      image: project4,
      title: "Residential Community",
      location: "Green Valley",
      price: "$350,000",
    },
    {
      id: 5,
      image: project5,
      title: "Mixed-Use Development",
      location: "City Center",
      price: "$950,000",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 4 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 4 : prevIndex - 1
    );
  };

  // Get the 4 projects to display
  const visibleProjects = projects.slice(currentIndex, currentIndex + 4);

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
          <span style={{ fontWeight: "bold" }}>Projects</span>
          <span
            style={{
              borderBottom: "1px solid black",
              fontWeight: "200",
              display: "inline-block",
              width: "auto",
              fontSize: "2rem",
            }}
          >
            Completed
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
          Crafting Spaces, Building Legacies - Explore Our Portfolio
        </p>

        {/* Image Carousel */}
        <div
          style={{
            position: "relative",
            width: "100%",
            marginBottom: "3rem",
          }}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            style={{
              position: "absolute",
              top: "50%",
              left: "-20px",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              color: "#1f2937",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
              cursor: "pointer",
              fontSize: "1.5rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              zIndex: 10,
            }}
          >
            &#8249;
          </button>
          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              top: "50%",
              right: "-20px",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              color: "#1f2937",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
              cursor: "pointer",
              fontSize: "1.5rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              zIndex: 10,
            }}
          >
            &#8250;
          </button>

          {/* Images Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1.5rem",
              overflow: "hidden",
              padding: "0 1rem",
            }}
          >
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                style={{
                  width: "270px",
                  height: "320px",
                  overflow: "hidden",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  position: "relative",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 30%",
                    transform: "scale(1.1)",
                  }}
                />
                {/* White Info Box */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "70%",
                    padding: "0.3rem 0.6rem 0.4rem 0.6rem",
                    backgroundColor: "white",
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    borderRadius: "4px",
                    zIndex: 5,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                      marginBottom: "0.1rem",
                      marginTop: "0",
                      color: "#1f2937",
                      textAlign: "center",
                    }}
                  >
                    {project.title}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.7rem",
                      gap: "0.2rem",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#2563eb",
                      }}
                    >
                      {project.price || "$0"}
                    </span>
                    <span
                      style={{
                        color: "#6b7280",
                      }}
                    >
                      |
                    </span>
                    <span
                      style={{
                        color: "#6b7280",
                        fontWeight: "500",
                      }}
                    >
                      {project.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects grid will go here */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          {/* Project cards will be added here */}
        </div>
      </div>
    </div>
  );
};

export default Projects;

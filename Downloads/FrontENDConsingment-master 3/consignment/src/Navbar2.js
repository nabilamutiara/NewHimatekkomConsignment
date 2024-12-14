import "./Navbar2.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  // Function for smooth scrolling to the About section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('aboutSection');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="allnavbar2">
        <Link to="/home2" className="Home">
          Home
        </Link>
        <Link to="/find" className="Find">
          Find
        </Link>
        <div 
          className="About" 
          onClick={() => {
            const currentPath = window.location.pathname;
            if (currentPath !== "/home2") {
              // Navigasi ke /home2 jika belum berada di halaman tersebut
              window.location.href = "/home2#aboutSection";
            } else {
              // Jika sudah di halaman /home2, scroll ke aboutSection
              const aboutSection = document.getElementById("aboutSection");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }
          }} 
          role="button" 
          aria-label="Scroll to About section"
        >
          About
        </div>
        <Link to="/home2" className="cross-icon" role="button" aria-label="Close">
          ✖
        </Link>
        
      </div>
    </>
  );
};

export default Navbar2;

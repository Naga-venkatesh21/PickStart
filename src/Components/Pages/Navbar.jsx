import React, { useState, useEffect } from "react";
import "../Css/Navbar.css";
import logo from "../../Assets/main-logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to section on the home page
  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      // Navigate to home first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu if open
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container" id="navbar">
        <div className="logo">
          <a href="/" className="nav-logo" 
          onClick={() => {
                setIsOpen(false);
               

              }}
              >
            <img src={logo} alt="Pickstart-Logo" />
          </a>
        </div>

        <div className="logo-side">
          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li>
              <Link to="/" 
              onClick={() => handleScrollTo("home")}>Home</Link>
            </li>
            <li>
              <div
                className="nav-div-link"
                onClick={() => handleScrollTo("about")}
              >
                About
              </div>
            </li>
            <li>
              <Link to="/services" onClick={() => {
                setIsOpen(false);
                window.scrollTo({
                  top: 0, 
                })
              }
                }>
                Services
              </Link>
            </li>
            <li>
              <div
                className="nav-div-link"
                onClick={() => handleScrollTo("why")}
              >
                Why Us
              </div>
            </li>
            <li>
              <div
                className="nav-div-link"
                onClick={() => handleScrollTo("contact")}
              >
                Contact
              </div>
            </li>
            <li>
              <a href="https://forms.gle/AGKPALXw9PrMyBj56"
                 target="_blank"
                 rel="noreferrer">
                <button className="btn-primary"  onClick={() => setIsOpen(false)}>
                Let's Connect
              </button>
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}



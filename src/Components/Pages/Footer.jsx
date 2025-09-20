import React from "react";
import "../Css/Footer.css";
import Logo from "../../Assets/main-logo.png"
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {

  const [, setIsOpen] = useState(false);
  const [, setIsScrolled] = useState(false);

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
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand */}
        <div className="footer-brand">
           <img src={Logo} alt="Pickstart-Logo" />
          
          <p>
            We’re the team — empowering early-stage startup founders and failed startups(to rebuild) with the technology, Services, tools and support they need to move from idea to successfull Entrepreneur.
          </p>
        </div>
        {/* Navigation Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/" onClick={() => handleScrollTo("home")}>Home</Link></li>
            <li><button onClick={() => handleScrollTo("about")}>About</button></li>
            <li><Link to="/services" onClick={() => setIsOpen(false)}>
                  Services
                </Link></li>
            <li><button onClick={() => handleScrollTo("why")}>Why</button></li>
            <li><button onClick={() => handleScrollTo("contact")}>Contact</button></li>
          </ul>
        </div>
            
        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: pickstart1@gmail.com</p>
          <p>Phone: +91 8328309191</p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Support Us</h3>
          <div className="social-icons">
           
            <a href="https://www.linkedin.com/company/pickstart/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/pickstart_/?utm_source=qr&r=nametag" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} <span>PickStart</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

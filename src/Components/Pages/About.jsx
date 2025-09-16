import React from "react";
import "../Css/About.css";
import aboutIllustration from "../../Assets/about-us.png"; 
import { Lightbulb, Search, Rocket, Target, TrendingUp, Globe} from "lucide-react"; 
import { Link, useLocation} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Download from "../../Assets/download.png"
import Working from "../../Assets/working.svg"
import Plan from "../../Assets/planning.svg"
import Webdev from "../../Assets/web-dev.svg"
import Brand from "../../Assets/brand-id.svg"




const steps = [
  {
    icon: <Lightbulb size={40} />,
    title: "Idea Discovery",
    desc: "We brainstorm and uncover unique startup ideas tailored for you.",
  },
  {
    icon: <Search size={40} />,
    title: "Market Research",
    desc: "We validate your idea with in-depth market and competitor analysis.",
  },
  {
    icon: <Rocket size={40} />,
    title: "Prototype & Test",
    desc: "We help you design and test an MVP for real-world feedback.",
  },
  {
    icon: <Target size={40} />,
    title: "Launch & Scale",
    desc: "We support you in launching and scaling your startup successfully.",
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Growth",
    desc: "Scale your product, optimize processes, and expand your customer base."
  },
  {
    icon: <Globe size={40} />,
    title: "Global Reach",
    desc: "Expand into international markets and build a global brand presence."
  }
];

const service = [
  {
    title: "Flexible Support",
    desc: "Skip the burden of hiring full-time employees — we provide on-demand services to cover your small but essential startup needs.",
    img: Working
  },
  {
    title: "Pitch Decks & Fund Plans",
    desc: "Get investor-ready with impactful pitch decks and smart fund usage strategies to secure funding and scale wisely.",
    img: Plan
  },
   {
      title: "Websites & Apps & Saas",
      desc: "We build cost-efficient, scalable websites, apps, and SaaS MVPs that bring your startup idea to life — without the heavy hiring costs.",
      img: Webdev
    },
    {
      title: "Brand Identity",
      desc: "From logos to full brand kits, we craft professional, memorable designs that make your startup stand out in the crowd.",
      img: Brand
    },
];

const About = () => {
   const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
  AOS.init({ duration: 800, once: true });
}, []);
  return (
    <div className="container" id="about">

    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero" >
        <div className="about-image">
          <img src={aboutIllustration} alt="About illustration" />
        </div>
        <div className="about-text">
          <h1>About <span>PickStart</span></h1>
          <p>
            We are on a mission to help innovators, entrepreneurs, and dreamers
            turn sparks of inspiration into impactful solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <h2>Our Core Values</h2>
        <div className="mission-cards">
          <div className="card">
            <h3>Innovation</h3>
            <p>We believe every idea deserves the right environment to grow.</p>
          </div>
          <div className="card">
            <h3>Trust</h3>
            <p>Your ideas remain safe while we guide them to success.</p>
          </div>
              <div className="card">
            <h3>Impact</h3>
            <p>We aim to create solutions that truly change the world.</p>
          </div>
        </div>
      </section>

      {/* How We Work / Timeline */}
      <section className="about-process" id="process">
      <h2 className="section-title">Our Process</h2>
      <p className="section-subtitle">
        From spark to scale — here’s how we help your ideas grow.
      </p>

      <div className="process-grid">
        {steps.map((step, index) => (
          <div className="process-card" data-aos="fade-up" key={index}>
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>

          {/* services sections */}
          <section className="about-services " id="service" >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="services-title text-3xl font-bold text-center mb-12" >
              Our Services
            </h2>
            <div className="process-grid2">
              {service.map((serve, index) => (
                <div className="service-card"  key={index}>
                  <img src={serve.img} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h2 className="card-title">{serve.title}</h2>
                    <p className="card-text">{serve.desc}</p>

                    <img src={Download} alt="Dot-png" />
                  </div>

                </div>
              ))}
            </div>

            <div className="service-btn">
              <Link to="/services" className="cta-button" onClick={() => {
                setIsOpen(false);
                if (location.pathname === "/") {
                  try{

                    window.scrollTo({
                      top: 0
                    })
                  }catch(error){
                    console.error(error)
                  }
                }

              }}>More Services</Link>
            </div>
          </div>
        </section>
    
    </div>
    </div>

  );
};

export default About;

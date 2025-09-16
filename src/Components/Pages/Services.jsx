import React from "react";
import "../Css/Services.css";
import Saas from "../../Assets/saas.jpg"
import Working from "../../Assets/working.svg"
import Plan from "../../Assets/planning.svg"
import Webdev from "../../Assets/web-dev.svg"
import App from "../../Assets/app.jpg"
import Probsol from "../../Assets/probsol.svg"
import LogoDe from "../../Assets/logo-design.svg"
import Pitch from "../../Assets/6205275.jpg"
import Ideaval from "../../Assets/ideaval.png"
import Aiagent from "../../Assets/aiagent.svg"


const slides = [
  {
    title: "Working Services",
    description: "Many small startups struggle to hire full-time employees with high salaries (LPAs). We help you get the same work done efficiently and affordably, so you can save money and focus on growing your business.",
    img: Working,
    type: "On-demand Task Handling, Technical & Design Support, Virtual Assistance, Outsourced Development & Operations."

  },
  {
    title: "Website Development",
    description: "We design user-friendly websites optimized for trust, speed, and conversions",
    img: Webdev,
    type: "Technical solutions, ideas, problems - solutions."
  },
  
  {
    title: "Agents & Automotions",
    description: " Transform your business with intelligent agents and seamless automation that handle complex tasks and free your team to focus on strategic work.",
    img: Aiagent,
    type: "Basic and intermediate agents."
  },
  {
    title: "Problem-Solution Consulting",
    description: "We help identify core problems and create tailored solutions.",
    img: Probsol,
    type: "Technical solutions, ideas, problems - solutions."
  },
  {
    title: "App Development",
    description: "Build mobile apps for iOS and Android with smooth performance and elegant UI/UX.",
    img: App,
    type: "Business Apps, On-Demand Apps, Productivity Apps, Social Media Apps."
  },
  {
    title: "Funds Usage Planning",
    description: "Optimize and allocate your funds effectively for maximum impact.",
    img: Plan,
    type: "Budget Forecasting, Resource Allocation, Expense Tracking, ROI-driven Investment Planning."
  },
  {
    title: "SaaS Development",
    description: "We create SaaS products that solve problems, automate workflows, and scale globally.",
    img: Saas,
    type: "CRM, Project Management Tools, AI-powered SaaS, Automation Tools."
  },
  {
    title: "Logo & Branding",
    description: "We craft logos and branding strategies that reflect your startup’s vision.",
    img: LogoDe,
    type:"Logos, Brand Kits, Social Media Templates, UI Branding."
  },
  {
    title: "Idea Validation",
    description: "Validate your ideas to ensure they solve real problems and meet market needs.",
    img: Ideaval,
    type: "Problem, Solution, Market Validation"
  }
];



export default function Services() {
 
  return (
    <div className="services-page" id="service-page" >
        <section className="founder-pains">
          <div className="container">
            <h2>We Know What You're Facing</h2>
            <div className="pain-cards">
              <div className="card-">💸 Burning funds with no results?</div>
              <div className="card-">🧠 Too many ideas, no clear product?</div>
              <div className="card-">⏳ Can't hire full-time teams yet?</div>
              <div className="card-">🚀 Need help to launch, fast?</div>
            </div>
            <p>That’s exactly what we solve. See how we help below.</p>
          </div>
        </section>

      <h2 className="st">Our Services</h2>

      <div className="sl">
          {slides.map((service, index) => (
            <div className="sc" key={index}>
              <img src={service.img} alt={service.title} />
              <div className="scon">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <p className="type">Types: </p>
                <p>  {service.type}</p>
              </div>
            </div>
          ))}
        </div>


    </div>
  );
}






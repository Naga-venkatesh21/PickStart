import React from "react";
import "../Css/Price.css";

const Pricing = () => {
  return (
    <section className="pricing-section" id="price">
      <div className="pricing-card">
        <h2>Flexible Pricing, Tailored for You</h2>
        <p>
           we believe every idea is unique. That’s why we don’t
          force you into fixed plans. Our pricing is calculated based on the
          exact services you choose — whether it’s website development, SaaS
          solutions, pitch deck design, or branding etc..  
        </p>
        <p className="highlight-text">
          You only pay for what you need — nothing more, nothing less.
        </p>
        <div className="benefits">
          <span>✔ Transparent & fair costs</span>
          <span>✔ Pay as you grow</span>
          <span>✔ Custom solutions for your startup stage</span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import React from "react";
import "../Css/Why.css"
import { motion } from "framer-motion";
import { FaHandshake, FaLightbulb, FaUsers } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const WhyUs = () => {
  return (
    <section className="why-us" id="why">
      <div className="container">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Why Us
        </motion.h2>

        <div className="why-sections">
          {/* WHY SHOULD YOU TRUST US */}
          <motion.div
            className="why-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <FaHandshake className="icon" />
            <h3>Why Should You Trust Us?</h3>
            <p>
              We believe in transparency, honesty, and delivering value that
              actually helps you grow. Our track record speaks for itself with
              consistent success stories.
            </p>
          </motion.div>

          {/* WHY ONLY US */}
          <motion.div
            className="why-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <FaLightbulb className="icon" />
            <h3>Why Only Us?</h3>
            <p>
              We focus only on what matters — solving real problems with
              innovative ideas and a user-first approach. No fluff, just results.
            </p>
          </motion.div>


             <motion.div
            className="why-card"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <FaUsers className="icon" />
            <h3>Community Driven</h3>
            <p>We grow with our community, taking feedback seriously.</p>
          </motion.div>
        </div>

        {/* EXTRA: POINTS WITH SMALL ILLUSTRATIONS */}
        
      </div>
    </section>
  );
};

export default WhyUs;

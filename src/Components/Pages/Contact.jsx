import React from "react";
import { useState } from "react";
import "../Css/Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaInstagram} from "react-icons/fa";
import conimg from "../../Assets/Mention-bro.png";
import Card from "../Pages/Card";

export default function ContactPage() {

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");


async function handleSubmit(event) {
  event.preventDefault();

  // 1. Get form elements and disable button
  const form = event.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const statusMessage = form.querySelector('.status-message');

  // Disable the button and show a "sending" message
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  if (statusMessage) statusMessage.textContent = ""; // Clear any previous message

  // 2. Validate form inputs
  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };
  console.log(data)

  if (!data.name || !data.email || !data.message) {
    setPopupMessage("Please fill out all fields.");
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 4000);

    submitButton.textContent = "Send Message";
    return;
  }

  const WebURL = "https://script.google.com/macros/s/AKfycbxH_BgRgEtktzKOBR5IYgEgaq4Xgv205KddrzG5MKhtdo9bJosk0xDfHQupmMo69oMF/exec";

  try {
    const response = await fetch(WebURL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
        "Accept": "application/json"
      },
      body: JSON.stringify(data),
    
    }
  );

    if (!response.ok) {
      throw new Error(`Server error: ${response.status} ${response.statusText}`);
    }

    const resultText = await response.text();
    const result = JSON.parse(resultText);

    if (result.result === "success") {
        setPopupMessage("Message sent successfully!");
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 4000);
      form.reset();
    } else {
      throw new Error(result.error || "Error sending message. Please try again.");
    }
  } catch (error) {
     setPopupMessage("Failed to send message: ");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 4000);

  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Send Message";
  }
}




  return (
    <div className="contact-container" id="contact">
      <div className="contact-left">
        <h2>Support Us</h2>
        <p>
          Have an idea, project, or just want to say hello?  
          I’d love to hear from you!
        </p>

        <div className="contact-info">
          <p><FaEnvelope /> pickstart1@gmail.com</p>
          <p><FaPhone /> +91 8328309191</p>
          <p><FaMapMarkerAlt /> Andhra Pradesh, India</p>
        </div>

        <div className="social-icons">
          <a href="/"><FaLinkedin /></a>
          <a href="/"><FaInstagram /></a>
        
        </div>
        <div className="contact-img">
          <img src={conimg} alt="contact" className="contimg " />
        </div>
      </div>

      <div className="contact-right">
        <form onSubmit={handleSubmit}>
          <h3>Let's Connect</h3>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          {/* <input type="text" name="services" placeholder="Services needed" required /> */}
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
         {showPopup && (
        <Card
          message={popupMessage}
          onClose={() => setShowPopup(false)}
        />
      )}
      </div>


    </div>
  );
}

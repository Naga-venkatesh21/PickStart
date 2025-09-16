import React from 'react'
import Hero from './Hero';
import About from './About';
import WhyUs from './Why';
import ContactPage from './Contact';

function HomePage() {
  return (
    <div className='HomePage'>
      <Hero />
      <About />
      <WhyUs />
      <ContactPage />
      

    </div>
  )
}

export default HomePage;
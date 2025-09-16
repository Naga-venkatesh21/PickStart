import React from 'react';
import '../Css/Hero.css';
import heroImage from '../../Assets/home-right.png'; // or use a placeholder if no image



const Hero = () => {
 

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-left">
          <p className='intro'>Hello <span className='gc'>Game changers</span>, WE ARE</p>
          <h1>PickStart</h1>
          <p className='tag'>
            - Accelerate your journey. Scale your success.
          </p>
          <p>
            We’re the team — empowering early-stage startup founders and failed startups(to rebuild) with technology, Services, tools
             and support they need to move from idea to successfull Entrepreneur.
          </p>
          <a href="https://forms.gle/AGKPALXw9PrMyBj56"
             target='_blank'
             rel='noreferrer'   className="cta-button">Lets Connect</a>
        </div>

        <div className="hero-right">
          <img src={heroImage} alt="PublicIdeas Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

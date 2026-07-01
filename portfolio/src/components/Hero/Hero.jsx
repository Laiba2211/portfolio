import "./Hero.css";

import HeroParticles from "./HeroParticles";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <HeroParticles />

      <div className="container hero-container">

        <div className="row align-items-center min-vh-70">

          <HeroContent />

          <HeroImage />

        </div>

      </div>

    </section>
  );
};

export default Hero;
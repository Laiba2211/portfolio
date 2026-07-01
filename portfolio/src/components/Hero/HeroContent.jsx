import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaTelegramPlane,
  FaInstagram,
  FaDev,
} from "react-icons/fa";

const HeroContent = () => {
  return (
    <motion.div
      className="col-lg-6 hero-left"
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <h5 className="hero-greeting">
        Hi There,
      </h5>

      <h1 className="hero-title">
        I'm <span>Laiba Afzal</span>
      </h1>

      <div className="hero-role">
        <span>I Am Into </span>

        <span className="typing">
          <TypeAnimation
            sequence={[
              "Frontend Development",
              2000,
              "React Development",
              2000,
              "UI / UX Design",
              2000,
              "JavaScript",
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </span>
      </div>

      <a href="#about" className="about-btn">
        About Me
        <span className="arrow">↓</span>
      </a>

      <div className="social-icons">

        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>

        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>

        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>

        <a href="https://telegram.org" target="_blank" rel="noreferrer">
          <FaTelegramPlane />
        </a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>

        <a href="https://dev.to" target="_blank" rel="noreferrer">
          <FaDev />
        </a>

      </div>
    </motion.div>
  );
};

export default HeroContent;
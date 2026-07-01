import "./About.css";

import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <section className="about-section" id="about">

      <div className="container">

        <div className="row align-items-center gy-5">

          <AboutImage />

          <AboutContent />

        </div>

      </div>

    </section>
  );
};

export default About;
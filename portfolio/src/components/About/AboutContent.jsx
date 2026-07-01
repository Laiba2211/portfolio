import { motion } from "framer-motion";
import aboutData from "./aboutData";

const AboutContent = () => {
  return (
    <motion.div
      className="col-lg-7 about-content"
      initial={{ opacity: 0, x: 70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
    >
      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <h3>{aboutData.name}</h3>

      <h5>{aboutData.title}</h5>

      <p>{aboutData.description}</p>

      <div className="about-info">

        <div className="info-item">
          <strong>Degree:</strong>
          <span>{aboutData.degree}</span>
        </div>

        <div className="info-item">
          <strong>University:</strong>
          <span>{aboutData.university}</span>
        </div>

        <div className="info-item">
          <strong>Session:</strong>
          <span>{aboutData.session}</span>
        </div>

        <div className="info-item">
          <strong>Location:</strong>
          <span>{aboutData.location}</span>
        </div>

        <div className="info-item">
          <strong>Status:</strong>
          <span className="status">
            {aboutData.status}
          </span>
        </div>

      </div>

      <a
        href="#contact"
        className="about-btn"
      >
        Let's Connect
      </a>
    </motion.div>
  );
};

export default AboutContent;
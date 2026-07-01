import { motion } from "framer-motion";
import { Download } from "lucide-react";

// import aboutImage from "../../assets/images/Laiba.png";
import img from "../../assets/images/Laiba_img.avif";

const AboutImage = () => {
  return (
    <motion.div
      className="col-lg-5 about-image-wrapper"
      initial={{ opacity: 0, x: -70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-image">
        <img src={img} alt="Laiba Afzal" />
      </div>

      {/* Resume Button */}

      <a
        href="/resume/LaibaAfzal-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
      >
        <Download size={20} />

        Download Resume
      </a>
    </motion.div>
  );
};

export default AboutImage;
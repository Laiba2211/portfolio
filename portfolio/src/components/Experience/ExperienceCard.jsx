import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  BriefcaseBusiness,
  Award,
  ExternalLink,
} from "lucide-react";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      className="experience-card"
      whileHover={{
        y: -12,
        transition: { duration: 0.3 },
      }}
    >
      {/* Top Badge */}

      <div className="experience-type">
        {experience.type}
      </div>

      {/* Company Logo */}

      <div className="experience-logo">

        <img
          src={experience.logo}
          alt={experience.company}
        />

      </div>

      {/* Company */}

      <div className="company-content">

        <h3>{experience.company}</h3>

        <h4>{experience.position}</h4>

      </div>

      {/* Meta */}

      <div className="experience-meta">

        <div className="meta-box">

          <CalendarDays size={18} />

          <span>{experience.duration}</span>

        </div>

        <div className="meta-box">

          <MapPin size={18} />

          <span>{experience.location}</span>

        </div>

        <div className="meta-box">

          <BriefcaseBusiness size={18} />

          <span>{experience.position}</span>

        </div>

      </div>

      {/* Description */}

      <p className="experience-description">
        {experience.description}
      </p>

      {/* Skills */}

      <div className="skills-wrapper">

        {experience.skills.map((skill, i) => (

          <span
            key={i}
            className="skill-pill"
          >
            {skill}
          </span>

        ))}

      </div>

      {/* Footer */}

      <div className="experience-footer">

        {experience.certificate ? (

          <a
            href={experience.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-btn"
          >
            <Award size={18} />

            View Certificate

            <ExternalLink size={16} />
          </a>

        ) : (

          <div className="working-badge">

            🚀 Live Industry Experience

          </div>

        )}

      </div>

    </motion.div>
  );
};

export default ExperienceCard;
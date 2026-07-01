import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  return (
    <motion.a
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      className="skill-card"
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="skill-icon">
        <img
          src={skill.icon}
          alt={skill.name}
          loading="lazy"
        />
      </div>

      <h5>{skill.name}</h5>
    </motion.a>
  );
};

export default SkillCard;
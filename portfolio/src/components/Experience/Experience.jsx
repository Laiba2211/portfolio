import "./Experience.css";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

import ExperienceCard from "./ExperienceCard";
import experienceData from "./experienceData";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">

      {/* Background Glow */}

      <div className="experience-bg-1"></div>
      <div className="experience-bg-2"></div>

      <div className="container">

        {/* Section Heading */}

        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <span className="experience-tag">
            <BriefcaseBusiness size={18} />
            Career Journey
          </span>

          <h2>
            Professional
            <span> Experience</span>
          </h2>

          <p>
            My professional journey as a Full Stack Developer,
            showcasing internships, industry experience,
            and real-world projects that strengthened my
            technical expertise and problem-solving skills.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="timeline-wrapper">

          <div className="timeline-line"></div>

          <div className="experience-grid">

            {experienceData.map((experience, index) => (

              <motion.div
                key={experience.id}
                className="timeline-card-wrapper"
                initial={{
                  opacity: 0,
                  y: 60
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: .6,
                  delay: index * .15
                }}
              >

                {/* Timeline Dot */}

                <div className="timeline-dot"></div>

                <ExperienceCard
                  experience={experience}
                  index={index}
                />

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;
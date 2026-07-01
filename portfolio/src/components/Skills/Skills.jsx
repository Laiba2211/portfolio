import React from "react";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

import "./Skills.css";

import SkillCard from "./SkillCard";
import skillsData from "./skillsData";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">

        {/* Section Heading */}
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="skills-title">
            <Cpu size={34} strokeWidth={2.2} />
            Skills & <span>Abilities</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-wrapper">
          <div className="row g-4">

            {skillsData.map((skill, index) => (
              <div
                className="col-6 col-sm-4 col-md-3 col-lg-2"
                key={skill.id}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                >
                  <SkillCard skill={skill} />
                </motion.div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
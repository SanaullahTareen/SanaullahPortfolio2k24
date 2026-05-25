import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies, skillCategories } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ technology, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.05, 0.5)}
    className="group"
  >
    <div className="glass-light rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 hover:border-accent-blue/30 hover:bg-white/10">
      <div className="w-12 h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-10 h-10 object-contain"
        />
      </div>
      <span className="text-secondary text-xs text-center group-hover:text-white transition-colors">
        {technology.name}
      </span>
    </div>
  </motion.div>
);

const SkillCategory = ({ category, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className="glass-card rounded-xl p-6"
  >
    <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-accent-blue" />
      {category.title}
    </h4>
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill) => (
        <span
          key={skill}
          className="skill-tag"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Toolkit</p>
        <h2 className={styles.sectionHeadText}>Skills & Technologies</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        A comprehensive tech stack spanning machine learning, data science, and full-stack development. 
        I continuously expand my expertise to stay current with industry advancements.
      </motion.p>

      {/* Skill Categories Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCategory key={category.title} category={category} index={index} />
        ))}
      </div>

      {/* Technologies Icons Grid */}
      <div className="mt-16">
        <h3 className="text-white font-semibold text-xl mb-8 text-center">
          Technologies I Work With
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {technologies.map((technology, index) => (
            <TechCard key={technology.name} technology={technology} index={index} />
          ))}
        </div>
      </div>

      {/* Certifications / Badges Section */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-16 glass-card rounded-2xl p-8"
      >
        <h3 className="text-white font-semibold text-xl mb-6 flex items-center gap-3">
          <svg className="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          Core Competencies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Deep Learning", desc: "Neural networks, CNNs, RNNs, Transformers" },
            { title: "Data Engineering", desc: "ETL, pipelines, data warehousing" },
            { title: "Business Intelligence", desc: "Dashboards, KPIs, data storytelling" },
          ].map((item) => (
            <div key={item.title} className="glass-light rounded-xl p-4">
              <h4 className="text-white font-medium mb-1">{item.title}</h4>
              <p className="text-secondary text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");

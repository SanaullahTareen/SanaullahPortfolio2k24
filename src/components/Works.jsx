import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="w-full sm:w-[360px]"
    >
      <div className="glass-card rounded-2xl overflow-hidden group transition-all duration-300 hover:border-accent-blue/30">
        {/* Image */}
        <div className="relative w-full h-[200px] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="glass px-3 py-1 rounded-full text-xs font-medium text-white">
              {tags[0]?.name}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-white font-semibold text-[20px] mb-2 group-hover:text-accent-blue transition-colors">
            {name}
          </h3>
          <p className="text-secondary text-[14px] leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`text-[12px] font-medium ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          {source_code_link && (
            <div className="mt-6 flex items-center justify-between gap-3">
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white hover:text-accent-blue transition-colors inline-flex items-center gap-2"
              >
                View Source
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>GitHub Repositories</p>
        <h2 className={styles.sectionHeadText}>Featured Projects</h2>
      </motion.div>

      <div className="w-full flex flex-col lg:flex-row gap-8 mt-4">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-2xl leading-[30px]"
        >
          These repositories capture my work across machine learning, business intelligence,
          cybersecurity, and full-stack development. Each project reflects a different
          part of my practical build history and problem-solving approach.
        </motion.p>

        {/* Project stats */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          className="flex gap-8 lg:ml-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient">10+</div>
            <div className="text-secondary text-sm">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient">100%</div>
            <div className="text-secondary text-sm">Repo-linked</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient">6</div>
            <div className="text-secondary text-sm">Public repos</div>
          </div>
        </motion.div>
      </div>

      {/* Filter tabs - optional enhancement */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="flex flex-wrap gap-3 mt-12 mb-8"
      >
        {["All", "Machine Learning", "Data Science", "Web Development", "Cybersecurity"].map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              filter === "All"
                ? "btn-primary text-white"
                : "glass-light text-secondary hover:text-white hover:bg-white/10"
            }`}
          >
            {filter}
          </button>
        ))}
      </motion.div>

      {/* Projects grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* View more */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-12 text-center"
      >
        <a
          href="https://github.com/SanaullahTareen?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glass px-8 py-3 rounded-xl font-medium text-white inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View More on GitHub
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "projects");

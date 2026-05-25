import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="w-full sm:w-[280px]"
  >
    <div className="glass-card rounded-2xl p-6 min-h-[280px] flex flex-col transition-all duration-300 hover:border-accent-blue/30 group">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-teal/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <img
          src={icon}
          alt={title}
          className="w-8 h-8 object-contain"
        />
      </div>

      <h3 className="text-white text-[20px] font-semibold mb-3">
        {title}
      </h3>
      
      <p className="text-secondary text-[14px] leading-relaxed flex-grow">
        {description}
      </p>

      <div className="mt-4 pt-4 border-t border-white/5">
        <span className="text-accent-blue text-sm font-medium group-hover:text-accent-teal transition-colors">
          Learn more →
        </span>
      </div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <div className="mt-8 flex flex-col lg:flex-row gap-12">
        {/* Left content */}
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 1)}
          className="flex-1"
        >
          <p className="text-secondary text-[17px] leading-[32px]">
            I'm a passionate <span className="text-white font-medium">Machine Learning Engineer</span> and{" "}
            <span className="text-white font-medium">Data Scientist</span> with 2+ years of experience 
            building intelligent systems that solve real-world problems.
          </p>
          
          <p className="text-secondary text-[17px] leading-[32px] mt-4">
            My expertise spans the entire ML lifecycle — from exploratory data analysis and 
            feature engineering to model development, optimization, and production deployment. 
            I specialize in <span className="text-accent-blue">deep learning</span>,{" "}
            <span className="text-accent-teal">predictive analytics</span>, and{" "}
            <span className="text-accent-blue">NLP solutions</span>.
          </p>

          <p className="text-secondary text-[17px] leading-[32px] mt-4">
            Beyond ML, I'm proficient in full-stack development with the MERN stack, 
            enabling me to build end-to-end data products with intuitive interfaces. 
            I believe in writing clean, documented code and following MLOps best practices.
          </p>

          {/* Quick highlights */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="glass-light rounded-xl p-4">
              <div className="text-accent-blue font-mono text-sm mb-1">// Focus Areas</div>
              <div className="text-white text-sm">Deep Learning, NLP, Computer Vision</div>
            </div>
            <div className="glass-light rounded-xl p-4">
              <div className="text-accent-teal font-mono text-sm mb-1">// Tech Stack</div>
              <div className="text-white text-sm">Python, TensorFlow, PyTorch, React</div>
            </div>
          </div>
        </motion.div>

        {/* Right content - Image/Visual */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 1)}
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-blue/20 to-accent-teal/20 rounded-3xl blur-xl" />
            <div className="glass-card rounded-2xl p-8 relative">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Python", level: 95 },
                  { label: "TensorFlow", level: 90 },
                  { label: "PyTorch", level: 88 },
                  { label: "Scikit-Learn", level: 92 },
                  { label: "React", level: 85 },
                  { label: "SQL", level: 88 },
                ].map((skill, idx) => (
                  <div key={skill.label} className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-2">
                      <svg className="w-16 h-16 transform -rotate-90">
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="transparent"
                          className="text-white/10"
                        />
                        <motion.circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="url(#gradient)"
                          strokeWidth="4"
                          fill="transparent"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: "0 176" }}
                          whileInView={{ strokeDasharray: `${skill.level * 1.76} 176` }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#14b8a6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <span className="text-secondary text-xs">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Services */}
      <div className="mt-20 flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

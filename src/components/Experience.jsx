import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(17, 24, 39, 0.92)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.14)",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35)",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(17, 24, 39, 0.92)" }}
      dateClassName="!text-gray-900 !opacity-100 font-semibold"
      date={experience.date}
      iconStyle={{ 
        background: "#111827",
        border: "2px solid rgba(255, 255, 255, 0.92)",
        boxShadow: "0 0 20px rgba(17, 24, 39, 0.35)"
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain brightness-0 invert"
          />
        </div>
      }
    >
      <div>
        <h3 className="!text-white text-[22px] font-semibold">{experience.title}</h3>
        <p
          className="!text-white text-[15px] font-medium"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-none space-y-3">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="!text-gray-300 text-[14px] leading-relaxed flex items-start gap-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Professional Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto text-center leading-[30px]"
      >
        From building ML pipelines to deploying production models, here's my journey 
        in machine learning and software development.
      </motion.p>

      <div className="mt-16 flex flex-col">
        <VerticalTimeline lineColor="rgba(17, 24, 39, 0.25)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

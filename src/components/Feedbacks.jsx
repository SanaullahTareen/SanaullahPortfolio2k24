import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="glass-card rounded-2xl p-8 w-full sm:w-[360px] relative"
  >
    {/* Quote icon */}
    <div className="absolute -top-4 -left-2">
      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
    </div>

    {/* Content */}
    <div className="mt-6">
      <p className="text-white text-[16px] leading-relaxed italic">
        "{testimonial}"
      </p>

      {/* Author */}
      <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-accent-blue/30"
        />
        <div>
          <p className="text-white font-semibold text-[15px]">{name}</p>
          <p className="text-secondary text-[13px]">
            {designation}, {company}
          </p>
        </div>
      </div>
    </div>

    {/* Rating stars */}
    <div className="absolute top-8 right-8 flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-4 h-4 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>What Colleagues Say</p>
        <h2 className={styles.sectionHeadText}>Testimonials</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-2xl mx-auto text-center leading-[30px]"
      >
        Feedback from colleagues and clients I've had the pleasure of working with 
        on various ML and data science projects.
      </motion.p>

      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-16 glass-card rounded-2xl p-8 text-center max-w-3xl mx-auto"
      >
        <h3 className="text-white text-2xl font-semibold mb-4">
          Interested in working together?
        </h3>
        <p className="text-secondary mb-6">
          I'm always open to discussing new opportunities, interesting projects, 
          or ways to leverage data and ML for your business.
        </p>
        <a
          href="#contact"
          className="btn-primary px-8 py-3 rounded-xl font-semibold text-white inline-block"
        >
          Let's Connect
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Sanaullah Tareen",
          from_email: form.email,
          to_email: "sanaullahtareen.info@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for reaching out! I'll get back to you within 24 hours.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again or email me directly.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden">
      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1"
      >
        <div className="glass-card rounded-2xl p-8">
          <p className={styles.sectionSubText}>Get in Touch</p>
          <h3 className={styles.sectionHeadText}>Contact Me</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-6"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="glass-light py-4 px-6 placeholder:text-secondary/50 text-white rounded-xl outline-none border border-transparent focus:border-accent-blue/50 font-medium transition-all duration-300"
                required
              />
            </label>
            
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@company.com"
                className="glass-light py-4 px-6 placeholder:text-secondary/50 text-white rounded-xl outline-none border border-transparent focus:border-accent-blue/50 font-medium transition-all duration-300"
                required
              />
            </label>
            
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Message</span>
              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className="glass-light py-4 px-6 placeholder:text-secondary/50 text-white rounded-xl outline-none border border-transparent focus:border-accent-blue/50 font-medium resize-none transition-all duration-300"
                required
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary py-4 px-8 rounded-xl outline-none w-full text-white font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </motion.div>

      {/* Contact Info & Social */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-1 flex flex-col gap-6"
      >
        {/* Contact info cards */}
        <div className="glass-card rounded-2xl p-8">
          <h4 className="text-white font-semibold text-xl mb-6">Let's Connect</h4>
          
          <div className="space-y-4">
            {/* Email */}
            <a
              href="mailto:sanaullahtareen.info@gmail.com"
              className="flex items-center gap-4 p-4 glass-light rounded-xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-teal/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-secondary text-sm">Email</p>
                <p className="text-white font-medium">sanaullahtareen.info@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sanaullah-tareen-3a7a02388/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass-light rounded-xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-teal/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-accent-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <p className="text-secondary text-sm">LinkedIn</p>
                <p className="text-white font-medium">Connect with me</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/SanaullahTareen?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass-light rounded-xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-teal/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-accent-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <p className="text-secondary text-sm">GitHub</p>
                <p className="text-white font-medium">View my code</p>
              </div>
            </a>

            {/* Company Website */}
            <a
              href="https://forbidden-developers.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass-light rounded-xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-teal/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <p className="text-secondary text-sm">Forbidden Developers</p>
                <p className="text-white font-medium">Visit our company</p>
              </div>
            </a>
          </div>
        </div>

        {/* Location / Availability */}
        <div className="glass-card rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-white font-medium">Available for opportunities</span>
          </div>
          <p className="text-secondary text-sm leading-relaxed">
            Currently open to ML Engineer, Data Scientist, and Full Stack roles. 
            Remote-friendly and open to relocation for the right opportunity.
          </p>
          
          <div className="mt-6 flex flex-wrap gap-2">
            {["Full-time", "Contract", "Remote", "Hybrid"].map((tag) => (
              <span key={tag} className="skill-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

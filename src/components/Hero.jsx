import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { stats } from "../constants";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />
        <div className="gradient-orb gradient-orb-3" />
      </div>

      {/* Neural network pattern overlay */}
      <div className="absolute inset-0 neural-bg opacity-50" />

      {/* Main content */}
      <div className={`relative ${styles.paddingX} max-w-7xl mx-auto pt-[140px] pb-20 flex flex-col lg:flex-row items-center justify-between gap-12`}>
        
        {/* Left content */}
        <div className="flex-1 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 glass-light rounded-full text-sm font-medium text-accent-blue">
              <span className="w-2 h-2 bg-accent-teal rounded-full mr-2 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`${styles.heroHeadText}`}
          >
            Hi, I'm{" "}
            <span className="text-gradient">Sanaullah Tareen</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white-100 mb-2">
              ML Engineer & Data Scientist
            </h2>
            <p className={`${styles.heroSubText} max-w-xl`}>
              Transforming complex data into intelligent solutions. I build 
              production-ready machine learning models and data-driven 
              applications that drive business impact.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="#projects"
              className="btn-primary px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn-glass px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center sm:text-left">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="text-3xl sm:text-4xl font-bold text-gradient"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-secondary mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right content - Code/Visual element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 max-w-lg w-full z-10"
        >
          <div className="glass-card rounded-2xl p-6 relative">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-white/70" />
              <div className="w-3 h-3 rounded-full bg-white/45" />
              <div className="w-3 h-3 rounded-full bg-white/25" />
              <span className="ml-4 text-secondary text-sm font-mono">ml_pipeline.py</span>
            </div>
            
            {/* Code content */}
            <div className="font-mono text-sm space-y-2">
              <div className="text-gray-900">
                <span className="text-gray-900">import</span> tensorflow <span className="text-gray-900">as</span> tf
              </div>
              <div className="text-gray-900">
                <span className="text-gray-900">from</span> sklearn.ensemble <span className="text-gray-900">import</span> RandomForestClassifier
              </div>
              <div className="mt-4 text-gray-900"># Initialize ML Pipeline</div>
              <div>
                <span className="text-gray-900">class</span>{" "}
                <span className="text-gray-900">MLEngineer</span>:
              </div>
              <div className="pl-4">
                <span className="text-gray-900">def</span>{" "}
                <span className="text-gray-900">build_model</span>(
                <span className="text-gray-900">self</span>):
              </div>
              <div className="pl-8 text-gray-900">
                <span className="text-gray-900">model</span> = tf.keras.Sequential()
              </div>
              <div className="pl-8 text-gray-900">
                <span className="text-gray-900">return</span>{" "}
                <span className="text-gray-900">model</span>.
                <span className="text-gray-900">fit</span>(data)
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-gray-900">&gt;&gt;&gt;</span>
                <span className="ml-2 text-gray-900 animate-pulse">█</span>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass px-4 py-2 rounded-lg"
            >
              <span className="text-sm font-semibold text-accent-blue">TensorFlow</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-lg"
            >
              <span className="text-sm font-semibold text-accent-teal">PyTorch</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary/50 flex justify-center items-start p-2"
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-accent-blue"
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

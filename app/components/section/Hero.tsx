'use client';
import { motion } from 'framer-motion';
import Hero3D from '../utility/Hero3D';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, filter: 'blur(8px)' },
    show: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  // Splitting the headline to animate words individually
  const headline = 'Building fast, scalable, and accessible web applications.';
  const words = headline.split(' ');

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32 bg-[#FAFAFA] text-neutral-900 overflow-hidden">
      {/* 3D Background - Sits behind the text on mobile, right side on desktop */}
      <Hero3D />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl pointer-events-none"
      >
        <motion.p
          variants={itemVariants}
          className="text-neutral-500 font-medium tracking-wide mb-6"
        >
          Frontend Developer & MERN Stack Engineer
        </motion.p>

        {/* Upgraded Cascading Text Reveal */}
        <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-12 flex flex-wrap gap-x-4 max-w-2xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={itemVariants}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex flex-row items-center gap-8 pointer-events-auto"
        >
          <a href="#projects" className="group relative text-lg font-medium">
            View Projects
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neutral-900 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#contact"
            className="text-lg text-neutral-500 hover:text-neutral-900 transition-colors duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

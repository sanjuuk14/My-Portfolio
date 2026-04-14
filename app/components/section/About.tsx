'use client';
import { easeOut, motion } from 'framer-motion';
import Image from 'next/image'; // Next.js highly optimized image component
import ScrollTextReveal from '../utility/ScrollTextReveal';

export default function About() {
  // Buttery smooth, slow animations
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <section
      id="about"
      className="py-32 md:py-48 px-6 md:px-20 lg:px-32 bg-[#FAFAFA] text-neutral-900 border-t border-neutral-200/50"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
        {/* Left Column: Section Title & Profile Image */}
        <div className="flex flex-col h-full">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={textVariants}
            className="mb-8"
          >
            <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-widest">
              01. About Me
            </h2>
          </motion.div>

          {/* Full Width/Height Image Container */}
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            // aspect-[3/4] forces a nice tall portrait ratio.
            // On mobile it has a fixed height, on desktop it stretches to fit.
            className="relative w-full aspect-[3/4] md:h-[400px] rounded-sm overflow-hidden bg-neutral-200"
          >
            <Image
              src="/profile.jpg" // Put your image in the 'public' folder and name it profile.jpg
              alt="Profile Picture"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </motion.div>
        </div>

        {/* Right Column: Bio and Skills */}
        <div className="md:pt-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={textVariants}
          >
            <div className="mb-16 max-w-3xl">
              <ScrollTextReveal
                className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.4] tracking-tight text-neutral-800 mb-8"
                value="I am a frontend-focused full-stack engineer specializing in the MERN stack and Next.js. My work spans the entire development cycle, from crafting seamless user interfaces to architecting robust backend services."
              />

              <ScrollTextReveal
                className="text-lg md:text-xl leading-relaxed text-neutral-600"
                value="I enjoy tackling complex challenges, whether that involves implementing secure user authentication, building real-time dashboards, developing chatbot interfaces, or exploring mobile architecture with React Native. I focus on writing clean, maintainable code that delivers flawless digital experiences."
              />
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            variants={textVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-neutral-200"
          >
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                Frontend
              </h3>
              <p className="text-sm text-neutral-500">React & Next.js</p>
              <p className="text-sm text-neutral-500">
                JavaScript / TypeScript
              </p>
              <p className="text-sm text-neutral-500">Tailwind CSS</p>
              <p className="text-sm text-neutral-500">Framer Motion</p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                Backend
              </h3>
              <p className="text-sm text-neutral-500">Node.js</p>
              <p className="text-sm text-neutral-500">Express</p>
              <p className="text-sm text-neutral-500">MongoDB</p>
              <p className="text-sm text-neutral-500">REST APIs</p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                Tools
              </h3>
              <p className="text-sm text-neutral-500">Git & GitHub</p>
              <p className="text-sm text-neutral-500">Vercel</p>
              <p className="text-sm text-neutral-500">Figma</p>
              <p className="text-sm text-neutral-500">Postman</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

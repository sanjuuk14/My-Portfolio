'use client';
import { motion } from 'framer-motion';
import ParallaxImage from '../utility/ParallaxImage';
import Link from 'next/link';

// Real data representing your actual projects
const projects = [
  {
    id: 1,
    title: 'Zobsai',
    category: 'Full-Stack',
    description:
      'Worked as Frontend Developer during an internship at Help Study Abroad; built and integrated key UI modules for the Zobsai platform serving real users. Designed responsive page layouts and reusable component libraries, ensuring cross-device compatibility and fast page loads.',
    tech: [
      'Next.js',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
    ],
    image: '/projects/p_1.jpg',
    link: 'https://www.zobsai.com',
  },
  {
    id: 2,
    title: 'Sandeep-Photography',
    category: 'Full-Stack',
    description:
      'Developed a responsive photography portfolio website with an advanced admin dashboard. Designed a CMS-like panel enabling dynamic image uploads, gallery management, filtering, and pagination without manual code changes.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB Atlas'],
    image: '/projects/p_2.jpg',
    link: 'https://sandeep-photography-frontend.onrender.com/',
  },
  {
    id: 3,
    title: 'Chatt App',
    category: 'Full-Stack',
    description:
      'Built a real-time WhatsApp-style chat application for bi-directional event-driven communication. Implemented user authentication, private messaging, and a fully responsive UI.',
    tech: ['MERN Stack', 'Socket.io', 'TailwindCSS', 'Daisy UI', 'Render'],
    image: '/projects/p_3.jpg',
    link: 'https://chat-app-test-1d44.onrender.com/login',
  },

  // {
  //   id: 4,
  //   title: 'Web Learning Portal App',
  //   category: 'Frontend',
  //   description:
  //     'Created a student-facing coding Q&A portal where users can easily search programming questions across multiple languages and receive cleanly structured output.',
  //   tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
  //   image: '/project4.jpg', // Reusing placeholder, update as needed
  //   link: '#',
  // },

  {
    id: 5,
    title: 'KanBan App',
    category: 'Full-Stack',
    description:
      'Built a KanBan-style task management app with drag-and-drop functionality, and a fully responsive UI. ',
    tech: [
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'TailwindCSS',
      'Node.js',
      'MongoDB',
      'Render',
    ],
    image: '/projects/p_4.jpg',
    link: 'https://kanbanboard-deploy-frontend.onrender.com/',
  },
];

export default function Projects() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="work"
      className="py-32 md:py-48 bg-[#FAFAFA] text-neutral-900 border-t border-neutral-200/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={textVariants}
          className="mb-32"
        >
          <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-4">
            02. Selected Work
          </h2>
          <p className="text-3xl md:text-5xl font-medium tracking-tight text-neutral-800">
            Engineered for performance. <br className="hidden md:block" />
            Designed for clarity.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => {
            // Determine if the image should be on the left or right
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Image Container (Takes up 60% of width on desktop) */}
                <motion.div
                  initial={{ opacity: 0, clipPath: 'inset(10% 0% 10% 0%)' }}
                  whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full md:w-3/5 relative aspect-[4/3] bg-neutral-200 overflow-hidden group rounded-sm"
                >
                  <ParallaxImage
                    src={project.image}
                    alt={project.title}
                    href={project.link}
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>

                {/* Text Container (Takes up 40% of width on desktop) */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-100px' }}
                  variants={textVariants}
                  className="w-full md:w-2/5 flex flex-col justify-center"
                >
                  <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-4">
                    {project.category}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-neutral-900">
                    {project.title}
                  </h3>
                  <p className="text-neutral-500 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium text-neutral-600 border border-neutral-200 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Minimal Link */}
                  <Link
                    target="_blank"
                    href={project.link}
                    className="group relative inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-neutral-900 w-max"
                  >
                    View Project
                    <span className="block w-4 h-[1px] bg-neutral-900 transition-all duration-300 group-hover:w-8"></span>
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

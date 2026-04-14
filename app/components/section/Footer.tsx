'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <section
      id="contact"
      // The container has a fixed height, acting as a window to the sticky content inside
      className="relative h-[80vh] md:h-screen bg-[#FAFAFA] text-neutral-900"
    >
      {/* This div stays stuck to the bottom of the screen while the parent container scrolls */}
      <div className="sticky top-0 h-full w-full flex flex-col justify-between px-6 md:px-20 lg:px-32 py-12 md:py-24 overflow-hidden">
        {/* Top Section: Subtitle & Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-12 md:mt-0">
          <div>
            <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-4">
              03. What's Next?
            </h2>
            <p className="text-2xl md:text-4xl font-medium tracking-tight text-neutral-800 max-w-lg">
              Have a project in mind? <br /> Let's build something great.
            </p>
          </div>

          {/* Subtle location indicator */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500"></span>
            </span>
            <p className="text-sm text-neutral-500 font-mono uppercase tracking-wider">
              Based in Delhi, IN
            </p>
          </div>
        </div>

        {/* Middle Section: Massive Interactive Email */}
        <div className="w-full flex items-center justify-center my-12 md:my-0">
          <motion.a
            href="mailto:spanwar@gmail.com"
            className="group relative text-[12vw] md:text-[8vw] font-medium tracking-tighter leading-none text-neutral-900 overflow-hidden"
            initial="initial"
            whileHover="hover"
          >
            {/* The primary text */}
            <motion.span className="block transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-full">
              Get in touch
            </motion.span>

            {/* The hidden text that slides up on hover */}
            <motion.span className="absolute inset-0 block transition-transform duration-500 ease-[0.16,1,0.3,1] translate-y-full group-hover:translate-y-0 text-neutral-400">
              Get in touch
            </motion.span>
          </motion.a>
        </div>

        {/* Bottom Section: Socials & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-neutral-200">
          <div className="flex gap-8">
            <SocialLink href="https://github.com" label="GitHub" />
            <SocialLink href="https://linkedin.com" label="LinkedIn" />
            <SocialLink href="https://twitter.com" label="Twitter" />
          </div>

          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Sandeep Singh Panwar. All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

type SocialLinkProps = {
  href: string;
  label: string;
};

// Reusable micro-component for social links with a sleek underline reveal
function SocialLink({ href, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-300 uppercase tracking-widest overflow-hidden"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-900 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
    </a>
  );
}

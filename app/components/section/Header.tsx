'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      // Fixed to the top, with a subtle blur effect so content scrolls nicely underneath
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-6 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-neutral-200/50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-xl font-medium text-neutral-900 tracking-tight"
        >
          Sandeep Singh Panwar
        </Link>

        {/* Navigation Links (Hidden on small mobile screens for simplicity right now) */}
        <nav className="hidden md:flex gap-8 items-center">
          <a
            href="#work"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Action / Social */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.header>
  );
}

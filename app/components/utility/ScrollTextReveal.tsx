'use client';
import { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

type ScrollTextRevealProps = {
  value: string;
  className?: string;
};

export default function ScrollTextReveal({
  value,
  className = '',
}: ScrollTextRevealProps) {
  const element = useRef(null);

  // Track the scroll progress of this specific paragraph
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 85%', 'start 35%'], // Starts fading in when 85% down the screen, finishes at 35%
  });

  // Split the text block into an array of words
  const words = value.split(' ');

  return (
    <p ref={element} className={`flex flex-wrap gap-x-2 gap-y-1 ${className}`}>
      {words.map((word, i) => {
        // Calculate the specific scroll range for each word
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

type WordProps = {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
};

// Micro-component for the individual word
const Word = ({ children, progress, range }: WordProps) => {
  // Map the scroll progress to an opacity value between 0.1 (dim) and 1 (lit)
  const opacity = useTransform(progress, range, [0.1, 1]);

  return (
    <span className="relative inline-block mt-1">
      {/* The background, dim word */}
      <span className="absolute opacity-20">{children}</span>
      {/* The foreground, lit word that fades in */}
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

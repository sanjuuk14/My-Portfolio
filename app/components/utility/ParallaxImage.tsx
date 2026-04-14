'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

type ParallaxImageProps = {
  src: string;
  alt: string;
};

export default function ParallaxImage({ src, alt }: ParallaxImageProps) {
  const containerRef = useRef(null);

  // Hook into the scroll position of this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'], // Starts when top of container hits bottom of screen
  });

  // Map the scroll progress (0 to 1) to a Y-axis movement (-15% to 15%)
  // As the user scrolls down, the image slowly slides up inside its frame.
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-sm"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-[-15%] w-[130%] h-[130%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </motion.div>
    </div>
  );
}

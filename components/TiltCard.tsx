"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

const TiltCard = ({ children, className = "" }: TiltCardProps) => {
  return (
    <motion.div
      className={className}
      whileHover="hover"
      initial="initial"
      animate="initial"
      variants={{
        initial: {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          transition: { duration: 0.3 },
        },
        hover: {
          rotateX: 5,
          rotateY: 5,
          scale: 1.02,
          transition: { duration: 0.3 },
        },
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
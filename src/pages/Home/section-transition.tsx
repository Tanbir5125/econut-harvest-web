import { motion, MotionValue, useTransform } from "framer-motion";
import React from "react";

interface SectionTransitionProps {
  scrollProgress: MotionValue<number>;
  fromColor?: string;
  toColor?: string;
  height?: number;
  showDivider?: boolean;
  dividerColor?: string;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({
  scrollProgress,
  fromColor = "from-green-50",
  toColor = "to-amber-50",
  height = 24,
  showDivider = true,
  dividerColor = "bg-gradient-to-r from-transparent via-green-300/50 to-transparent",
}) => {
  // Transform values for scroll animations
  const opacity = useTransform(scrollProgress, [0, 0.5, 1], [0, 1, 0]);
  const scaleY = useTransform(scrollProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const dividerScaleX = useTransform(
    scrollProgress,
    [0, 0.5, 1],
    [0.3, 1, 0.3]
  );
  const dividerOpacity = useTransform(scrollProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.div
      className={`relative h-${height} bg-gradient-to-b ${fromColor} ${toColor} z-10`}
      style={{
        opacity,
        scaleY,
        height: `${height * 4}px`, // Tailwind h-24 = 6rem = 96px
      }}
    >
      {showDivider && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className={`w-full h-px ${dividerColor}`}
            style={{
              scaleX: dividerScaleX,
              opacity: dividerOpacity,
            }}
          />
        </div>
      )}

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${i % 2 === 0 ? "w-1.5 h-1.5" : "w-2 h-2"} 
                       ${
                         i % 2 === 0 ? "bg-green-300/40" : "bg-amber-300/40"
                       } rounded-full`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SectionTransition;

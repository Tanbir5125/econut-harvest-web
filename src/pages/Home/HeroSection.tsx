import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { MotionValue } from "framer-motion";
import { useRef } from "react";

interface HeroSectionProps {
  heroOpacity: MotionValue<number>;
}

const HeroSection = ({ heroOpacity }: HeroSectionProps) => {
  const ref = useRef<HTMLElement>(null);

  // Add scroll-based animations for the hero section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Transform values for scroll animations
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);
  const backgroundBlur = useTransform(scrollYProgress, [0, 1], ["4px", "8px"]);
  const backgroundBrightness = useTransform(
    scrollYProgress,
    [0, 1],
    [0.85, 0.7]
  );

  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  // 3D rotation effect on scroll
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -5]);

  // Floating particles transforms (hooks at top level)
  const yArr = [
    useTransform(scrollYProgress, [0, 1], [0, -50]),
    useTransform(scrollYProgress, [0, 1], [0, -60]),
    useTransform(scrollYProgress, [0, 1], [0, -70]),
    useTransform(scrollYProgress, [0, 1], [0, -80]),
    useTransform(scrollYProgress, [0, 1], [0, -90]),
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    useTransform(scrollYProgress, [0, 1], [0, -110]),
    useTransform(scrollYProgress, [0, 1], [0, -120]),
    useTransform(scrollYProgress, [0, 1], [0, -130]),
    useTransform(scrollYProgress, [0, 1], [0, -140]),
  ];
  const xArr = [
    useTransform(scrollYProgress, [0, 1], [0, 30]),
    useTransform(scrollYProgress, [0, 1], [0, -30]),
    useTransform(scrollYProgress, [0, 1], [0, 30]),
    useTransform(scrollYProgress, [0, 1], [0, -30]),
    useTransform(scrollYProgress, [0, 1], [0, 30]),
    useTransform(scrollYProgress, [0, 1], [0, -30]),
    useTransform(scrollYProgress, [0, 1], [0, 30]),
    useTransform(scrollYProgress, [0, 1], [0, -30]),
    useTransform(scrollYProgress, [0, 1], [0, 30]),
    useTransform(scrollYProgress, [0, 1], [0, -30]),
  ];
  const opacityArr = [
    useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.3, 0]),
    useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.3, 0]),
    useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.3, 0]),
    useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.3, 0]),
    useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.3, 0]),
    useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.3, 0]),
    useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.3, 0]),
    useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.3, 0]),
    useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.3, 0]),
    useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.3, 0]),
  ];
  const scaleArr = [
    useTransform(scrollYProgress, [0, 1], [1, 0.5]),
    useTransform(scrollYProgress, [0, 1], [1, 1.5]),
    useTransform(scrollYProgress, [0, 1], [1, 0.5]),
    useTransform(scrollYProgress, [0, 1], [1, 1.5]),
    useTransform(scrollYProgress, [0, 1], [1, 0.5]),
    useTransform(scrollYProgress, [0, 1], [1, 1.5]),
    useTransform(scrollYProgress, [0, 1], [1, 0.5]),
    useTransform(scrollYProgress, [0, 1], [1, 1.5]),
    useTransform(scrollYProgress, [0, 1], [1, 0.5]),
    useTransform(scrollYProgress, [0, 1], [1, 1.5]),
  ];

  return (
    <motion.section
      ref={ref}
      style={{
        opacity: heroOpacity,
        scale: heroScale,
        y: heroY,
        rotateX,
        transformPerspective: 1000,
      }}
      className="relative bg-gradient-to-br from-green-50 to-amber-50 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/herosection.png')",
          filter: `blur(${backgroundBlur}) brightness(${backgroundBrightness})`,
          y: backgroundY,
        }}
      />

      {/* Glassmorphism Card with Framer Motion */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 py-16 flex flex-col items-center rounded-3xl bg-white/30 backdrop-blur-xl shadow-2xl border border-white/40"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="mb-6 w-full flex justify-center"
        >
          <span className="inline-block px-5 py-2 bg-green-200/70 text-green-900 font-semibold rounded-full text-base mb-4 shadow-md mt-6 sm:mt-0">
            Premium Organic Products
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
          className="font-extrabold text-4xl md:text-6xl lg:text-7xl text-green-900 mb-6 leading-tight drop-shadow-lg text-center w-full"
        >
          From Farm to Your Table
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="text-lg md:text-2xl text-green-800 mb-10 max-w-2xl mx-auto font-medium drop-shadow text-center"
        >
          Connecting Karnataka&apos;s finest coconut farmers directly with
          conscious consumers
        </motion.p>

        {/* Key Stats with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
          className="flex flex-row gap-6 mb-10 w-full justify-center overflow-x-auto scrollbar-hide"
          style={{
            x: useTransform(scrollYProgress, [0, 1], [0, -30]),
          }}
        >
          <motion.div
            className="flex-1 text-center"
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-14 h-14 bg-green-600/90 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
              <span className="sr-only">Leaf Icon</span>
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 21c0-4.418 3.582-8 8-8s8 3.582 8 8" />
                <path d="M9 17c0-2.209 1.791-4 4-4s4 1.791 4 4" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-green-900">100%</div>
            <div className="text-sm text-green-800">Organic</div>
          </motion.div>

          <motion.div
            className="flex-1 text-center"
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ duration: 0.2 }}
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, -15]),
            }}
          >
            <div className="w-14 h-14 bg-amber-600/90 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
              <span className="sr-only">Users Icon</span>
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <circle cx="17" cy="17" r="4" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-green-900">500+</div>
            <div className="text-sm text-green-800">Farmers</div>
          </motion.div>

          <motion.div
            className="flex-1 text-center"
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ duration: 0.2 }}
            style={{
              x: useTransform(scrollYProgress, [0, 1], [0, 30]),
            }}
          >
            <div className="w-14 h-14 bg-green-600/90 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
              <span className="sr-only">Award Icon</span>
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="8" r="7" />
                <path d="M8 21v-4a4 4 0 0 1 8 0v4" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-green-900">A+</div>
            <div className="text-sm text-green-800">Quality</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 30]),
          }}
        >
          <motion.div
            whileHover={{
              rotateY: 15,
              rotateX: 8,
              scale: 1.05,
              boxShadow:
                "0 8px 32px 0 rgba(34,197,94,0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            whileTap={{ scale: 0.97 }}
            style={{ perspective: 800 }}
            className="sm:w-48 w-full"
          >
            <Button
              size="lg"
              className="bg-green-700 hover:bg-green-800 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-200 w-full"
              onClick={() => (window.location.href = "/products")}
            >
              Shop Products
            </Button>
          </motion.div>

          <motion.div
            whileHover={{
              rotateY: -15,
              rotateX: 8,
              scale: 1.05,
              boxShadow:
                "0 8px 32px 0 rgba(251,191,36,0.18), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            whileTap={{ scale: 0.97 }}
            style={{ perspective: 800 }}
            className="sm:w-48 w-full"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-green-700 text-green-700 hover:bg-green-50 px-10 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-200 w-full"
              onClick={() => (window.location.href = "/about")}
            >
              Our Story
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Particles that respond to scroll */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }, (_, i) => (
          <motion.div
            key={i}
            className={`absolute ${i % 2 === 0 ? "w-2 h-2" : "w-3 h-3"} ${
              i % 3 === 0 ? "bg-green-300/30" : "bg-amber-300/30"
            } rounded-full`}
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 5) * 15}%`,
              y: yArr[i],
              x: xArr[i],
              opacity: opacityArr[i],
              scale: scaleArr[i],
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2.5 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Enhanced Overlay with Scroll Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/30 backdrop-blur-sm z-0 pointer-events-none"
        style={{
          opacity: useTransform(scrollYProgress, [0, 1], [0.2, 0.6]),
        }}
      />

      {/* Transition Element to Mission Section (removed, handled by SectionTransition in parent) */}
    </motion.section>
  );
};

export default HeroSection;

import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import FeaturedProductsSection from "./FeaturedProductsSection";
import HeroSection from "./HeroSection";
import Footer from "@/components/Footer";
import MissionSection from "./MissionSection";
import Navigation from "@/components/Navigation";
import { useRef } from "react";
import SectionTransition from "./section-transition";

// FloatingParticles component must be outside the main component
function FloatingParticles({ scrollY }: { scrollY: MotionValue<number> }) {
  // Precompute transforms for each particle at the top level
  const x0 = useTransform(scrollY, [0, 1000], [0, 50]);
  const y0 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity0 = useTransform(scrollY, [0, 500, 1000], [0.3, 0.7, 0.2]);
  const scale0 = useTransform(scrollY, [0, 500, 1000], [1, 1.5, 0.8]);

  const x1 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y1 = useTransform(scrollY, [0, 1000], [0, -110]);
  const opacity1 = useTransform(scrollY, [0, 500, 1000], [0.5, 0.3, 0.6]);
  const scale1 = useTransform(scrollY, [0, 500, 1000], [1, 0.8, 1.2]);

  const x2 = useTransform(scrollY, [0, 1000], [0, 50]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -120]);
  const opacity2 = useTransform(scrollY, [0, 500, 1000], [0.3, 0.7, 0.2]);
  const scale2 = useTransform(scrollY, [0, 500, 1000], [1, 1.5, 0.8]);

  const x3 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -130]);
  const opacity3 = useTransform(scrollY, [0, 500, 1000], [0.5, 0.3, 0.6]);
  const scale3 = useTransform(scrollY, [0, 500, 1000], [1, 0.8, 1.2]);

  const x4 = useTransform(scrollY, [0, 1000], [0, 50]);
  const y4 = useTransform(scrollY, [0, 1000], [0, -140]);
  const opacity4 = useTransform(scrollY, [0, 500, 1000], [0.3, 0.7, 0.2]);
  const scale4 = useTransform(scrollY, [0, 500, 1000], [1, 1.5, 0.8]);

  const x5 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y5 = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacity5 = useTransform(scrollY, [0, 500, 1000], [0.5, 0.3, 0.6]);
  const scale5 = useTransform(scrollY, [0, 500, 1000], [1, 0.8, 1.2]);

  const x6 = useTransform(scrollY, [0, 1000], [0, 50]);
  const y6 = useTransform(scrollY, [0, 1000], [0, -160]);
  const opacity6 = useTransform(scrollY, [0, 500, 1000], [0.3, 0.7, 0.2]);
  const scale6 = useTransform(scrollY, [0, 500, 1000], [1, 1.5, 0.8]);

  const x7 = useTransform(scrollY, [0, 1000], [0, -50]);
  const y7 = useTransform(scrollY, [0, 1000], [0, -170]);
  const opacity7 = useTransform(scrollY, [0, 500, 1000], [0.5, 0.3, 0.6]);
  const scale7 = useTransform(scrollY, [0, 500, 1000], [1, 0.8, 1.2]);

  const transforms = [
    { x: x0, y: y0, opacity: opacity0, scale: scale0 },
    { x: x1, y: y1, opacity: opacity1, scale: scale1 },
    { x: x2, y: y2, opacity: opacity2, scale: scale2 },
    { x: x3, y: y3, opacity: opacity3, scale: scale3 },
    { x: x4, y: y4, opacity: opacity4, scale: scale4 },
    { x: x5, y: y5, opacity: opacity5, scale: scale5 },
    { x: x6, y: y6, opacity: opacity6, scale: scale6 },
    { x: x7, y: y7, opacity: opacity7, scale: scale7 },
  ];

  return (
    <div className="fixed inset-0 z-20 pointer-events-none overflow-hidden">
      {transforms.map((t, i) => (
        <motion.div
          key={i}
          className={`absolute ${
            i % 3 === 0 ? "w-1 h-1" : i % 3 === 1 ? "w-2 h-2" : "w-3 h-3"
          } ${
            i % 4 === 0
              ? "bg-green-300/30"
              : i % 4 === 1
              ? "bg-amber-300/30"
              : i % 4 === 2
              ? "bg-emerald-300/30"
              : "bg-yellow-300/30"
          } rounded-full`}
          style={{
            left: `${5 + ((i * 12) % 90)}%`,
            top: `${10 + ((i * 10) % 80)}%`,
            x: t.x,
            y: t.y,
            opacity: t.opacity,
            scale: t.scale,
          }}
        />
      ))}
    </div>
  );
}

const Index = () => {
  // Create refs for each section to track their positions
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  // Main scroll progress for the entire page
  const { scrollY } = useScroll();

  // Hero fades out as you scroll down 0-400px
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.1]);

  // Mission fades in as you scroll down 200-600px
  const missionOpacity = useTransform(scrollY, [200, 600], [0.1, 1]);

  // Featured fades in as you scroll down 700-1100px
  const featuredOpacity = useTransform(scrollY, [700, 1100], [0.1, 1]);

  // Scroll progress for transition effects between sections
  const heroToMissionProgress = useTransform(
    scrollY,
    [200, 400], // Adjust these values based on your section heights
    [0, 1]
  );

  // Scroll progress for mission to featured transition
  const missionToFeaturedProgress = useTransform(
    scrollY,
    [600, 800], // Adjust these values based on your section heights
    [0, 1]
  );

  // Scroll progress indicator
  const scrollProgress = useTransform(
    scrollY,
    [0, document.body.scrollHeight - window.innerHeight || 3000],
    [0, 1]
  );

  return (
    <div className="min-h-screen bg-white relative">
      <Navigation />

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center"
        style={{
          opacity: useTransform(scrollY, [0, 100], [0, 1]),
        }}
      >
        <svg className="w-6 h-6" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#10b981"
            strokeWidth="8"
            strokeDasharray="283"
            strokeDashoffset={useTransform(scrollProgress, [0, 1], [283, 0])}
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Floating Particles that follow scroll */}
      <FloatingParticles scrollY={scrollY} />

      {/* Main Content Sections */}
      <div ref={heroRef}>
        <HeroSection heroOpacity={heroOpacity} />
      </div>

      {/* Transition Element between Hero and Mission */}
      <SectionTransition
        scrollProgress={heroToMissionProgress}
        fromColor="from-amber-50/50"
        toColor="to-white/10"
        dividerColor="bg-gradient-to-r from-transparent via-green-300/50 to-transparent"
      />

      <div ref={missionRef}>
        <MissionSection missionOpacity={missionOpacity} />
      </div>

      {/* Transition Element between Mission and Featured */}
      <SectionTransition
        scrollProgress={missionToFeaturedProgress}
        fromColor="from-green-50/50"
        toColor="to-white/10"
        dividerColor="bg-gradient-to-r from-transparent via-amber-300/50 to-transparent"
        height={32}
      />

      <div ref={featuredRef}>
        <FeaturedProductsSection featuredOpacity={featuredOpacity} />
      </div>

      <Footer />
    </div>
  );
};

export default Index;

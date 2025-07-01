import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHeroSection from "./AboutHeroSection";
import AboutMissionVisionSection from "./AboutMissionVisionSection";
import AboutTeamSection from "./AboutTeamSection";

// FloatingParticles component copied from Home/Index.tsx
function FloatingParticles({ scrollY }: { scrollY: MotionValue<number> }) {
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

const About = () => {
  const { scrollY } = useScroll();
  return (
    <div className="min-h-screen bg-white relative">
      <Navigation />
      {/* Shimmering Dots Effect */}
      <FloatingParticles scrollY={scrollY} />
      <AboutHeroSection />
      <AboutMissionVisionSection />
      <AboutTeamSection />
      <Footer />
    </div>
  );
};

export default About;

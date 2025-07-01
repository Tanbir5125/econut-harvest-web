import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MotionValue } from "framer-motion";

interface MissionSectionProps {
  missionOpacity: MotionValue<number>;
}

const MissionSection = ({ missionOpacity }: MissionSectionProps) => {
  // In-view animation logic
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: false });

  // (Removed duplicate/old variants)

  const cards = [
    {
      title: "Sustainable Farming",
      desc: "100% organic practices that protect the environment and ensure premium quality for generations to come",
      backgroundImage: "/lovable-uploads/farming.jpeg",
      gradient: "from-green-400 to-emerald-600",
    },
    {
      title: "Direct Trade",
      desc: "Fair prices for farmers, fresh products for you - no middlemen involved, just pure farm-to-table goodness",
      backgroundImage: "/lovable-uploads/trade.jpeg",
      gradient: "from-amber-400 to-orange-600",
    },
    {
      title: "Community Impact",
      desc: "Supporting rural communities and creating sustainable livelihoods that benefit everyone in the ecosystem",
      backgroundImage: "/lovable-uploads/impact.jpeg",
      gradient: "from-green-400 to-teal-600",
    },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.1 + i * 0.15 },
    }),
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, delay: 0.3 + i * 0.18 },
    }),
  };

  return (
    <motion.section
      ref={ref}
      style={{
        opacity:
          typeof missionOpacity === "object" && "get" in missionOpacity
            ? missionOpacity.get()
            : missionOpacity,
      }}
      className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-hidden w-full"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {/* Enhanced Background with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: "url('/lovable-uploads/forest.jpeg')",
          filter: "blur(3px) brightness(0.9) saturate(1.1)",
        }}
        // Keep subtle scale effect if desired, or remove animate prop for static
      />

      {/* Dynamic Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-green-50/80 backdrop-blur-sm z-10 pointer-events-none w-full h-full"
        style={{ opacity: 1 }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-300/30 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 30}%`,
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full max-w-7xl">
        {/* Enhanced Title Section */}
        <motion.div className="text-center mb-16">
          <motion.div
            className="inline-block mb-4"
            variants={textVariants}
            custom={0}
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full text-sm shadow-lg">
              ✨ Our Promise
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-green-800 via-green-900 to-emerald-800 bg-clip-text text-transparent mb-6 leading-tight px-4"
            variants={textVariants}
            custom={1}
          >
            Why Choose FreshWorth
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed px-4"
            variants={textVariants}
            custom={2}
          >
            Experience the difference of authentic, farm-fresh coconut products
            <span className="block mt-2 text-base text-green-700">
              Crafted with love, delivered with care
            </span>
          </motion.p>
        </motion.div>

        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group relative overflow-hidden rounded-2xl shadow-md transition-all duration-500 cursor-pointer w-full h-80"
              style={{
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              variants={cardVariants}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center w-full h-full"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
              />

              {/* Gradient Overlay - Bottom-to-top gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500`}
              />

              {/* Content Container */}
              <div className="relative h-full flex flex-col justify-end p-6 z-10">
                {/* Title - Always visible */}
                <motion.h3
                  className="text-white text-xl font-bold mb-3 drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.45 + i * 0.15 }}
                >
                  {card.title}
                </motion.h3>

                {/* Description - Always visible on hover */}
                <div className="overflow-hidden">
                  <p className="text-white/90 leading-relaxed text-sm drop-shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${card.gradient} w-0 group-hover:w-full transition-all duration-500 ease-out`}
                />
              </div>

              {/* Floating Particles on Hover */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(3)].map((_, particleIndex) => (
                  <motion.div
                    key={particleIndex}
                    className="absolute w-2 h-2 bg-white/60 rounded-full"
                    style={{
                      left: `${20 + particleIndex * 30}%`,
                      top: `${20 + particleIndex * 25}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: particleIndex * 0.4,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ x: "-100%" }}
                whileHover={{
                  x: "100%",
                  transition: {
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.1,
                  },
                }}
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                  width: "50%",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MissionSection;

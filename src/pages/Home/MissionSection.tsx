import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { MotionValue } from "framer-motion";

interface MissionSectionProps {
  missionOpacity: MotionValue<number>;
}

const MissionSection = ({ missionOpacity }: MissionSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, { amount: 0.2, once: false });
  const isTitleInView = useInView(titleRef, { amount: 0.6, once: false });
  const areCardsInView = useInView(cardsRef, { amount: 0.3, once: false });

  const controls = useAnimation();
  const titleControls = useAnimation();
  const cardsControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (isTitleInView) {
      titleControls.start("visible");
    } else {
      titleControls.start("hidden");
    }
  }, [isTitleInView, titleControls]);

  useEffect(() => {
    if (areCardsInView) {
      cardsControls.start("visible");
    } else {
      cardsControls.start("hidden");
    }
  }, [areCardsInView, cardsControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };

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
      backgroundImage:
        "/lovable-uploads/trade.jpeg",
      gradient: "from-amber-400 to-orange-600",
    },
    {
      title: "Community Impact",
      desc: "Supporting rural communities and creating sustainable livelihoods that benefit everyone in the ecosystem",
      backgroundImage:
        "/lovable-uploads/impact.jpeg",
      gradient: "from-green-400 to-teal-600",
    },
  ];

  return (
    <motion.section
      style={{ opacity: missionOpacity }}
      className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-hidden w-full"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Enhanced Background with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: "url('/lovable-uploads/forest.jpeg')",
          filter: "blur(3px) brightness(0.9) saturate(1.1)",
        }}
        animate={{
          scale: isInView ? 1.02 : 1,
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Dynamic Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-green-50/80 backdrop-blur-sm z-10 pointer-events-none w-full h-full"
        animate={{
          opacity: isInView ? 1 : 0.8,
        }}
        transition={{ duration: 0.8 }}
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
        <motion.div
          className="text-center mb-16"
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={titleVariants}
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full text-sm shadow-lg">
              ✨ Our Promise
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-green-800 via-green-900 to-emerald-800 bg-clip-text text-transparent mb-6 leading-tight px-4"
            variants={textVariants}
          >
            Why Choose FreshWorth
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed px-4"
            variants={textVariants}
          >
            Experience the difference of authentic, farm-fresh coconut products
            <span className="block mt-2 text-base text-green-700">
              Crafted with love, delivered with care
            </span>
          </motion.p>
        </motion.div>

        {/* Enhanced Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full"
          ref={cardsRef}
          initial="hidden"
          animate={cardsControls}
          variants={cardsContainerVariants}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group relative overflow-hidden rounded-2xl shadow-md transition-all duration-500 cursor-pointer w-full h-80"
              variants={cardVariants}
              initial={{
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
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
                  initial={{ opacity: 1 }}
                >
                  {card.title}
                </motion.h3>

                {/* Description - Always visible on hover */}
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: "auto", opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.p
                    className="text-white/90 leading-relaxed text-sm drop-shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    {card.desc}
                  </motion.p>
                </motion.div>

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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MissionSection;

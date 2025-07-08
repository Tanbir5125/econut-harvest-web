import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MarketOpportunity = () => {
  // In-view animation logic
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  // Optimized animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.1 + i * 0.1, ease: "easeOut" },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 + i * 0.1, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-slate-50 via-green-50/40 to-emerald-50/60 overflow-hidden"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {/* Simplified Background */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: "url('/lovable-uploads/prod.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Minimal floating elements */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-20 h-20 rounded-full opacity-30"
            style={{
              left: `${20 + i * 25}%`,
              top: `${30 + (i % 2) * 20}%`,
              background:
                i % 2 === 0
                  ? "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%)",
              animation: `float-${i} ${4 + i}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Simplified Title Section */}
          <motion.div className="text-center mb-20">
            <motion.div
              className="inline-block mb-6"
              variants={textVariants}
              custom={0}
            >
              <span className="inline-block px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-full text-sm shadow-lg">
                Investment Potential
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-800 via-emerald-900 to-green-800 bg-clip-text text-transparent mb-8 leading-tight"
              variants={textVariants}
              custom={1}
              style={{ WebkitTextFillColor: "transparent" }}
            >
              Market Opportunity
            </motion.h2>

            <motion.p
              className="text-xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed"
              variants={textVariants}
              custom={2}
            >
              The organic coconut products market is experiencing unprecedented
              growth, driven by health-conscious consumers and sustainable
              farming demand.
            </motion.p>
          </motion.div>

          {/* Optimized Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Market Size",
                value: "₹5,000 Cr",
                description:
                  "Indian organic coconut products market expected to reach ₹5,000 crores by 2028",
                image: "/lovable-uploads/market.jpeg",
                gradient: "from-green-500/60 to-emerald-600/60",
              },
              {
                title: "Growth Rate",
                value: "25% CAGR",
                description:
                  "Annual growth rate driven by health awareness and premium product demand",
                image: "/lovable-uploads/flour.jpeg",
                gradient: "from-amber-500/60 to-orange-600/60",
              },
              {
                title: "Target Market",
                value: "50M+",
                description:
                  "Health-conscious consumers across urban and semi-urban India",
                image: "/lovable-uploads/community.jpeg",
                gradient: "from-blue-500/60 to-indigo-600/60",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                variants={cardVariants}
                custom={i}
                className="group relative rounded-3xl overflow-hidden shadow-lg bg-white/90 backdrop-blur-sm cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-out"
                style={{
                  minHeight: 380,
                }}
              >
                {/* Card background image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-out"
                    style={{
                      filter: "brightness(1.1) contrast(1.05)",
                    }}
                  />

                  {/* Light overlay for text readability */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-30`}
                  />
                  {/* Stronger shadow gradient for text highlight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80" />
                </div>

                {/* Card content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 py-12 text-center">
                  {/* Value - always visible */}
                  <motion.div
                    className="text-5xl font-black text-white mb-6 drop-shadow-xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + i * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    {card.value}
                  </motion.div>

                  {/* Title - smooth center movement on hover */}
                  <div className="text-2xl font-bold text-white mb-4 drop-shadow-lg transform translate-y-20 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    {card.title}
                  </div>

                  {/* Description - appears on hover */}
                  <div className="text-base font-medium text-white/95 drop-shadow leading-relaxed opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out delay-100">
                    {card.description}
                  </div>
                </div>

                {/* Simple border effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300 ease-out pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Simple bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full text-white/70"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </motion.section>
  );
};

export default MarketOpportunity;

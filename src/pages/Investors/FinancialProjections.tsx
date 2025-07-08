import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FinancialProjections = () => {
  // In-view animation logic
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: false });

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

  // Financial data with visual attributes
  const financialData = [
    {
      year: "Year 1",
      amount: "₹2 Cr",
      description: "Revenue Target",
      gradient: "from-green-400 to-green-600",
      bgColor: "border-green-200",
      textColor: "text-green-900",
      amountColor: "text-green-700",
      particleColor: "bg-green-300/40",
    },
    {
      year: "Year 2",
      amount: "₹5 Cr",
      description: "Revenue Target",
      gradient: "from-amber-400 to-amber-600",
      bgColor: "border-amber-200",
      textColor: "text-amber-800",
      amountColor: "text-amber-700",
      particleColor: "bg-amber-300/40",
    },
    {
      year: "Year 3",
      amount: "₹12 Cr",
      description: "Revenue Target",
      gradient: "from-green-400 to-emerald-600",
      bgColor: "border-green-200",
      textColor: "text-green-900",
      amountColor: "text-green-700",
      particleColor: "bg-emerald-300/40",
    },
    {
      year: "Year 5",
      amount: "₹30 Cr",
      description: "Revenue Target",
      gradient: "from-amber-400 to-orange-600",
      bgColor: "border-amber-200",
      textColor: "text-amber-800",
      amountColor: "text-amber-700",
      particleColor: "bg-orange-300/40",
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="relative py-20 overflow-hidden"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {/* Enhanced Background with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: "url('/lovable-uploads/rural.jpeg')",
          filter: "blur(3px) brightness(0.95) saturate(1.1)",
        }}
      />

      {/* Static Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-green-50/80 backdrop-blur-sm z-10 pointer-events-none w-full h-full"
        style={{ opacity: 1 }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-300/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
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

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          {/* Title Section (animated) */}
          <motion.div className="text-center mb-16">
            <motion.div
              className="inline-block mb-4"
              variants={textVariants}
              custom={0}
            >
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full text-sm shadow-lg">
                Growth Trajectory
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-800 via-green-900 to-emerald-800 bg-clip-text text-transparent mb-6 leading-tight px-4"
              variants={textVariants}
              custom={1}
              style={{
                WebkitTextFillColor: "transparent",
              }}
            >
              Financial Projections
            </motion.h2>

            <motion.p
              className="text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed"
              variants={textVariants}
              custom={2}
            >
              Strong growth trajectory with increasing profitability and market
              expansion
            </motion.p>
          </motion.div>

          {/* Growth Chart Visualization */}
          <motion.div
            className="relative h-40 mb-12 mx-auto max-w-4xl"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>

            {financialData.map((data, i) => {
              const height = 20 + i * 20; // Increasing heights
              return (
                <motion.div
                  key={`bar-${i}`}
                  className={`absolute bottom-0 bg-gradient-to-t ${data.gradient} rounded-t-lg`}
                  style={{
                    left: `${5 + i * 30}%`,
                    width: "15%",
                    height: 0,
                  }}
                  animate={inView ? { height: `${height}%` } : { height: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.7 + i * 0.2,
                    ease: "easeOut",
                  }}
                >
                  <motion.div
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 + i * 0.2 }}
                  >
                    <span className={`font-bold ${data.amountColor}`}>
                      {data.amount}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Cards Grid (animated) */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {financialData.map((data, i) => (
              <motion.div
                key={`card-${i}`}
                variants={cardVariants}
                custom={i}
                className="group"
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <Card
                  className={`${data.bgColor} text-center relative overflow-hidden h-full border-2 shadow-lg`}
                >
                  <CardHeader>
                    <CardTitle className={`${data.textColor} relative z-10`}>
                      {data.year}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div
                      className={`text-3xl font-bold ${data.amountColor} mb-2`}
                    >
                      {data.amount}
                    </div>
                    <CardDescription>{data.description}</CardDescription>
                  </CardContent>

                  {/* Bottom Accent Line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${data.gradient} w-0 group-hover:w-full transition-all duration-500 ease-out`}
                  />

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
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                      width: "50%",
                    }}
                  />

                  {/* Floating Particles on Hover */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(3)].map((_, particleIndex) => (
                      <motion.div
                        key={particleIndex}
                        className={`absolute w-2 h-2 ${data.particleColor} rounded-full`}
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
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Growth Metrics */}
          <motion.div
            className="mt-16 text-center"
            variants={textVariants}
            custom={4}
          >
            <motion.div
              className="inline-block px-8 py-3 bg-gradient-to-r from-amber-50 to-green-50 border border-green-200 rounded-xl shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg text-green-800 font-medium">
                Projected CAGR:{" "}
                <span className="font-bold text-amber-700">72%</span> | ROI:{" "}
                <span className="font-bold text-green-700">3.2x</span> |
                Break-even:{" "}
                <span className="font-bold text-amber-700">Year 2</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FinancialProjections;

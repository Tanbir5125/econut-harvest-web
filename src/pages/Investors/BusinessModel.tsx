import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";

const BusinessModel = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2, once: false });

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 + i * 0.1 },
    }),
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.4 + i * 0.1 },
    }),
  };

  // Revenue stream data
  const revenueStreams = [
    {
      name: "Direct Product Sales",
      percentage: 60,
      color: "green",
      description: "Consumer retail through e-commerce and physical stores",
    },
    {
      name: "B2B Partnerships",
      percentage: 25,
      color: "amber",
      description:
        "Bulk supply to hotels, restaurants, and specialty retailers",
    },
    {
      name: "Export Sales",
      percentage: 15,
      color: "green",
      description: "International markets with premium pricing",
    },
  ];

  // Competitive advantages
  const advantages = [
    {
      title: "Direct farmer relationships",
      description: "eliminating middlemen costs",
      icon: "👨‍🌾",
    },
    {
      title: "Vertical integration",
      description: "from farm to consumer",
      icon: "🔄",
    },
    {
      title: "Organic certification",
      description: "commanding premium prices",
      icon: "🌱",
    },
    {
      title: "Strong brand positioning",
      description: "in health and sustainability",
      icon: "💪",
    },
    {
      title: "Established distribution network",
      description: "across Karnataka",
      icon: "🚚",
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="py-20 bg-gradient-to-br from-white via-green-50/30 to-amber-50/30 relative overflow-hidden"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated circles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              border: `2px solid ${i % 2 === 0 ? "#047857" : "#d97706"}`,
              left: `${(i * 15) % 90}%`,
              top: `${(i * 20) % 80}%`,
            }}
            animate={{
              scale: [1, 1.05, 1],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              y: [0, i % 2 === 0 ? -10 : 10, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern
              id="dotPattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#047857" />
            </pattern>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#dotPattern)"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title Section with Animation */}
          <motion.div className="text-center mb-16" variants={titleVariants}>
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-green-700 to-green-800 text-white font-semibold rounded-full text-sm shadow-lg">
                Our Approach
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-800 via-green-900 to-emerald-800 bg-clip-text text-transparent"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              Business Model & Strategy
            </motion.h2>

            <motion.p
              className="text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Sustainable growth through vertical integration and direct market
              access
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Revenue Streams Section */}
            <div>
              <motion.h3
                className="text-3xl font-bold text-green-900 mb-8 relative"
                variants={titleVariants}
              >
                Revenue Streams
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-500 to-green-300"
                  initial={{ width: 0 }}
                  animate={inView ? { width: "40%" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.h3>

              <div className="space-y-6">
                {revenueStreams.map((stream, i) => (
                  <motion.div
                    key={stream.name}
                    variants={cardVariants}
                    custom={i}
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Card
                      className={`border-${stream.color}-200 overflow-hidden relative shadow-md hover:shadow-xl transition-shadow duration-300`}
                    >
                      <CardContent className="p-5">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4
                              className={`font-semibold text-${stream.color}-800 text-lg mb-1`}
                            >
                              {stream.name}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {stream.description}
                            </p>
                          </div>

                          <div className="relative">
                            {/* Circular progress indicator */}
                            <motion.div
                              className={`w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-${stream.color}-100 to-${stream.color}-50 border-4 border-${stream.color}-200`}
                              initial={{ rotate: -90 }}
                              whileInView={{ rotate: 0 }}
                              transition={{
                                duration: 0.8,
                                delay: 0.2 + i * 0.1,
                              }}
                            >
                              <motion.span
                                className={`text-2xl font-bold text-${stream.color}-700`}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={
                                  inView
                                    ? { opacity: 1, scale: 1 }
                                    : { opacity: 0, scale: 0.5 }
                                }
                                transition={{
                                  duration: 0.5,
                                  delay: 0.6 + i * 0.1,
                                }}
                              >
                                {stream.percentage}%
                              </motion.span>
                            </motion.div>

                            {/* Animated progress circle */}
                            <svg className="absolute top-0 left-0 w-20 h-20 -rotate-90">
                              <motion.circle
                                cx="40"
                                cy="40"
                                r="36"
                                stroke={
                                  stream.color === "green"
                                    ? "#059669"
                                    : "#d97706"
                                }
                                strokeWidth="4"
                                fill="transparent"
                                strokeDasharray={`${2 * Math.PI * 36}`}
                                initial={{ strokeDashoffset: 2 * Math.PI * 36 }}
                                animate={
                                  inView
                                    ? {
                                        strokeDashoffset:
                                          2 *
                                          Math.PI *
                                          36 *
                                          (1 - stream.percentage / 100),
                                      }
                                    : {
                                        strokeDashoffset: 2 * Math.PI * 36,
                                      }
                                }
                                transition={{
                                  duration: 1.5,
                                  delay: 0.3 + i * 0.2,
                                }}
                              />
                            </svg>
                          </div>
                        </div>
                      </CardContent>

                      {/* Animated gradient line */}
                      <motion.div
                        className={`h-1 bg-gradient-to-r from-${stream.color}-500 to-${stream.color}-300`}
                        initial={{ width: "0%" }}
                        animate={
                          inView
                            ? { width: `${stream.percentage}%` }
                            : { width: "0%" }
                        }
                        transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                      />
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Competitive Advantages Section */}
            <div>
              <motion.h3
                className="text-3xl font-bold text-green-900 mb-8 relative"
                variants={titleVariants}
              >
                Competitive Advantages
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-green-500 to-green-300"
                  initial={{ width: 0 }}
                  animate={inView ? { width: "40%" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.h3>

              <div className="space-y-5">
                {advantages.map((advantage, i) => (
                  <motion.div
                    key={advantage.title}
                    className="group"
                    variants={listItemVariants}
                    custom={i}
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Card className="border-l-4 border-l-green-500 hover:shadow-md transition-all duration-300 overflow-hidden">
                      <CardContent className="p-5 flex items-start">
                        <div className="flex-1">
                          <div className="flex flex-col">
                            <h4 className="font-bold text-green-900 text-lg">
                              {advantage.title}
                            </h4>
                            <p className="text-gray-600">
                              {advantage.description}
                            </p>
                          </div>
                        </div>

                        {/* Animated arrow on hover */}
                        <motion.div
                          className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </motion.div>
                      </CardContent>
                    </Card>

                    {/* Animated line connecting items */}
                    {i < advantages.length - 1 && (
                      <motion.div
                        className="h-5 w-0.5 bg-green-200 ml-6"
                        initial={{ height: 0 }}
                        animate={inView ? { height: 20 } : { height: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Strategy Diagram */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-green-900 mb-6 text-center">
              Growth Strategy
            </h3>

            <div className="relative">
              {/* Strategy flow diagram */}
              <div className="flex flex-col md:flex-row justify-between items-center relative">
                {/* Connection lines */}
                <motion.div
                  className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-amber-500 to-green-600 hidden md:block"
                  style={{ y: "-50%" }}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                />

                {/* Strategy steps */}
                {[
                  {
                    title: "Phase 1",
                    subtitle: "Foundation",
                    items: [
                      "Farmer network",
                      "Product development",
                      "Local market",
                    ],
                    color: "green",
                  },
                  {
                    title: "Phase 2",
                    subtitle: "Expansion",
                    items: [
                      "Regional distribution",
                      "B2B partnerships",
                      "Product line growth",
                    ],
                    color: "amber",
                  },
                  {
                    title: "Phase 3",
                    subtitle: "Scaling",
                    items: [
                      "National presence",
                      "Export markets",
                      "Vertical integration",
                    ],
                    color: "green",
                  },
                ].map((phase, i) => (
                  <motion.div
                    key={phase.title}
                    className="relative z-10 bg-white rounded-xl shadow-md border border-gray-100 p-5 w-full md:w-64 mb-8 md:mb-0"
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.6, delay: 1 + i * 0.2 }}
                    whileHover={{
                      y: -5,
                      boxShadow:
                        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {/* Phase number bubble */}
                    <div className="absolute -top-4 -left-4">
                      <motion.div
                        className={`w-8 h-8 rounded-full bg-${phase.color}-600 text-white flex items-center justify-center font-bold shadow-lg`}
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: i * 0.3,
                        }}
                      >
                        {i + 1}
                      </motion.div>
                    </div>

                    <h4
                      className={`text-${phase.color}-700 font-bold text-lg mb-1`}
                    >
                      {phase.title}
                    </h4>
                    <p className="text-gray-500 font-medium mb-3">
                      {phase.subtitle}
                    </p>

                    <ul className="space-y-2">
                      {phase.items.map((item, j) => (
                        <motion.li
                          key={item}
                          className="flex items-center text-gray-700"
                          initial={{ opacity: 0, x: -10 }}
                          animate={
                            inView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -10 }
                          }
                          transition={{
                            duration: 0.4,
                            delay: 1.2 + i * 0.2 + j * 0.1,
                          }}
                        >
                          <motion.div
                            className={`w-2 h-2 rounded-full bg-${phase.color}-500 mr-2`}
                            animate={{
                              scale: [1, 1.5, 1],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: "reverse",
                              ease: "easeInOut",
                              delay: j * 0.2,
                            }}
                          />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default BusinessModel;

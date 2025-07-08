import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TheAsk = () => {
  // In-view animation logic
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: false });

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.1 + i * 0.15 },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.3 + i * 0.2 },
    }),
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.6 + i * 0.1 },
    }),
  };

  // Enhanced investment data with more eye-catching icons
  const investmentData = [
    {
      title: "What We Offer",
      items: [
        "Proven business model with growing revenue",
        "Strong farmer network and supply chain",
        "Established brand with market traction",
        "Experienced management team",
        "Clear path to profitability and scale",
      ],
      gradient: "from-green-400 to-emerald-600",
      bgGradient: "from-green-50 to-green-100/50",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 10l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15V3"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Investment Use",
      items: [
        "Expand processing facilities and capacity",
        "Scale farmer network across South India",
        "Strengthen distribution and marketing",
        "Develop new product lines",
        "Technology and quality improvements",
      ],
      gradient: "from-amber-400 to-amber-600",
      bgGradient: "from-amber-50 to-amber-100/50",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2v6m0 0l-3-3m3 3l3-3"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 8v12a2 2 0 01-2 2H7a2 2 0 01-2-2V8"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12v6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 12v6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 12v6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-white to-green-50 overflow-hidden"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated geometric shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              borderRadius: i % 2 === 0 ? "30%" : "50%",
              border: `2px solid ${i % 2 === 0 ? "#047857" : "#d97706"}`,
              left: `${(i * 18) % 85}%`,
              top: `${(i * 12) % 70}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: {
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(to right, #047857 1px, transparent 1px), linear-gradient(to bottom, #047857 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Title Section */}
          <motion.div className="text-center mb-16">
            <motion.div
              className="inline-block mb-4"
              variants={textVariants}
              custom={0}
            >
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-green-700 to-green-800 text-white font-semibold rounded-full text-sm shadow-lg">
                Partner With Us
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-800 via-green-900 to-emerald-800 bg-clip-text text-transparent mb-6 leading-tight"
              variants={textVariants}
              custom={1}
              style={{
                WebkitTextFillColor: "transparent",
              }}
            >
              Investment Opportunity
            </motion.h2>

            <motion.p
              className="text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed"
              variants={textVariants}
              custom={2}
            >
              We're seeking strategic partners to scale our operations, expand
              market reach, and amplify our positive impact on farming
              communities. Join us in building a sustainable future for coconut
              agriculture.
            </motion.p>
          </motion.div>

          {/* Investment Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {investmentData.map((data, i) => (
              <motion.div
                key={data.title}
                variants={cardVariants}
                custom={i}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="h-full"
              >
                <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm overflow-hidden h-full relative">
                  {/* Gradient top border */}
                  <div
                    className={`h-1.5 w-full bg-gradient-to-r ${data.gradient}`}
                  />

                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <svg
                      width="100%"
                      height="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern
                          id={`smallGrid${i}`}
                          width="10"
                          height="10"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 10 0 L 0 0 0 10"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width="100%"
                        height="100%"
                        fill={`url(#smallGrid${i})`}
                      />
                    </svg>
                  </div>

                  <CardHeader className="relative z-10">
                    <div className="flex items-center mb-4">
                      {/* Enhanced animated icon with glow effect */}
                      <motion.div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${data.gradient} flex items-center justify-center shadow-lg mr-4 relative`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={
                          inView
                            ? { scale: 1, opacity: 1 }
                            : { scale: 0.8, opacity: 0 }
                        }
                        transition={{ duration: 0.5, delay: 0.4 + i * 0.2 }}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2 },
                        }}
                      >
                        {/* Pulsing glow effect */}
                        <motion.div
                          className={`absolute inset-0 rounded-full bg-gradient-to-br ${data.gradient} blur-md z-0`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.4, 0.6, 0.4],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                          }}
                        />

                        {/* Icon with subtle animation */}
                        <motion.div
                          className="relative z-10"
                          animate={{
                            rotate: [0, 5, 0, -5, 0],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          {data.icon}
                        </motion.div>

                        {/* Sparkle effects */}
                        {[...Array(3)].map((_, j) => (
                          <motion.div
                            key={j}
                            className="absolute w-1.5 h-1.5 bg-white rounded-full"
                            style={{
                              top: `${25 + j * 25}%`,
                              left: `${75 + (j % 2) * 10}%`,
                            }}
                            animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              delay: j * 0.5,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          />
                        ))}
                      </motion.div>

                      <CardTitle
                        className={`text-2xl font-bold bg-gradient-to-r ${data.gradient} bg-clip-text text-transparent`}
                      >
                        {data.title}
                      </CardTitle>
                    </div>

                    {/* Animated divider */}
                    <motion.div
                      className={`h-0.5 bg-gradient-to-r ${data.gradient} w-0`}
                      animate={inView ? { width: "100%" } : { width: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 + i * 0.2 }}
                    />
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <ul className="space-y-4">
                      {data.items.map((item, j) => (
                        <motion.li
                          key={j}
                          className="flex items-center"
                          variants={listItemVariants}
                          custom={j}
                        >
                          {/* Animated bullet point */}
                          <motion.div
                            className={`w-6 h-6 rounded-full bg-gradient-to-br ${data.gradient} flex items-center justify-center mr-3 flex-shrink-0`}
                            initial={{ scale: 0 }}
                            animate={inView ? { scale: 1 } : { scale: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.7 + i * 0.1 + j * 0.1,
                            }}
                          >
                            <svg
                              className="w-3 h-3 text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 6L9 17L4 12"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </motion.div>

                          {/* Item text with hover effect */}
                          <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200">
                            {item}
                          </span>

                          {/* Subtle animated highlight on hover */}
                          <motion.div
                            className="absolute left-0 right-0 h-full bg-gradient-to-r from-transparent via-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ top: 0 }}
                            animate={{
                              x: [-100, 300],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: "loop",
                              ease: "easeInOut",
                            }}
                          />
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Button with animation */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <motion.div
              className="inline-block"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-lg"
                onClick={() => (window.location.href = "/contact")}
              >
                <span className="mr-2">
                  Get in Touch for Investment Opportunities
                </span>
                <svg
                  className="w-5 h-5 inline-block"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TheAsk;
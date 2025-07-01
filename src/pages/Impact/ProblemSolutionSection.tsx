import React, { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const ProblemSolutionSection = () => {
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const problemRef = useRef(null);
  const solutionRef = useRef(null);

  // Check if elements are in viewport
  const sectionInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const problemInView = useInView(problemRef, { once: false, amount: 0.2 });
  const solutionInView = useInView(solutionRef, { once: false, amount: 0.2 });

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax values for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.1 * i,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const floatingBubbleVariants = {
    initial: (i = 0) => ({
      x: 0,
      y: 0,
      scale: 1,
      opacity: 0.2 + i * 0.1,
    }),
    animate: (i = 0) => ({
      x: [0, 10 * (i % 2 === 0 ? 1 : -1), 0],
      y: [0, -15, 0],
      scale: [1, 1.1, 1],
      opacity: [0.2 + i * 0.1, 0.4 + i * 0.1, 0.2 + i * 0.1],
      transition: {
        duration: 3 + i,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  const problemCards = [
    {
      title: "Middleman Exploitation",
      description:
        "Farmers receive only 30-40% of the final product price due to multiple intermediaries, reducing their income and motivation to continue farming.",
      gradient: "from-red-400/20 to-pink-500/20",
      borderGradient: "from-red-400/40 to-pink-500/40",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Market Access Barriers",
      description:
        "Small farmers lack direct access to premium markets and consumers, limiting their ability to get fair prices for quality products.",
      gradient: "from-orange-400/20 to-red-400/20",
      borderGradient: "from-orange-400/40 to-red-400/40",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    {
      title: "Youth Migration",
      description:
        "Young people leave rural areas for urban jobs due to lack of opportunities in traditional agriculture, weakening farming communities.",
      gradient: "from-pink-400/20 to-rose-500/20",
      borderGradient: "from-pink-400/40 to-rose-500/40",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      ),
    },
  ];

  const solutionCards = [
    {
      title: "Direct Market Connection",
      description:
        "We connect farmers directly to consumers and businesses, ensuring 70-80% of product value reaches the farmer, dramatically increasing their income.",
      gradient: "from-emerald-400/20 to-teal-500/20",
      borderGradient: "from-emerald-400/40 to-teal-500/40",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Value-Added Processing",
      description:
        "We help farmers process raw coconuts into premium products like virgin oil, neera sugar, and health drinks, multiplying their revenue potential.",
      gradient: "from-green-400/20 to-emerald-500/20",
      borderGradient: "from-green-400/40 to-emerald-500/40",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Training & Employment",
      description:
        "We provide technical training to rural youth, creating local employment opportunities and keeping families together in farming communities.",
      gradient: "from-teal-400/20 to-cyan-500/20",
      borderGradient: "from-teal-400/40 to-cyan-500/40",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="mt-2 mb-2 pt-32 pb-20 relative overflow-hidden min-h-screen"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={titleVariants}
    >
      {/* Background Image with Blur and Low Brightness */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('./lovable-uploads/agriculture.jpeg')`,
          filter: "blur(3px) brightness(0.35)",
        }}
      ></div>

      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/30"></div>

      {/* Animated background elements with parallax */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-400 to-pink-400 rounded-full blur-3xl"
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-3xl"
          style={{ y: y2 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"
          style={{ y: y3 }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main heading with animation */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-emerald-300 bg-clip-text text-transparent"
              style={{
                WebkitTextFillColor: "transparent",
                overflowWrap: "anywhere",
                wordBreak: "break-word",
                lineHeight: 1.3,
                WebkitBoxDecorationBreak: "clone",
              }}
              variants={titleVariants}
            >
              Transforming Agriculture
            </motion.h1>

            <motion.div
              className="mt-4 w-32 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto"
              variants={dividerVariants}
            ></motion.div>

            {/* Floating particles around title */}
            <div className="relative h-10 mt-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${
                    i % 2 === 0
                      ? "from-cyan-400 to-blue-500"
                      : "from-emerald-400 to-green-500"
                  }`}
                  style={{
                    left: `${30 + i * 10}%`,
                    top: `${i % 3 === 0 ? -10 : 10}px`,
                  }}
                  variants={floatingBubbleVariants}
                  custom={i}
                  initial="initial"
                  animate="animate"
                />
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Problem Section */}
            <motion.div
              ref={problemRef}
              initial="hidden"
              animate={problemInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <div className="relative">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-300 via-pink-300 to-rose-200 bg-clip-text text-transparent"
                  variants={titleVariants}
                >
                  The Problem
                </motion.h2>

                <motion.p
                  className="text-xl text-gray-200 mb-12 leading-relaxed"
                  variants={cardVariants}
                  custom={0}
                >
                  Breaking down the barriers that hold farmers back
                </motion.p>

                <div className="space-y-6">
                  {problemCards.map((card, index) => (
                    <motion.div
                      key={index}
                      className="group"
                      variants={cardVariants}
                      custom={index + 1}
                      whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Card
                        className={`border-0 shadow-2xl hover:shadow-red-500/20 transition-all duration-500 overflow-hidden relative backdrop-blur-lg bg-gradient-to-br ${card.gradient} border border-white/10`}
                        style={{
                          background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255,255,255,0.18)",
                        }}
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${card.borderGradient} opacity-0 transition-opacity duration-300`}
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 0.3 }}
                        />

                        <CardHeader className="relative z-10 flex flex-row items-center">
                          <motion.div
                            className="mr-3 text-red-300"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              delay: 0.3 + index * 0.1,
                              duration: 0.5,
                            }}
                          >
                            {card.icon}
                          </motion.div>
                          <CardTitle className="text-xl font-bold text-white mb-0 group-hover:text-red-100 transition-colors duration-300">
                            {card.title}
                          </CardTitle>
                        </CardHeader>

                        <CardContent className="relative z-10">
                          <CardDescription className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                            {card.description}
                          </CardDescription>
                        </CardContent>

                        {/* Animated corner decoration */}
                        <motion.div
                          className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-red-400/20 rounded-full transform translate-x-10 translate-y-10"
                          initial={{ scale: 1 }}
                          whileHover={{
                            scale: 1.5,
                            transition: { duration: 0.5 },
                          }}
                        />

                        {/* Animated particles */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={`card-particle-${index}-${i}`}
                              className="absolute w-1.5 h-1.5 bg-red-300/60 rounded-full"
                              style={{
                                left: `${20 + i * 30}%`,
                                top: `${20 + i * 25}%`,
                              }}
                              animate={{
                                y: [0, -15, 0],
                                opacity: [0, 1, 0],
                                scale: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: "easeInOut",
                              }}
                            />
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Solution Section */}
            <motion.div
              ref={solutionRef}
              initial="hidden"
              animate={solutionInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <div className="relative">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent"
                  variants={titleVariants}
                >
                  Our Solution
                </motion.h2>

                <motion.p
                  className="text-xl text-gray-200 mb-12 leading-relaxed"
                  variants={cardVariants}
                  custom={0}
                >
                  Empowering farmers with direct connections and value creation
                </motion.p>

                <div className="space-y-6">
                  {solutionCards.map((card, index) => (
                    <motion.div
                      key={index}
                      className="group"
                      variants={cardVariants}
                      custom={index + 1}
                      whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Card
                        className={`border-0 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 overflow-hidden relative backdrop-blur-lg bg-gradient-to-br ${card.gradient} border border-white/10`}
                        style={{
                          background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255,255,255,0.18)",
                        }}
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${card.borderGradient} opacity-0 transition-opacity duration-300`}
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 0.3 }}
                        />

                        <CardHeader className="relative z-10 flex flex-row items-center">
                          <motion.div
                            className="mr-3 text-emerald-300"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              delay: 0.5 + index * 0.1,
                              duration: 0.5,
                            }}
                          >
                            {card.icon}
                          </motion.div>
                          <CardTitle className="text-xl font-bold text-white mb-0 group-hover:text-emerald-100 transition-colors duration-300">
                            {card.title}
                          </CardTitle>
                        </CardHeader>

                        <CardContent className="relative z-10">
                          <CardDescription className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                            {card.description}
                          </CardDescription>
                        </CardContent>

                        <motion.div
                          className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-emerald-400/20 rounded-full transform translate-x-10 translate-y-10"
                          initial={{ scale: 1 }}
                          whileHover={{
                            scale: 1.5,
                            transition: { duration: 0.5 },
                          }}
                        />

                        {/* Animated particles */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={`card-particle-${index}-${i}`}
                              className="absolute w-1.5 h-1.5 bg-emerald-300/60 rounded-full"
                              style={{
                                left: `${20 + i * 30}%`,
                                top: `${20 + i * 25}%`,
                              }}
                              animate={{
                                y: [0, -15, 0],
                                opacity: [0, 1, 0],
                                scale: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: "easeInOut",
                              }}
                            />
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Connecting line between problem and solution */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: sectionInView ? 1 : 0,
              height: sectionInView ? "50%" : 0,
            }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="h-full w-0.5 bg-gradient-to-b from-red-400/50 via-purple-400/50 to-emerald-400/50">
              <motion.div
                className="absolute top-0 -left-1.5 w-4 h-4 rounded-full bg-red-400"
                animate={{
                  y: [0, "100%", 0],
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-0 -left-1.5 w-4 h-4 rounded-full bg-emerald-400"
                animate={{
                  y: [0, "-100%", 0],
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />
            </div>
          </motion.div>

          {/* Bottom decorative elements */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: sectionInView ? 1 : 0,
              y: sectionInView ? 0 : 30,
            }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <div className="inline-flex items-center justify-center">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/50"></div>
              <div className="mx-4">
                <motion.div
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
              </div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/50"></div>
            </div>

            <motion.p
              className="mt-4 text-gray-300 italic"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Sustainable solutions for a better future
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Animated corner decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-red-400/30 rounded-tl-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: sectionInView ? 1 : 0,
            opacity: sectionInView ? 1 : 0,
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none">
        <motion.div
          className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-emerald-400/30 rounded-br-3xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: sectionInView ? 1 : 0,
            opacity: sectionInView ? 1 : 0,
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>
    </motion.section>
  );
};

export default ProblemSolutionSection;                        {/* Animated corner decoration */}

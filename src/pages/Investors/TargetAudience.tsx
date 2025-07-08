import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TargetAudience = () => {
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

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.6 + i * 0.1 },
    }),
  };

  // Audience data with custom SVG icons and gradients
  const audienceData = [
    {
      title: "Health-Conscious Consumers",
      items: [
        "Urban professionals aged 25-45",
        "Fitness enthusiasts and athletes",
        "Diabetic and diet-conscious individuals",
        "Premium product seekers",
      ],
      gradient: "from-green-400 to-emerald-600",
      bgGradient: "from-green-50 to-green-100/50",
      icon: (
        <svg
          className="w-8 h-8 text-green-600"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 6V12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12V6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 5C19.1046 5 20 5.89543 20 7V9C20 10.1046 19.1046 11 18 11H16V7C16 5.89543 16.8954 5 18 5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 5C4.89543 5 4 5.89543 4 7V9C4 10.1046 4.89543 11 6 11H8V7C8 5.89543 7.10457 5 6 5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16V19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 19H15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      illustration: "/lovable-uploads/shake.jpeg",
    },
    {
      title: "B2B Partners",
      items: [
        "Organic food retailers",
        "Health food stores",
        "Restaurants and cafes",
        "Export companies",
      ],
      gradient: "from-amber-400 to-amber-600",
      bgGradient: "from-amber-50 to-amber-100/50",
      icon: (
        <svg
          className="w-8 h-8 text-amber-600"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6H21M3 12H21M3 18H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 3L5 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 3L19 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 3V21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 3V21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      illustration: "/lovable-uploads/oil.jpeg",
    },
    {
      title: "E-commerce Platforms",
      items: [
        "Amazon, Flipkart marketplace",
        "BigBasket, Grofers",
        "Specialty organic platforms",
        "Direct-to-consumer sales",
      ],
      gradient: "from-green-400 to-emerald-600",
      bgGradient: "from-green-50 to-green-100/50",
      icon: (
        <svg
          className="w-8 h-8 text-green-600"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 8V21H3V8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 4H1V8H23V4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 12H14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      illustration: "/lovable-uploads/sugar.jpeg",
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-amber-50 to-green-50 overflow-hidden"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating circles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${(i * 20) % 80}%`,
              top: `${(i * 15) % 70}%`,
              background:
                i % 2 === 0
                  ? "radial-gradient(circle, rgba(134, 239, 172, 0.15) 0%, rgba(74, 222, 128, 0.05) 70%, transparent 100%)"
                  : "radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, rgba(245, 158, 11, 0.05) 70%, transparent 100%)",
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, i % 2 === 0 ? 15 : -15, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Curved lines */}
        <svg
          className="absolute w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,50 C30,20 70,80 100,50"
            stroke="#047857"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              inView
                ? { pathLength: 1, opacity: 0.5 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,30 C20,60 80,10 100,30"
            stroke="#d97706"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              inView
                ? { pathLength: 1, opacity: 0.5 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <motion.div className="text-center mb-16">
            <motion.div
              className="inline-block mb-4"
              variants={textVariants}
              custom={0}
            >
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full text-sm shadow-lg">
                Our Market Focus
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
              Target Audience
            </motion.h2>

            <motion.p
              className="text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed"
              variants={textVariants}
              custom={2}
            >
              Our diverse customer base spans multiple segments with strong
              growth potential
            </motion.p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {audienceData.map((audience, i) => (
              <motion.div
                key={audience.title}
                variants={cardVariants}
                custom={i}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group h-full"
              >
                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden h-full relative">
                  {/* Background image with overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{
                        backgroundImage: `url(${audience.illustration})`,
                        filter: "brightness(0.95) blur(0px)",
                      }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${audience.bgGradient} group-hover:opacity-60 transition-opacity duration-500`}
                    />
                  </div>

                  {/* Card content */}
                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      {/* Animated icon container */}
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.gradient} p-0.5 shadow-lg`}
                        initial={{ rotate: -10, scale: 0.9 }}
                        animate={
                          inView
                            ? { rotate: 0, scale: 1 }
                            : { rotate: -10, scale: 0.9 }
                        }
                        transition={{ duration: 0.5, delay: 0.4 + i * 0.2 }}
                      >
                        <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                          {audience.icon}
                        </div>
                      </motion.div>
                    </div>

                    <CardTitle
                      className={`text-center text-xl font-bold bg-gradient-to-r ${audience.gradient} bg-clip-text text-transparent`}
                    >
                      {audience.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <ul className="space-y-3">
                      {audience.items.map((item, j) => (
                        <motion.li
                          key={j}
                          className="flex items-start"
                          variants={listItemVariants}
                          custom={j}
                        >
                          <div
                            className={`h-6 w-6 rounded-full bg-gradient-to-br ${audience.gradient} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 shadow-sm`}
                          >
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Animated border on hover */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${audience.gradient}`}
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full text-white"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </motion.section>
  );
};

export default TargetAudience;

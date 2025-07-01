import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import CountUp from "../../../Reactbits/CountUp/CountUp";
import { useRef } from "react";
import { useInView } from "framer-motion";

const MarketTractionSection = () => {
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const cardsRef = useRef(null);

  // Check if elements are in viewport
  const sectionInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const statsInView = useInView(statsRef, { once: false, amount: 0.2 });
  const cardsInView = useInView(cardsRef, { once: false, amount: 0.1 });

  // Animation variants

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } as any },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } as any },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } as any },
  };

  const numberCounterVariants = {
    hidden: { opacity: 0 },
    visible: (i = 0) => ({
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3 + 0.1 * i,
      },
    }),
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-amber-50"></div>

        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-200/30 to-emerald-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-amber-200/20 to-amber-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header with animations */}
          <div className="text-center mb-20">
            <motion.div
              variants={fadeIn}
              className="mb-4"
            >
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full text-sm shadow-lg">
                Our Impact Journey
              </span>
            </motion.div>

            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-800 via-green-900 to-amber-800 bg-clip-text text-transparent mb-6 leading-tight"
            >
              Market Traction & Growth
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Our impact in numbers - demonstrating sustainable growth and
              positive change across communities
            </motion.p>
          </div>

          {/* Statistics with counter animations */}
          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            {[
              {
                value: 500,
                suffix: "+",
                label: "Farmers Empowered",
                color: "from-green-500 to-green-700",
                custom: 0,
              },
              {
                value: 200,
                suffix: "+",
                label: "Rural Jobs Created",
                color: "from-amber-500 to-amber-700",
                custom: 1,
              },
              {
                value: 40,
                suffix: "%",
                label: "Income Increase",
                color: "from-green-500 to-green-700",
                custom: 2,
              },
              {
                value: 50,
                suffix: "+",
                label: "Retail Partners",
                color: "from-amber-500 to-amber-700",
                custom: 3,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={statsVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-white/40 h-full flex flex-col items-center justify-center">
                  <motion.div
                    className={`text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}
                    variants={numberCounterVariants}
                  >
                    <CountUp
                      to={stat.value}
                      from={0}
                      duration={1.5}
                      className="inline"
                    />
                    {stat.suffix}
                  </motion.div>

                  <motion.div
                    className="text-gray-600 font-medium text-center"
                    variants={fadeIn}
                  >
                    {stat.label}
                  </motion.div>

                  {/* Decorative element */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-b-2xl`}
                    initial={{ width: "0%" }}
                    animate={statsInView ? { width: "100%" } : { width: "0%" }}
                    transition={{ duration: 0.8, delay: 0.3 + 0.1 * index }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Growth Story Cards with animations */}
          <motion.div
            ref={cardsRef}
            className="grid md:grid-cols-1 gap-8 relative"
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
          >
            {/* Vertical timeline connector */}
            <motion.div 
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-amber-500 to-green-600 hidden md:block"
              initial={{ height: 0, opacity: 0 }}
              animate={cardsInView ? { height: "100%", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {[
              {
                year: "Year 1: Foundation",
                color: "green",
                items: [
                  "Established partnerships with 100 farmers",
                  "Launched first 3 products locally",
                  "Set up processing facilities",
                  "Achieved organic certification",
                ],
                custom: 0,
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                bgImage: "/lovable-uploads/agriculture.jpeg"
              },
              {
                year: "Year 2: Expansion",
                color: "amber",
                items: [
                  "Grew to 300 farmer network",
                  "Expanded to 6 product lines",
                  "Entered online marketplaces",
                  "Established B2B partnerships",
                ],
                custom: 1,
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                bgImage: "/lovable-uploads/prod.jpeg"
              },
              {
                year: "Year 3: Scale",
                color: "green",
                items: [
                  "500+ farmers across Karnataka",
                  "Complete 9-product portfolio",
                  "Multi-state distribution",
                  "Training 200+ rural youth",
                ],
                custom: 2,
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                bgImage: "/lovable-uploads/shake.jpeg"
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative md:flex md:items-center"
              >
                {/* Timeline node */}
                <motion.div
                  className={
                    // For Year 2 (index 1), place the circle to the left of the center line, others to the right
                    index === 1
                      ? `absolute left-1/2 transform -translate-x-1/2 -ml-16 w-12 h-12 rounded-full bg-gradient-to-r from-${card.color}-500 to-${card.color}-700 shadow-lg items-center justify-center z-20 hidden md:flex`
                      : `absolute left-1/2 transform -translate-x-1/2 ml-16 w-12 h-12 rounded-full bg-gradient-to-r from-${card.color}-500 to-${card.color}-700 shadow-lg items-center justify-center z-20 hidden md:flex`
                  }
                  initial={{ scale: 0, opacity: 0 }}
                  animate={cardsInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  whileHover={{
                    scale: 1.2,
                    boxShadow: "0 0 20px rgba(0, 128, 0, 0.5)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div className="text-white flex items-center justify-center">
                    {card.icon}
                  </motion.div>
                </motion.div>

                {/* Card positioning based on index (alternating left/right) */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} relative z-10`}>
                  <motion.div
                    className="relative overflow-hidden rounded-xl shadow-xl"
                    whileHover={{
                      y: -10,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    {/* Background image with overlay */}
                    <div className="absolute inset-0 overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${card.bgImage}')` }}
                        initial={{ scale: 1.2, filter: "blur(5px)" }}
                        animate={cardsInView ? { scale: 1, filter: "blur(2px)" } : { scale: 1.2, filter: "blur(5px)" }}
                        transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                      />
                      {/* Primary color overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-${card.color}-700/90 to-${card.color}-900/80`}></div>
                      
                      {/* Text visibility enhancement - shadow gradient from bottom to top */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                    </div>

                    <Card className="border-0 bg-transparent backdrop-blur-sm relative z-10">
                      {/* Animated gradient line at top */}
                      <motion.div
                        className={`h-1 bg-gradient-to-r from-white/80 to-white/40`}
                        initial={{ width: 0 }}
                        animate={cardsInView ? { width: "100%" } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 + 0.2 * index }}
                      />

                      <CardHeader>
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                          transition={{ duration: 0.5, delay: 0.5 + 0.2 * index }}
                        >
                          <CardTitle className="text-white flex items-center text-2xl font-bold">
                            <motion.span
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={cardsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.5, delay: 0.6 + 0.2 * index }}
                              className={`w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center mr-3 text-lg font-bold backdrop-blur-sm`}
                            >
                              {index + 1}
                            </motion.span>
                            <motion.span
                              initial={{ opacity: 0, x: -20 }}
                              animate={cardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ duration: 0.5, delay: 0.7 + 0.2 * index }}
                            >
                              {card.year}
                            </motion.span>
                          </CardTitle>
                        </motion.div>
                      </CardHeader>

                      <CardContent>
                        <ul className="space-y-3 text-white/90">
                          {card.items.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              animate={cardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.8 + 0.1 * itemIndex + 0.2 * index,
                              }}
                            >
                              <motion.div
                                className="mr-2 text-white/80"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={cardsInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: 0.9 + 0.1 * itemIndex + 0.2 * index,
                                  type: "spring",
                                  stiffness: 200
                                }}
                              >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </motion.div>
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={cardsInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: 1.0 + 0.1 * itemIndex + 0.2 * index,
                                }}
                              >
                                {item}
                              </motion.span>
                            </motion.li>
                          ))}
                        </ul>
                        
                        {/* Animated particles */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={`particle-${index}-${i}`}
                              className="absolute w-1.5 h-1.5 bg-white/60 rounded-full"
                              style={{
                                left: `${20 + i * 20}%`,
                                top: `${30 + (i % 3) * 20}%`,
                              }}
                              animate={{
                                y: [0, -15, 0],
                                opacity: [0, 0.8, 0],
                                scale: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut",
                              }}
                            />
                          ))}
                        </div>
                      </CardContent>
                      
                      {/* Animated corner decoration */}
                      <motion.div
                        className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full transform translate-x-12 translate-y-12"
                        initial={{ scale: 0 }}
                        animate={cardsInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 + 0.2 * index }}
                      />
                    </Card>
                  </motion.div>
                  
                  {/* Connecting line to timeline (visible only on desktop) */}
                  <motion.div
                    className={`absolute top-1/2 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-12 h-0.5 bg-gradient-to-r from-${card.color}-500 to-${card.color}-700 hidden md:block`}
                    initial={{ width: 0 }}
                    animate={cardsInView ? { width: "12px" } : { width: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + 0.2 * index }}
                  />
                </div>
              </motion.div>
            ))}
            
            {/* Final achievement marker */}
            <motion.div
              className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 hidden md:block"
              initial={{ scale: 0, opacity: 0 }}
              animate={cardsInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MarketTractionSection;
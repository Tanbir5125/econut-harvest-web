import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const ProductsQualityPromiseSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const qualityFeatures = [
    {
      title: "100% Organic",
      description: "Certified organic farming without chemicals or pesticides",
      gradient: "from-green-400 to-emerald-600",
      image: "/lovable-uploads/organic-leaf.jpeg", // Image for organic certification
      pattern:
        "radial-gradient(circle, rgba(0,128,0,0.1) 2px, transparent 2px)",
      patternSize: "20px 20px",
    },
    {
      title: "Direct from Farmers",
      description: "No middlemen, ensuring freshness and fair prices",
      gradient: "from-amber-400 to-amber-600",
      image: "/lovable-uploads/farmer-hands.jpeg", // Image of farmer hands
      pattern:
        "linear-gradient(45deg, rgba(255,191,0,0.1) 25%, transparent 25%, transparent 50%, rgba(255,191,0,0.1) 50%, rgba(255,191,0,0.1) 75%, transparent 75%, transparent)",
      patternSize: "20px 20px",
    },
    {
      title: "Fresh Processing",
      description: "Processed within 24 hours of harvest for maximum nutrition",
      gradient: "from-green-400 to-teal-500",
      image: "/lovable-uploads/fresh-process.jpeg", // Image of processing
      pattern:
        "repeating-linear-gradient(0deg, rgba(0,128,128,0.1), rgba(0,128,128,0.1) 1px, transparent 1px, transparent 10px)",
      patternSize: "20px 20px",
    },
    {
      title: "Quality Tested",
      description: "Rigorous quality checks and organic certification",
      gradient: "from-amber-500 to-orange-600",
      image: "/lovable-uploads/quality-seal.jpeg", // Image of quality seal/certificate
      pattern:
        "radial-gradient(circle, rgba(255,140,0,0.1) 2px, transparent 2px)",
      patternSize: "15px 15px",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-green-50 z-0"></div>

      {/* Animated background patterns */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(16, 185, 129, 0.1) 2px, transparent 2px)",
            backgroundSize: "30px 30px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "30px 30px"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(245, 158, 11, 0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "-20px -20px"],
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-block mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full text-sm shadow-lg">
                Our Standards
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-800 via-amber-700 to-green-800 bg-clip-text text-transparent">
              Our Quality Promise
            </h2>

            <motion.p
              className="text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Every product is carefully crafted using traditional methods and
              modern quality standards
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="rounded-2xl overflow-hidden shadow-lg h-full bg-white hover:shadow-xl transition-shadow duration-300">
                  {/* Card Header with Image and Gradient Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    {/* Background Pattern */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: feature.pattern,
                        backgroundSize: feature.patternSize,
                      }}
                    />

                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-90`}
                    ></div>

                    {/* Animated Circles */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full bg-white/20"
                          style={{
                            width: `${20 + i * 10}px`,
                            height: `${20 + i * 10}px`,
                            left: `${10 + i * 15}%`,
                            top: `${20 + (i % 3) * 20}%`,
                          }}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Feature Image - Replacing the emoji icons */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/30 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        {/* Image with fallback */}
                        <div className="w-full h-full relative">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to a default image if the specified one fails to load
                              e.currentTarget.src =
                                "/lovable-uploads/placeholder.svg";
                            }}
                          />
                          {/* Overlay to ensure text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                        repeatDelay: 0.5,
                      }}
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                        width: "50%",
                      }}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3
                      className={`font-semibold text-xl mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${feature.gradient}`}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              type="button"
              onClick={() => (window.location.href = "/impact")}
            >
              Learn More About Our Standards
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsQualityPromiseSection;

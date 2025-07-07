import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  AnimatePresence,
  easeInOut,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FreshWorthKeyInitiatives = () => {
  // Animation refs and hooks
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.2, once: false });

  // State for carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [direction, setDirection] = useState(0);

  // Motion values for drag gesture
  const x = useMotionValue(0);
  const dragProgress = useTransform(x, [-300, 300], [0.5, -0.5]);

  // Track if transition is in progress
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Initiatives data with images
  const initiatives = [
    {
      title: "Direct Market Linkage",
      description:
        "Connecting farmers directly with consumers and retailers, ensuring fair prices and eliminating middleman exploitation.",
      image: "/lovable-uploads/market1.jpeg",
      gradient: "from-green-600/80 to-green-800/90",
    },
    {
      title: "Skill Development",
      description:
        "Training programs in modern farming techniques, product processing, quality control, and business management.",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
      gradient: "from-amber-600/80 to-amber-800/90",
    },
    {
      title: "Community Welfare",
      description:
        "Healthcare initiatives, educational support, and infrastructure development for farming communities.",
      image: "/lovable-uploads/community.jpeg",
      gradient: "from-green-600/80 to-green-800/90",
    },
    {
      title: "Organic Certification",
      description:
        "Supporting farmers in achieving organic certification to access premium markets and better pricing.",
      image: "/lovable-uploads/organic.jpeg",
      gradient: "from-amber-600/80 to-amber-800/90",
    },
    {
      title: "Value Addition",
      description:
        "Establishing processing units for coconut oil, neera sugar, and other value-added products to increase farmer income.",
      image: "/lovable-uploads/value.jpeg",
      gradient: "from-green-600/80 to-green-800/90",
    },
    {
      title: "Women Empowerment",
      description:
        "Special programs for women farmers focusing on leadership development, financial literacy, and entrepreneurship.",
      image:
        "/lovable-uploads/women.jpeg",
      gradient: "from-amber-600/80 to-amber-800/90",
    },
  ];

  // Handle navigation
  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(1);
    if (activeIndex < initiatives.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0); // Loop back to first slide
    }
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(-1);
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(initiatives.length - 1); // Loop to last slide
    }
  };

  // Handle drag gestures
  const handleDragEnd = (_, info) => {
    setIsDragging(false);
    const threshold = 100; // Minimum drag distance to trigger slide change

    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        // Swiped right (previous slide)
        handlePrev();
      } else {
        // Swiped left (next slide)
        handleNext();
      }
    }
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  };

  // Updated slide variants for smoother transitions
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
      scale: 1,
      filter: "brightness(0.7)",
      transition: {
        x: { type: "tween", duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        filter: { duration: 0.3 },
      },
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "brightness(1)",
      transition: {
        x: { type: "tween", duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        filter: { duration: 0.3 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 1,
      scale: 1,
      filter: "brightness(0.7)",
      transition: {
        x: { type: "tween", duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        filter: { duration: 0.3 },
      },
    }),
  };

  const indicatorVariants = {
    inactive: { scale: 0.7, opacity: 0.5 },
    active: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const floatingElementVariants = {
    animate: {
      y: [0, -10, 0],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  // Handle button navigation
  const paginate = (newDirection) => {
    if (newDirection > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  // Handle transition end
  const handleAnimationComplete = () => {
    setIsTransitioning(false);
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/lovable-uploads/forest.jpeg')",
            filter: "blur(3px) brightness(0.9)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/90 via-white/80 to-green-50/90" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className={`absolute rounded-full ${
              i % 2 === 0
                ? "bg-green-500/10 border border-green-500/20"
                : "bg-amber-500/10 border border-amber-500/20"
            }`}
            style={{
              width: `${80 + i * 20}px`,
              height: `${80 + i * 20}px`,
              left: `${10 + i * 15}%`,
              top: `${10 + (i % 3) * 25}%`,
            }}
            initial={{ opacity: 0.2, scale: 0.9 }}
            animate={{
              opacity: [0.2, 0.3, 0.2],
              scale: [0.9, 1, 0.9],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header with animations */}
          <motion.div className="text-center mb-16" variants={titleVariants}>
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full text-sm shadow-lg">
                🌱 Transforming Rural Lives
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-green-800 via-green-900 to-emerald-800 bg-clip-text text-transparent mb-6 leading-tight drop-shadow-lg"
              variants={titleVariants}
              style={{
                WebkitTextFillColor: "transparent",
                overflowWrap: "anywhere",
                wordBreak: "break-word",
                lineHeight: 1.3,
                WebkitBoxDecorationBreak: "clone",
              }}
            >
              Our Key Initiatives
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium"
              variants={titleVariants}
              custom={1}
            >
              Comprehensive programs designed to uplift rural communities and
              create sustainable livelihoods
            </motion.p>

            {/* Decorative divider */}
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-lime-400 via-green-500 to-lime-400 mx-auto mt-8 rounded-full shadow"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          {/* Carousel container */}
          <div className="relative mt-10 mb-10">
            {/* Carousel wrapper with gesture support */}
            <motion.div
              ref={carouselRef}
              className="relative overflow-hidden h-[500px] md:h-[450px] rounded-2xl shadow-2xl"
              style={{
                touchAction: "pan-y",
                cursor: isDragging ? "grabbing" : "grab",
                x,
                background: "#000", // Dark background to prevent white flash
              }}
              drag={!isTransitioning ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
            >
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="popLayout"
              >
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  onAnimationComplete={handleAnimationComplete}
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Current slide */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    {/* Card background image */}
                    <img
                      src={initiatives[activeIndex].image}
                      alt={initiatives[activeIndex].title}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500"
                      style={{
                        transform: "scale(1.05)",
                      }}
                      draggable={false}
                    />
                    {/* Modern card gradient overlay (matches rest of site) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/0 to-transparent" />
                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <motion.h3
                          className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg"
                          variants={floatingElementVariants}
                          animate="animate"
                        >
                          {initiatives[activeIndex].title}
                        </motion.h3>
                        <motion.p
                          className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl drop-shadow-md bg-black/30 rounded-lg px-4 py-2 backdrop-blur-sm mb-0"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          {initiatives[activeIndex].description}
                        </motion.p>
                      </motion.div>
                      {/* Decorative elements */}
                      <motion.div
                        className="absolute top-8 right-8 w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="w-4 h-4 bg-white rounded-full" />
                      </motion.div>
                      {/* Removed mobile arrows. Adjust spacing for mobile below. */}
                      <div className="block md:hidden mt-8" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Shadow overlay that appears during transitions */}
              <motion.div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  boxShadow: "inset 0 0 30px rgba(0,0,0,0.5)",
                  opacity: useTransform(
                    dragProgress,
                    [-0.5, 0, 0.5],
                    [0.7, 0, 0.7]
                  ),
                }}
              />
            </motion.div>

            {/* Navigation arrows */}
            {/* Desktop arrows: inside card, slightly above center left/right */}
            <div className="hidden md:block">
              <div className="absolute left-4 top-[45%] transform -translate-y-1/2 z-20">
                <motion.button
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 hover:bg-white/30 transition-colors duration-300"
                  onClick={() => !isTransitioning && paginate(-1)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  disabled={isTransitioning}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
              </div>
              <div className="absolute right-4 top-[45%] transform -translate-y-1/2 z-20">
                <motion.button
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 hover:bg-white/30 transition-colors duration-300"
                  onClick={() => !isTransitioning && paginate(1)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  disabled={isTransitioning}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {initiatives.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-gradient-to-br from-green-400 via-lime-400 to-green-600 border-green-500 shadow-lg"
                      : "bg-gray-200 border-gray-300"
                  }`}
                  onClick={() => {
                    if (isTransitioning) return;
                    const newDirection = index > activeIndex ? 1 : -1;
                    setDirection(newDirection);
                    setActiveIndex(index);
                    setIsTransitioning(true);
                  }}
                  variants={indicatorVariants}
                  animate={index === activeIndex ? "active" : "inactive"}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={isTransitioning}
                />
              ))}
            </div>

            {/* Swipe instruction */}
            <motion.div
              className="text-center mt-4 text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1 }}
            >
              Swipe or drag to navigate
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FreshWorthKeyInitiatives;
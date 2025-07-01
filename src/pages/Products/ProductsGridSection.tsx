import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  benefits: string[];
  backgroundImage: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Neera Sugar",
    description:
      "Natural sweetener extracted from fresh coconut palm nectar. Low glycemic index makes it perfect for health-conscious consumers and diabetics.",
    benefits: [
      "Low glycemic index",
      "Rich in minerals",
      "Unprocessed natural sweetener",
    ],
    backgroundImage: "./lovable-uploads/sugar.jpeg", // Use local image path
  },
  {
    id: 2,
    name: "Virgin Coconut Oil",
    description:
      "Cold-pressed from fresh coconut meat, retaining all natural nutrients and flavor. Perfect for cooking, skincare, and haircare.",
    benefits: ["Cold-pressed", "High in MCTs", "Multipurpose use"],
    backgroundImage: "./lovable-uploads/oil.jpeg",
  },
  {
    id: 3,
    name: "Coconut Milkshake",
    description:
      "Ready-to-drink natural coconut milkshake made from fresh coconuts. Refreshing and nutritious with no artificial additives.",
    benefits: ["No preservatives", "Natural electrolytes", "Instant energy"],
    backgroundImage: "./lovable-uploads/shake.jpeg",
  },
  {
    id: 4,
    name: "Coconut Water",
    description:
      "Fresh coconut water directly from young green coconuts. Natural isotonic drink packed with electrolytes and minerals.",
    benefits: ["Natural electrolytes", "Zero calories", "Hydrating"],
    backgroundImage: "./lovable-uploads/water.jpeg",
  },
  {
    id: 5,
    name: "Coconut Flour",
    description:
      "Gluten-free flour made from dried coconut meat. High in fiber and protein, perfect for healthy baking and cooking.",
    benefits: ["Gluten-free", "High fiber", "Protein-rich"],
    backgroundImage: "./lovable-uploads/flour.jpeg",
  },
  {
    id: 6,
    name: "Desiccated Coconut",
    description:
      "Finely grated dried coconut meat. Ideal for baking, cooking, and as a healthy snack ingredient.",
    benefits: ["Long shelf life", "Versatile ingredient", "Natural flavor"],
    backgroundImage: "./lovable-uploads/coconut.jpeg",
  },
  {
    id: 7,
    name: "Coconut Chips",
    description:
      "Crispy toasted coconut slices, lightly sweetened. A healthy snack alternative packed with natural flavor.",
    benefits: ["Healthy snacking", "Natural sweetness", "Crunchy texture"],
    backgroundImage: "./lovable-uploads/chips.jpeg",
  },
  {
    id: 8,
    name: "Coconut Vinegar",
    description:
      "Fermented coconut sap vinegar with probiotic benefits. Natural and organic with rich, complex flavor profile.",
    benefits: [
      "Probiotic benefits",
      "Natural fermentation",
      "Rich in amino acids",
    ],
    backgroundImage: "./lovable-uploads/vinegar.jpeg",
  },
  {
    id: 9,
    name: "Coconut Honey",
    description:
      "Sweet syrup made from coconut palm nectar. Natural alternative to processed sugar with unique tropical flavor.",
    benefits: ["Mineral-rich", "Natural sweetener", "Tropical flavor"],
    backgroundImage: "./lovable-uploads/honey.jpeg",
  },
];

const ProductsGridSection = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [activeProductId, setActiveProductId] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Container animation for the grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Individual card entry animations
  const cardEntryVariants = {
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
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth animation
      },
    },
  };

  // Define variants for hover animations
  const cardVariants = {
    initial: {},
    hover: {
      scale: 1.03,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    initial: {},
    hover: {
      scale: 1.08,
      transition: { duration: 0.7 },
    },
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  const titleContainerVariants = {
    initial: { bottom: "1.5rem", top: "auto" },
    hover: {
      top: "1.5rem",
      bottom: "auto",
      transition: { duration: 0.5 },
    },
  };

  const titleVariants = {
    initial: { color: "white", fontSize: "1.5rem", marginBottom: "0" },
    hover: {
      color: "rgb(74 222 128)",
      fontSize: "1.25rem",
      marginBottom: "1rem",
      transition: { duration: 0.4 },
    },
  };

  const contentVariants = {
    initial: { y: 20, opacity: 0 },
    hover: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const descriptionVariants = {
    initial: { y: 10, opacity: 0 },
    hover: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, delay: 0.2 },
    },
  };

  const benefitsContainerVariants = {
    initial: { y: 10, opacity: 0 },
    hover: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, delay: 0.3 },
    },
  };

  const buttonContainerVariants = {
    initial: { y: 10, opacity: 0 },
    hover: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, delay: 0.4 },
    },
  };

  const borderVariants = {
    initial: { borderColor: "transparent" },
    hover: {
      borderColor: "rgba(74, 222, 128, 0.6)",
      transition: { duration: 0.5 },
    },
  };

  // Mobile tap animation for progress bar
  const progressBarVariants = {
    initial: { width: "0%" },
    active: {
      width: "100%",
      transition: { duration: 7 },
    },
  };

  // Handle contact button click
  const handleContactClick = (e: React.MouseEvent, productName: string) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      navigate("/contact");
    } catch (err) {
      console.log(
        "React Router navigate failed, trying alternative methods",
        err
      );

      try {
        window.history.pushState({}, "", "/contact");
        window.location.reload();
      } catch (err2) {
        console.log("History API failed, using direct navigation", err2);
        window.location.href = "/contact";
      }
    }
  };

  // Handle mobile tap
  const handleMobileTap = (e: React.MouseEvent, productId: number) => {
    const target = e.target as HTMLElement;
    if (target.closest("button")) {
      return;
    }

    if (isMobile) {
      e.preventDefault();
      if (activeProductId === productId) {
        setActiveProductId(null);
      } else {
        setActiveProductId(productId);
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        background: `
            linear-gradient(135deg, 
              #f8fafc 0%, 
              #e2e8f0 15%, 
              #f1f5f9 30%, 
              #ecfdf5 45%, 
              #f0fdf4 60%, 
              #e6fffa 75%, 
              #f0fdfa 90%, 
              #ffffff 100%
            )
          `,
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-200/30 to-emerald-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-cyan-300/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-200/15 to-green-300/15 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
                variants={cardEntryVariants}
                initial="initial"
                whileHover={!isMobile ? "hover" : undefined}
                animate={
                  isMobile && activeProductId === product.id
                    ? "hover"
                    : "initial"
                }
                onClick={(e) => handleMobileTap(e, product.id)}
                style={{
                  // Add a subtle stagger delay based on index for visual appeal
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Background Image with hardware acceleration */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center will-change-transform"
                  style={{
                    backgroundImage: `url(${product.backgroundImage})`,
                  }}
                  variants={imageVariants}
                />

                {/* Improved Gradient Overlay - Always present but changes on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500" />

                {/* Additional overlay that appears on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"
                  variants={overlayVariants}
                />

                {/* Mobile progress bar indicator */}
                {isMobile && activeProductId === product.id && (
                  <motion.div
                    className="absolute top-0 left-0 h-1 bg-green-500 z-20"
                    variants={progressBarVariants}
                    initial="initial"
                    animate="active"
                    onAnimationComplete={() => setActiveProductId(null)}
                  />
                )}

                {/* Content Container */}
                <div className="relative h-full flex flex-col">
                  {/* Title - Smoothly animated from bottom to top */}
                  {(!isMobile ||
                    (isMobile && activeProductId === product.id)) && (
                    <motion.div
                      className="absolute left-6 z-10"
                      variants={titleContainerVariants}
                    >
                      <motion.h3
                        className="text-2xl font-bold text-white drop-shadow-2xl"
                        variants={titleVariants}
                      >
                        {product.name}
                      </motion.h3>
                    </motion.div>
                  )}

                  {/* Hidden Content - Appears on Hover with staggered animation */}
                  <motion.div
                    className="absolute inset-0 p-6 pt-20 pb-8 flex flex-col justify-center"
                    variants={contentVariants}
                  >
                    <motion.p
                      className="text-gray-200 mb-6 text-sm leading-relaxed"
                      variants={descriptionVariants}
                    >
                      {product.description}
                    </motion.p>

                    <motion.div
                      className="mb-6"
                      variants={benefitsContainerVariants}
                    >
                      <h4 className="font-semibold text-green-400 text-sm mb-3 uppercase tracking-wide">
                        Key Benefits
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.benefits.map((benefit, index) => (
                          <motion.span
                            key={index}
                            className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/30"
                            initial={{ y: 10, opacity: 0 }}
                            variants={{
                              hover: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                  duration: 0.3,
                                  delay: 0.3 + index * 0.1,
                                },
                              },
                              initial: { y: 10, opacity: 0 },
                            }}
                          >
                            {benefit}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div variants={buttonContainerVariants}>
                      <Button
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 relative z-30"
                        onClick={(e) => handleContactClick(e, product.name)}
                        onMouseDown={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                      >
                        Contact Us
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Subtle Border Glow on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  variants={borderVariants}
                />

                {/* Mobile tap instruction - only visible on mobile when not active */}
                {isMobile && activeProductId !== product.id && (
                  <div className="absolute bottom-4 left-0 right-0 text-center text-white text-xs opacity-70">
                    Tap to view details
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsGridSection;

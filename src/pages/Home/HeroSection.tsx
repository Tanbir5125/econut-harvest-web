import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// import { ArrowDown } from "lucide-react";
import { MotionValue } from "framer-motion";
interface HeroSectionProps {
  heroOpacity?: number;
}

const HeroSection = ({ heroOpacity = 1 }: HeroSectionProps) => {
  // All scroll-based and in-view animation removed. Only static content and hover/tap effects remain.
  return (
    <section
      style={{ opacity: heroOpacity }}
      className="relative bg-gradient-to-br from-green-50 to-amber-50 min-h-[60vh] flex items-center justify-center overflow-hidden py-8"
    >
      {/* Background Image (static) */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/herosection.png')",
          filter: `blur(6px) brightness(0.85)`,
        }}
      />

      {/* Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-8 flex flex-col items-center rounded-3xl bg-white/30 backdrop-blur-xl shadow-2xl border border-white/40 mt-16">
        {/* Animated Texts */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 w-full flex justify-center"
        >
          <span className="inline-block px-5 py-2 bg-green-200/70 text-green-900 font-semibold rounded-full text-base mb-4 shadow-md mt-6 sm:mt-0">
            Premium Organic Products
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-extrabold text-4xl md:text-6xl lg:text-7xl text-green-900 mb-6 leading-tight drop-shadow-lg text-center w-full"
        >
          From Farm to Your Table
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-medium drop-shadow text-center"
        >
          Connecting Karnataka&apos;s finest coconut farmers directly with
          conscious consumers
        </motion.p>

        {/* Key Stats (no scroll animation) */}
        <div className="flex flex-row gap-6 mb-10 w-full justify-center overflow-x-auto scrollbar-hide">
          {/* Animated Key Stats */}
          <motion.div
            className="flex-1 text-center overflow-visible"
            style={{ transition: "transform 0.2s" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px) scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "")}
          >
            <motion.div
              className="w-14 h-14 bg-green-600/90 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg mt-4"
              initial={{ scale: 0, rotate: -30, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="sr-only">Leaf Icon</span>
              <motion.svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <path d="M5 21c0-4.418 3.582-8 8-8s8 3.582 8 8" />
                <path d="M9 17c0-2.209 1.791-4 4-4s4 1.791 4 4" />
              </motion.svg>
            </motion.div>
            <div className="text-2xl font-bold text-green-900">100%</div>
            <div className="text-sm">Organic</div>
          </motion.div>

          <motion.div
            className="flex-1 text-center overflow-visible"
            style={{ transition: "transform 0.2s" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px) scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "")}
          >
            <motion.div
              className="w-14 h-14 bg-amber-600/90 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg mt-4"
              initial={{ scale: 0, rotate: -30, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              <span className="sr-only">Users Icon</span>
              <motion.svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.85 }}
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <circle cx="17" cy="17" r="4" />
              </motion.svg>
            </motion.div>
            <div className="text-2xl font-bold text-green-900">500+</div>
            <div className="text-sm">Farmers</div>
          </motion.div>

          <motion.div
            className="flex-1 text-center overflow-visible"
            style={{ transition: "transform 0.2s" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px) scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "")}
          >
            <motion.div
              className="w-14 h-14 bg-green-600/90 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg mt-4"
              initial={{ scale: 0, rotate: -30, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <span className="sr-only">Award Icon</span>
              <motion.svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <circle cx="12" cy="8" r="7" />
                <path d="M8 21v-4a4 4 0 0 1 8 0v4" />
              </motion.svg>
            </motion.div>
            <div className="text-2xl font-bold text-green-900">A+</div>
            <div className="text-sm">Quality</div>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
          <motion.div
            style={{ perspective: 800, transition: "transform 0.2s" }}
            className="sm:w-48 w-full"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform =
                "rotateY(15deg) rotateX(8deg) scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "")}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform += " scale(0.97)")
            }
            onMouseUp={(e) =>
              (e.currentTarget.style.transform =
                "rotateY(15deg) rotateX(8deg) scale(1.05)")
            }
          >
            <Button
              size="lg"
              className="bg-green-700 hover:bg-green-800 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-200 w-full"
              onClick={() => (window.location.href = "/products")}
            >
              Shop Products
            </Button>
          </motion.div>

          <motion.div
            style={{ perspective: 800, transition: "transform 0.2s" }}
            className="sm:w-48 w-full"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform =
                "rotateY(-15deg) rotateX(8deg) scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "")}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform += " scale(0.97)")
            }
            onMouseUp={(e) =>
              (e.currentTarget.style.transform =
                "rotateY(-15deg) rotateX(8deg) scale(1.05)")
            }
          >
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-green-700 text-green-700 hover:bg-green-50 px-10 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-200 w-full"
              onClick={() => (window.location.href = "/about")}
            >
              Our Story
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Particles (static, no scroll effect) */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className={`absolute ${i % 2 === 0 ? "w-2 h-2" : "w-3 h-3"} ${
              i % 3 === 0 ? "bg-green-300/30" : "bg-amber-300/30"
            } rounded-full`}
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 5) * 15}%`,
              opacity: 0.4,
              scale: 1,
            }}
          />
        ))}
      </div>

      {/* Overlay removed as per request to eliminate whitish blur effect */}

      {/* Transition Element to Mission Section (removed, handled by SectionTransition in parent) */}
    </section>
  );
};
export default HeroSection;

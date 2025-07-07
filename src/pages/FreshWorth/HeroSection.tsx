import { motion } from "framer-motion";
import CountUp from "../../../Reactbits/CountUp/CountUp";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, type: "spring" as const }, // slower animation
  },
};

// For staggered animation
const getCustomTransition = (i: number) => ({
  ...textVariants.visible,
  transition: { ...textVariants.visible.transition, delay: 0.25 * i }, // slower stagger
});

const FreshWorthHeroSection = () => (
  <section className="relative bg-gradient-to-br from-green-50 to-amber-50 pt-20">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-40"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=800&fit=crop')",
        filter: "brightness(0.85)",
      }}
    />
    <div className="relative container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          className="inline-block px-4 py-2 bg-green-100 text-green-800 font-semibold rounded-full text-sm mb-6"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={getCustomTransition(1).transition}
        >
          Transforming Rural Communities
        </motion.span>
        <motion.h1
          className="font-bold text-4xl md:text-6xl text-green-900 mb-8 leading-tight"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={getCustomTransition(2).transition}
        >
          Fresh Worth
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-green-700 mb-12 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={getCustomTransition(3).transition}
        >
          Delivering fresh value to farmers, creating meaningful employment, and
          building sustainable livelihoods across Karnataka's coconut farming
          communities
        </motion.p>
        {/* Key Impact Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={getCustomTransition(4).transition}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-green-900">
              <CountUp to={500} duration={2} separator="," />+
            </div>
            <div className="text-green-700">Farmers Empowered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-700 flex items-center justify-center md:justify-center">
              <span className="-ml-4 md:ml-0">
                ₹<CountUp to={20000000} duration={0.7} separator="," />+
              </span>
            </div>
            <div className="text-green-700">Income Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-900">
              <CountUp to={1000} duration={2} separator="," />+
            </div>
            <div className="text-green-700">Jobs Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-700">
              <CountUp to={15} duration={2} separator="," />+
            </div>
            <div className="text-green-700">Villages Impacted</div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FreshWorthHeroSection;

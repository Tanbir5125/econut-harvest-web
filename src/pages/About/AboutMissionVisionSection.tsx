import { motion } from "framer-motion";
import {
  Leaf,
  Users,
  TrendingUp,
  Globe,
  Award,
  Zap,
} from "lucide-react";

const AboutMissionVisionSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 1,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        delay: 0.5,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-200/30 to-emerald-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-amber-200/30 to-orange-300/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Mission Section */}
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center mb-32"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative">
                <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-800 via-green-600 to-emerald-500 bg-clip-text text-transparent mb-8 leading-tight">
                  Our Mission
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></div>
              </div>

              <motion.p
                className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light"
                variants={itemVariants}
              >
                To bridge the gap between coconut farmers and consumers by
                providing direct market access, ensuring fair prices for farmers
                while delivering authentic, high-quality organic coconut
                products to health-conscious consumers.
              </motion.p>

              <motion.div className="space-y-4" variants={itemVariants}>
                {[
                  {
                    icon: Zap,
                    text: "Eliminate middlemen to maximize farmer returns",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: Leaf,
                    text: "Promote sustainable and organic farming practices",
                    color: "from-emerald-500 to-teal-500",
                  },
                  {
                    icon: Users,
                    text: "Create rural employment opportunities",
                    color: "from-teal-500 to-cyan-500",
                  },
                  {
                    icon: TrendingUp,
                    text: "Train and empower local youth in modern agriculture",
                    color: "from-cyan-500 to-blue-500",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={listItemVariants}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:shadow-md group"
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium text-lg">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={imageVariants} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1013&q=80"
                  alt="Coconut farming mission"
                  className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold text-green-800 mb-2">
                      Empowering Farmers
                    </h3>
                    <p className="text-gray-600">
                      Direct market access for sustainable growth
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={imageVariants}
              className="relative group order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/vision.jpeg"
                  alt="Vision for the future"
                  className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold text-amber-800 mb-2">
                      Future Growth
                    </h3>
                    <p className="text-gray-600">
                      Leading Karnataka's coconut industry transformation
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="relative">
                <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-800 via-amber-600 to-orange-500 bg-clip-text text-transparent mb-8 leading-tight">
                  Our Vision
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full"></div>
              </div>

              <motion.p
                className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light"
                variants={itemVariants}
              >
                To become Karnataka's leading coconut product brand, recognized
                for quality, sustainability, and positive social impact, while
                setting new standards for farmer-consumer relationships in the
                agricultural sector.
              </motion.p>

              <motion.div className="space-y-4" variants={itemVariants}>
                {[
                  {
                    icon: Globe,
                    text: "Expand reach to health-conscious consumers nationwide",
                    color: "from-amber-500 to-orange-500",
                  },
                  {
                    icon: Users,
                    text: "Establish strong B2B partnerships with retailers",
                    color: "from-orange-500 to-red-500",
                  },
                  {
                    icon: TrendingUp,
                    text: "Scale operations across multiple states",
                    color: "from-red-500 to-pink-500",
                  },
                  {
                    icon: Award,
                    text: "Become a model for sustainable agriculture practices",
                    color: "from-pink-500 to-purple-500",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={listItemVariants}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:shadow-md group"
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium text-lg">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVisionSection;

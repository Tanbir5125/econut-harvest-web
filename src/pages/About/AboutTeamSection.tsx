import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const AboutTeamSection = () => {
  const sectionRef = useRef(null);

  // Animation variants
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
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-32 bg-gradient-to-br from-green-50 via-white to-amber-50 overflow-hidden relative min-h-screen">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-amber-200 to-amber-300 rounded-full opacity-10 translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-green-200 rounded-full opacity-15 blur-2xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-amber-200 rounded-full opacity-15 blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <motion.div
            className="text-center mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
          >
            <motion.div className="relative inline-block">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-8 leading-tight">
                Our Leadership Team
              </h2>
              <motion.span
                className="block mx-auto mt-[-12px] w-32 h-1.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                variants={underlineVariants}
              ></motion.span>
            </motion.div>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mt-12 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Experienced professionals dedicated to transforming the coconut
              industry through innovation, sustainability, and community
              empowerment
            </motion.p>
          </motion.div>

          {/* Enhanced Team Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
            ref={sectionRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* CEO Card */}
            <motion.div variants={cardVariants} className="group">
              <Card className="border-none overflow-hidden bg-white/90 backdrop-blur-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 group-hover:bg-white relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="text-center pb-0 relative z-10">
                  <div className="w-full h-56 overflow-hidden rounded-xl mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent z-10"></div>
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt="CEO"
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardTitle className="text-green-900 mt-4 text-2xl font-bold">
                    Chief Executive Officer
                  </CardTitle>
                  <CardDescription className="text-green-700 font-semibold text-lg">
                    Strategic Leadership
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8 relative z-10">
                  <p className="text-gray-600 text-center leading-relaxed">
                    Leading the organization's vision with extensive experience
                    in agricultural business development and farmer empowerment
                    initiatives.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Head of Operations Card */}
            <motion.div variants={cardVariants} className="group">
              <Card className="border-none overflow-hidden bg-white/90 backdrop-blur-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:-rotate-1 group-hover:bg-white relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="text-center pb-0 relative z-10">
                  <div className="w-full h-56 overflow-hidden rounded-xl mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent z-10"></div>
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
                      alt="Head of Operations"
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardTitle className="text-amber-800 mt-4 text-2xl font-bold">
                    Head of Operations
                  </CardTitle>
                  <CardDescription className="text-amber-700 font-semibold text-lg">
                    Production & Quality
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8 relative z-10">
                  <p className="text-gray-600 text-center leading-relaxed">
                    Overseeing product development, quality control, and supply
                    chain management to ensure premium organic standards.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Farmer Relations Manager Card */}
            <motion.div variants={cardVariants} className="group">
              <Card className="border-none overflow-hidden bg-white/90 backdrop-blur-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 group-hover:bg-white relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="text-center pb-0 relative z-10">
                  <div className="w-full h-56 overflow-hidden rounded-xl mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent z-10"></div>
                    <img
                      src="https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      alt="Farmer Relations Manager"
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardTitle className="text-green-900 mt-4 text-2xl font-bold">
                    Farmer Relations Manager
                  </CardTitle>
                  <CardDescription className="text-green-700 font-semibold text-lg">
                    Community Engagement
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8 relative z-10">
                  <p className="text-gray-600 text-center leading-relaxed">
                    Building strong relationships with coconut farmers,
                    providing training, and ensuring fair trade practices across
                    our network.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sales & Marketing Director Card */}
            <motion.div variants={cardVariants} className="group">
              <Card className="border-none overflow-hidden bg-white/90 backdrop-blur-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:-rotate-1 group-hover:bg-white relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="text-center pb-0 relative z-10">
                  <div className="w-full h-56 overflow-hidden rounded-xl mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent z-10"></div>
                    <img
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      alt="Sales & Marketing Director"
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardTitle className="text-amber-800 mt-4 text-2xl font-bold">
                    Sales & Marketing Director
                  </CardTitle>
                  <CardDescription className="text-amber-700 font-semibold text-lg">
                    Market Expansion
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8 relative z-10">
                  <p className="text-gray-600 text-center leading-relaxed">
                    Driving brand awareness and market penetration through
                    strategic partnerships and innovative marketing campaigns.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quality Assurance Lead Card */}
            <motion.div variants={cardVariants} className="group">
              <Card className="border-none overflow-hidden bg-white/90 backdrop-blur-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 group-hover:bg-white relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="text-center pb-0 relative z-10">
                  <div className="w-full h-56 overflow-hidden rounded-xl mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent z-10"></div>
                    <img
                      src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      alt="Quality Assurance Lead"
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardTitle className="text-green-900 mt-4 text-2xl font-bold">
                    Quality Assurance Lead
                  </CardTitle>
                  <CardDescription className="text-green-700 font-semibold text-lg">
                    Product Excellence
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8 relative z-10">
                  <p className="text-gray-600 text-center leading-relaxed">
                    Maintaining the highest standards of organic certification
                    and product quality across all coconut-based offerings.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Finance & Operations Card */}
            <motion.div variants={cardVariants} className="group">
              <Card className="border-none overflow-hidden bg-white/90 backdrop-blur-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:-rotate-1 group-hover:bg-white relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="text-center pb-0 relative z-10">
                  <div className="w-full h-56 overflow-hidden rounded-xl mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent z-10"></div>
                    <img
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      alt="Finance & Operations"
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardTitle className="text-amber-800 mt-4 text-2xl font-bold">
                    Finance & Operations
                  </CardTitle>
                  <CardDescription className="text-amber-700 font-semibold text-lg">
                    Financial Management
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8 relative z-10">
                  <p className="text-gray-600 text-center leading-relaxed">
                    Managing financial operations, farmer payments, and ensuring
                    sustainable growth for all stakeholders.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Call to Action Section */}
          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Join Our Mission?
                </h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Connect with our team to learn more about our sustainable
                  coconut initiatives and partnership opportunities.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-white text-green-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;

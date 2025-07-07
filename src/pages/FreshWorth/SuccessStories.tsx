import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Award, Quote } from "lucide-react";

const FreshWorthSuccessStories = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stories = [
    {
      name: "Ramesh Kumar",
      location: "Tumkur District",
      role: "Coconut Farmer & Entrepreneur",
      testimonial:
        "Before joining Fresh Worth, I was selling my coconuts at ₹12 each to middlemen. Now, through direct market access and value addition, I earn ₹25 per coconut. My monthly income has increased from ₹15,000 to ₹40,000.",
      impact: "Income increase: 167%",
      color: "green",
      icon: <TrendingUp className="w-5 h-5" />,
      image: "/lovable-uploads/farmer1.jpeg", // Placeholder image path
      bgPattern:
        "url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23065f46 fill-opacity=0.05%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
    },
    {
      name: "Lakshmi Devi",
      location: "Mandya District",
      role: "Women's Self-Help Group Leader",
      testimonial:
        "Through Fresh Worth's women empowerment program, I learned coconut oil processing. Now I run my own unit employing 15 women from my village. We produce 500 liters of virgin coconut oil monthly.",
      impact: "Jobs created: 15 women employed",
      color: "amber",
      icon: <Users className="w-5 h-5" />,
      image: "/lovable-uploads/farmer2.jpeg", // Placeholder image path
      bgPattern:
        "url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23b45309 fill-opacity=0.05%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
    },
    {
      name: "Venkatesh Rao",
      location: "Hassan District",
      role: "Organic Farming Advocate",
      testimonial:
        "Fresh Worth helped me transition to organic farming practices. My coconut yield has improved by 30% and I now receive premium pricing. The training programs have transformed how I approach agriculture.",
      impact: "Yield increase: 30% with premium pricing",
      color: "emerald",
      icon: <Award className="w-5 h-5" />,
      image: "/lovable-uploads/farmer3.jpeg", // Placeholder image path
      bgPattern:
        "url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23047857 fill-opacity=0.05%3E%3Cpath d=M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-green-50 to-transparent opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-100/30 to-transparent rounded-full opacity-70 translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 left-20 w-64 h-64 bg-green-100 rounded-full opacity-20 blur-3xl pointer-events-none"></div>

      {/* Floating coconut illustrations */}
      <motion.div
        className="absolute top-20 right-[10%] w-16 h-16 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/lovable-uploads/placeholder.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-[15%] w-12 h-12 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/lovable-uploads/placeholder.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        animate={{
          y: [0, -10, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full text-sm shadow-lg mb-6">
              Transforming Lives
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 relative">
              Success Stories
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-lime-400 via-green-500 to-lime-400 rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={
                  isInView
                    ? { width: 96, opacity: 1 }
                    : { width: 0, opacity: 0 }
                }
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real impact, real transformation in the lives of our farming
              communities
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {stories.map((story, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card
                  className={`border-${story.color}-200 h-full overflow-hidden group hover:shadow-xl transition-all duration-500 relative`}
                >
                  {/* Background pattern */}
                  <div
                    className="absolute inset-0 opacity-30 pointer-events-none"
                    style={{ backgroundImage: story.bgPattern }}
                  />

                  {/* Card content */}
                  <div className="relative z-10">
                    <CardHeader
                      className={`pb-0 relative overflow-hidden bg-gradient-to-r from-${story.color}-50 to-${story.color}-100/50`}
                    >
                      <div className="flex items-center gap-4 pt-6 pl-2 pr-2">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <img
                            src={story.image}
                            alt={story.name}
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span
                            className={`text-${story.color}-900 text-2xl font-bold leading-tight`}
                          >
                            {story.name}
                          </span>
                          <span className="text-gray-700 text-lg leading-tight">
                            {story.location}
                          </span>
                        </div>
                      </div>
                      <CardDescription className="text-base mt-2 pl-2">
                        {story.role}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-6 relative">
                      {/* Quote icon */}
                      <div className="mb-4 ml-4">
                        <Quote className={`w-6 h-6 text-${story.color}-600`} />
                      </div>

                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 relative">
                        <p className="text-gray-700 mb-6 italic relative">
                          "{story.testimonial}"
                        </p>

                        <div
                          className={`flex items-center text-sm text-${story.color}-700 font-semibold mt-4 border-t border-${story.color}-100 pt-4`}
                        >
                          <div
                            className={`mr-2 p-1.5 rounded-full bg-${story.color}-100`}
                          >
                            {story.icon}
                          </div>
                          <span>{story.impact}</span>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FreshWorthSuccessStories;

import { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  AtSign,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Building,
  Clock,
  ShoppingBag,
  Award,
  Users,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Refs for scroll animations
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const mapRef = useRef(null);
  const faqRef = useRef(null);

  // Check if sections are in view
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const formInView = useInView(formRef, { once: true, amount: 0.3 });
  const infoInView = useInView(infoRef, { once: true, amount: 0.3 });
  const mapInView = useInView(mapRef, { once: true, amount: 0.3 });
  const faqInView = useInView(faqRef, { once: true, amount: 0.3 });

  // FAQ data
  const faqItems = [
    {
      question: "How can I purchase your products?",
      answer:
        "You can purchase our products through our website, contact us directly via phone or email, or visit our partner retail stores. We offer both online ordering and local pickup options.",
      icon: <ShoppingBag className="w-5 h-5" />,
      color: "text-green-600",
    },
    {
      question: "Do you offer bulk orders for businesses?",
      answer:
        "Yes! We welcome B2B partnerships and offer special pricing for bulk orders. Contact our sales team at sales@FreshWorth.com for wholesale pricing and partnership opportunities.",
      icon: <Building className="w-5 h-5" />,
      color: "text-amber-600",
    },
    {
      question: "Are your products certified organic?",
      answer:
        "Yes, all our products are certified organic and follow strict quality standards. We can provide certification documents upon request.",
      icon: <Award className="w-5 h-5" />,
      color: "text-green-600",
    },
    {
      question: "How can farmers join your network?",
      answer:
        "Coconut farmers interested in joining our network can contact us directly. We provide training, fair pricing, and support to help farmers transition to organic methods.",
      icon: <Users className="w-5 h-5" />,
      color: "text-amber-600",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />

      {/* Hero Section with Animated Background */}
      <motion.section
        ref={heroRef}
        className="pt-32 pb-20 relative bg-gradient-to-br from-green-50 via-white to-amber-50 overflow-hidden"
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full text-sm shadow-lg mb-6">
                🌿 Get In Touch
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-800 via-green-900 to-emerald-800 bg-clip-text text-transparent mb-6 leading-tight"
              variants={itemVariants}
              style={{
                WebkitTextFillColor: "transparent",
              }}
            >
              Contact Us
            </motion.h1>

            <motion.p
              className="text-xl text-green-800 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Get in touch with our team for product inquiries, partnerships, or
              to learn more about our sustainable farming initiatives.
            </motion.p>

            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-lime-400 via-green-500 to-lime-400 mx-auto mt-8 rounded-full shadow"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>
        </div>
      </motion.section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle background patterns */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-green-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-100/30 to-transparent rounded-full opacity-70 translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Contact Form */}
              <motion.div
                ref={formRef}
                initial="hidden"
                animate={formInView ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                className="relative"
              >
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-green-100 rounded-full opacity-70 blur-xl"></div>
                <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-amber-100 rounded-full opacity-70 blur-xl"></div>

                <h2 className="text-3xl font-bold text-green-900 mb-8 flex items-center">
                  <MessageSquare className="mr-3 text-green-600" />
                  Send Us a Message
                </h2>

                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-green-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Label
                      htmlFor="name"
                      className="text-green-800 font-semibold flex items-center"
                    >
                      <User className="w-4 h-4 mr-2 text-green-600" />
                      Full Name
                    </Label>
                    <div className="mt-2 relative">
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="pl-10 border-green-200 focus:border-green-500 transition-all duration-300 bg-white/90"
                        placeholder="Enter your full name"
                      />
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Label
                      htmlFor="email"
                      className="text-green-800 font-semibold flex items-center"
                    >
                      <AtSign className="w-4 h-4 mr-2 text-green-600" />
                      Email Address
                    </Label>
                    <div className="mt-2 relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-10 border-green-200 focus:border-green-500 transition-all duration-300 bg-white/90"
                        placeholder="Enter your email address"
                      />
                      <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Label
                      htmlFor="message"
                      className="text-green-800 font-semibold flex items-center"
                    >
                      <MessageSquare className="w-4 h-4 mr-2 text-green-600" />
                      Message
                    </Label>
                    <div className="mt-2 relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-3 py-2 pl-10 border border-green-200 rounded-md focus:outline-none focus:border-green-500 transition-all duration-300 bg-white/90"
                        placeholder="Tell us about your inquiry, partnership interest, or any questions you have..."
                      />
                      <MessageSquare className="absolute left-3 top-6 text-green-500 w-4 h-4" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 flex items-center justify-center gap-2 shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </motion.form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                ref={infoRef}
                initial="hidden"
                animate={infoInView ? "visible" : "hidden"}
                variants={containerVariants}
              >
                <h2 className="text-3xl font-bold text-green-900 mb-8 flex items-center">
                  <Phone className="mr-3 text-green-600" />
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <Card className="border-green-200 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:border-green-400 w-full max-w-md mx-auto md:max-w-none">
                      <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                        <CardTitle className="text-green-900 flex items-center">
                          <Mail className="w-5 h-5 mr-3 text-green-600" />
                          Email Us
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <CardDescription className="text-gray-700 space-y-2">
                          <div className="flex items-center hover:text-green-700 transition-colors">
                            <span className="font-semibold min-w-[140px]">
                              General Inquiries:
                            </span>
                            <a
                              href="mailto:info@FreshWorth.com"
                              className="hover:underline"
                            >
                              info@FreshWorth.com
                            </a>
                          </div>
                          <div className="flex items-center hover:text-green-700 transition-colors">
                            <span className="font-semibold min-w-[140px]">
                              Sales & Orders:
                            </span>
                            <a
                              href="mailto:sales@FreshWorth.com"
                              className="hover:underline"
                            >
                              sales@FreshWorth.com
                            </a>
                          </div>
                          <div className="flex items-center hover:text-green-700 transition-colors">
                            <span className="font-semibold min-w-[140px]">
                              Partnerships:
                            </span>
                            <a
                              href="mailto:partners@FreshWorth.com"
                              className="hover:underline"
                            >
                              partners@FreshWorth.com
                            </a>
                          </div>
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <Card className="border-amber-200 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:border-amber-400 w-full max-w-md mx-auto md:max-w-none">
                      <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100 group-hover:from-amber-100 group-hover:to-amber-200 transition-all duration-300">
                        <CardTitle className="text-amber-800 flex items-center">
                          <Phone className="w-5 h-5 mr-3 text-amber-600" />
                          Call Us
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <CardDescription className="text-gray-700 space-y-2">
                          <div className="flex items-center hover:text-amber-700 transition-colors">
                            <span className="font-semibold min-w-[140px]">
                              Main Office:
                            </span>
                            <a
                              href="tel:+911234567890"
                              className="hover:underline"
                            >
                              +91-1234567890
                            </a>
                          </div>
                          <div className="flex items-center hover:text-amber-700 transition-colors">
                            <span className="font-semibold min-w-[140px]">
                              Customer Support:
                            </span>
                            <a
                              href="tel:+919876543210"
                              className="hover:underline"
                            >
                              +91-9876543210
                            </a>
                          </div>
                          <div className="flex items-center hover:text-amber-700 transition-colors">
                            <span className="font-semibold min-w-[140px]">
                              Business Hours:
                            </span>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1 text-amber-600" />
                              Mon-Fri 9AM-6PM IST
                            </div>
                          </div>
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <Card className="border-green-200 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:border-green-400 w-full max-w-md mx-auto md:max-w-none">
                      <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                        <CardTitle className="text-green-900 flex items-center">
                          <MapPin className="w-5 h-5 mr-3 text-green-600" />
                          Visit Us
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <CardDescription className="text-gray-700">
                          <div className="font-semibold mb-1">Head Office:</div>
                          <address className="not-italic">
                            FreshWorth Farmer Producer Organization
                            <br />
                            Coconut Processing Center
                            <br />
                            Karnataka, India 560001
                          </address>
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section with Google Maps Integration */}
      <motion.section
        ref={mapRef}
        className="py-20 bg-gradient-to-br from-green-50 via-white to-amber-50 relative overflow-hidden"
        initial="hidden"
        animate={mapInView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-100/30 to-transparent rounded-full opacity-70 translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.div variants={itemVariants}>
                <span className="inline-block px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-full text-sm shadow-lg mb-6">
                  📍 Our Location
                </span>
              </motion.div>
              <motion.h2
                className="text-4xl font-bold bg-gradient-to-r from-amber-800 via-amber-900 to-amber-800 bg-clip-text text-transparent mb-6"
                variants={itemVariants}
                style={{ WebkitTextFillColor: "transparent" }}
              >
                Find Us
              </motion.h2>
              <motion.p
                className="text-xl text-gray-700 max-w-3xl mx-auto"
                variants={itemVariants}
              >
                Located in the heart of Karnataka's coconut farming region
              </motion.p>
            </div>

            <motion.div
              className="rounded-xl overflow-hidden shadow-2xl border border-amber-200"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9974197409!2d77.35073573214738!3d12.953945613722353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1656612813404!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FreshWorth Location"
                className="w-full"
              ></iframe>
            </motion.div>

            <motion.div
              className="mt-8 text-center text-gray-600 flex items-center justify-center"
              variants={itemVariants}
            >
              <MapPin className="w-5 h-5 mr-2 text-amber-600" />
              <span>Karnataka, India - Coconut Farming Region</span>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced FAQ Section with Animations */}
      <motion.section
        ref={faqRef}
        className="py-20 bg-white relative overflow-hidden"
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Decorative background elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-amber-100 rounded-full opacity-30 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <motion.div variants={itemVariants}>
                <span className="inline-block px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full text-sm shadow-lg mb-6">
                  ❓ Common Questions
                </span>
              </motion.div>
              <motion.h2
                className="text-4xl font-bold bg-gradient-to-r from-green-800 via-green-900 to-emerald-800 bg-clip-text text-transparent mb-6"
                variants={itemVariants}
                style={{ WebkitTextFillColor: "transparent" }}
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p
                className="text-xl text-gray-700 max-w-3xl mx-auto"
                variants={itemVariants}
              >
                Find answers to common questions about our products and services
              </motion.p>

              <motion.div
                className="w-32 h-1 bg-gradient-to-r from-lime-400 via-green-500 to-lime-400 mx-auto mt-8 rounded-full shadow"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div
                    className={`rounded-xl overflow-hidden border transition-all duration-300 ${
                      expandedFaq === index
                        ? "border-green-300 shadow-lg shadow-green-100"
                        : "border-gray-200 hover:border-green-200"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
                    >
                      <div className="flex items-center">
                        <span className={`mr-3 ${item.color}`}>
                          {item.icon}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.question}
                        </h3>
                      </div>
                      <div
                        className={`transition-transform duration-300 ${
                          expandedFaq === index ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown className="w-5 h-5 text-green-600" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 border-t border-gray-100">
                            <p className="text-gray-700">{item.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional help section */}
            <motion.div
              className="mt-16 text-center"
              variants={fadeInUpVariants}
            >
              <div className="p-8 bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl border border-green-100 shadow-lg">
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-700 mb-6">
                  Our team is ready to assist you with any additional questions
                  or concerns you may have.
                </p>
                <Button
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => {
                    const formElement = document.getElementById("contact-form");
                    formElement?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Our Support Team
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-green-800 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`leaf-${i}`}
              className="absolute w-32 h-32 opacity-10"
              style={{
                left: `${10 + i * 20}%`,
                top: `${20 + (i % 3) * 20}%`,
                backgroundImage: "url('/lovable-uploads/placeholder.svg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                rotate: `${i * 45}deg`,
              }}
              animate={{
                y: [0, 10, 0],
                rotate: [`${i * 45}deg`, `${i * 45 + 10}deg`, `${i * 45}deg`],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Stay Updated with Our Newsletter
            </motion.h2>

            <motion.p
              className="text-green-100 mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Subscribe to receive updates on new products, farming techniques,
              and community initiatives
            </motion.p>

            <motion.form
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
              />
              <Button
                type="submit"
                className="bg-white text-green-800 hover:bg-green-100 px-6"
              >
                Subscribe
              </Button>
            </motion.form>

            <motion.p
              className="text-green-200 text-sm mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

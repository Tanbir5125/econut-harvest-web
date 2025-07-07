import CountUp from "../../../Reactbits/CountUp/CountUp";
import { motion } from "framer-motion";

const metrics = [
  {
    value: 500,
    suffix: "+",
    label: "Farmers Benefited",
    desc: "Direct impact across 15 villages",
    color: "green",
    gradient: "from-green-100 via-green-200 to-lime-100",
    text: "text-green-900",
    accent: "bg-green-500",
    shadow: "shadow-green-300/60",
    image: "/lovable-uploads/farming.jpeg",
    delay: 0,
  },
  {
    value: 20000000,
    prefix: "₹",
    label: "Additional Income",
    desc: "Generated for farming families",
    color: "amber",
    gradient: "from-amber-100 via-amber-200 to-yellow-100",
    text: "text-amber-800",
    accent: "bg-amber-500",
    shadow: "shadow-amber-200/60",
    image: "/lovable-uploads/prod.jpeg",
    delay: 0.1,
  },
  {
    value: 1000,
    suffix: "+",
    label: "Jobs Created",
    desc: "Direct and indirect employment",
    color: "green",
    gradient: "from-green-100 via-emerald-100 to-lime-100",
    text: "text-green-900",
    accent: "bg-emerald-500",
    shadow: "shadow-emerald-200/60",
    image: "/lovable-uploads/farmer-hands.jpeg",
    delay: 0.2,
  },
  {
    value: 95,
    suffix: "%",
    label: "Satisfaction Rate",
    desc: "Among participating farmers",
    color: "amber",
    gradient: "from-amber-100 via-yellow-100 to-lime-50",
    text: "text-amber-800",
    accent: "bg-yellow-500",
    shadow: "shadow-yellow-200/60",
    image: "/lovable-uploads/quality-seal.jpeg",
    delay: 0.3,
  },
];

const FreshWorthImpactMetrics = () => (
  <section className="relative py-24 bg-gradient-to-br from-green-50 to-amber-50 overflow-hidden">
    {/* Decorative blurred graphics */}
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-100 rounded-full opacity-30 blur-3xl animate-pulse-slow" />
    <div className="absolute -bottom-40 right-0 w-96 h-96 bg-amber-100 rounded-full opacity-30 blur-3xl animate-pulse-slow" />
    <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-gradient-to-tr from-green-100/40 to-amber-100/40 rounded-full opacity-20 blur-2xl -translate-x-1/2 -translate-y-1/2" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full text-sm shadow-lg mb-6 tracking-wider">
            Measurable Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 relative">
            Our Commitment to Transparency
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-lime-400 via-green-500 to-lime-400 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Our commitment to transparency and accountability
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
          }}
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className={`relative group rounded-3xl shadow-xl border border-green-100 p-8 flex flex-col items-center bg-gradient-to-br ${metric.gradient}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.07, boxShadow: `0 0 0 8px var(--tw-shadow-color,rgba(0,0,0,0.08)), 0 8px 32px 0 ${metric.shadow.replace('shadow-', '').replace('/60','').replace('-','')}` }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: metric.delay, type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500 border-4 border-white bg-white/40">
                <img
                  src={metric.image}
                  alt={metric.label}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="flex items-end justify-center gap-1 mb-2">
                {metric.prefix && (
                  <span className="text-2xl font-bold text-gray-700">
                    {metric.prefix}
                  </span>
                )}
                <CountUp
                  to={metric.value}
                  duration={1}
                  className={`text-3xl md:text-4xl font-extrabold ${metric.text} drop-shadow-sm`}
                  separator=","
                />
                {metric.suffix && (
                  <span className="text-2xl font-bold text-gray-700">
                    {metric.suffix}
                  </span>
                )}
              </div>
              <h3
                className={`text-lg font-semibold ${metric.text} mb-1 text-center`}
              >
                {metric.label}
              </h3>
              <p className="text-gray-700 text-center text-sm font-medium drop-shadow-sm">{metric.desc}</p>
              {/* Decorative accent */}
              <motion.div
                className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full ${metric.accent} opacity-50 group-hover:opacity-80`}
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 48, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: metric.delay + 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default FreshWorthImpactMetrics;

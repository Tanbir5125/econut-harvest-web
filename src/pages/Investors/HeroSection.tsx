const HeroSection = () => (
  <section className="relative pt-24 pb-16 bg-gradient-to-br from-green-50 to-amber-50 overflow-hidden">
    {/* Background Image with Blur */}
    <img
      src="/lovable-uploads/investor.jpeg"
      alt="About Coconut"
      className="absolute inset-0 w-full h-full object-cover z-0 animate-hero-bg"
      style={{
        objectFit: "cover",
        objectPosition: "center",
        filter: "blur(4px) brightness(0.6)",
        transition: "filter 0.8s cubic-bezier(0.4,0,0.2,1)",
        animation: "heroBgMove 18s ease-in-out infinite alternate",
      }}
      aria-hidden="true"
    />
    {/* Enhanced overlay for better text contrast */}
    <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-amber-900/30 z-10 animate-gradient-fade" />
    <div className="container mx-auto px-4 relative z-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className="text-5xl md:text-6xl font-bold text-white mb-6 opacity-0 translate-y-8 animate-hero-fadein"
          style={{
            textShadow:
              "0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.6), 0 0 12px rgba(39, 103, 73, 0.8)",
            transition:
              "opacity 1.2s cubic-bezier(0.4,0,0.2,1), transform 1.2s cubic-bezier(0.4,0,0.2,1)",
            letterSpacing: "0.5px",
          }}
        >
          Investment Opportunity
        </h1>
        <p
          className="text-xl text-white max-w-3xl mx-auto opacity-0 translate-y-8 animate-hero-fadein delay-200 font-medium"
          style={{
            textShadow:
              "0 2px 4px rgba(0,0,0,0.7), 0 0 8px rgba(39, 103, 73, 0.6)",
            transition:
              "opacity 1.2s cubic-bezier(0.4,0,0.2,1), transform 1.2s cubic-bezier(0.4,0,0.2,1)",
            lineHeight: "1.6",
          }}
        >
          Join us in revolutionizing the coconut industry while generating
          sustainable returns and creating positive social impact across rural
          Karnataka.
        </p>
        {/* Adding a subtle highlight behind text for extra pop */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-transparent z-[-1] rounded-xl"
          style={{ filter: "blur(40px)" }}
        />
      </div>
    </div>
  </section>
);

export default HeroSection;

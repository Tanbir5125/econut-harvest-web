import React, { useRef, useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Leaf,
  Droplets,
  Recycle,
  Globe,
  Sun,
} from "lucide-react";

// Fallback icon for Butterfly (not available in lucide-react)
const Butterfly = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 12c2-2 6-2 8 0s6 2 8 0" />
    <path d="M2 12c2 2 6 2 8 0s6-2 8 0" />
    <circle cx="12" cy="12" r="1.5" />
    <path d="M12 12v7" />
    <path d="M12 12V5" />
  </svg>
);

const EnvironmentalImpactSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const carouselRef = useRef(null);

  const impactData = [
    {
      title: "Organic Farming",
      description:
        "100% chemical-free farming methods protecting soil health and biodiversity for future generations.",
      icon: Leaf,
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      bgGradient: "from-emerald-50 to-green-50",
      accentColor: "emerald",
      stats: "100% Chemical Free",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='organicGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2310b981'/%3E%3Cstop offset='100%25' stop-color='%23059669'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23organicGrad)'/%3E%3Cg transform='translate(200,150)'%3E%3Cpath d='M-30,-40 Q-50,-60 -30,-80 Q-10,-60 -30,-40 M30,-40 Q50,-60 30,-80 Q10,-60 30,-40 M0,0 Q-20,-20 0,-40 Q20,-20 0,0' fill='%23ffffff' opacity='0.9'/%3E%3Ccircle cx='0' cy='20' r='8' fill='%23ffffff' opacity='0.8'/%3E%3C/g%3E%3C/svg%3E",
    },
    {
      title: "Water Conservation",
      description:
        "Advanced irrigation systems and rainwater harvesting reduce water consumption by 40%.",
      icon: Droplets,
      gradient: "from-blue-400 via-cyan-500 to-blue-600",
      bgGradient: "from-blue-50 to-cyan-50",
      accentColor: "blue",
      stats: "40% Less Water",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='waterGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%233b82f6'/%3E%3Cstop offset='100%25' stop-color='%231d4ed8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23waterGrad)'/%3E%3Cg transform='translate(200,150)'%3E%3Cpath d='M0,-60 Q-20,-40 -30,-10 Q-20,20 0,30 Q20,20 30,-10 Q20,-40 0,-60' fill='%23ffffff' opacity='0.9'/%3E%3Ccircle cx='-60' cy='-20' r='12' fill='%23ffffff' opacity='0.7'/%3E%3Ccircle cx='70' cy='10' r='8' fill='%23ffffff' opacity='0.6'/%3E%3C/g%3E%3C/svg%3E",
    },
    {
      title: "Zero Waste",
      description:
        "Complete utilization of coconut parts with innovative recycling processes for maximum efficiency.",
      icon: Recycle,
      gradient: "from-green-400 via-teal-500 to-emerald-600",
      bgGradient: "from-green-50 to-teal-50",
      accentColor: "teal",
      stats: "0% Waste",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='recycleGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2306b6d4'/%3E%3Cstop offset='100%25' stop-color='%230891b2'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23recycleGrad)'/%3E%3Cg transform='translate(200,150)'%3E%3Cpath d='M-40,-30 L-20,-50 L0,-30 L20,-50 L40,-30 L20,-10 L0,-30 L-20,-10 Z' fill='%23ffffff' opacity='0.9'/%3E%3Cpath d='M-30,10 Q-40,30 -20,40 Q0,30 -10,10 Q-20,20 -30,10' fill='%23ffffff' opacity='0.8'/%3E%3Cpath d='M10,10 Q20,20 30,10 Q40,30 20,40 Q0,30 10,10' fill='%23ffffff' opacity='0.8'/%3E%3C/g%3E%3C/svg%3E",
    },
    {
      title: "Carbon Neutral",
      description:
        "Our coconut trees absorb more CO2 than we produce, making our operations carbon negative.",
      icon: Globe,
      gradient: "from-indigo-400 via-purple-500 to-blue-600",
      bgGradient: "from-indigo-50 to-purple-50",
      accentColor: "indigo",
      stats: "Carbon Negative",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='carbonGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%236366f1'/%3E%3Cstop offset='100%25' stop-color='%234f46e5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23carbonGrad)'/%3E%3Cg transform='translate(200,150)'%3E%3Ccircle cx='0' cy='0' r='50' fill='none' stroke='%23ffffff' stroke-width='4' opacity='0.8'/%3E%3Cpath d='M-30,-20 Q-10,-40 10,-20 Q30,-40 50,-20' fill='none' stroke='%23ffffff' stroke-width='3' opacity='0.9'/%3E%3Cpath d='M-30,20 Q-10,40 10,20 Q30,40 50,20' fill='none' stroke='%23ffffff' stroke-width='3' opacity='0.9'/%3E%3C/g%3E%3C/svg%3E",
    },
    {
      title: "Biodiversity Support",
      description:
        "Creating habitats that support local wildlife and promote ecosystem health across our farms.",
      icon: Butterfly,
      gradient: "from-pink-400 via-rose-500 to-red-500",
      bgGradient: "from-pink-50 to-rose-50",
      accentColor: "pink",
      stats: "50+ Species",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='bioGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f472b6'/%3E%3Cstop offset='100%25' stop-color='%23ec4899'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23bioGrad)'/%3E%3Cg transform='translate(200,150)'%3E%3Cpath d='M-40,-20 Q-60,-40 -40,-60 Q-20,-40 -40,-20 M40,-20 Q60,-40 40,-60 Q20,-40 40,-20' fill='%23ffffff' opacity='0.9'/%3E%3Cpath d='M-40,20 Q-60,40 -40,60 Q-20,40 -40,20 M40,20 Q60,40 40,60 Q20,40 40,20' fill='%23ffffff' opacity='0.9'/%3E%3Cline x1='0' y1='-60' x2='0' y2='60' stroke='%23ffffff' stroke-width='3' opacity='0.8'/%3E%3C/g%3E%3C/svg%3E",
    },
    {
      title: "Renewable Energy",
      description:
        "Solar-powered facilities and wind energy systems power our sustainable operations.",
      icon: Sun,
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      bgGradient: "from-yellow-50 to-orange-50",
      accentColor: "yellow",
      stats: "100% Renewable",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='solarGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23fbbf24'/%3E%3Cstop offset='100%25' stop-color='%23f59e0b'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23solarGrad)'/%3E%3Cg transform='translate(200,150)'%3E%3Ccircle cx='0' cy='0' r='25' fill='%23ffffff' opacity='0.9'/%3E%3Cg%3E%3Cline x1='0' y1='-50' x2='0' y2='-35' stroke='%23ffffff' stroke-width='4' opacity='0.8'/%3E%3Cline x1='35' y1='-35' x2='25' y2='-25' stroke='%23ffffff' stroke-width='4' opacity='0.8'/%3E%3Cline x1='50' y1='0' x2='35' y2='0' stroke='%23ffffff' stroke-width='4' opacity='0.8'/%3E%3Cline x1='35' y1='35' x2='25' y2='25' stroke='%23ffffff' stroke-width='4' opacity='0.8'/%3E%3Cline x1='0' y1='50' x2='0' y2='35' stroke='%23ffffff' stroke-width='4' opacity='0.8'/%3E%3Cline x1='-35' y1='35' x2='-25' y2='25' stroke='%23ffffff' stroke-width='4' opacity='0.8'/%3E%3Cline x1='-50' y1='0' x2='-35' y2='0' stroke='%23ffffff' stroke-width='4' opacity='0.8'/%3E%3Cline x1='-35' y1='-35' x2='-25' y2='-25' stroke='%23ffffff' stroke-width='4' opacity='0.8'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % impactData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, impactData.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % impactData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + impactData.length) % impactData.length
    );
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % impactData.length;
      cards.push({ ...impactData[index], originalIndex: index });
    }
    return cards;
  };

  // Example real images for card backgrounds (replace with your own images if needed)
  const cardImages = [
    "/public/lovable-uploads/forest.jpeg",
    "/public/lovable-uploads/farming.jpeg",
    "/public/lovable-uploads/flour.jpeg",
    "/public/lovable-uploads/impact-hero.jpeg",
    "/public/lovable-uploads/organic-leaf.jpeg",
    "/public/lovable-uploads/hero2.jpeg",
    "/public/lovable-uploads/prod.jpeg",
  ];

  // Drag/swipe/gesture state for carousel interaction
  const dragState = useRef({
    startX: 0,
    lastX: 0,
    dragging: false,
    threshold: 40, // px to trigger slide
    animating: false,
  });

  // For smooth animation, use translateX for the flex container
  const [dragOffset, setDragOffset] = useState(0);

  function handlePointerDown(e) {
    if (dragState.current.animating) return;
    dragState.current.dragging = true;
    dragState.current.startX = e.type.startsWith("touch")
      ? e.touches?.[0]?.clientX ?? e.clientX
      : e.clientX;
    dragState.current.lastX = dragState.current.startX;
  }

  function handlePointerMove(e) {
    if (!dragState.current.dragging) return;
    const clientX = e.type.startsWith("touch")
      ? e.touches?.[0]?.clientX ?? e.clientX
      : e.clientX;
    dragState.current.lastX = clientX;
    setDragOffset(clientX - dragState.current.startX);
  }

  function handlePointerUp(e) {
    if (!dragState.current.dragging) return;
    const endX = dragState.current.lastX;
    const deltaX = endX - dragState.current.startX;
    dragState.current.dragging = false;
    setDragOffset(0);
    if (Math.abs(deltaX) > dragState.current.threshold) {
      dragState.current.animating = true;
      if (deltaX < 0) {
        setDragOffset(-300); // animate left
        setTimeout(() => {
          setDragOffset(0);
          nextSlide();
          dragState.current.animating = false;
        }, 250);
      } else {
        setDragOffset(300); // animate right
        setTimeout(() => {
          setDragOffset(0);
          prevSlide();
          dragState.current.animating = false;
        }, 250);
      }
    }
  }

  // Trackpad gesture support (wheel event)
  // Improved trackpad gesture support (wheel event)
  // Only trigger on horizontal two-finger swipes, not vertical scroll
  let wheelTimeout = null;
  let wheelAccum = 0;
  function handleWheel(e) {
    if (dragState.current.animating) return;
    // Only react to horizontal swipes, ignore vertical scroll
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 30) {
      wheelAccum += e.deltaX;
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (Math.abs(wheelAccum) > 30) {
          dragState.current.animating = true;
          if (wheelAccum > 0) {
            setDragOffset(-300);
            setTimeout(() => {
              setDragOffset(0);
              nextSlide();
              dragState.current.animating = false;
            }, 250);
          } else {
            setDragOffset(300);
            setTimeout(() => {
              setDragOffset(0);
              prevSlide();
              dragState.current.animating = false;
            }, 250);
          }
        }
        wheelAccum = 0;
      }, 80); // debounce for smoother gesture
    }
  }

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-amber-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-emerald-300/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
              <Globe className="w-4 h-4 mr-2" />
              Environmental Impact
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-800 via-green-700 to-emerald-800 bg-clip-text text-transparent">
                Sustainability
              </span>
              <br />
              <span className="text-emerald-900 dark:text-emerald-200">
                in Action
              </span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-6 rounded-full"></div>

            <p className="text-xl text-emerald-800 dark:text-emerald-200 max-w-3xl mx-auto font-medium leading-relaxed">
              Pioneering sustainable practices that protect our planet while
              delivering exceptional quality
            </p>
          </div>

          {/* Modern Carousel */}
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Main Carousel Container */}
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex justify-center"
                style={{
                  touchAction: "pan-y",
                  transform: `translateX(${dragOffset}px)`,
                  transition: dragState.current.dragging
                    ? "none"
                    : "transform 0.25s cubic-bezier(0.22,1,0.36,1)",
                  cursor: dragState.current.dragging ? "grabbing" : "grab",
                }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                onTouchStart={handlePointerDown}
                onTouchMove={handlePointerMove}
                onTouchEnd={handlePointerUp}
                onWheel={handleWheel}
              >
                {getVisibleCards().map((card, index) => {
                  const Icon = card.icon;
                  const isCenter = index === 1;
                  const isLeft = index === 0;
                  const isRight = index === 2;
                  // Use a real image for the card background
                  const bgImage =
                    cardImages[card.originalIndex % cardImages.length];

                  return (
                    <div
                      key={`${card.originalIndex}-${index}`}
                      className={`
                        flex-shrink-0 px-2 transition-all duration-700 ease-out
                        ${
                          isCenter
                            ? "w-full md:w-1/3 scale-100"
                            : "w-full md:w-1/5 scale-90 opacity-60"
                        }
                        ${isLeft ? "md:-translate-x-8" : ""}
                        ${isRight ? "md:translate-x-8" : ""}
                      `}
                      onMouseEnter={() => setHoveredCard(card.originalIndex)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <Card
                        className={`
                        relative overflow-hidden border-0 shadow-2xl transition-all duration-500 h-72 md:h-80
                        ${isCenter ? "shadow-3xl" : ""}
                        ${hoveredCard === card.originalIndex ? "scale-105" : ""}
                      `}
                      >
                        {/* Real Background Image */}
                        <div className="absolute inset-0">
                          <img
                            src={bgImage}
                            alt={card.title}
                            className="w-full h-full object-cover object-center"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${
                              isCenter
                                ? "from-black/40 to-emerald-900/60"
                                : "from-black/10 to-emerald-900/10"
                            } transition-all duration-500`}
                          />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-5 h-full flex flex-col justify-between text-white">
                          {/* Top Section */}
                          <div>
                            <div className="flex items-center mb-3">
                              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-2xl mr-3">
                                <Icon className="w-7 h-7 text-white" />
                              </div>
                              <div>
                                <h3 className="text-lg font-bold mb-1">
                                  {card.title}
                                </h3>
                                <div className="px-2 py-0.5 bg-white/20 rounded-full text-xs font-semibold">
                                  {card.stats}
                                </div>
                              </div>
                            </div>

                            <p className="text-white text-base leading-relaxed">
                              {card.description}
                            </p>
                          </div>

                          {/* Bottom Section */}
                          <div className="flex items-center justify-center mt-4">
                            <div className="flex space-x-1">
                              {[...Array(3)].map((_, i) => (
                                <div
                                  key={i}
                                  className="w-2 h-2 bg-emerald-200/60 dark:bg-emerald-900/40 rounded-full"
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Hover Effect */}
                        <div
                          className={`
                          absolute inset-0 bg-gradient-to-br from-white/10 to-transparent 
                          transition-opacity duration-300
                          ${
                            hoveredCard === card.originalIndex
                              ? "opacity-100"
                              : "opacity-0"
                          }
                        `}
                        />
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {impactData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (index === currentIndex) return;
                    // Animate to the correct direction
                    dragState.current.animating = true;
                    setDragOffset(index > currentIndex ? -300 : 300);
                    setTimeout(() => {
                      setDragOffset(0);
                      goToSlide(index);
                      dragState.current.animating = false;
                    }, 250);
                  }}
                  className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 w-8"
                      : "bg-emerald-200 hover:bg-emerald-300 dark:bg-emerald-900 dark:hover:bg-emerald-800"
                  }
                `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalImpactSection;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Import images
import banner1 from "../../public/mainbanner.jpg";
import banner4 from "../../public/mainthree.jpg";
import banner2 from "../../public/maintwo.jpg";
import banner3 from "../../public/four.jpg";

const slides = [
  {
    image: banner1,
    title: "Welcome to",
    highlight: "Ishisoft Private Limited",
    desc: "End-to-End Consulting and Service Integration organization delivering powerful IT solutions."
  },
  {
    image: banner4,
    title: "We Build",
    highlight: "Smart Digital Solutions",
    desc: "Web Development, Mobile Apps, Cloud Solutions and AI powered systems built for excellence."
  },
  {
    image: banner2,
    title: "We Build",
    highlight: "Smart Digital Solutions",
    desc: "Web Development, Mobile Apps, Cloud Solutions and AI powered systems built for excellence."
  },
  {
    image: banner3,
    title: "Grow Your",
    highlight: "Business With Technology",
    desc: "Helping companies scale faster with modern software and expert IT consulting services."
  },
];

const TechBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] md:h-[75vh] lg:h-[80vh] w-full overflow-hidden bg-slate-950 font-['Plus_Jakarta_Sans']">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[index].image})` }}
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-1" />
        <div className="absolute inset-0 bg-black/20 z-1" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center">
        <div className="max-w-3xl w-full text-center lg:text-left pt-10">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
                <span className="h-2 w-2 rounded-full bg-orange-500 animate-ping" />
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-orange-100 font-bold">
                  Innovation for the future
                </p>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] tracking-tight">
                {slides[index].title}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600">
                  {slides[index].highlight}
                </span>
              </h1>

              <p className="mt-6 text-slate-200 text-sm md:text-lg lg:text-xl max-w-xl leading-relaxed font-medium opacity-90">
                {slides[index].desc}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
                <Link to="/products" className="w-full sm:w-auto">
                  <button className="group w-full flex items-center justify-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-orange-500 transition-all shadow-lg active:scale-95">
                    Explore Solutions
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>

                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-white border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all active:scale-95">
                    Contact Us
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* FIXED: Indicators moved to the right corner for mobile and desktop */}
      <div className="absolute bottom-2 right-6 md:right-12 lg:right-16 z-20 flex items-center gap-3 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-500 rounded-full ${
              index === i
                ? "w-8 h-2 bg-orange-500"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Decorative Circle */}
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 opacity-20 hidden 2xl:block pointer-events-none">
        <div className="w-[500px] h-[500px] border-[1px] border-orange-500/30 rounded-full animate-[spin_60s_linear_infinite] border-dashed" />
      </div>
      
    </section>
  );
};

export default TechBanner;
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

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[75vh] md:min-h-[77vh] flex items-center w-full px-6 md:px-12 lg:px-24 overflow-hidden bg-slate-950 font-['Plus_Jakarta_Sans']">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">

        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].image}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[index].image})` }}
          />
        </AnimatePresence>

        {/* Simple overlay */}
        <div className="absolute inset-0 bg-black/40" />

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-12">

        <div className="max-w-4xl">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >

              {/* Tag */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                <p className="text-[10px] uppercase tracking-[0.2em] text-white font-bold">
                  Innovation for the future
                </p>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1]">
                {slides[index].title}
                <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-600 to-orange-400">
                  {slides[index].highlight}
                </span>
              </h1>

              {/* Description */}
              <p className="text-slate-200 text-base md:text-xl max-w-2xl leading-relaxed">
                {slides[index].desc}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">

                <Link to="/products">
                  <button className="group flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-orange-500 transition-all">
                    Explore Solutions
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>

                <Link to="/contact">
                  <button className="flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white border border-white/70 bg-white/10 transition-all">
                    Contact Us
                    <ChevronRight className="w-4 h-4 text-white" />
                  </button>
                </Link>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 right-6 md:right-12 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === i
                ? "w-8 bg-orange-500"
                : "w-4 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Decorative Circle */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-10 hidden xl:block">
        <div className="w-[400px] h-[400px] border border-white/40 rounded-full animate-[spin_40s_linear_infinite] border-dashed" />
      </div>

    </section>
  );
};

export default TechBanner;
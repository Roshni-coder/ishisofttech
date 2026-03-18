import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Stethoscope, 
  GraduationCap, 
  School, 
  Factory, 
  Store,
  ChevronRight 
} from "lucide-react";

const FocusIndustries = () => {
  const industries = [
    { name: "Government", icon: <Building2 className="w-5 h-5" />, desc: "Secure digital infrastructure & e-governance." },
    { name: "Healthcare", icon: <Stethoscope className="w-5 h-5" />, desc: "Patient-centric systems & data security." },
    { name: "Colleges", icon: <GraduationCap className="w-5 h-5" />, desc: "Campus automation & LMS integration." },
    { name: "Schools", icon: <School className="w-5 h-5" />, desc: "K-12 smart classroom ecosystems." },
    { name: "Manufacturing", icon: <Factory className="w-5 h-5" />, desc: "Industry 4.0 & supply chain automation." },
    { name: "Retails", icon: <Store className="w-5 h-5" />, desc: "Omnichannel commerce & POS solutions." },
  ];

  return (
    <section className="relative py-10 px-6 bg-[#fcfcfd] overflow-hidden font-['Plus_Jakarta_Sans']">
      
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content Side (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-600 font-bold tracking-[0.2em] text-xs uppercase bg-amber-50 px-4 py-2 rounded-full border border-amber-100">
                Market Expertise
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-6 leading-tight">
                Industries <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-amber-600">
                  We Transform
                </span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                We combine deep domain expertise with cutting-edge tech to solve complex challenges across these core verticals.
              </p>
            </motion.div>

            {/* Interactive Industry Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer p-4 rounded-2xl border border-slate-100 bg-white hover:border-amber-200 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="flex items-center gap-2 text-slate-900 font-bold text-sm uppercase tracking-wider group">
              View Case Studies
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-500" />
            </button>
          </div>

          {/* Right Image Side (7 columns) */}
          <div className="lg:col-span-7 relative ">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative z-10"
            >
              {/* Decorative Frame Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-200/50 rounded-full blur-3xl -z-10" />

              {/* Main Image Container */}
              <div className="rounded-[3rem]  overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-[12px] border-white relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Team collaboration" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Floating "Stats" Card */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 hidden md:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse" />
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Clients</p>
                      <p className="text-2xl font-black text-slate-900">500+</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Abstract Shape Overlay */}
              <svg className="absolute -bottom-12 -right-12 w-48 h-48 text-amber-500/20 -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C86.9,14.6,81.2,29.2,72.4,41.9C63.6,54.6,51.7,65.3,38,72.8C24.3,80.3,8.7,84.5,-6.3,85.5C-21.3,86.6,-35.7,84.5,-48.4,77.5C-61.1,70.5,-72,58.7,-79.3,45.1C-86.6,31.5,-90.3,16.2,-89.3,1.3C-88.3,-13.6,-82.6,-28.1,-73.8,-40.4C-64.9,-52.7,-52.9,-62.8,-39.7,-70.6C-26.4,-78.4,-13.2,-83.9,0.8,-85.4C14.8,-86.8,29.7,-83.7,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FocusIndustries;
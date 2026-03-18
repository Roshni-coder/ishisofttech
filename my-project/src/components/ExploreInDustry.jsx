import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Stethoscope,
  GraduationCap,
  Factory,
  Store
} from "lucide-react";

const FocusIndustries = () => {

  const industries = [
    { name: "Government", icon: <Building2 />, desc: "Secure e-governance & digital infrastructure." },
    { name: "Healthcare", icon: <Stethoscope />, desc: "Patient-centric systems & data compliance." },
    { name: "Education", icon: <GraduationCap />, desc: "Higher-ed automation & smart campus tools." },
    { name: "Manufacturing", icon: <Factory />, desc: "Industry 4.0 & automated supply chains." },
    { name: "Retail", icon: <Store />, desc: "Omnichannel POS & inventory management." },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-18 px-4 sm:px-6 lg:px-10 bg-[#F8FAFC] font-['Plus_Jakarta_Sans']">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 md:mb-12"
            >

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-600 tracking-tight mb-4 md:mb-6">
                Focus <span className="text-amber-600">Industries</span>
              </h2>

              <p className="text-slate-500 text-base md:text-lg max-w-2xl">
                We bridge the gap between complex technology and industry-specific challenges with purpose-built digital frameworks.
              </p>

            </motion.div>

            {/* INDUSTRY LIST */}

            <div className="space-y-3">

              {industries.map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-center justify-between p-4 md:p-5 lg:p-6 rounded-2xl transition-all duration-300 bg-slate-50 cursor-default border border-transparent hover:border-slate-100"
                >

                  <div className="flex items-center gap-4 md:gap-6">

                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center bg-amber-800 text-white">
                      {React.cloneElement(item.icon, { size: 20 })}
                    </div>

                    <div>
                      <h4 className="text-base md:text-lg font-bold text-slate-900">
                        {item.name}
                      </h4>

                      <p className="text-xs md:text-sm text-slate-500">
                        {item.desc}
                      </p>
                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>


          {/* RIGHT IMAGE */}

          <div className="relative mt-10 lg:mt-45">

            {/* Background circle */}

            <div className="absolute -top-8 -right-8 w-40 md:w-56 lg:w-64 h-40 md:h-56 lg:h-64 bg-amber-50 rounded-full -z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden bg-slate-100"
            >

              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                alt="Collaboration"
                className="w-full h-[320px] sm:h-[400px] md:h-[450px] lg:h-[530px] object-cover mix-blend-multiply opacity-90"
              />

              {/* STATS CARD */}

              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 bg-white/10 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-2xl border border-white/40 shadow-xl">

                <div className="grid grid-cols-2 gap-4 md:gap-8">

                  <div>
                    <p className="text-[9px] md:text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-1">
                      Experience
                    </p>

                    <p className="text-2xl md:text-3xl font-black text-white">
                      12+
                    </p>

                    <p className="text-[10px] md:text-xs mt-1 text-slate-100">
                      Years in Market
                    </p>
                  </div>

                  <div className="border-l border-slate-200 pl-4 md:pl-8">

                    <p className="text-[9px] md:text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-1">
                      Impact
                    </p>

                    <p className="text-2xl md:text-3xl font-black text-white">
                      98%
                    </p>

                    <p className="text-[10px] md:text-xs mt-1 text-slate-100">
                      Client Retention
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FocusIndustries;
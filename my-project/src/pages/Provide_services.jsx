import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Zap, ShieldCheck, Globe } from "lucide-react";
import Services from "../components/Services";

function Provide_services() {
  return (
    <div className="bg-[#fcfcfd] font-['Plus_Jakarta_Sans'] min-h-screen overflow-hidden">

      {/* HERO SECTION */}

      <section className="relative pt-34 pb-10 px-6">

       
        <div className="relative max-w-6xl mx-auto text-center">

          <motion.h1
            initial={{ opacity:0,y:20 }}
            animate={{ opacity:1,y:0 }}
            transition={{ duration:.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6"
          >
            Our
            <span className="bg-amber-600 bg-clip-text text-transparent">
              {" "}Services
            </span>
          </motion.h1>

          <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We deliver scalable digital infrastructure, intelligent software solutions,
            and enterprise technology to accelerate innovation and business growth.
          </p>

        </div>

      </section>


      {/* FEATURES SECTION */}

      <section className="pb-4 px-6">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            {
              icon: <Zap size={22}/>,
              title:"Fast Implementation",
              desc:"Rapid deployment of modern digital infrastructure and applications."
            },
            {
              icon: <ShieldCheck size={22}/>,
              title:"Enterprise Security",
              desc:"Secure solutions with advanced monitoring and compliance."
            },
            {
              icon: <Globe size={22}/>,
              title:"Scalable Solutions",
              desc:"Flexible technology frameworks designed for long-term growth."
            }
          ].map((item,index)=>(
            
            <motion.div
              key={index}
              initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:index*0.1}}
              className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-xl transition"
            >

              <div className="w-12 h-12 rounded-xl bg-amber-600 00 text-white flex items-center justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {item.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>


      {/* SERVICES COMPONENT */}

      <section className="relative z-10 pt-4  px-4">

        <div className="max-w-7xl mx-auto">
          <Services />
        </div>

      </section>
    </div>
  );
}

export default Provide_services;
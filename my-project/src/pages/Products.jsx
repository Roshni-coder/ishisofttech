import React from "react";
import { Monitor, BookOpen, Database, Sun, ShieldCheck, Settings } from "lucide-react";

const Products = () => {

  const products = [
    {
      title: "Laptops & Desktops",
      icon: <Monitor className="w-7 h-7 md:w-7 md:h-7 text-white" />,
      desc: "Reliable computing hardware from top global brands, tailored for personal, business, or enterprise requirements.",
      tags: ["HP", "Dell", "Lenovo", "Acer", "Asus"]
    },
    {
      title: "E-Learning Solutions",
      icon: <BookOpen className="w-7 h-7 md:w-7 md:h-7 text-white" />,
      desc: "Enhance collaboration with smart digital boards featuring multi-touch support, 4K display, and real-time content sharing.",
      tags: ["Virtual Classrooms", "Smart Boards"]
    },
    {
      title: "Servers & Storage",
      icon: <Database className="w-7 h-7 md:w-8 md:h-8 text-white" />,
      desc: "Robust infrastructure solutions from HP, Dell, and Lenovo to ensure high performance, scalability, and data integrity.",
      tags: ["Enterprise Servers", "Cloud Storage"]
    },
    {
      title: "Solar & Energy",
      icon: <Sun className="w-7 h-7 md:w-8 md:h-8 text-white" />,
      desc: "Energy-efficient solar lighting and rooftop panel installations designed for Smart City and Amrit Sarovar projects.",
      tags: ["Street Lights", "Rooftop Solar"]
    },
    {
      title: "Surveillance & Security",
      icon: <ShieldCheck className="w-7 h-7 md:w-8 md:h-8 text-white" />,
      desc: "Advanced CCTV systems, biometric access controls, and fully integrated security infrastructure to protect your assets.",
      tags: ["CCTV", "Biometrics"]
    },
    {
      title: "Annual Maintenance",
      icon: <Settings className="w-7 h-7 md:w-8 md:h-8 text-white" />,
      desc: "Comprehensive AMC services for a wide range of products ensuring your technology stays up and running 24/7.",
      tags: ["24/7 Support", "On-site Service"]
    }
  ];

  return (

    <div className="bg-[#fcfcfd] font-['Plus_Jakarta_Sans'] overflow-hidden">

      {/* HERO */}
      <section className="relative pt-14 sm:pt-16 md:pt-32 px-4 sm:px-6">

        <div className="max-w-5xl mx-auto text-center">

          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] sm:text-[11px] font-black tracking-[0.2em] text-amber-600 uppercase bg-orange-100/30 rounded-full border border-orange-200">
            Official Distribution Partner
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Our <span className="text-amber-600">Products</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
            As a <span className="text-slate-900 font-bold">PAN India partner</span> of global distribution giant
            <span className="text-slate-900 font-bold"> Redington India Limited</span>, we provide premium hardware and peripherals from the world's leading technology brands.
          </p>

        </div>

      </section>


      {/* PRODUCT GRID */}
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 md:gap-8">

            {products.map((item, index) => (

              <div
                key={index}
                className="group relative bg-white border border-slate-100 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col h-full"
              >

                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-amber-600 flex items-center justify-center mb-6 md:mb-8">
                  {item.icon}
                </div>

                <h3 className="text-xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-sm md:text-lg leading-relaxed mb-6  flex-grow">
                  {item.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 md:pt-6 border-t border-slate-50">

                  {item.tags.map((tag, i) => (

                    <span
                      key={i}
                      className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* BRAND PARTNERS */}
      <section className="py-12 md:py-14 bg-gradient-to-b from-white to-slate-50 border-y border-slate-100">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <p className="text-center text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-[0.35em] mb-8 ">
            Authorized Partner For
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">

            {["HP","DELL","LENOVO","CISCO","ASUS","ACER"].map((brand,i)=>(

              <span
                key={i}
                className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-700 tracking-tight opacity-60 hover:opacity-100 transition duration-300 hover:scale-110"
              >
                {brand}
              </span>

            ))}

          </div>

        </div>

      </section>

    </div>

  );

};

export default Products;
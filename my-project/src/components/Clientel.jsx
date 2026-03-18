import React from "react";

import Nhmc from "../assets/logos/nmhc.jpg";
import svnh from "../assets/logos/svnh.jpg";
import pvm from "../assets/logos/pvm.jpg";
import nxs from "../assets/logos/nxs.jpg";
import army from "../assets/logos/army.jpg";
import ddmac from "../assets/logos/ddmac.jpg";
import rmcs from "../assets/logos/rmcs.png";
import skrck from "../assets/logos/skrck.jpg";

const logos = [
  { src: Nhmc, alt: "NHMC" },
  { src: svnh, alt: "SVNH" },
  { src: army, alt: "Army" },
  { src: nxs, alt: "NXS" },
  { src: rmcs, alt: "RMCS" },
  { src: skrck, alt: "SKRCK" },
  { src: pvm, alt: "PVM" },
  { src: ddmac, alt: "DDMAC" },
];

function Clientel() {

  const scrollLogos = [...logos, ...logos];

  return (
    <section className="relative py-20  overflow-hidden font-['Plus_Jakarta_Sans']">

  
      <div className="relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 px-6">

          <span className="inline-block px-4 py-1.5 mb-4 text-[11px] font-bold tracking-[0.25em] text-amber-700 uppercase bg-amber-50 rounded-full border border-amber-200">
            Trusted Partners
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Our Esteemed
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              {" "}Clientele
            </span>
          </h2>

          <p className="mt-6 text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed">
            Proudly supporting organizations across healthcare, defense,
            education, and enterprise technology sectors.
          </p>

        </div>

        {/* Marquee */}
        <div className="relative max-w-8xl mx-8 flex flex-col gap-8">
         
          {/* Row 1 */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap gap-8 py-4">

              {scrollLogos.map((logo, index) => (

                <div
                  key={index}
                  className="w-40 md:w-46 h-28 md:h-38 flex-shrink-0
                  bg-white/70 backdrop-blur-md
                  border border-slate-200
                  rounded-2xl
                  flex items-center justify-center
                  p-8
                  shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]
                  transition-all duration-300
                  hover:shadow-xl hover:-translate-y-2"
                >

                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition duration-500"
                  />

                </div>

              ))}

            </div>
          </div>

          {/* Row 2 */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee-reverse whitespace-nowrap gap-8 py-4">

              {scrollLogos.map((logo, index) => (

                <div
                  key={index}
                  className="w-40 md:w-46 h-28 md:h-38 flex-shrink-0
                  bg-white/70 backdrop-blur-md
                  border border-slate-200
                  rounded-2xl
                  flex items-center justify-center
                  p-6
                  shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]
                  transition-all duration-300
                  hover:shadow-xl hover:-translate-y-2"
                >

                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition duration-500"
                  />

                </div>

              ))}

            </div>
          </div>

        </div>

        {/* bottom text */}
        <div className="mt-10 text-center">

          <div className="inline-flex items-center gap-2 text-slate-400 font-medium text-sm">

            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>

            Currently facilitating 200+ enterprise integrations

          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee {
          animation: marquee 35s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }

        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }

      `}} />

    </section>
  );
}

export default Clientel;
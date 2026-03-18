import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon, Target, Eye, ShieldCheck, Sparkles } from "lucide-react";

function About() {

  const projects = [
    {
      id: "01",
      title: "VOTE-JI APP : Election Commission of Assam",
      subtitle: "Assembly Elections 2021",
      details: (
        <div className="space-y-4">
          <p className="text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-900">Objective:</span> Motivated first-time voters through gamification, candidate insights, and engagement tools.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <p className="font-bold text-orange-600 text-sm mb-2 uppercase tracking-widest">
                Key Features
              </p>

              <ul className="text-sm space-y-2 text-slate-600">
                <li>• Voter awareness campaign</li>
                <li>• Gamified quiz for youth engagement</li>
                <li>• Geo-location based polling info</li>
              </ul>

            </div>

            <div className="flex items-end italic text-slate-400 text-sm">
              Winners were felicitated by the Hon'ble Deputy Commissioner.
            </div>

          </div>
        </div>
      ),
    },

    {
      id: "02",
      title: "DRISTI APP : Town Planning Committee",
      subtitle: "PMGY Project Tracker",
      details: (
        <div className="space-y-4">

          <div className="bg-orange-50/50 border-l-4 border-orange-500 p-4 rounded-r-xl">
            <p className="font-bold text-slate-900 mb-1">Impact:</p>
            <p className="text-slate-600">
              Track fund utilization and underutilization effectively.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600">
            <li className="bg-white border border-slate-100 p-3 rounded-lg shadow-sm">
              🎥 Live field video updates
            </li>
            <li className="bg-white border border-slate-100 p-3 rounded-lg shadow-sm">
              💰 Monetization via FMCG ad revenue
            </li>
          </ul>

        </div>
      ),
    },

    {
      id: "03",
      title: "RAHAT APP : Disaster Management",
      subtitle: "Assam Disaster Management Authority",
      details: (
        <div className="space-y-4">

          <p className="text-slate-600">
            Real-time disaster management app for district-level control and alerts.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

            {['District Control','Relief Command','Cash Transfers','AI Alerts'].map(tag => (

              <span
                key={tag}
                className="px-3 py-2 bg-slate-900 text-white text-[10px] font-bold uppercase rounded-md text-center"
              >
                {tag}
              </span>

            ))}

          </div>

        </div>
      ),
    },

    {
      id: "04",
      title: "NHM : CCTV Surveillance",
      subtitle: "PHCs and BPHCs Monitoring",
      details: (
        <p className="text-slate-600 leading-relaxed">
          Comprehensive deployment of surveillance systems for real-time healthcare facility monitoring across districts, ensuring safety and operational transparency.
        </p>
      ),
    },

    {
      id: "05",
      title: "INDIAN ARMY – MH160",
      subtitle: "IT & Security Infrastructure",
      details: (
        <p className="text-slate-600 leading-relaxed">
          Deployed secure WiFi networks, advanced CCTV surveillance, and specialized computing peripherals to modernize military infrastructure for the MH160 unit.
        </p>
      ),
    },
  ];

  return (

    <div className="bg-[#fcfcfd] mt-14 font-['Plus_Jakarta_Sans']">
      {/* Intro */}
      <section className="relative pt-6 md:pt-16 pb-6 sm:pb-12 px-4 sm:px-6">

        <div className="max-w-5xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-8 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <Sparkles size={14} className="text-amber-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              The Visionaries
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            About
            
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600">
              {" "}us
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Empowering innovation with
            <span className="text-slate-900 font-bold border-b-2 border-amber-400/30">
              {" "}scalable, impactful{" "}
            </span>
            digital solutions that bridge the gap between complexity and efficiency.
          </p>

        </div>

      </section>
      {/* Mission Vision Values */}
      <section className="pb-16 px-4 sm:px-6 bg-[#F8FAFC]">

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {[
      {
        title: "Mission",
        icon: <Target />,
        accent: "from-amber-500 to-orange-500",
        border: "border-amber-100",
        bg: "bg-white",
        desc: "To develop innovative solutions that enhance efficiency, productivity, and user experience."
      },
      {
        title: "Vision",
        icon: <Eye />,
        accent: "from-blue-500 to-indigo-500",
        border: "border-blue-100",
        bg: "bg-white",
        desc: "To lead the way in digital transformation with cutting-edge solutions and enduring partnerships."
      },
      {
        title: "Values",
        icon: <ShieldCheck />,
        accent: "from-emerald-500 to-teal-500",
        border: "border-emerald-100",
        bg: "bg-white",
        desc: "Integrity, innovation, teamwork, and a relentless focus on customer success."
      }
    ].map((item, idx) => (

      <div
        key={idx}
        className={`group relative p-8 rounded-[2rem] border ${item.border}
        bg-gradient-to-br ${item.bg}
        transition-all duration-300
        hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)]
        `}
      >

        {/* ICON */}
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent}
          text-white flex items-center justify-center mb-6 shadow-md`}
        >
          {React.cloneElement(item.icon, { size: 24 })}
        </div>

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
          {item.title}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          {item.desc}
        </p>

        {/* HOVER BORDER EFFECT */}
        <div className="absolute inset-0 rounded-[2rem] border border-transparent group-hover:border-slate-200 transition"></div>

      </div>

    ))}

  </div>

</section>


      {/* Projects */}

      <section className="py-16 md:py-24 px-4 sm:px-6 bg-slate-900 text-white rounded-t-[3rem] md:rounded-t-[6rem]">

        <div className="max-w-5xl mx-auto">

          <div className="mb-14 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6">
              Selected Impact
              <span className="text-orange-500"> Portfolios</span>
            </h2>

            <p className="text-slate-400 text-base md:text-lg">
              Delivering mission-critical infrastructure for defense, health, and governance.
            </p>
          </div>


          <div className="space-y-4">

            {projects.map((item, idx) => (

              <Disclosure key={idx}>

                {({ open }) => (

                  <div className={`rounded-2xl border overflow-hidden transition ${open ? 'bg-white border-white' : 'border-slate-800 hover:border-slate-700'}`}>

                    <Disclosure.Button className="flex justify-between items-center w-full px-5 md:px-8 py-5 md:py-7 text-left">

                      <div className="flex items-center gap-4 md:gap-6">

                        <span className={`text-xs font-black tracking-widest ${open ? 'text-orange-500' : 'text-slate-600'}`}>
                          {item.id}
                        </span>

                        <div>
                          <h3 className={`${open ? 'text-slate-900' : 'text-white'} font-bold text-sm md:text-lg`}>
                            {item.title}
                          </h3>

                          <p className={`${open ? 'text-slate-400' : 'text-slate-500'} text-[10px] md:text-xs uppercase`}>
                            {item.subtitle}
                          </p>
                        </div>

                      </div>

                      <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center ${open ? 'bg-orange-500 text-white rotate-180' : 'bg-slate-800 text-slate-400'}`}>
                        <ChevronDownIcon className="w-4 h-4 md:w-5 md:h-5"/>
                      </div>

                    </Disclosure.Button>

                    <Transition show={open}>
                      <Disclosure.Panel className="px-5 md:px-8 pb-6 md:pb-8 text-slate-900">
                        <div className="h-[1px] bg-slate-100 mb-6"/>
                        {item.details}
                      </Disclosure.Panel>
                    </Transition>

                  </div>

                )}

              </Disclosure>

            ))}

          </div>

        </div>

      </section>

    </div>

  );
}

export default About;
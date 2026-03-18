import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import webdev from "../assets/down/web.png";
import appdev from "../assets/down/app2.png";
import cloud from "../assets/down/cloud.png";
import software from "../assets/down/software-dev.png";
import blockchain from "../assets/down/blockchain.png";
import soler from "../assets/down/solor-light.png";
import laptops from "../assets/down/laptops.png";
import board from "../assets/down/white-board.PNG";
import storage from "../assets/down/storage.png";
import cctv from "../assets/down/cctv2.png";
import digital from "../assets/down/degital.png";
import ecommerce from "../assets/down/eccommerce.png";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      img: webdev,
      detail:
        "We design and develop fast, responsive, and SEO-optimized websites tailored to your business needs, from corporate sites to complex web portals.",
    },
    {
      title: "Mobile App Development",
      img: appdev,
      detail:
        "Build high-performance Android and iOS apps with modern UI/UX, scalable architecture, and seamless user experience.",
    },
    {
      title: "Cloud Solutions",
      img: cloud,
      detail:
        "Secure and scalable cloud infrastructure using AWS, Microsoft Azure, and Google Cloud for better performance and cost optimization.",
    },
    {
      title: "Custom Software Development",
      img: software,
      detail:
        "We create custom enterprise software solutions to automate workflows, improve efficiency, and support business growth.",
    },
    {
      title: "Artificial Intelligence & Automation",
      img: blockchain,
      detail:
        "Leverage AI-powered automation, predictive analytics, and intelligent systems to transform your business operations.",
    },
    {
      title: "Solar Energy Solutions",
      img: soler,
      detail:
        "Eco-friendly solar solutions including rooftop solar panels and smart solar street lighting systems for sustainable energy.",
    },
    {
      title: "IT Hardware & Infrastructure",
      img: laptops,
      detail:
        "Enterprise-grade laptops, desktops, servers, and IT infrastructure solutions for businesses of all sizes.",
    },
    {
      title: "E-Learning & Smart Classrooms",
      img: board,
      detail:
        "Interactive digital classrooms with smart boards, collaboration tools, and real-time learning platforms.",
    },
    {
      title: "Servers & Data Storage",
      img: storage,
      detail:
        "Reliable server infrastructure and secure data storage solutions to ensure performance, scalability, and protection.",
    },
    {
      title: "Security & Surveillance Systems",
      img: cctv,
      detail:
        "Advanced CCTV surveillance, biometric access control, and integrated security systems for businesses and institutions.",
    },
    {
      title: "Digital Marketing",
      img: digital,
      detail:
        "Boost your online presence with SEO, social media marketing, content marketing, and data-driven digital strategies.",
    },
    {
      title: "E-commerce Development",
      img: ecommerce,
      detail:
        "Build secure and scalable online stores with modern UI/UX, payment gateway integration, and inventory management.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-[#fcfcfd] pb-10 md:pb-20 overflow-hidden font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}

        <div className="flex py-6 flex-col lg:flex-row lg:items-end justify-between sm:mb-10 gap-8">

          <div className="space-y-2">

            <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-1 rounded-full border border-amber-100">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                Service Excellence
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Future-Ready <br />
              <span className="text-transparent  bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                Business Solutions
              </span>
            </h2>

          </div>

          <div className="max-w-xl mr-8 pb-4">
            <p className="text-slate-500 text-lg leading-relaxed  border-l-4 border-amber-600 pl-6">
              Empowering organizations with
              <span className="text-slate-900 font-semibold"> IshiSoft's </span>
              end-to-end integration and cutting-edge technology infrastructure.
            </p>
          </div>

        </div>

        {/* Services Grid */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2  gap-7"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-white border-l-4 border-amber-600 p-7 rounded-3xl hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-7 h-7 object-contain"
                  />
                </motion.div>

                <span className="text-slate-200 font-black text-3xl">
                  0{index + 1}
                </span>

              </div>

              <motion.h3
                whileHover={{ x: 4 }}
                className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors"
              >
                {service.title}
              </motion.h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {service.detail}
              </p>

             

            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="sm:mt-20 mt-10 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-slate-900 px-8 py-4 rounded-md sm:rounded-full shadow-xl">

            <span className="text-white text-sm font-medium">
              Ready to transform your infrastructure?
            </span>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold text-sm"
            >
              Consult Our Experts
              <ArrowUpRight size={16} />
            </motion.button>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
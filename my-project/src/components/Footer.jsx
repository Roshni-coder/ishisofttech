import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import logo from "../assets/down/logo.png";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 font-['Plus_Jakarta_Sans']">

      {/* Top Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Column 1 */}
          <div className="space-y-6">

            <img
              src={logo}
              alt="IshiSoft"
              className="h-9 md:h-10 w-auto object-contain drop-shadow-md"
            />

            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Transforming businesses through innovative MERN stack development,
              cloud infrastructure, and cutting-edge AI solutions.
            </p>

            <div className="flex gap-3">

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
              >
                <Twitter size={18} />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition"
              >
                <Facebook size={18} />
              </a>

            </div>

          </div>

          {/* Column 2 */}
          <div>

            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">
              Navigation
            </h3>

            <ul className="space-y-3 text-sm font-medium">

              <li>
                <a href="/about" className="hover:text-amber-600 transition">
                  About Company
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-amber-600 transition">
                  Our Services
                </a>
              </li>

              <li>
                <a href="/products" className="hover:text-amber-600 transition">
                  Products
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-amber-600 transition">
                  Contact Us
                </a>
              </li>

            </ul>

          </div>

          {/* Column 3 */}
          <div>

            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">
              Contact
            </h3>

            <ul className="space-y-4 text-sm">

              <li className="flex items-start gap-3">
                <Mail size={18} className="text-amber-600 shrink-0" />
                <span className="break-all">
                  support@ishisofttech.com
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={18} className="text-amber-600 shrink-0" />
                <span>+91 93650 55344</span>
              </li>

              <li className="flex items-start gap-3">
                <Globe size={18} className="text-amber-600 shrink-0" />
                <a
                  href="https://ishisofttech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all hover:text-white"
                >
                  https://ishisofttech.com/
                </a>
              </li>

            </ul>

          </div>

          {/* Column 4 */}
          <div>

            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">
              Our Presence
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <MapPin size={18} className="text-amber-600 shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    Head Office
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    7C/702, Dr. Babasaheb Ambedkar Road, Parel, Mumbai – 400012, Maharashtra
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} className="text-amber-600 shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    Registered Office
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Krishna Apartment Ambikapatty, Silchar – 788004, Assam
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

          <p className="text-xs text-slate-500">
            Copyright © {new Date().getFullYear()}
            <span className="text-slate-300 font-semibold">
              {" "}Ishisoft Private Limited
            </span>. All rights reserved.
          </p>

          <div className="flex gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-500">

            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
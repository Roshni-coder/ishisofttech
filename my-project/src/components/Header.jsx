import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

// Assuming you have both versions of the logo
import logoDark from "../assets/down/logo.png"; // Gray/Orange version
import logoWhite from "../assets/down/logoone.png";    // The white version I gave you

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // 1. Determine if the current page has a dark hero background
  const isDarkPage = location.pathname === "/"; 
  
  // 2. Decide if we should show the "Light Mode" header
  // Show light mode if: We scrolled OR we are on a page that isn't the Home page
  const useLightVersion = scrolled || !isDarkPage;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 lg:px-12 ${
        useLightVersion 
          ? "bg-white/80 backdrop-blur-md  py-5" 
          : "bg-white/40 backdrop-blur-md  py-5"
      }`}
    >
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-2">
        
        {/* Logo Section - Switches based on background */}
        <Link to="/" className="flex items-center">
          <img 
            src={useLightVersion ? logoDark : logoWhite} 
            alt="Ishisoft" 
            className="h-10 lg:h-12 object-contain transition-all duration-300" 
          />
        </Link>

        {/* Desktop Navigation (The Pill) */}
        <nav className={`hidden lg:flex items-center rounded-full p-1 border transition-all duration-300 ${
          useLightVersion 
            ? "bg-gray-100/50 border-gray-200" 
            : "bg-white border-white/20 backdrop-blur-md"
        }`}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-amber-600 text-white shadow-md"
                    : useLightVersion 
                      ? "text-slate-700 hover:text-amber-600" 
                      : "text-text-slate-700 hover:bg-white/20"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Section */}
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden md:block">
            <button className="px-7 py-3 rounded-full bg-amber-600 text-white text-[13px] font-bold uppercase tracking-wider hover:bg-amber-700 transition-all shadow-lg hover:scale-105 active:scale-95">
              Let's Connect
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              useLightVersion ? "bg-slate-100 text-slate-900" : "bg-white/20 text-white"
            }`}
          >
            <HiOutlineMenuAlt3 size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 z-[60] ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[280px] bg-white p-8 shadow-2xl transform transition-transform duration-500 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-10">
            <img src={logoDark} alt="logo" className="h-8" />
            <button onClick={() => setMenuOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-500">
              <HiOutlineX size={20} />
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-lg font-semibold py-2 px-4 rounded-lg ${
                  location.pathname === link.path 
                    ? "bg-amber-50 text-amber-600" 
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-6 pt-6 border-t border-slate-100">
                <Link 
                  to="/contact" 
                  className="block w-full text-center py-4 bg-amber-600 text-white rounded-xl font-bold"
                  onClick={() => setMenuOpen(false)}
                >
                  Connect Now
                </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const cvHref = encodeURI("/CVS/Sanaullah_DS_CV.pdf");

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cvDropdown, setCvDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${
        scrolled 
          ? "glass shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
            <span className="text-gray-900 font-bold text-lg">ST</span>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-900 text-[16px] font-semibold cursor-pointer leading-tight">
              Sanaullah Tareen
            </p>
            <span className="text-secondary text-[12px] hidden sm:block">
              ML Engineer & Data Scientist
            </span>
          </div>
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title 
                  ? "text-white bg-white/10" 
                  : "text-secondary hover:text-white"
              } px-4 py-2 rounded-lg text-[14px] font-medium cursor-pointer transition-all duration-300`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <div className="relative">
              <button
                onClick={() => setCvDropdown(!cvDropdown)}
                className="btn-primary px-4 py-2 rounded-lg text-[14px] font-semibold ml-2 inline-flex items-center gap-2"
              >
                Download CV
                <svg className={`w-4 h-4 transition-transform ${cvDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {cvDropdown && (
                <div className="absolute right-0 mt-2 glass-card rounded-xl p-3 min-w-[200px] z-50">
                  <a
                    href={cvHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-900 text-sm"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </a>
                </div>
              )}
            </div>
          </li>
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <button
                  className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm"
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[20px] h-[20px] object-contain"
            />
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } glass-card p-6 absolute top-20 right-4 min-w-[200px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-3 w-full">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[15px] ${
                    active === nav.title ? "text-gray-900" : "text-secondary"
                  } hover:text-gray-900 transition-colors duration-200`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-200">
                <p className="text-secondary text-xs mb-2 px-2">Download CV</p>
                <a
                  href={cvHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 rounded-lg text-[14px] text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

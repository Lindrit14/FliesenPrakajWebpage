// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" p-4 mb-4 flex flex-col lg:flex-row ">
      <div className="p-4 container mx-auto flex justify-between gap-4 ">
        <h1 className=" text-black text-4xl font-bold underline decoration-coral-200 decoration-2">
          FliesenPraka<span className=" text-coral-400">j</span>
        </h1>

        {/* Navigation Links */}
        <div className="md:flex flex-col md:flex-row gap-8 items-center hidden md:visible ">
          <a
            href="/about"
            className="text-black hover:text-black hover:underline decoration-coral-200 text-xl"
          >
            Über uns
          </a>
          <a
            href="/services"
            className="text-black hover:text-black hover:underline decoration-coral-200 text-xl"
          >
            Leistungen
          </a>
          <a
            href="/contact"
            className="text-black hover:text-black hover:underline decoration-coral-200 text-xl"
          >
            Projekte
          </a>

          <a
            href="/contact"
            className="text-black hover:text-black hover:underline decoration-coral-200 text-xl "
          >
            Kontakt
          </a>
        </div>

        {/* Button */}
        <a href="/contact" className="min-w-20">
          <button className="  text-black hover:text-black bg-coral-200 p-4  text-xl  font-semibold">
            Termin ausmachen
          </button>
        </a>

        {/* Hamburger Icon */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars}
            className="h-8 w-8 text-black"
          />
        </button>
      </div>

      <div className="mobileLinks md:hidden">
        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-8 items-center text-lg`}
        >
          <a
            href="/"
            className="text-black hover:text-black hover:underline decoration-orange-400"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-black hover:text-black hover:underline decoration-orange-400"
          >
            About
          </a>
          <a
            href="/services"
            className="text-black hover:text-black hover:underline decoration-orange-400"
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-black hover:text-black hover:underline decoration-orange-400"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="text-black hover:text-black hover:underline decoration-orange-400"
          >
            Testimonials
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { useState, useEffect } from "react";
import logo from "../assets/burger.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 z-50 shadow-md ${
        scrolled ? "bg-red-900" : "bg-red-800"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <img src={logo} alt="Burger Logo" className="w-24" />
        
        {/* Menú de escritorio */}
        <ul className="hidden md:flex space-x-6 text-white text-lg">
          {["Inicio", "Menu", "Contáctanos"].map((item) => (
            <li key={item} className="hover:text-yellow-400 cursor-pointer">{item}</li>
          ))}
        </ul>

        {/* Botón menú hamburguesa */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-red-900 text-white text-lg flex flex-col items-center space-y-4 p-4">
          {["Inicio", "Menu", "Contáctanos"].map((item) => (
            <li key={item} className="hover:text-yellow-400 cursor-pointer">{item}</li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

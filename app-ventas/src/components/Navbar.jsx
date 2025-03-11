import { useState, useEffect } from "react";
import logo from "../assets/burger.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-red-900 text-white shadow-lg z-50 transition-all">

      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="Burger Logo" className="w-24" />

        {/* Menú de escritorio */}
        <ul className="hidden md:flex space-x-8 text-white text-lg">
          {["Inicio", "Menu", "Contactanos"].map((item) => (
            <li key={item} className="relative cursor-pointer hover:text-gray-300 after:block after:h-0.5 after:w-full after:bg-white after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
              {item}
            </li>
          ))}
        </ul>

        {/* Botón menú hamburguesa */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-yellow-700 text-white text-lg flex flex-col items-center space-y-4 p-4">
          {["Inicio", "Menu", "Contactanos"].map((item) => (
            <li key={item} className="cursor-pointer hover:text-gray-300">{item}</li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

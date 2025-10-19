import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // close menu on navigation
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex justify-center bg-transparent backdrop-blur-sm">
      <div className="w-[92%] md:w-4/5 bg-[#050505]/90 border border-gray-800 text-white flex items-center justify-between py-3 px-5 md:px-7 mt-4 rounded-xl shadow-2xl transition-all duration-300">
        {/* Logo */}
        <h1
          className="text-xl sm:text-2xl font-bold tracking-wide cursor-pointer"
          onClick={() => handleNavigate("/")}
        >
          INVENTO
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-7">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/service" },
            { name: "Our Team", path: "/team" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li
              key={item.name}
              onClick={() => handleNavigate(item.path)}
              className="cursor-pointer text-sm lg:text-base hover:bg-gray-500/30 py-1 px-3 rounded-md transition-all"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center text-gray-300 hover:text-white transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[68px] w-[92%] md:hidden bg-[#050505]/95 border border-gray-800 text-white rounded-lg shadow-2xl py-4 px-6 transition-all duration-300">
          <ul className="flex flex-col gap-4">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/service" },
              { name: "Our Team", path: "/team" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li
                key={item.name}
                onClick={() => handleNavigate(item.path)}
                className="cursor-pointer text-base hover:bg-gray-600/30 py-2 px-3 rounded-md transition-all"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

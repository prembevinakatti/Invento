import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-screen z-50 flex items-center justify-center">
      <div className="w-4/5 bg-[#050505] text-white flex items-center justify-between p-3 px-7 border absolute top-6 rounded-md border-gray-800 shadow-2xl">
        <h1 className="text-2xl">INVENTO</h1>
        <div>
          <ul className="flex items-center gap-7">
            <li
              className="cursor-pointer text-sm hover:bg-gray-500/30 py-1 px-2 rounded-sm transition-all"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="cursor-pointer text-sm hover:bg-gray-500/30 py-1 px-2 rounded-sm transition-all"
              onClick={() => navigate("/service")}
            >
              Services
            </li>
            <li
              className="cursor-pointer text-sm hover:bg-gray-500/30 py-1 px-2 rounded-sm transition-all"
              onClick={() => navigate("/team")}
            >
              Our Team
            </li>
            <li
              className="cursor-pointer text-sm hover:bg-gray-500/30 py-1 px-2 rounded-sm transition-all"
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

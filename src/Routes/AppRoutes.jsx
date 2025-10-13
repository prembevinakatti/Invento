import ContactPage from "@/Pages/ContactPage";
import HomePage from "@/Pages/HomePage";
import ServicePage from "@/Pages/ServicePage";
import TeamPage from "@/Pages/TeamPage";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;

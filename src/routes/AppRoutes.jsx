import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Services from "../pages/Services.jsx";
import FacilityManagement from "../pages/FacilityManagement.jsx";
import RealEstateDevelopment from "../pages/RealEstateDevelopment.jsx";
import ProjectManagement from "../pages/ProjectManagement.jsx";
import Projects from "../pages/Projects.jsx";
import Contact from "../pages/Contact.jsx";
import NotFound from "../pages/NotFound.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/facility-management" element={<FacilityManagement />} />
      <Route path="/services/real-estate-development" element={<RealEstateDevelopment />} />
      <Route path="/services/project-management" element={<ProjectManagement />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import UploadTest from "../pages/UploadTest";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminLayout from "../pages/admin/AdminLayout";
import Events from "../pages/Events";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/events" element={<Events />} />
      <Route path="/upload-test" element={<UploadTest />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminLayout />} />
    </Routes>
  );
};

export default AppRoutes;

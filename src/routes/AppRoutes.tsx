import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Events from "../pages/Events";
import Layout from "../Layout/Layout";
import PostDetailPage from "../components/postDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

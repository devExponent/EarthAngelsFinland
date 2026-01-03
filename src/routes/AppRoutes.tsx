import { Routes, Route } from "react-router-dom";
import UploadTest from "../pages/UploadTest";
import AdminLogin from "../pages/admin/AdminLogin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/upload-test" element={<UploadTest />} />
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  );
};

export default AppRoutes;

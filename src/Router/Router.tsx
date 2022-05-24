import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import AuthView from "../modules/auth/AuthView";
import EcommerceView from "../modules/ecommerce/EcommerceView";

const Router: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<AuthView />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<EcommerceView />} />
      </Route>
    </Routes>
  );
};
export default Router;

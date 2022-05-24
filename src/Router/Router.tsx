import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import AuthView from "../modules/auth/AuthView";
import Session from "../modules/auth/components/Session";
import EcommerceView from "../modules/ecommerce/EcommerceView";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthView />} />
      <Route element={<Session />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<EcommerceView />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default Router;

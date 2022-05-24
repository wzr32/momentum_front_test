import * as React from "react";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import { CSSProperties } from "@mui/styled-engine";
import Navbar from "./components/Navbar";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

interface ILayoutProps {}

const Layout: React.FC<ILayoutProps> = () => {
  return (
    <>
      <Navbar />
      <Offset />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;

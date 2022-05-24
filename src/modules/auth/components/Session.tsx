import * as React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const Session: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate({ pathname: "/" }, { replace: true });
    }
  }, []);

  return <Outlet />;
};
export default Session;

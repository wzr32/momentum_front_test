import * as React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { logoutUser } from "../../API/api.functions";
import { useNavigate } from "react-router-dom";

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    logoutUser();
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            e-Commerce
          </Typography>
          <Button sx={{ color: "#fff" }} onClick={() => handleLogout()}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;

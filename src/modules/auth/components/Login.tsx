import * as React from "react";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";
import { loginUser } from "../../../API/api.functions";
import { useNavigate } from "react-router-dom";
import { LoginUserType } from "../auth.types";
import NotificationComponent from "../../../shared/NotificationComponent";

const initialState: LoginUserType = {
  username: "",
  password: "",
};

const initialStateNotification = { show: false, msg: "", severity: "success" };

interface ILoginProps {}

const Login: React.FC<ILoginProps> = () => {
  const [loading, setLoading] = React.useState(false);
  const [visibilityPass, setVisibilityPass] = React.useState(false);
  const [loginData, setLoginData] = React.useState(initialState);
  const [notification, setNotification] = React.useState(
    initialStateNotification
  );

  const { username, password } = loginData;
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      setNotification(initialStateNotification);
    }, 3500);
  }, [notification]);

  const handleSubmit = async () => {
    if (username && password) {
      const response = await loginUser(loginData);
      setLoading(false);
      if (response) {
      }
      setNotification({
        show: true,
        msg: "Login successfuly. Redirecting..",
        severity: "success",
      });
      localStorage.setItem("user", JSON.stringify(response));
      setTimeout(() => {
        navigate("/dashboard");
      }, 3500);
    } else {
      setNotification({
        show: true,
        msg: "all fields are required",
        severity: "error",
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    const auxObject = { ...loginData };
    Object.assign(auxObject, { [field]: value });
    setLoginData(auxObject);
  };

  return (
    <>
      <Typography variant="h3" align="center" gutterBottom>
        Login
      </Typography>
      <NotificationComponent notification={notification} />
      <Box>
        <TextField
          fullWidth
          size="small"
          margin="dense"
          label="Username"
          value={username}
          onChange={(e) => handleChange("username", e.target.value)}
          disabled={loading}
        />
        <TextField
          fullWidth
          size="small"
          margin="dense"
          type={visibilityPass ? "text" : "password"}
          label="Password"
          value={password}
          onChange={(e) => handleChange("password", e.target.value)}
          disabled={loading}
          InputProps={{
            endAdornment: (
              <IconButton
                size="small"
                onClick={() => setVisibilityPass(!visibilityPass)}
              >
                {visibilityPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            ),
          }}
        />
        <Button
          variant="contained"
          sx={{ marginTop: "1em" }}
          onClick={() => handleSubmit()}
        >
          submit
        </Button>
      </Box>
    </>
  );
};
export default Login;

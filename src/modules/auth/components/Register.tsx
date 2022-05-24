import * as React from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";
import { registerUser } from "../../../API/api.functions";
import { RegisterUserType } from "../auth.types";
import NotificationComponent from "../../../shared/NotificationComponent";

const initialState: RegisterUserType = {
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  password: "",
};

const initialStateNotification = { show: false, msg: "", severity: "success" };

interface IRegisterProps {}

const Register: React.FC<IRegisterProps> = () => {
  const [loading, setLoading] = React.useState(false);
  const [visibilityPass, setVisibilityPass] = React.useState({
    pass: false,
    confirmPass: false,
  });
  const [registerData, setRegisterData] = React.useState(initialState);
  const [confirmPass, setConfirmPass] = React.useState<string | null>(null);
  const [notification, setNotification] = React.useState(
    initialStateNotification
  );

  const { username, email, firstName, lastName, password } = registerData;

  React.useEffect(() => {
    setTimeout(() => {
      setNotification(initialStateNotification);
    }, 3500);
  }, [notification]);

  const handleChange = (field: string, value: string) => {
    const auxObject = { ...registerData };
    Object.assign(auxObject, { [field]: value });
    setRegisterData(auxObject);
  };

  const handleSubmit = async () => {
    if (!username || !email || !firstName || !lastName || !password) {
      setNotification({
        show: true,
        msg: "all fields are required",
        severity: "error",
      });
    } else if (password !== confirmPass) {
      setNotification({
        show: true,
        msg: "passwords must match",
        severity: "error",
      });
    }

    setLoading(true);
    const response = await registerUser(registerData);
    if (!response) {
      setLoading(false);
      setNotification({
        show: true,
        msg: "User already created. Change your register data",
        severity: "error",
      });
      return;
    }

    setLoading(false);
    setConfirmPass(null);
    setRegisterData(initialState);
    setNotification({
      show: true,
      msg: "User created successfuly.",
      severity: "success",
    });
  };

  return (
    <>
      <Typography variant="h3" align="center" gutterBottom>
        Register
      </Typography>
      <NotificationComponent notification={notification} />
      <Box>
        <TextField
          fullWidth
          type="text"
          label="First Name"
          size="small"
          margin="dense"
          value={firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          disabled={loading}
        />
        <TextField
          fullWidth
          type="text"
          label="Last Name"
          size="small"
          margin="dense"
          value={lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          disabled={loading}
        />
        <TextField
          fullWidth
          type="text"
          label="Username"
          size="small"
          margin="dense"
          value={username}
          onChange={(e) => handleChange("username", e.target.value)}
          disabled={loading}
        />
        <TextField
          fullWidth
          type="email"
          label="Email"
          size="small"
          margin="dense"
          value={email}
          onChange={(e) => handleChange("email", e.target.value)}
          disabled={loading}
        />
        <TextField
          fullWidth
          type={visibilityPass.pass ? "text" : "password"}
          label="Password"
          size="small"
          margin="dense"
          value={password}
          onChange={(e) => handleChange("password", e.target.value)}
          disabled={loading}
          InputProps={{
            endAdornment: (
              <IconButton
                size="small"
                onClick={() => {
                  setVisibilityPass({
                    ...visibilityPass,
                    pass: !visibilityPass.pass,
                  });
                }}
              >
                {visibilityPass.pass ? (
                  <VisibilityOffIcon />
                ) : (
                  <VisibilityIcon />
                )}
              </IconButton>
            ),
          }}
        />
        <TextField
          fullWidth
          type={visibilityPass.confirmPass ? "text" : "password"}
          label="Confirm Password"
          size="small"
          margin="dense"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          disabled={loading}
          InputProps={{
            endAdornment: (
              <IconButton
                size="small"
                onClick={() => {
                  setVisibilityPass({
                    ...visibilityPass,
                    confirmPass: !visibilityPass.confirmPass,
                  });
                }}
              >
                {visibilityPass.confirmPass ? (
                  <VisibilityOffIcon />
                ) : (
                  <VisibilityIcon />
                )}
              </IconButton>
            ),
          }}
        />
        <Button
          variant="contained"
          disabled={loading}
          sx={{ marginTop: "1em" }}
          onClick={() => handleSubmit()}
        >
          {loading ? <CircularProgress size={20} /> : "Sign up"}
        </Button>
      </Box>
    </>
  );
};
export default Register;

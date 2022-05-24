import * as React from "react";
import { Box, Card, CardContent, Container, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Login from "./components/Login";
import Register from "./components/Register";
import { styled } from "@mui/system";

const GradientBox = styled(Container)`
  background: #de6161; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #2657eb,
    #de6161
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #2657eb,
    #de6161
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

interface IAuthViewProps {}

const AuthView: React.FC<IAuthViewProps> = () => {
  const [selectedTab, setSelectedTab] = React.useState("1");

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  return (
    <GradientBox>
      <Card sx={{ maxWidth: "500px", width: "100%" }}>
        <CardContent sx={{ overflow: "auto" }}>
          <TabContext value={selectedTab}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChangeTab}>
                <Tab label="Login" value="1" />
                <Tab label="Register" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Login />
            </TabPanel>
            <TabPanel value="2">
              <Register />
            </TabPanel>
          </TabContext>
        </CardContent>
      </Card>
    </GradientBox>
  );
};
export default AuthView;

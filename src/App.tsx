import * as React from "react";
import { createHistoryStorage } from "./shared/helpers";
import Router from "./Router/Router";

function App() {
  React.useEffect(() => {
    createHistoryStorage();
  }, []);

  return <Router />;
}

export default App;

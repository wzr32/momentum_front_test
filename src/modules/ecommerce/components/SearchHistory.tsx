import { Box, Grid } from "@mui/material";
import * as React from "react";
import { ProductType } from "../products.types";

interface ISearchHistoryProps {}

const SearchHistory: React.FC<ISearchHistoryProps> = () => {
  const [historyItems, setHistoryItems] = React.useState<
    ProductType[] | never[]
  >([]);

  React.useEffect(() => {
    if (localStorage.getItem("history")) {
      setHistoryItems(JSON.parse(localStorage.getItem("history") || "[]"));
    }
  }, []);

  return (
    <Box>
      <Grid container spacing={1}></Grid>
    </Box>
  );
};
export default SearchHistory;

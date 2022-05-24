import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ProductType } from "../products.types";
import SearchHistoryCard from "./SearchHistoryCard";

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

  let content: JSX.Element | JSX.Element[] = <></>;

  console.log([...new Set(historyItems)].slice(-5));

  if (historyItems.length) {
    content = (
      <Grid container spacing={1}>
        {historyItems.slice(-10).map((product, i) => (
          <Grid item xs={3} key={`product_history-${i}`}>
            <SearchHistoryCard product={product} />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Box sx={{ overflowX: "auto", mt: "1.3em" }}>
      <Typography variant="h6" component="p" gutterBottom>
        Recent search items
      </Typography>
      <Box>{content}</Box>
    </Box>
  );
};
export default SearchHistory;

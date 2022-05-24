import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import * as React from "react";

interface ISearchHistoryCardProps {}

const SearchHistoryCard: React.FC<ISearchHistoryCardProps> = () => {
  return (
    <Card>
      <CardMedia component="img" height="50" image="" alt="" />
      <CardContent>
        <Typography>title</Typography>
      </CardContent>
    </Card>
  );
};
export default SearchHistoryCard;

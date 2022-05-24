import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import * as React from "react";
import { ProductType } from "../products.types";

interface ISearchHistoryCardProps {
  product: ProductType;
}

const SearchHistoryCard: React.FC<ISearchHistoryCardProps> = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="50"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography
          variant="caption"
          sx={{
            width: "4px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.title}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default SearchHistoryCard;

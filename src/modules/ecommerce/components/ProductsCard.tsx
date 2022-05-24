import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import * as React from "react";
import { ProductType } from "../products.types";

interface IProductsCardProps {
  product: ProductType | null;
  handleOpenDialog: (item: ProductType | null) => void;
}

const ProductsCard: React.FC<IProductsCardProps> = ({
  product,
  handleOpenDialog,
}) => {
  return (
    <Card
      elevation={2}
      sx={{
        width: "100%",
      }}
    >
      <CardMedia
        component="img"
        height="120"
        image={product?.image}
        alt={product?.title}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography
          variant="h6"
          sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {product?.title}
        </Typography>
        <Typography variant="subtitle2">{product?.category}</Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography variant="subtitle2" sx={{ marginRight: "1em" }}>
            rate: {product?.rating?.rate}
          </Typography>
          <Typography variant="subtitle2">${product?.price}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={() => handleOpenDialog(product)}>
          see details
        </Button>
      </CardActions>
    </Card>
  );
};
export default ProductsCard;

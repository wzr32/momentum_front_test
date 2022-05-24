import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";
import { ProductType } from "../../modules/ecommerce/products.types";

interface IProductDialogProps {
  product: ProductType | null;
  open: boolean;
  onClose: () => void;
}

const ProductDialog: React.FC<IProductDialogProps> = ({
  product,
  open,
  onClose,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle></DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8} sx={{ order: { xs: 1, md: 0 } }}>
            <Typography variant="h5">{product?.title}</Typography>
            <Typography variant="body1">{product?.description}</Typography>
            <Box sx={{ display: "flex" }}>
              <Typography variant="body1">{product?.price}</Typography>
              <Typography variant="body1">{product?.rating.rate}</Typography>
              <Typography variant="body1">{product?.rating.count}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} sx={{ order: { xs: 0, md: 1 } }}>
            <Box
              sx={{
                maxWidth: "200px",
                width: "100%",
                margin: "0 auto",
              }}
            >
              <img
                src={product?.image}
                alt={product?.title}
                style={{ width: "100%", objectFit: "contain" }}
              />
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained">add to card</Button>
        <Button variant="contained" color="error" onClick={onClose}>
          close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ProductDialog;

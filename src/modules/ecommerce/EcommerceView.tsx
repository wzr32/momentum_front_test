import * as React from "react";
import {
  Box,
  CircularProgress,
  Chip,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { ProductType } from "./products.types";
import { recentViews } from "../../shared/helpers";
import Api from "../../API/server-api";
import ProductDialog from "../../shared/dialogs/ProductDialog";
import ProductsCard from "./components/ProductsCard";
import SearchIcon from "@mui/icons-material/Search";

interface IEcommerceViewProps {}

const EcommerceView: React.FC<IEcommerceViewProps> = () => {
  const [products, setProducts] = React.useState<ProductType[] | never[]>([]);
  const [filteredProducts, setFilteredProducts] = React.useState<
    ProductType[] | never[]
  >([]);
  const [selectedProduct, setselectedProduct] =
    React.useState<ProductType | null>(null);
  const [searchProduct, setSearchProduct] = React.useState<string>("");
  const [loading, setLoading] = React.useState(true);
  const [showDialog, setShowDialog] = React.useState(false);

  React.useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const { data } = await Api.get("products");
      setLoading(false);
      setProducts(data);
    } catch (err) {
      console.log("error on fetch products");
    }
  };

  const handleOpenDialog = (item: ProductType | null) => {
    setselectedProduct(item);
    if (item) {
      setShowDialog(true);
      recentViews(item);
    }
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setselectedProduct(null);
  };

  const handleSearch = () => {
    const filter = products.filter((item) => {
      if (item.title.toLowerCase().includes(searchProduct)) {
        return item;
      }
    });
    setFilteredProducts(filter);
  };

  const handleClearSearch = () => {
    setFilteredProducts([]);
    setSearchProduct("");
  };

  let content: JSX.Element | JSX.Element[] = (
    <Typography variant="h4" align="center">
      No items to show
    </Typography>
  );

  if (loading) {
    content = (
      <Box
        sx={{
          width: "100%",
          height: "",
          display: "grid",
          placeItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (products.length && !filteredProducts.length) {
    content = (
      <Grid container spacing={3} justifyContent="center">
        {products.map((product, i) => (
          <Grid item xs={12} sm={6} md={4} key={`product-${i}`}>
            <ProductsCard
              product={product}
              handleOpenDialog={handleOpenDialog}
            />
          </Grid>
        ))}
      </Grid>
    );
  } else {
    content = (
      <Grid container spacing={3} justifyContent="center">
        {filteredProducts.map((product, i) => (
          <Grid item xs={12} sm={6} md={4} key={`product-${i}`}>
            <ProductsCard
              product={product}
              handleOpenDialog={handleOpenDialog}
            />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <section>
      <Container>
        <Box
          sx={{ marginBottom: "2em", display: "grid", placeItems: "center" }}
        >
          <TextField
            placeholder="search"
            size="small"
            onChange={(e) => setSearchProduct(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={() => handleSearch()}
                  sx={{ cursor: "pointer" }}
                >
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          {!!filteredProducts.length && (
            <Chip
              label="Clear search"
              color="error"
              onClick={handleClearSearch}
              sx={{ marginTop: "1em" }}
            />
          )}
        </Box>
        {content}
      </Container>
      <ProductDialog
        product={selectedProduct}
        open={showDialog}
        onClose={handleCloseDialog}
      />
    </section>
  );
};
export default EcommerceView;

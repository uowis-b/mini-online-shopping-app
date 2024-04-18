"use client";

import { useCart } from "@/hooks/use-cart";
import { Product } from "@/types/product";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useCallback } from "react";

type AddToCartProps = Product;
const AddToCart = (product: AddToCartProps) => {
  const { addToCart } = useCart();

  const handleOnClick = useCallback(() => {
    addToCart(product);
  }, [product, addToCart]);

  return (
    <Button variant={"contained"} onClick={handleOnClick}>
      <Stack direction={"row"} spacing={1}>
        <AddShoppingCartIcon />
        <Typography fontWeight={"bold"}>Add to Cart</Typography>
      </Stack>
    </Button>
  );
};

export default AddToCart;

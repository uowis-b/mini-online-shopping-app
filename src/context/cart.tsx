import { Product } from "@/types/product";
import Snackbar from "@mui/material/Snackbar";
import React, { createContext, ReactNode, useCallback, useState } from "react";

export type CartProduct = Product & {
  num: number;
};

export type CartContextModel = {
  cart: CartProduct[];
  addToCart: (p: Product) => void;
  removeFromCart: (p: Product) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
};

export const initialState: CartContextModel = {
  cart: [],
  addToCart: (_p) => {},
  removeFromCart: (_p) => {},
  getTotalItems: () => 0,
  getTotalPrice: () => 0,
};

export const CartContext = createContext<CartContextModel>(initialState);

type CartProviderProps = {
  children: ReactNode;
};
const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const addToCart = useCallback(
    (product: Product) => {
      setSnackbarMessage(`Added ${product.title} to your cart`);
      const existingProduct = cart.find((p) => p.id === product.id);
      if (existingProduct) {
        setCart(
          cart.map((p) => {
            if (p.id === product.id) {
              return {
                ...p,
                num: p.num + 1,
              };
            }
            return p;
          })
        );
        return;
      }

      const newProduct = {
        ...product,
        num: 1,
      };
      setCart((c) => [...c, newProduct]);
    },
    [cart, setCart, setSnackbarMessage]
  );
  const removeFromCart = useCallback((_p: Product) => {
    //TODO: implement remove cart
  }, []);

  const getTotalItems = useCallback(() => {
    return cart.reduce((total, p) => total + p.num, 0);
  }, [cart]);

  const getTotalPrice = useCallback(() => {
    return cart.reduce((total, p) => total + p.num * p.price, 0);
  }, [cart]);

  const handleSnackBarClose = useCallback(() => {
    setSnackbarMessage("");
  }, [setSnackbarMessage]);

  //TODO: Improve handling of Snackbar

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}

      <Snackbar
        open={snackbarMessage !== ""}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={3000}
        onClose={handleSnackBarClose}
        message={snackbarMessage}
      />
    </CartContext.Provider>
  );
};
export default CartProvider;

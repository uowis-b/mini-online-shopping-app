"use client";

import { CartContext } from "@/context/cart";
import { useContext } from "react";

export function useCart() {
  return useContext(CartContext);
}

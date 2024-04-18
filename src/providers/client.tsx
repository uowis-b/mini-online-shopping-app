"use client";

import CartProvider from "@/context/cart";
import { ReactNode } from "react";

type ClientProvidersProps = {
  children: ReactNode;
};

const ClientProviders = ({ children }: ClientProvidersProps) => {
  return <CartProvider>{children}</CartProvider>;
};

export default ClientProviders;

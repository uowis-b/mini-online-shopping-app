import { GetProductsResponse, Product } from "@/types/product";
import axios from "axios";

export async function getProducts() {
  try {
    const products = await axios.get<GetProductsResponse>(
      "https://dummyjson.com/products"
    );

    return products.data.products;
  } catch (ex) {
    // handle error, for now return empty products
    return [];
  }
}

export async function getProductDetails(id: string) {
  try {
    const products = await axios.get<Product>(
      `https://dummyjson.com/products/${id}`
    );

    return products.data;
  } catch (ex) {
    // handle error, for now return empty products
    return null;
  }
}

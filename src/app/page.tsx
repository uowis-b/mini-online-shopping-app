import { getProducts } from "@/actions/dummydata";
import ProductCard from "@/components/product/ProductCard";
import Masonry from "@mui/lab/Masonry";

export default async function Home() {
  const products = await getProducts();
  return (
    <Masonry
      columns={{
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 4,
      }}
      spacing={{ xs: 1, m: 2 }}
    >
      {products.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </Masonry>
  );
}

import { getProductDetails } from "@/actions/dummydata";
import ProductSummary from "@/components/product/ProductSummary";
import Stack from "@mui/material/Stack";
import { notFound } from "next/navigation";

type ProductDetailsPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const product = await getProductDetails(params.id);

  if (!product) {
    return notFound();
  }

  return (
    <Stack alignItems={"center"} spacing={2}>
      <ProductSummary {...product} />
    </Stack>
  );
}

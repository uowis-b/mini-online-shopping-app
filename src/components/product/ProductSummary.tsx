import AddToCart from "@/components/product/AddToCart";
import { Product } from "@/types/product";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

type ProductSummaryProps = Product;

const ProductSummary = (product: ProductSummaryProps) => {
  const { title, description, thumbnail, price, stock, rating, brand } =
    product;
  return (
    <Stack
      spacing={2}
      sx={{
        width: "100%",
      }}
    >
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            {/*PRODUCT IMAGE*/}
            <TableRow>
              <TableCell align={"center"} colSpan={2}>
                <Box
                  sx={{
                    maxWidth: {
                      xs: "100%",
                      md: 500,
                      lg: 800,
                    },
                    width: "100%",
                  }}
                  component={"img"}
                  src={thumbnail}
                  alt={`${title} thumbnail`}
                />
              </TableCell>
            </TableRow>
            {/*ADD TO CART*/}
            <TableRow>
              <TableCell align={"center"} colSpan={2}>
                <AddToCart {...product} />
              </TableCell>
            </TableRow>
            {/*PRODUCT TITLE*/}
            <TableRow>
              <TableCell component="th" scope="row">
                Product Name
              </TableCell>
              <TableCell>{title}</TableCell>
            </TableRow>
            {/*PRODUCT DESCRIPTION*/}
            <TableRow>
              <TableCell component="th" scope="row">
                Product Description
              </TableCell>
              <TableCell>{description}</TableCell>
            </TableRow>
            {/*PRODUCT BRAND*/}
            <TableRow>
              <TableCell component="th" scope="row">
                Product brand
              </TableCell>
              <TableCell>{brand}</TableCell>
            </TableRow>
            {/*PRODUCT PRICE*/}
            <TableRow>
              <TableCell component="th" scope="row">
                Price
              </TableCell>
              <TableCell>${price}</TableCell>
            </TableRow>
            {/*PRODUCT STOCK*/}
            <TableRow>
              <TableCell component="th" scope="row">
                Stocks
              </TableCell>
              <TableCell>{stock}</TableCell>
            </TableRow>
            {/*PRODUCT RATING*/}
            <TableRow>
              <TableCell component="th" scope="row">
                Rating
              </TableCell>
              <TableCell>
                <Rating
                  name="read-only"
                  precision={0.1}
                  value={rating}
                  readOnly
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default ProductSummary;

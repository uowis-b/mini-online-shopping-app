import AddToCart from "@/components/product/AddToCart";
import { Product } from "@/types/product";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

type ProductCardProps = Product;

const ProductCard = (product: ProductCardProps) => {
  const { id, title, description, thumbnail, price } = product;
  return (
    <Card
      sx={{
        position: "relative",
        maxWidth: {
          xs: "100%",
          sm: "50%",
          md: "33%",
          lg: "25%",
          xl: "25%",
        },
      }}
    >
      <CardActionArea component={Link} href={`/products/${id}`}>
        <CardMedia
          sx={{
            img: {
              width: "100%",
              height: "auto",
            },
          }}
        >
          <Box component={"img"} src={thumbnail} alt={title} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            width: "100%",
          }}
        >
          <Typography fontWeight={"bold"}>${price}</Typography>
          <AddToCart {...product} />
        </Stack>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

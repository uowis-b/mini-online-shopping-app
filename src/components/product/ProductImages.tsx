"use client";

import Box from "@mui/material/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

type ProductImagesProps = {
  title: string;
  images: string[];
};
const ProductImages = ({ title, images }: ProductImagesProps) => {
  return (
    <Box
      sx={{
        maxWidth: {
          xs: "100%",
          sm: "100%",
          md: 500,
          lg: 500,
        },
      }}
    >
      <Slider adaptiveHeight slidesToShow={1}>
        {images.map((image, i) => (
          <Box
            key={image}
            component={"img"}
            src={image}
            alt={`${title} product image ${i + 1}`}
            sx={{
              width: "100%",
              height: "auto",
            }}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ProductImages;

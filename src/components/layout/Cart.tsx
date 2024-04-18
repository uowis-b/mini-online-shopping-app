"use client";

import { useCart } from "@/hooks/use-cart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { useCallback, useRef, useState } from "react";

const Cart = () => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const { cart, getTotalItems, getTotalPrice } = useCart();
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const hasCartItems = cart.length > 0;

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <IconButton ref={ref} onClick={handleOpen}>
          <ShoppingCartIcon />
        </IconButton>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            background: "#ff2c2c",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
          }}
        >
          <Typography variant={"caption"}>{getTotalItems()}</Typography>
        </Stack>
      </Box>

      <Menu
        anchorEl={ref?.current}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box
          sx={{
            padding: "16px",
          }}
        >
          <Stack>
            {!hasCartItems ? (
              <Typography
                sx={{
                  padding: "24px",
                }}
              >
                You have no items in the cart
              </Typography>
            ) : (
              <Stack
                spacing={2}
                sx={{
                  minWidth: 300,
                }}
              >
                <Typography fontWeight={"bold"}>
                  You have {getTotalItems()} items in your cart:
                </Typography>

                <TableContainer>
                  <Table aria-label="simple table">
                    <TableBody>
                      {cart.map((p) => (
                        <TableRow key={p.id}>
                          <TableCell align={"left"}>
                            <Box
                              component={"img"}
                              width={"30px"}
                              src={p.thumbnail}
                            />
                          </TableCell>
                          <TableCell align={"left"}>{p.title}</TableCell>
                          <TableCell align={"center"}>{p.num}</TableCell>
                          <TableCell align={"right"}>
                            ${p.price * p.num}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Stack
                  justifyContent={"space-between"}
                  spacing={3}
                  direction={"row"}
                >
                  <Typography fontWeight={"bold"}>Total</Typography>
                  <Typography fontWeight={"bold"}>{getTotalPrice()}</Typography>
                </Stack>
              </Stack>
            )}
          </Stack>
        </Box>
      </Menu>
    </Box>
  );
};

export default Cart;

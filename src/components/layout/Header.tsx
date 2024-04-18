import Cart from "@/components/layout/Cart";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <AppBar>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              width: "100%",
            }}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{
                width: "100%",
              }}
            >
              <Typography variant="h6" noWrap component={Link} href={"/"}>
                LOGO
              </Typography>

              <Cart />
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;

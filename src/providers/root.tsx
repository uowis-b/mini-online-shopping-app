import theme from "@/lib/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

const RootProviders = ({ children }: ProvidersProps) => {
  return (
    <AppRouterCacheProvider
      options={{ key: "mini-online-shopping", enableCssLayer: true }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default RootProviders;

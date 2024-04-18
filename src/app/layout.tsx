import Header from "@/components/layout/Header";
import ClientProviders from "@/providers/client";
import RootProviders from "@/providers/root";
import Container from "@mui/material/Container";
import type { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Mini Online Shopping App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RootProviders>
          <ClientProviders>
            <Header />
            <Container maxWidth="xl" component={"main"}>
              {children}
            </Container>
          </ClientProviders>
        </RootProviders>
      </body>
    </html>
  );
}

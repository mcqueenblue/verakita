import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { SuiProvider } from "@/components/providers/SuiProvider";

export const metadata: Metadata = {
  title: "Verakita - Trust Through Transparency",
  description: "Blockchain-powered authentic reviews and ratings platform built on Sui",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SuiProvider>
          <LenisProvider>{children}</LenisProvider>
        </SuiProvider>
      </body>
    </html>
  );
}

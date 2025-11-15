import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";

export const metadata: Metadata = {
  title: "Verakita - Trust Through Transparency",
  description: "Authentic reviews and ratings platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}

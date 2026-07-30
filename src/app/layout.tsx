import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sagor S. Dhor",
  description:
    "Portfolio of Sagor S. Dhor, a computer science student building AI systems, learning platforms, and full-stack products.",
  metadataBase: new URL("https://sagor2050.github.io")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

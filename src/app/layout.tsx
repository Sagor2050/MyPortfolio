import type { Metadata } from "next";
import "./globals.css";

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem("theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const theme = stored === "light" || stored === "dark" ? stored : system;
    document.documentElement.dataset.theme = theme;
  } catch {
  }
})();
`;

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

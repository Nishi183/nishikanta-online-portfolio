import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nishikanta Portfolio",
  description: "DevOps, Cloud, SRE, and platform engineering portfolio of Nishi Kanta Das",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

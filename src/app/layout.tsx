import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pristine Jets",
  description: "Luxury private jet detailing services",
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

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Number of Days since a Passport was Printed",
  description:
    "Tracking the number of days passed since the systems at immigration were hacked to the day the problem will be solved",
    twitter:{
      creator: '@mwasesparrow'
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

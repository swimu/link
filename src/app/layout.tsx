import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Exo_2 } from "next/font/google";

const exo_2 = Exo_2({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "swimu",
  description: "swimu's SNS link page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={exo_2.className}>{children}</body>
    </html>
  );
}

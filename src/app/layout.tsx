import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScotsFarm",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-800">
      <body className="min-h-screen min-w-screen">
        {children}
      </body>
    </html>
  );
}

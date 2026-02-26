import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Jason Christopher Ciayadi | IT Support Business Application",
  description:
    "Portfolio of Jason Christopher Ciayadi — IT Support Business Application with experience in ASP.Net, C#, Visual Basic, and MS SQL Server.",
  keywords: [
    "Jason Ciayadi",
    "IT Support",
    "Business Application",
    "ASP.Net Developer",
    "C# Developer",
    "MS SQL Server",
  ],
  authors: [{ name: "Jason Christopher Ciayadi" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-slate-950 text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
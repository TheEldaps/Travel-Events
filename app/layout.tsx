import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito"
});

export const nunitosans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunitosans",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Travel & Events Made Easy",
  description: "Where Travel, Fun and Easy Planning Comes together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable} ${nunitosans.variable} ${nunito.variable} `}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

// import { DM_Sans } from "next/font/google";
// import { DM_Serif_Display } from "next/font/google";
// import { Nunito_Sans } from "next/font/google";
// import { Nunito } from "next/font/google";
import localFont from "next/font/local"


const dmSans = localFont({
  src: [
    { path: "../public/fonts/DMSans-VariableFont_opsz,wght.woff2", },
  ],
  variable: "--font-dm-sans",
});


const dmSerif = localFont({
  src: [
    { path: "../public/fonts/DMSerifDisplay-Regular.woff2" }],
  variable: "--font-dm-serif"
});

const nunito = localFont({
  src: [
    { path: "../public/fonts/Nunito-VariableFont_wght.woff2" }],
  variable: "--font-nunito"
});

const nunitoSans = localFont({
  src: [
    { path: "../public/fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.woff2" }],
  variable: "--font-nunitosans"
});

const libreFranklin = localFont({
  src: [
    { path: "../public/fonts/LibreFranklin-VariableFont_wght.woff2" }],
  variable: "--font-dm-serif"
});

const robotoFlex = localFont({
  src: [
    { path: "../public/fonts/RobotoFlex-VariableFont_GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.woff2" }],
  variable: "--font-dm-serif"
});



// const nunito = Nunito({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-nunito"
// });

// export const nunitosans = Nunito_Sans({
//   subsets: ["latin"],
//   variable: "--font-nunitosans",
// });

// const dmSerif = DM_Serif_Display({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-dm-serif"
// });

// const dmSans = DM_Sans({
//   subsets: ["latin"],
//   variable: "--font-dm-sans",
// });

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
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable} ${nunitoSans.variable} ${nunito.variable} `}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

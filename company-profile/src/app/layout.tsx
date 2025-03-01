import type { Metadata } from "next";
import { Geist, Geist_Mono, } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Company Profile | Me",
    template: "Company Profile | %s"
  },
  description: "Generated by create next app",
  openGraph: {
    url:"", //contoh isi url itu dari vercel + (vercel/file.svg) -> ukuran gambar memiliki aturan
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

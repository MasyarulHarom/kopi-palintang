import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Palintang Kopi",
  description: "Palintang Kopi adalah rumah kopi di lereng Gunung Manglayang yang menyajikan kopi lokal berkualitas tinggi langsung dari kebun. Nikmati cita rasa khas alam pegunungan dan suasana yang tenang di Palintang, tempat terbaik untuk pencinta kopi.",
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
        <div className="flex justify-center items-center w-screen">
        {children}
        </div>
      </body>
    </html>
  );
}

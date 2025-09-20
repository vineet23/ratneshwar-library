import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const noto_sans_devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  display: "swap",
  variable: "--font-noto-sans-devanagari",
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "श्री रत्नेश्वर ग्रंथालय | एक नवीन अध्याय",
  description: "श्री रत्नेश्वर ग्रंथालय | एक नवीन अध्याय",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${noto_sans_devanagari.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

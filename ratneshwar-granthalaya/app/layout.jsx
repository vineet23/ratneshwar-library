import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

// Configure the fonts using next/font for optimal performance
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const noto_sans_devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-sans-devanagari",
  display: "swap",
});

// Define metadata for the application for better SEO
export const metadata = {
  title: "श्री रत्नेश्वर ग्रंथालय | एक नवीन अध्याय",
  description:
    "श्री रत्नेश्वर ग्रंथालय, कसबा धामणसे येथे आपले स्वागत आहे. आमचा समृद्ध इतिहास, ग्रंथसंपदा आणि उपक्रमांबद्दल अधिक जाणून घ्या.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="mr"
      className={`${inter.variable} ${noto_sans_devanagari.variable} scroll-smooth`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}

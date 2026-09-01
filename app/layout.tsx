/**
 * Root Layout – Wraps every page with fonts, metadata, and global styles.
 * Next.js App Router: layout.tsx is the root shell; children are the current route's page.
 */
import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./globals.css";

/** Google Fonts */
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

/** Poppins for body text */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

/**
 * SEO & social metadata for Arzoo Restaurant.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://arzoo-restaurant.vercel.app"),

  title: {
    default: "Arzoo Restaurant - Authentic Pakistani Food in Lahore",
    template: "%s | Arzoo Restaurant",
  },

  description:
    "Welcome to Arzoo Restaurant in Lahore, Pakistan. Enjoy authentic Pakistani cuisine, traditional flavours, delicious dishes, and a warm dining experience.",

  keywords: [
    "Arzoo Restaurant",
    "Pakistani restaurant",
    "Pakistani food",
    "restaurant in Lahore",
    "Lahore restaurant",
    "Pakistani cuisine",
    "desi food",
    "traditional Pakistani food",
    "halal food",
    "biryani",
    "nihari",
    "karahi",
    "seekh kebab",
    "tikka",
    "restaurant menu",
    "book table",
    "food restaurant",
    "Lahore dining",
  ],

  authors: [
    {
      name: "Arzoo Shahzad",
    },
  ],

  other: {
    "application-name": "Arzoo Restaurant",
    "apple-mobile-web-app-title": "Arzoo Restaurant",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
    "theme-color": "#e5e5e5",
  },

  creator: "Arzoo Shahzad",
  publisher: "Arzoo Shahzad",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://arzoo-restaurant.vercel.app",
    siteName: "Arzoo Restaurant",

    title: "Arzoo Restaurant - Authentic Pakistani Food in Lahore",

    description:
      "Experience authentic Pakistani food at Arzoo Restaurant in Lahore. Discover delicious traditional dishes, rich flavours, and a memorable dining experience.",

    images: [
      {
        url: "/hero/plate.png",
        width: 756,
        height: 682,
        alt: "Arzoo Restaurant - Authentic Pakistani Food",
      },
      {
        url: "/logo.svg",
        width: 90,
        height: 36,
        alt: "Arzoo Restaurant Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Arzoo Restaurant - Authentic Pakistani Food in Lahore",
    description:
      "Enjoy authentic Pakistani cuisine, traditional flavours, and delicious food at Arzoo Restaurant in Lahore, Pakistan.",
    images: ["/hero/plate.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "restaurant",
};

/** Root layout */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" style={{ backgroundColor: "#e5e5e5" }}>
      <body
        className={`${lora.variable} ${poppins.variable}`}
        style={{ backgroundColor: "#e5e5e5" }}
      >
        {children}
      </body>
    </html>
  );
}
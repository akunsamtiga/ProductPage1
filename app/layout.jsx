// app/layout.jsx
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

export const metadata = {
  title: "SkyWings",
  description: "Experience the Magic of Flight",
  keywords: "SkyWings, flight, travel, airline, adventure",
  author: "SkyWings Team",
  openGraph: {
    title: "SkyWings",
    description: "Experience the Magic of Flight",
    url: "https://yourdomain.com",
    siteName: "SkyWings",
    images: [
      {
        url: "/images/plane.png",
        width: 800,
        height: 600,
        alt: "SkyWings Plane",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SkyWings",
    title: "SkyWings",
    description: "Experience the Magic of Flight",
    images: ["/images/plane.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload custom font */}
        <link
          rel="preload"
          href="/fonts/your-custom-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="font-sans bg-white text-gray-900 antialiased">
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <ScrollToTopButton />
        <Analytics />
      </body>
    </html>
  );
}

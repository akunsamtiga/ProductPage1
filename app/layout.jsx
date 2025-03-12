import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

export const metadata = {
  title: "SkyWings",
  description: "Experience the Magic of Flight",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics - Ganti GA_MEASUREMENT_ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className="font-sans">
        <NavBar />
        <main>{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}

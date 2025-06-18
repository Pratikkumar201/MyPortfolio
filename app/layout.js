import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // 👈 Make sure the path is correct

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pratik | Portfolio",
  description: "Pratik Kumar — Application Developer & Machine Learning Engineer",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Pratik | Portfolio",
    description: "Showcasing projects in React, ML, Power BI & more.",
    url: "https://your-portfolio-url.com",
    siteName: "Pratik Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.com/pratik image.jpg",
        width: 1200,
        height: 630,
        alt: "Pratik Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    title: "Pratik | Portfolio",
    description: "Developer & ML Engineer - Portfolio",
    images: ["https://your-portfolio-url.com/pratik image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0F172A] text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

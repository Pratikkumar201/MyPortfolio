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
  description: "Application Developer Portfolio",
  icons: {
    icon: '/favicon.ico', // ✅ points to /public/favicon.ico
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0F172A] text-white`}
      >
        <Navbar /> {/* 👈 This adds your top navigation bar */}
        {children}
      </body>
    </html>
  );
}

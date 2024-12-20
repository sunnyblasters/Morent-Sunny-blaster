import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DesktopNavbar from "./ComponentsApp/header/DesktopNavbar";
import MobileNavbar from "./ComponentsApp/header/MobileNavbar";
import Footer from "./ComponentsApp/footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>

          <DesktopNavbar />
          <MobileNavbar />
          {children}
          <Footer />
        
        </body>
    </html>
  );
}

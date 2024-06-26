import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";

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
    <html lang="en" data-theme="light">
      <body className={inter.className}>
      <div className="flex">
        {/* <div className="ml-3 shadow-md w-72">
          <Sidebar/>
        </div> */}
        <div className=" w-screen pl-10 pr-9 m-auto min-h-screen flex flex-col justify-between">
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </div>
      </body>
    </html>
  );
}

import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import './theme-config.css'
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        
      <Theme appearance="dark" accentColor="iris" >
       
          <NavBar />
          <main className="p-5">{children}</main>
      
        </Theme>
      </body>
    </html>
  );
}

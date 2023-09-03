import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <div className="max-w-3xl mx-auto">
            <Nav />
            {children}
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}

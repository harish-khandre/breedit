import { Oswald } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import Navbar from "./Components/Navbar";

const inter = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "BREEDIT",
  description: "Best pet website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#505f2f" />
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}

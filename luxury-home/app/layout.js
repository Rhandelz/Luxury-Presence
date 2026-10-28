import { Source_Sans_3, Cinzel, Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import "boxicons/css/boxicons.min.css";
import Footer from "./components/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-source-sans",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Marc Metzger | Pahrump Realtor",
  description:
    "Find your place in Pahrump with Marc Metzger of The Ridge Realty Group.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${cinzel.variable} ${inter.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

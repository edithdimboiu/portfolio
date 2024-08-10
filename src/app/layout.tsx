import type { Metadata } from "next";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/global.css";

export const metadata: Metadata = {
  title: "Edith Dîmboiu",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className="flex flex-col min-h-screen">
        <header className="fixed top-0 w-full z-10 bg-orange-50 shadow-md">
          <Navbar />
        </header>
        <main className="flex-grow mt-28 mb-20 p-6 sm:p-16 max-w-screen-xl mx-auto content-center">
          {children}
        </main>
        <footer className="w-full bg-orange-50">
          <Footer />
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Footer from "./components/SocialLinks";
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
    <html lang="en" data-theme="business">
      <body className="flex flex-col h-screen">
        <header className="fixed top-0 w-full shadow-md z-50">
          <Navbar />
        </header>
        <main className="flex-grow mt-28 mb-20 p-6 max-w-screen-xl mx-auto content-center">
          {children}
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { display, body, mono } from "./fonts";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Risa Astari | Children's Book Illustrator",
  description:
    "Portfolio of a children's book illustrator specializing in picture books, character design, and whimsical storytelling through watercolor and digital art.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#f8f4ee" />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="fixed -top-40 left-4 z-[60] px-4 py-2 bg-accent text-white text-sm font-medium rounded-full transition-all duration-300 focus-visible:top-4"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Ward Sacrament Meetings | Planner",
    template: "%s | Ward Sacrament Meetings",
  },
  description: "Ward sacrament meeting planner for organizing meetings, speakers, hymns, and announcements.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Ward Sacrament Meetings | Planner",
    description: "Ward sacrament meeting planner for organizing meetings, speakers, hymns, and announcements.",
    type: "website",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SessionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
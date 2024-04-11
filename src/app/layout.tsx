import "@assets/styles/globals.css";
import { Toaster } from "@/components/ui/Toaster";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dotted",
  description:
    "An AI itinerary generator for travelers based on their preferences. Spend less time planning and more time going",
  icons: [
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    { rel: "icon", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "icon", sizes: "16x16", url: "/favicon-16x16.png" },
  ],
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-alef text-neutral-500 scroll-smooth antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

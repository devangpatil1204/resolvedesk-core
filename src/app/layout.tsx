import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ResolveDesk | Headless AI Ticket Resolution Middleware",
  description: "Autonomous ingestion layer for enterprise support requests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
//@ts-ignore
import "./globals.css"; // Ensure standard global tailwind directives are linked here

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
      <body>{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TAHWUL - Digital Transformation Dashboard",
  description:
    "Auditing System Dashboard for Digital Transformation and Compliance Tracking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

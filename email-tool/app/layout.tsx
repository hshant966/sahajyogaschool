import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahaja Yoga Email Drafter | Smart School Outreach Tool",
  description: "Generate powerful, research-cited outreach emails to school principals in English, Marathi, and Hindi. Free tool by Sahaja Yoga Science.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}

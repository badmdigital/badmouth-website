import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Badmouth Digital — Coming Soon",
  description:
    "We build marketing systems that follow human logic. Not campaigns. Not hacks. Systems. Coming soon.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

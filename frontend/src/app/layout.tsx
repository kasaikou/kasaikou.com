import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import App from "../layout/app";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const font = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const title = "かさい (Kasai Kou): ボカロP/調声屋っぽい/動画師っぽい/プログラマっぽい";
  const description = "かさいに関する公開情報をまとめたサイトです。";
  const siteName = "かさい (Kasai Kou)";

  return (
    <html lang="ja" suppressContentEditableWarning>
      <head>
        <title>{title}</title>
        <link rel="icon" type="image/x-icon" href="/icon.ico" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="og:site_name" content={siteName} />
        <meta name="og:url" content={process.env.PUBLIC_URL} />
        <meta name="og:image" content={`${process.env.PUBLIC_URL}/ogp_cover.jpg`} />
      </head>
      <App
        hostname={process.env.PUBLIC_URL!}
        bodyClassName={cn("min-h-screen bg-background font-sans antialiased", font.variable)}
      >
        {children}
      </App>
    </html>
  );
}

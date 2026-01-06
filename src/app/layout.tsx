import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoLinesJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "藤枝AI整体院 | 慢性腰痛・肩こりの根本改善",
  description: "静岡県藤枝市の慢性痛特化型整体院。AI姿勢分析とオーダーメイド手技で、あなたの痛みの根本原因にアプローチします。初回限定キャンペーン実施中。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoLinesJP.className}>{children}</body>
    </html>
  );
}


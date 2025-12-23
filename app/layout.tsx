import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "개발자 김준수입니다",
  description:
    "직관적이고 깔끔한 화면을 만드는 프론트엔드 개발자 김준수의 포트폴리오",
  generator: "Next.js",
  icons: {
    icon: "/pabicon.png",
    shortcut: "/pabicon.png",
    apple: "/pabicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

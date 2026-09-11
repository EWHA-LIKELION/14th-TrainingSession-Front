import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "멋쟁이사자처럼 게시판",
  description: "Next.js로 만든 게시판",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

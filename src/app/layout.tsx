import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AMIRASLANOV — Web • Mobile • CRM • SaaS под ключ",
  description:
    "Амир Амирасланов — разработка веб-приложений, мобильных приложений, CRM и SaaS под ключ. MVP за 14–21 день. RU / AZ / EN.",
  openGraph: {
    title: "AMIRASLANOV — приложения, которые приносят деньги",
    description:
      "Web • Mobile • CRM • SaaS под ключ. Прототип и смета за 24 часа. Quvex, FoodSavory.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

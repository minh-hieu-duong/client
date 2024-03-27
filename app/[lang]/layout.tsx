import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { i18n } from "@/dictionaries/i18n-config";
import { LocaleEnum } from "@/types/locales";
import { clsx } from "clsx";
import ThemeProvider from "@/providers/ThemeProvider";
import Header from "@/components/layout/Header";
import { getDictionary } from "@/dictionaries/get-dictionary";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: LocaleEnum };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body
        className={clsx(
          inter.variable,
          "flex min-h-screen flex-col transition duration-300"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header lang={params.lang} dictionary={dictionary} />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

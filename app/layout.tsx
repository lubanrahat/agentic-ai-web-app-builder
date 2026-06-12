import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans-custom",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forge - AI App Builder",
  description:
    "Forge is an AI app builder that allows you to create and deploy AI applications with ease. With Forge, you can build AI-powered applications without writing any code. Simply choose your data source, select the AI model you want to use, and let Forge do the rest. Whether you're building a chatbot, a recommendation engine, or a custom AI solution, Forge makes it easy to get started and deploy your application in no time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${sansFont.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <body
          className="antialiased"
          suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main>{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

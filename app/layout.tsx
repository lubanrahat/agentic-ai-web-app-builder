import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
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
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen flex flex-col",
            dmSans.variable,
            lora.variable,
          )}
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

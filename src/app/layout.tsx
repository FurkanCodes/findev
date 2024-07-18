import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import SessionProvider from "@/providers/session-provider";
import { Header } from "../components/header";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";

const inter = Ubuntu({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Findev",
  description: "A place where you can find developers to code with.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader />
            <Header />
            <div className=" ">{children}</div>

            <Toaster />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

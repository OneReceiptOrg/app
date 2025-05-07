import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OneReceipt - Realistic Receipt Generator",
  description:
    "Generate authentic-looking receipts from premium brand templates.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-background/90">
            <Navbar />
            <main className="flex-1 container mx-auto py-10 px-4">{children}</main>
            <footer className="py-8 border-t border-border">
              <div className="container">
                <div className="text-center text-sm text-muted-foreground">
                  <p>&copy; {new Date().getFullYear()} OneReceipt. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

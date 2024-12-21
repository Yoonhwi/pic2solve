import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import localFont from "next/font/local";

const BMJUA = localFont({
  src: [
    {
      path: "../font/BMJUA_ttf.ttf",
      weight: "normal",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Pic2-Solve",
  description:
    "Helping students solve exam or challenging problems through photos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${BMJUA.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

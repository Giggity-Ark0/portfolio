import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import PageTransition from "@/components/PageTransition";
import AtmosphericBackground from "@/components/AtmosphericBackground";
import CursorAtmosphere from "@/components/CursorAtmosphere";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.arko-main-2026.workers.dev"),
  title: {
    default: "Shanit Saha Arko",
    template: "%s | Shanit Saha Arko",
  },
  description:
    "Computer Science & Engineering student passionate about programming, artificial intelligence, quantum computing, and building practical systems with code and hardware.",
  keywords: [
    "Shanit Saha Arko",
    "Computer Science",
    "Programming",
    "C Programming",
    "Arduino",
    "Artificial Intelligence",
    "Quantum Computing",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Shanit Saha Arko" }],
  creator: "Shanit Saha Arko",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.arko-main-2026.workers.dev",
    title: "Shanit Saha Arko",
    description:
      "Computer Science student building practical systems with code, hardware, AI and quantum computing.",
    siteName: "Shanit Saha Arko",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanit Saha Arko",
    description:
      "Computer Science student building practical systems with code, hardware, AI and quantum computing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AtmosphericBackground />
          <CursorAtmosphere />
          <Navbar />
          <main className="flex-1 relative z-10">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

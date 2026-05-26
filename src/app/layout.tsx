
import type { Metadata } from "next";
import { Orbitron, Exo_2 } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { ThemeInitializer } from "@/components/ThemeInitializer";
import GlobalClientEffects from "@/components/GlobalClientEffects";
import { LegalBanner } from "@/components/LegalBanner";
import "./globals.css";
import "../styles/themes.css";
import "../styles/enhanced.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: "900",
});

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["300", "700"],
});

export const metadata: Metadata = {
  title: "Académie Cybersécurité — Apprenez la cybersécurité en français",
  description: "Plateforme gratuite d'apprentissage de la cybersécurité en français. Du débutant à l'expert : modules, labs, quiz et communauté.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${orbitron.variable} ${exo2.variable} font-exo-2 antialiased`}
      >
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeInitializer />
          {children}
          <GlobalClientEffects />
          <LegalBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}

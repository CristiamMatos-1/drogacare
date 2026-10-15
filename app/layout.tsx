import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drogacare | Farmácia de Manipulação",
  description: "Farmácia de manipulação com prescrição, formulações sob medida e atendimento humanizado.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${manrope.variable} antialiased bg-brand-cream text-brand-slate`}>
        {children}
      </body>
    </html>
  );
}

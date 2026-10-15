import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Drogacare | Farmácia de Manipulação",
  description: "Farmácia de manipulação com prescrição, formulações sob medida e atendimento humanizado.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${raleway.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

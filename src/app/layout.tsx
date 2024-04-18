import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vitality",
  description: "Apresentando Vitality: Onde cada movimento é intencional e a energia é contagiante. Bem-vindo a um espaço onde a paixão pela saúde se encontra com a determinação pessoal. Aqui, o ginásio vibra com atividade, e cada pessoa se move com um propósito claro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

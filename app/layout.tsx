import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gustavo Vinicius — Senior Software Engineer",
  description: "Engenheiro de software sênior especializado em backend, arquitetura e evolução de sistemas em produção.",
  openGraph: {
    title: "Gustavo Vinicius — Senior Software Engineer",
    description: "Backend engineering, arquitetura e produtos digitais em produção.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

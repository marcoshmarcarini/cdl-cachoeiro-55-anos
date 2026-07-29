import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";

export const metadata: Metadata = {
  title: "CDL Cachoeiro - 55 Anos",
  description: "Página oficial comemorativa de 55 anos de protagonismo, inovação e desenvolvimento regional da CDL Cachoeiro de Itapemirim.",
  authors: [{ name: "Marcos Henrique Marcarini Junior" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-primary-container text-on-background min-h-screen relative flex flex-col justify-between selection:bg-secondary-brand selection:text-primary-container antialiased">
        {children}
      </body>
    </html>
  );
}

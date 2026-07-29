import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "CMZ Fitness | Equipamentos Profissionais para Academia",
  description: "Importação direta, garantia e suporte técnico para academias em toda a Região Norte.",
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: {
    title: "CMZ Fitness | Equipamentos Profissionais para Academia",
    description: "Há mais de 10 anos equipando academias em toda a Região Norte.",
    images: ["/images/hero-gym.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

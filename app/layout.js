import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Llano Plastic",
  description: "Catalogo llano plasticf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-[calc(100vh-3rem)]">
      <body className={`h-[calc(100vh-3rem)] ${inter.className}`}>{children}</body>
    </html>
  );
}

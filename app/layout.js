import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Llano Plastic",
  description: "Catalogo llano plasticf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full">
      <body className={`h-full ${inter.className}`}>{children}</body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Llano Plast || HM",
  description: "Catalogo llano plast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-[calc(100vh-3rem)]">
      <Head>
        <link rel="icon" href="/favcn.ico" sizes="any" />
      </Head>
      <body className={`h-[calc(100vh-3rem)] ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}

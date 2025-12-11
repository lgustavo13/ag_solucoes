import { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { ScrollToTopButton } from "../components/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "A G Soluções",
    template: "A G Soluções | %s",
  },
  description: "Site profissional de terceirização de folha de pagamento",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} ${playfair.variable} bg-slate-50 text-slate-800`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="grow pt-20">{children}</main>
          <Footer />
          <ScrollToTopButton />
          {/* <Assistant /> */}
        </div>
      </body>
    </html>
  );
}

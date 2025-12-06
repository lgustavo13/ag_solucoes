"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuHamburguer } from "./MenuHamburguer";
import { MenuHamburguerContent } from "./MenuHamburguerContent";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="shrink-0 flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={50} height={50} />
              <span className="font-bold text-xl text-slate-800 tracking-tight max-md:flex max-md:flex-col max-md:text-base">
                A. G.
                <span className="text-company-primary">
                  {" "}
                  Soluções Administrativas
                </span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-company-primary border-b-2 border-company-primary pb-1"
                    : "text-slate-600 hover:text-company-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contato"
              className="bg-company-primary hover:bg-company-primary-foreground text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-company-primary-foreground/25"
            >
              Agendar Consultoria
            </Link>
          </div>

          <MenuHamburguer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      {isOpen && (
        <MenuHamburguerContent
          navigation={navigation}
          setIsOpen={setIsOpen}
          isActive={isActive}
        />
      )}
    </nav>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import MenuHamburguer from "./menuHamburguer";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = [
    { label: "Serviços", href: "#services" },
    { label: "Sobre Nós", href: "#about" },
    { label: "Contato", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-800">
            <Link href="#home">
              Contábil<span className="text-emerald-500">.</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-emerald-500 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="hidden md:inline-block bg-emerald-500 text-white px-5 py-2 rounded-full hover:bg-emerald-600 transition-colors font-semibold shadow-sm"
          >
            Fale Conosco
          </Link>
          <div className="md:hidden">
            <MenuHamburguer />
          </div>
        </div>
      </div>
    </header>
  );
};

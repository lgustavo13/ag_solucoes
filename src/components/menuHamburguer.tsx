"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";

const MenuHamburguer = () => {
  const links = [
    {
      href: "#home",
      label: "Inicio",
    },
    {
      href: "#services",
      label: "Serviços",
    },
    {
      href: "#about",
      label: "Sobre Nós",
    },
    {
      href: "#contact",
      label: "Contato",
    },
  ];

  return (
    <div className="flex justify-between border-b border-solid px-8 py-4 hover:cursor-pointer md:hidden">
      <Sheet>
        <SheetTrigger className="hover:cursor-pointer">
          <Menu />
        </SheetTrigger>
        <SheetContent side="right" className="w-[200px]">
          <SheetHeader>
            <SheetTitle className="font-bold text-slate-800">
              Contábil<span className="text-emerald-500">.</span>
            </SheetTitle>
          </SheetHeader>
          <div className="mt-10 flex flex-col gap-2 px-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-emerald-500 transition-colors font-medium target:text-emerald-500"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuHamburguer;

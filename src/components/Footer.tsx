import React from "react";
import { Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  const socialLinks = [
    { href: "/", icon: <Facebook size={20} /> },
    { href: "/", icon: <Instagram size={20} /> },
    { href: "/", icon: <Linkedin size={20} /> },
  ];

  const quickLinks = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre Nós" },
    { href: "/servicos", label: "Nossos Serviços" },
    { href: "/contato", label: "Fale Conosco" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold font-serif">
              A. G. Soluções Administrativas
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Cuidando da saúde financeira da sua empresa com ética,
              transparência e dedicação.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:text-company-primary transition-colors"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-company-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-company-primary shrink-0" />
                <span className="text-sm">(19) 99775-5755</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-company-primary shrink-0" />
                <span className="text-sm">contato@ag-solucoes.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} A. G. Soluções Administrativas.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

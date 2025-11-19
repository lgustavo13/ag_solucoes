import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold font-serif">
              Contabilidade Confiança
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Cuidando da saúde financeira da sua empresa com ética,
              transparência e dedicação há mais de 20 anos.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-emerald-400 transition-colors text-sm"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-emerald-400 transition-colors text-sm"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="hover:text-emerald-400 transition-colors text-sm"
                >
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-emerald-400 transition-colors text-sm"
                >
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-emerald-500 shrink-0" />
                <span className="text-sm">
                  Av. Paulista, 1000 - Bela Vista
                  <br />
                  São Paulo - SP, 01310-100
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-500 shrink-0" />
                <span className="text-sm">(11) 99999-8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-500 shrink-0" />
                <span className="text-sm">
                  contato@contabilidadeconfianca.com.br
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Contabilidade Confiança. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

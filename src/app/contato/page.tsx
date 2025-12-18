import { Mail, Phone } from "lucide-react";
import { Metadata } from "next";
import { ContactForm } from "@/src/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fale Conosco",
};

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Fale Conosco</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Estamos prontos para atender você. Preencha o formulário ou utilize
            nossos canais de atendimento.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-company-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Telefone / WhatsApp
                    </p>
                    <p className="text-slate-600">(19) 99775-5755</p>
                    <p className="text-slate-500 text-sm">
                      Seg-Sex: 08h às 18h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-company-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <Link
                      href="mailto:diretoria@agsolucoesadm.com.br"
                      className="text-slate-600 hover:text-company-primary transition-colors"
                    >
                      diretoria@agsolucoesadm.com.br
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Envie uma Mensagem
            </h2>
            <p className="text-slate-500 mb-8 text-sm">
              Preencha os dados abaixo para ser atendido via WhatsApp pelo nosso
              time.
            </p>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

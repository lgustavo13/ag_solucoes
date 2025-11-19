"use client";

import React, { useEffect } from "react";
import {
  FileText,
  Briefcase,
  Users,
  BarChart3,
  Landmark,
  Stamp,
} from "lucide-react";
import Link from "next/link";

const Services: React.FC = () => {
  useEffect(() => {
    document.title = "Contabilidade Confiança | Serviços";
  }, []);

  const servicesList = [
    {
      icon: <Briefcase size={32} />,
      title: "Abertura e Legalização",
      description:
        "Processo completo de abertura, alteração e encerramento de empresas. Cuidamos de toda a burocracia junto aos órgãos públicos.",
      features: [
        "Consulta de viabilidade",
        "Contrato Social",
        "Alvarás e Licenças",
        "CNPJ e Inscrições",
      ],
    },
    {
      icon: <FileText size={32} />,
      title: "Contabilidade Fiscal",
      description:
        "Escrituração fiscal completa, apuração de impostos e entrega de obrigações acessórias, garantindo conformidade tributária.",
      features: [
        "Apuração de ICMS, IPI, ISS",
        "Simples Nacional, Lucro Presumido e Real",
        "SPED Fiscal",
        "Planejamento Tributário",
      ],
    },
    {
      icon: <Users size={32} />,
      title: "Departamento Pessoal",
      description:
        "Gestão completa da folha de pagamento e rotinas trabalhistas, assegurando os direitos da empresa e dos colaboradores.",
      features: [
        "Folha de Pagamento",
        "Admissões e Rescisões",
        "eSocial",
        "Controle de Férias",
      ],
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Consultoria Financeira",
      description:
        "Análise detalhada da saúde financeira do seu negócio para auxiliar na tomada de decisões estratégicas.",
      features: [
        "Fluxo de Caixa",
        "Balanços e Balancetes",
        "Análise de Indicadores",
        "Relatórios Gerenciais",
      ],
    },
    {
      icon: <Stamp size={32} />,
      title: "Regularização de Pendências",
      description:
        "Levantamento de débitos e regularização de empresas inaptas ou com pendências na Receita Federal.",
      features: [
        "Parcelamentos",
        "Certidões Negativas",
        "Regularização de CPF/CNPJ",
        "Baixa de Débitos",
      ],
    },
    {
      icon: <Landmark size={32} />,
      title: "Imposto de Renda (PF)",
      description:
        "Assessoria especializada para declaração de imposto de renda pessoa física, evitando malha fina.",
      features: [
        "Declaração Anual",
        "Carnê-Leão",
        "Ganhos de Capital",
        "Regularização de CPF",
      ],
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">
            Nossos Serviços
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Soluções integradas para cada etapa do seu negócio.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-slate-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-slate-500"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="mt-20 bg-emerald-600 rounded-2xl p-10 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Não encontrou o que procura?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco. Desenvolvemos soluções personalizadas de
            acordo com a necessidade do seu negócio.
          </p>
          <Link
            href="/contato"
            className="inline-block bg-white text-emerald-700 font-bold px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors shadow-md"
          >
            Fale Conosco Agora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;

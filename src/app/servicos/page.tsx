"use client";

import React, { useEffect } from "react";
import {
  UserPlus,
  Banknote,
  Receipt,
  Calendar,
  Globe,
  Home,
  Store,
  FileCheck,
} from "lucide-react";
import Link from "next/link";

const Services: React.FC = () => {
  useEffect(() => {
    document.title = "Contabilidade Confiança | Serviços";
  }, []);

  const servicesList = [
    {
      icon: <UserPlus size={32} />,
      title: "Admissão e Rescisão",
      description:
        "Gestão completa da entrada e saída de colaboradores, garantindo documentação correta e cálculos precisos para segurança jurídica",
      features: [
        "Contratos de Trabalho",
        "Cálculo de Verbas Rescisórias",
        "Registro no eSocial",
        "Guias e Documentação",
      ],
    },
    {
      icon: <Calendar size={32} />,
      title: "Gestão de Férias",
      description:
        "Controle rigoroso de períodos aquisitivos e concessivos, com cálculos exatos e programação de escalas para evitar multas.",
      features: [
        "Controle de Vencimentos",
        "Cálculos e Emissão de Recibos",
        "Gestão de Abono Pecuniário",
        "Programação de Escalas",
      ],
    },
    {
      icon: <Globe size={32} />,
      title: "Elaboração e Envio do eSocial",
      description:
        "Monitoramento e transmissão de eventos periódicos, assegurando que sua empresa cumpra as exigências digitais do governo.",
      features: [
        "Transmissão de Eventos (Periódicos e Não Periódicos)",
        "Gestão de DCTFWeb",
        "Monitoramento de SST (Saúde e Segurança do Trabalho)",
        "Auditoria de Dados Cadastrais",
      ],
    },
    {
      icon: <Home size={32} />,
      title: "Folha de Domésticos",
      description:
        "Assessoria especializada para empregadores domésticos, cuidando de toda a burocracia mensal e obrigações trabalhistas.",
      features: [
        "Gestão Mensal do eSocial Doméstico",
        "Cálculos Trabalhistas Complexos",
        "Recibos de Pagamento (Holerites)",
        "Férias e 13º Salário",
      ],
    },
    {
      icon: <Store size={32} />,
      title: "Assessorias para MEI",
      description:
        "Suporte total para o Microempreendedor Individual crescer com segurança, mantendo o CNPJ regular e os impostos em dia.",
      features: [
        "Declaração Anual (DASN-SIMEI)",
        "Controle do Limite de Faturamento",
        "Emissão de Notas Fiscais",
        "Regularização e Parcelamento",
      ],
    },
    {
      icon: <FileCheck size={32} />,
      title: "Suporte em Obrigações Anuais (DIRF, RAIS, CAGED)",
      description:
        "Garantimos a conformidade total com a entrega rigorosa das declarações anuais, cruzando dados para evitar malha fina.",
      features: [
        "Elaboração e Envio da DIRF",
        "Gestão de RAIS (e sua substituição)",
        "Emissão de Informes de Rendimentos",
        "Auditoria de Cruzamento de Dados",
      ],
    },
    {
      icon: <Banknote size={32} />,
      title: "Fechamento de Folha",
      description:
        "Processamento rigoroso da remuneração, assegurando a exatidão dos pagamentos e o cumprimento dos prazos legais.",
      features: [
        "Cálculo de Proventos",
        "Apuração de Horas Extras",
        "Emissão de Holerites",
        "Relatórios Gerenciais",
      ],
    },
    {
      icon: <Receipt size={32} />,
      title: "Geração de Guias",
      description:
        "Gestão completa dos encargos trabalhistas, garantindo que sua empresa recolha os tributos corretamente (INSS, FGTS, IRRF).",
      features: [
        "DARF Previdenciário",
        "FGTS Digital",
        "Retenção de IRRF",
        "Controle de Vencimentos",
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

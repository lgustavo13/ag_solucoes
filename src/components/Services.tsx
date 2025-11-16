import React from "react";
import {
  TaxIcon,
  BusinessIcon,
  ConsultingIcon,
  PayrollIcon,
} from "./icons/ServiceIcons";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="text-emerald-500 mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

export const Services = () => {
  const servicesData = [
    {
      icon: <TaxIcon />,
      title: "Imposto de Renda",
      description:
        "Assessoria completa para declaração de Imposto de Renda de Pessoas Físicas e Jurídicas, garantindo conformidade e otimização fiscal.",
    },
    {
      icon: <BusinessIcon />,
      title: "Abertura de Empresas",
      description:
        "Cuidamos de toda a burocracia para a abertura e legalização da sua empresa, desde o CNPJ até os alvarás necessários.",
    },
    {
      icon: <ConsultingIcon />,
      title: "Consultoria Financeira",
      description:
        "Análise e planejamento financeiro estratégico para auxiliar na tomada de decisões e na saúde financeira do seu negócio.",
    },
    {
      icon: <PayrollIcon />,
      title: "Gestão de Pessoal",
      description:
        "Serviços completos de departamento pessoal, incluindo folha de pagamento, encargos trabalhistas e conformidade com o eSocial.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900">
            Nossos Serviços
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Soluções inteligentes e personalizadas para cada fase do seu
            negócio.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

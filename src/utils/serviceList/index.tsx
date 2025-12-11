import {
  Banknote,
  Calendar,
  FileCheck,
  Globe,
  Home,
  Receipt,
  Store,
  UserPlus,
} from "lucide-react";

export const servicesList = [
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

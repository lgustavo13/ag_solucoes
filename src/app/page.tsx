import { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A G Soluções | Início",
};

const Home = () => {
  const valueProps = [
    {
      title: "Segurança e Ética",
      description:
        "Processos transparentes, sigilo absoluto e total conformidade com a legislação. Sua empresa sempre protegida.",
      iconColor:
        "bg-emerald-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-emerald-600",
      icon: <Shield size={28} />,
    },
    {
      title: "Foco em Resultados",
      description:
        "Precisão, agilidade e redução de erros. Uma folha de pagamento eficiente que gera economia e confiança.",
      iconColor:
        "bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-blue-600",
      icon: <TrendingUp size={28} />,
    },
    {
      title: "Atendimento Humanizado",
      description:
        "Suporte próximo, claro e direto com quem realmente resolve. Atendimento personalizado para cada cliente.",
      iconColor:
        "bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-purple-600",
      icon: <Users size={28} />,
    },
  ];

  return (
    <div className="w-full">
      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight">
            Terceirização de Folha de Pagamento com
            <br />{" "}
            <span className="text-company-primary">
              Segurança, Agilidade e Zero Erros
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
            Cuidamos de toda a sua folha para que você foque no crescimento do
            seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contato"
              className="bg-company-primary hover:bg-company-primary-foreground text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-company-primary-foreground/25 flex items-center gap-2 justify-center"
            >
              Entre em contato <ArrowRight size={20} />
            </Link>
            <Link
              href="/servicos"
              className="bg-transparent border border-slate-600 hover:border-white text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all justify-center flex"
            >
              Conheça nossos Serviços
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-company-primary font-semibold text-sm tracking-wider uppercase">
              Nossos Diferenciais
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 font-serif">
              Por que escolher a A. G. Soluções?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {valueProps.map((valueProp, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={valueProp.iconColor}>{valueProp.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {valueProp.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {valueProp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-200 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
              alt="Equipe trabalhando"
              className="relative rounded-2xl shadow-2xl z-10 w-full"
              width={1000}
              height={1000}
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-6">
              Soluções completas para <br />
              todos os portes de empresa
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Seja você um MEI que está começando ou uma grande empresa que
              precisa de auditoria, temos a expertise necessária. Simplificamos
              a burocracia para você voar mais alto.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              A gestão da folha de pagamento exige precisão, atualização
              constante das leis trabalhistas e alto nível de responsabilidade.
              Ao terceirizar, sua empresa reduz custos, evita erros, ganha tempo
              e garante conformidade total com a legislação.
            </p>

            <ul className="space-y-4">
              {[
                "Admissão e Rescisão",
                "Gestão de Férias",
                "Elaboração e Envio do eSocial",
                "Assessorias para MEI",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-slate-700 font-medium"
                >
                  <CheckCircle2 className="text-company-primary" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="/servicos"
                className="text-company-primary font-semibold hover:text-company-primary-foreground flex items-center gap-2"
              >
                Ver todos os serviços <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

"use client";

import React, { useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Contabilidade Confiança | Início";
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">
            Excelência Contábil para o <br />{" "}
            <span className="text-emerald-400">Crescimento do seu Negócio</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
            Mais que números, entregamos soluções estratégicas para você focar
            no que realmente importa: o sucesso da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contato"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2 justify-center"
            >
              Fale com um Especialista <ArrowRight size={20} />
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

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">
              Nossos Diferenciais
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 font-serif">
              Por que escolher a Contabilidade Confiança?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-emerald-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Segurança e Ética
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Garantimos total sigilo e conformidade com as legislações
                vigentes, protegendo o patrimônio da sua empresa.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Foco em Resultados
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Não apenas entregamos guias de impostos, mas analisamos seus
                dados para sugerir melhorias financeiras.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Atendimento Humanizado
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Uma equipe familiar e dedicada, pronta para ouvir suas demandas
                e explicar tudo sem &quot;contabilês&quot;.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featurette */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-200 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
              alt="Equipe trabalhando"
              className="relative rounded-2xl shadow-2xl z-10"
              width={0}
              height={0}
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

            <ul className="space-y-4">
              {[
                "Abertura e Legalização de Empresas",
                "Gestão Tributária e Fiscal",
                "Departamento Pessoal e RH",
                "Consultoria Financeira",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-slate-700 font-medium"
                >
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="/servicos"
                className="text-emerald-700 font-semibold hover:text-emerald-800 flex items-center gap-2"
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

"use client";

import Image from "next/image";
import React, { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {
    document.title = "Contabilidade Confiança | Sobre Nós";
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Sobre Nós</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Conheça a história por trás da Contabilidade Confiança e nossa
            missão de transformar números em oportunidades.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 space-y-6 text-slate-600 leading-relaxed text-lg">
            <h2 className="text-3xl font-bold text-slate-900 font-serif">
              Nossa História
            </h2>
            <p>
              A <strong>Contabilidade Confiança</strong> nasceu de um sonho e
              muita dedicação. Fundada há mais de 20 anos pela Contadora Maria
              Silva (nome fictício para exemplo), a empresa começou em um
              pequeno escritório no centro da cidade, com o objetivo de oferecer
              um serviço contábil que fosse, acima de tudo, humano e acessível.
            </p>
            <p>
              Ao longo das décadas, crescemos junto com nossos clientes. Vimos
              pequenas empresas se tornarem grandes corporações e ajudamos
              famílias a organizarem seus patrimônios.
            </p>
            <p>
              Hoje, combinamos a tradição e a experiência de anos de mercado com
              as mais modernas ferramentas tecnológicas, garantindo agilidade
              sem perder o &quot;olho no olho&quot; que sempre foi nossa marca
              registrada.
            </p>

            <div className="pt-6 border-l-4 border-emerald-500 pl-6 italic text-slate-700 bg-slate-50 py-4 pr-4 rounded-r-lg">
              &quot;A contabilidade é a linguagem dos negócios, e nós estamos
              aqui para ser o seu tradutor.&quot;
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
              alt="Fundadora"
              className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
              width={0}
              height={0}
            />
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600"
              alt="Escritório Moderno"
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
              width={0}
              height={0}
            />
          </div>
        </div>

        {/* Mission/Vision/Values */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-xl border-t-4 border-emerald-500 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Missão</h3>
            <p className="text-slate-600">
              Prover soluções contábeis de excelência, facilitando a gestão
              empresarial e contribuindo para o sucesso sustentável de nossos
              clientes.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl border-t-4 border-blue-500 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Visão</h3>
            <p className="text-slate-600">
              Ser referência regional em assessoria contábil, reconhecida pela
              confiabilidade, inovação e qualidade no atendimento.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl border-t-4 border-purple-500 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Valores</h3>
            <ul className="text-slate-600 list-disc list-inside space-y-2">
              <li>Ética Profissional</li>
              <li>Transparência Total</li>
              <li>Comprometimento</li>
              <li>Melhoria Contínua</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

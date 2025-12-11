import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre Nós",
};

const About = () => {
  return (
    <div className="bg-white">
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Sobre Nós</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Conheça a história por trás da A. G. Soluções e nossa missão de
            transformar números em oportunidades.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 space-y-6 text-slate-600 leading-relaxed text-lg">
            <h2 className="text-3xl font-bold text-slate-900 font-serif">
              Nossa História
            </h2>
            <p>
              A <strong>A. G. Soluções Administrativas</strong> nasceu de um
              sonho e muita dedicação. Com mais de 20 anos de experiência na
              área de Departamento Pessoal e Gestão de Folha de Pagamento, nosso
              escritório foi criado com o propósito de oferecer{" "}
              <strong>terceirização completa, segura e 100% online.</strong>{" "}
              Atuamos com tecnologia, expertise e atenção aos detalhes para
              garantir que sua empresa cumpra todas as obrigações trabalhistas,
              evitando riscos, retrabalhos e custos desnecessários.
            </p>
            <p>
              Somos especialistas em fechamento de folha de pagamento,
              admissões, rescisões, eSocial, cálculo de encargos e rotinas
              trabalhistas em geral. Atendemos empresas de todos os portes,
              entregando um serviço ágil, organizado e totalmente digital.
            </p>

            <div className="pt-6 border-l-4 border-company-primary pl-6 italic text-slate-700 bg-slate-50 py-4 pr-4 rounded-r-lg">
              &quot;Sua folha de pagamento sem erros, sem atrasos e com total
              conformidade legal.&quot;
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
              alt="Fundadora"
              className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
              width={1000}
              height={1000}
            />
            <Image
              src="/atendendo-cliente.jpg"
              alt="Escritório Moderno"
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-xl border-t-4 border-emerald-500 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Missão</h3>
            <p className="text-slate-600">
              Terceirizamos a sua folha de pagamento, facilitando a gestão
              empresarial e contribuindo para o sucesso sustentável de nossos
              clientes.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl border-t-4 border-blue-500 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Visão</h3>
            <p className="text-slate-600">
              Ser referência regional em terceirização de folha de pagamento,
              reconhecida pela confiabilidade, inovação e qualidade no
              atendimento.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl border-t-4 border-purple-500 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Valores</h3>
            <ul className="text-slate-600 list-disc list-inside space-y-1">
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

import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto">
        <Card className="grid md:grid-cols-2 gap-12 items-center px-5">
          <div>
            <Image
              src="https://picsum.photos/800/600?grayscale"
              alt="Equipe de contabilidade"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
              width={0}
              height={0}
            />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Sobre Nós
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Com mais de 20 anos de experiência, nossa missão é simplificar a
              contabilidade para empreendedores e empresas, oferecendo um
              serviço pautado na ética, transparência e compromisso com os
              resultados de nossos clientes.
            </p>
            <p className="text-slate-600 mb-8">
              Acreditamos que uma boa gestão contábil é o pilar para o
              crescimento sustentável. Por isso, atuamos como parceiros
              estratégicos, dedicados a entender as particularidades de cada
              negócio e a oferecer as melhores soluções.
            </p>
            <Link
              href="#contact"
              className="bg-slate-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-900 transition-colors"
            >
              Entre em Contato
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
};

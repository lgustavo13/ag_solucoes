"use client";

import Link from "next/link";

export const ContactUs = () => {
  return (
    <div className="mt-20 bg-company-primary rounded-2xl p-10 text-center text-white shadow-2xl">
      <h2 className="text-3xl font-bold font-serif mb-4">
        Não encontrou o que procura?
      </h2>
      <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
        Entre em contato conosco. Desenvolvemos soluções personalizadas de
        acordo com a necessidade do seu negócio.
      </p>
      <Link
        href="/contato"
        className="inline-block bg-white text-company-primary font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-md"
      >
        Fale Conosco Agora
      </Link>
    </div>
  );
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-white pt-20 pb-20 md:pt-32 md:pb-32"
    >
      <div className="absolute inset-0 bg-slate-50 opacity-50"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
          Contabilidade de Confiança para o{" "}
          <span className="text-emerald-500">Sucesso do Seu Negócio</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          Oferecemos soluções contábeis completas e personalizadas para que você
          possa focar no crescimento da sua empresa.
        </p>
        <a
          href="#services"
          className="bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-600 transition-transform transform hover:scale-105 shadow-lg"
        >
          Nossos Serviços
        </a>
      </div>
    </section>
  );
};

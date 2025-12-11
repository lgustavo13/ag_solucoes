import { ContactUs } from "@/src/components/ContactUs";
import { Metadata } from "next";
import { servicesList } from "@/src/utils/serviceList";

export const metadata: Metadata = {
  title: "Serviços",
};

const Services = () => {
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
              <div className="bg-slate-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-slate-700 group-hover:bg-company-primary group-hover:text-white transition-colors">
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
                    <span className="w-1.5 h-1.5 bg-company-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <ContactUs />
      </div>
    </div>
  );
};

export default Services;

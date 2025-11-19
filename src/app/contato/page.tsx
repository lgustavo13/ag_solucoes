"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Image from "next/image";

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contabilidade Confiança | Fale Conosco";
  }, []);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormState({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Fale Conosco</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Estamos prontos para atender você. Preencha o formulário ou utilize
            nossos canais de atendimento.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map Placeholder */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Telefone / WhatsApp
                    </p>
                    <p className="text-slate-600">(11) 99999-8888</p>
                    <p className="text-slate-500 text-sm">
                      Seg-Sex: 08h às 18h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <p className="text-slate-600">
                      contato@contabilidadeconfianca.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Endereço</p>
                    <p className="text-slate-600">
                      Av. Paulista, 1000, Conj. 102
                    </p>
                    <p className="text-slate-600">Bela Vista - São Paulo, SP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mock Map */}
            <div className="bg-slate-200 w-full h-64 rounded-2xl overflow-hidden relative shadow-inner">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000"
                className="w-full h-full object-cover opacity-60"
                alt="Mapa"
                width={0}
                height={0}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-4 py-2 rounded-lg shadow text-sm font-semibold text-slate-700">
                  Mapa da localização
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Envie uma Mensagem
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                  placeholder="Como podemos ajudar sua empresa?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

"use client";

import React, { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend server.
    // For this example, we'll just simulate a success message.
    setFormStatus(
      "Mensagem enviada com sucesso! Entraremos em contato em breve."
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setFormStatus(""), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900">
            Fale Conosco
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Tem alguma dúvida ou precisa de um orçamento? Preencha o formulário
            abaixo.
          </p>
        </div>
        <Card className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
          {formStatus && (
            <div className="mb-6 p-4 text-center text-sm text-emerald-800 bg-emerald-100 rounded-lg">
              {formStatus}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Seu Melhor E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 transition"
              ></textarea>
            </div>
            <div className="text-center">
              <Button
                size="lg"
                type="submit"
                className="bg-emerald-500 text-white px-10 py-3 rounded-full font-bold text-lg hover:bg-emerald-600 transition-all transform hover:scale-105 shadow-md"
              >
                Enviar Mensagem
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

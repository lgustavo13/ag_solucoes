"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { formatPhone } from "../utils/formatPhone";
import { useState } from "react";

export const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const style = {
    input:
      "px-4 py-3 rounded-lg border border-slate-300 focus:border-company-primary focus:ring-2 focus:ring-company-primary outline-none transition-all",
    label: "text-sm font-medium text-slate-700 mb-2",
    button:
      "w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2 hover:cursor-pointer",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const companyPhone = "5519997755755";

    const text = `
*Olá! Vim através do site e gostaria de um atendimento.*

*Nome:* ${formState.name}
*Email:* ${formState.email}
*Telefone:* ${formState.phone}

*Mensagem:*
${formState.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${companyPhone}?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappUrl, "_blank");

    setFormState({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value = e.target.value;

    if (e.target.name === "phone") {
      value = formatPhone(value);
    }

    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className={style.label}>
          Nome Completo
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          value={formState.name}
          onChange={handleChange}
          className={style.input}
          placeholder="Seu nome"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email" className={style.label}>
            Email
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            value={formState.email}
            onChange={handleChange}
            className={style.input}
            placeholder="seu@email.com"
          />
        </div>
        <div>
          <Label htmlFor="phone" className={style.label}>
            Telefone
          </Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            className={style.input}
            placeholder="(00) 00000-0000"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="message" className={style.label}>
          Mensagem
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formState.message}
          onChange={handleChange}
          className={style.input}
          placeholder="Como podemos ajudar sua empresa?"
        ></Textarea>
      </div>

      <Button size="lg" type="submit" className={style.button}>
        <MessageCircle size={20} />
        Iniciar Conversa no WhatsApp
      </Button>
    </form>
  );
};

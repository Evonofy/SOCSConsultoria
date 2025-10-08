/*
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
*/

import { useState, useEffect } from "react";
import { Wrench, Mail, Linkedin } from "lucide-react";

const Index = () => {
  /*  <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Values />
      <Portfolio />
      <Contact />
      <Footer />
    </div> 
*/

  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-50 animate-pulse"></div>
            <Wrench
              className="w-24 h-24 text-purple-400 relative animate-bounce"
              strokeWidth={1.5}
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Em Construção
        </h1>

        <p className="text-xl md:text-2xl text-purple-200 mb-8">
          Estamos trabalhando em algo incrível{dots}
        </p>

        <p className="text-slate-300 mb-12 max-w-md mx-auto">
          Nosso site está passando por uma renovação. Em breve estaremos de
          volta com uma experiência ainda melhor!
        </p>

        <div className="max-w-md mx-auto mb-12">
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"
              style={{ width: "65%" }}
            ></div>
          </div>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="mailto:contato@socsconsultoria.com.br"
            className="text-slate-400 hover:text-purple-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://br.linkedin.com/company/socs-consultoria"
            className="text-slate-400 hover:text-purple-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Footer */}
        <p className="text-slate-200 text-sm">
          © 2025 SOCS Consultoria. Todos os direitos reservados
        </p>
      </div>
    </div>
  );
};

export default Index;

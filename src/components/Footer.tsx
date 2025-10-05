import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-row flex-wrap gap-8 items-center justify-around md:justify-between pb-8">
          <a href="">
            <img className="size-[5rem]" alt="" src="/NewLogo.png" />
          </a>

          <p className="text-white/80 mb-4">
            Excelência em Governança Corporativa
            <br />
            Rua José R. Aguiar, 201, sala 302
            <br />
            S.J.Pinhais, Curitiba - PR
          </p>
          <div className="space-y-2 text-sm text-white/80">
            <div>
              <strong>Telefone:</strong>
              <p>+55 (41) 99877-77</p>
            </div>
            <div>
              <strong>E-mail:</strong>
              <p>contato@socsconsultoria.com.br</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} SOCS Consultoria - 19.362.526/0001-40.
            Todos Direitos Reservados
          </p>

          <p className="text-sm text-white/60">
            Feito por{" "}
            <a href="https://github.com/ThiagoThalisson">Thiago Thalisson</a>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/socs-consultoria/?originalSubdomain=br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contato@socsconsultoria.com.br"
              className="hover:text-white/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

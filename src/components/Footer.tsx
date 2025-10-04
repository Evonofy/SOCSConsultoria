import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Socs Consultoria</h3>
            <p className="text-white/80 mb-4">
              Excelência em Governança Corporativa<br />
              Rua José R. Aguiar, 201, sala 302<br />
              S.J.Pinhais, Curitiba - PR
            </p>
            <div className="space-y-2 text-sm text-white/80">
              <p><strong>Telefone:</strong> +55 (41) 99877-77</p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:contato@socsconsultoria.com.br" className="hover:text-white transition-colors">
                  contato@socsconsultoria.com.br
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Receba novidades e insights sobre governança corporativa
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Seu email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button variant="secondary">
                Assinar
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Socs Consultoria. All Rights Reserved
          </p>
          
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contato@socsconsultoria.com.br" className="hover:text-white/80 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

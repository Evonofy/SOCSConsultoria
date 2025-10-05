import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <a href="">
              <img className="size-[2rem]" alt="" src="/NewLogo.png" />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="#sobre"
              className="text-sm hover:text-primary transition-colors"
            >
              Sobre
            </a>
            <a
              href="#portfolio"
              className="text-sm hover:text-primary transition-colors"
            >
              Portfólio
            </a>
            <a
              href="#contato"
              className="text-sm hover:text-primary transition-colors"
            >
              Contato
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+551199095834"
              className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              (11) 9909-5834
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/socs-consultoria/?originalSubdomain=br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

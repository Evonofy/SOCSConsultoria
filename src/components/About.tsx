import { Building2, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
              alt="Equipe SOCS Consultoria"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Sobre
            </h2>
            
            <Card className="mb-6 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">FOCO</h3>
                    <p className="text-muted-foreground">
                      Atuação em empresas de diversos segmentos e tamanhos. Temos com foco a busca pelos melhores resultados dos nossos clientes, diferenciando suas marcas através de diretrizes, análises e práticas operacionais.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      As empresas estão oficialmente sujeitas às variáveis não previsíveis no cenário de negócios. Você já avaliou a exposição da sua organização? É com base nesse que organizamos nossos projetos e construímos soluções para as exposições ao risco, vulnerabilidades e problemas já existentes no cenário de negócios, baseados na cultura de seu negócio que podem ser aperfeiçoados.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

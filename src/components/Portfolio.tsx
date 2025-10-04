import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Portfolio = () => {
  const services = [
    {
      title: "Governança Corporativa e Compliance",
      items: [
        "Estruturação de modelos de governança",
        "Criação e revisão de políticas corporativas",
        "Implementação de programas de compliance",
        "Auditoria interna e controles",
        "Gestão de riscos corporativos"
      ]
    },
    {
      title: "Riscos Corporativos",
      items: [
        "Mapeamento e análise de riscos",
        "Planejamento estratégico de mitigação",
        "Análise de cenários e impactos",
        "Gestão de crises empresariais",
        "Monitoramento contínuo"
      ]
    },
    {
      title: "Controles Internos",
      items: [
        "Desenho e implementação de controles",
        "Avaliação de processos críticos",
        "Adequação às normas regulatórias",
        "Capacitação de equipes",
        "Otimização de processos"
      ]
    },
    {
      title: "Business Plan",
      items: [
        "Planejamento estratégico de negócios",
        "Análise de viabilidade financeira",
        "Modelagem de negócios",
        "Planos de expansão e crescimento",
        "Avaliação de empresas (valuation)"
      ]
    },
    {
      title: "Consultoria Contábil",
      items: [
        "Planejamento Contábil e Tributário",
        "Análise de demonstrações financeiras",
        "Elaboração de relatórios gerenciais",
        "Adequação às normas contábeis",
        "Capacitação de equipes contábeis"
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nosso Portfólio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em gestão empresarial, adaptadas às necessidades específicas de cada cliente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

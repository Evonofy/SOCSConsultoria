import { Card, CardContent } from "@/components/ui/card";

const Values = () => {
  const values = [
    {
      number: "01",
      title: "Missão",
      description: "Fornecer soluções estratégicas em governança corporativa, compliance e gestão de riscos, contribuindo para o sucesso sustentável de nossos clientes através de práticas éticas e inovadoras."
    },
    {
      number: "02",
      title: "Visão",
      description: "Ser referência nacional em consultoria empresarial, reconhecida pela excelência na entrega de soluções personalizadas que transformam desafios em oportunidades de crescimento."
    },
    {
      number: "03",
      title: "Nossos Valores",
      description: "Integridade • Excelência • Inovação • Transparência • Compromisso com resultados • Ética profissional"
    }
  ];

  return (
    <section className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary/20 mb-4">{value.number}</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

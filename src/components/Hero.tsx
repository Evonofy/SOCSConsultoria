import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center hero-gradient text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Bem Vindo à SOCS Consultoria
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          O melhor momento de planejar é já
        </p>
        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" variant="secondary" asChild>
            <a href="#contato">Entre em Contato</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Erro",
        description: "Por favor, insira um email válido.",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    try {
      // Create mailto link as fallback (will open email client)
      const subject = encodeURIComponent(`Contato do site - ${formData.name}`);
      const body = encodeURIComponent(
        `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
      );
      const mailtoLink = `mailto:contato@socsconsultoria.com.br?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoLink;
      
      toast({
        title: "Sucesso!",
        description: "Seu cliente de email será aberto. Se não abrir automaticamente, envie um email para contato@socsconsultoria.com.br",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao processar sua mensagem. Por favor, tente novamente ou envie diretamente para contato@socsconsultoria.com.br",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Fale Conosco
          </h2>
          <p className="text-muted-foreground">
            Entre em contato e descubra como podemos ajudar sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Endereço</h3>
              <p className="text-sm text-muted-foreground">
                Alameda Capão 75, Jardim das Damas, 1827<br />
                São Paulo - SP - 04618-012
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <a 
                href="mailto:contato@socsconsultoria.com.br"
                className="text-sm text-primary hover:underline"
              >
                contato@socsconsultoria.com.br
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Contato</h3>
              <a 
                href="tel:+551130403022"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                (11) 3040-3022
              </a>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Nome*"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    maxLength={100}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    maxLength={255}
                  />
                </div>
              </div>
              
              <Textarea
                placeholder="Mensagem*"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                maxLength={1000}
              />

              <Button type="submit" size="lg" className="w-full md:w-auto" disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;

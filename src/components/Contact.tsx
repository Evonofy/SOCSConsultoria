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
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validações client-side (duplicadas por segurança)
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Erro",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    // Validação de telefone (se preenchido)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\d\s\-\(\)\+]+$/;
      const digitsOnly = formData.phone.replace(/\D/g, "");

      if (!phoneRegex.test(formData.phone) || digitsOnly.length < 10) {
        toast({
          title: "Erro",
          description: "Por favor, insira um telefone válido com DDD.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }
    }

    // Validação de tamanho dos campos
    if (
      formData.name.length > 100 ||
      formData.email.length > 255 ||
      formData.message.length > 1000 ||
      formData.phone.length > 20
    ) {
      toast({
        title: "Erro",
        description: "Um ou mais campos excedem o tamanho máximo permitido.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      // URL do Google Apps Script
      const SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycby1yz2a6iWWdaE7bIQSSTav_2RVb2LnhnjCjFwBn3xVEHyXMTcMnJyGlcpCZSIfyGsQ/exec";

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Necessário para Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Com no-cors, assumimos sucesso se não houver erro
      toast({
        title: "Sucesso!",
        description:
          "Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!",
      });

      // Resetar formulário
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error:", error);

      toast({
        title: "Erro",
        description:
          "Não foi possível enviar sua mensagem. Por favor, tente novamente ou entre em contato diretamente pelo e-mail.",
        variant: "destructive",
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
                Alameda Capão 75, Jardim das Damas, 1827
                <br />
                São Paulo - SP - 04618-012
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">E-mail</h3>
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
              <h3 className="font-bold mb-2">Telefone</h3>
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
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    maxLength={100}
                    disabled={loading}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="E-mail*"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    maxLength={255}
                    disabled={loading}
                  />
                </div>
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Telefone (opcional)"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  maxLength={20}
                  disabled={loading}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Exemplo: (11) 99999-9999
                </p>
              </div>

              <Textarea
                placeholder="Mensagem*"
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                maxLength={1000}
                disabled={loading}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto"
                disabled={loading}
              >
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

import {
  Stethoscope,
  Syringe,
  Scissors,
  ShieldCheck,
  Beaker,
  Sparkles,
  Siren,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    title: "Consultas Generales",
    description: "Chequeos de rutina y diagnóstico para mantener a tu mascota sana.",
  },
  {
    icon: <Syringe className="h-10 w-10 text-primary" />,
    title: "Vacunación",
    description: "Planes de vacunación completos para cachorros y adultos.",
  },
  {
    icon: <Scissors className="h-10 w-10 text-primary" />,
    title: "Cirugías",
    description: "Procedimientos quirúrgicos con la máxima seguridad y cuidado.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Desparasitación",
    description: "Protección completa contra parásitos internos y externos.",
  },
  {
    icon: <Beaker className="h-10 w-10 text-primary" />,
    title: "Laboratorio Clínico",
    description: "Exámenes de sangre, orina y más para un diagnóstico preciso.",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: "Peluquería y Estética",
    description: "Baño, corte y cuidado de la piel para que luzcan geniales.",
  },
  {
    icon: <Siren className="h-10 w-10 text-destructive" />,
    title: "Emergencias",
    description: "Atención de urgencias disponible para situaciones críticas.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-muted py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nuestros Servicios
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos todo lo que tu mascota necesita para una vida larga y
              feliz.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="flex flex-col items-center justify-center text-center p-6 transition-transform hover:scale-105 hover:shadow-lg"
            >
              <CardHeader className="p-0">
                {service.icon}
                <CardTitle className="mt-4 text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-4">
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    name: "María G.",
    avatar: PlaceHolderImages.find((img) => img.id === "testimonial-1"),
    initials: "MG",
    text: "¡Excelente atención! El Dr. Pérez fue increíblemente paciente con mi gato 'Milo'. Totalmente recomendados.",
  },
  {
    name: "Carlos R.",
    avatar: PlaceHolderImages.find((img) => img.id === "testimonial-2"),
    initials: "CR",
    text: "Llevo a mis dos perros a 'La Casita Azul' desde hace años para sus vacunas y peluquería. Siempre salimos felices.",
  },
  {
    name: "Ana S.",
    avatar: PlaceHolderImages.find((img) => img.id === "testimonial-3"),
    initials: "AS",
    text: "La clínica está impecable y el personal es muy amable. Mi perrita 'Luna' ya no le tiene miedo al veterinario. ¡Gracias!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Lo que dicen nuestros clientes
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              La confianza de nuestros clientes es nuestra mejor carta de
              presentación.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="mx-auto mt-12 w-full max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                      {testimonial.avatar && (
                        <Avatar className="h-20 w-20">
                          <AvatarImage
                            src={testimonial.avatar.imageUrl}
                            alt={testimonial.name}
                            data-ai-hint={testimonial.avatar.imageHint}
                          />
                          <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                      )}
                      <p className="text-base italic text-muted-foreground">
                        &quot;{testimonial.text}&quot;
                      </p>
                      <cite className="font-bold not-italic">
                        - {testimonial.name}
                      </cite>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

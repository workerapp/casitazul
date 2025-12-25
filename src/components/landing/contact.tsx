import Image from "next/image";
import {
  Clock,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

const mapImage = PlaceHolderImages.find((img) => img.id === "map-location");

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-muted py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-8 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contáctanos y Visítanos
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Estamos aquí para ayudarte. Contáctanos directamente.
          </p>
        </div>
        <div className="mx-auto w-full max-w-4xl">
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-center md:text-left">
                    Información Directa
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Teléfono</p>
                        <a
                          href="tel:+521234567890"
                          className="text-muted-foreground transition-colors hover:text-primary"
                        >
                           300 756 1600
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Dirección</p>
                        <p className="text-muted-foreground">
                          calle 84#20a-87
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Horario de Atención</p>
                        <p className="text-muted-foreground">
                          Lunes a Viernes: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-muted-foreground">
                          Sábados: 9:00 AM - 1:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-green-50 p-8 text-center dark:bg-green-950/20">
                    <MessageCircle className="h-12 w-12 text-green-600" />
                    <h4 className="text-xl font-bold">¿Tienes una consulta?</h4>
                    <p className="text-muted-foreground">
                        Escríbenos por WhatsApp y te responderemos lo antes posible.
                    </p>
                    <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                        <a
                        href="https://wa.me/573007561600"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Chatea con nosotros
                        </a>
                    </Button>
                    <p className="font-bold text-green-700 dark:text-green-400">+57 300 756 1600</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 h-64 w-full max-w-5xl overflow-hidden rounded-lg md:h-80">
          {mapImage && (
            <Image
              src={mapImage.imageUrl}
              alt={mapImage.description}
              data-ai-hint={mapImage.imageHint}
              width={1200}
              height={400}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}

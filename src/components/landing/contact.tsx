import Image from "next/image";
import {
  Clock,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

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
        <div className="mx-auto w-full max-w-2xl">
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="space-y-6 text-left">
                <h3 className="text-2xl font-bold text-center">Información Directa</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+521234567890"
                    className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <Phone className="h-6 w-6 text-primary" />
                    <span className="font-medium">[Tu Número de Teléfono]</span>
                  </a>
                  <a
                    href="https://wa.me/573007561600"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <MessageCircle className="h-6 w-6 text-green-500" />
                    <span className="font-medium">Chatea con nosotros en WhatsApp</span>
                  </a>
                  <div className="flex items-center gap-3 rounded-md p-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span className="font-medium">[Tu Dirección Completa]</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-md p-2">
                    <Clock className="h-6 w-6 text-primary" />
                    <div className="font-medium">
                      <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                      <p>Sábados: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
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

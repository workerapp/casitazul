import Image from "next/image";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const aboutImage = PlaceHolderImages.find((img) => img.id === "about-team");

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="overflow-hidden">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="relative h-64 w-full lg:h-auto">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  data-ai-hint={aboutImage.imageHint}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="flex flex-col justify-center space-y-4 p-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Por qué confiar en La Casita Azul?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Somos un equipo de médicos veterinarios apasionados por los
                animales, comprometidos con ofrecer un trato ético, profesional
                y lleno de cariño. En &apos;La Casita Azul&apos;, tu mascota es
                parte de nuestra familia.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

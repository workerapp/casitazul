import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const heroImage = PlaceHolderImages.find((img) => img.id === "hero-vet");

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[480px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover object-center"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Veterinaria La Casita Azul
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-gray-200 md:text-xl">
              Cuidamos la salud y el bienestar de quienes más quieres.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
              >
                <Link href="#contact">Agendar Cita Ahora</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="#services">Ver Servicios</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

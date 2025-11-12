import Link from "next/link";
import { House, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <House className="h-6 w-6 text-primary" />
          <span className="font-bold">Veterinaria La Casita Azul</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
          <Link
            href="#services"
            className="transition-colors hover:text-primary"
          >
            Servicios
          </Link>
          <Link href="#about" className="transition-colors hover:text-primary">
            Nosotros
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-primary"
          >
            Contacto
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      <div className="container mx-auto mt-4 border-t pt-4 text-center text-sm text-muted-foreground">
        © {currentYear} Veterinaria La Casita Azul. Todos los derechos reservados.
      </div>
    </footer>
  );
}

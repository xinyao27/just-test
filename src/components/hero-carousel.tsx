import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: "slide1",
    title: "Xiaomi SU7 Ultra",
    subtitle: "Performance beyond imagination",
    imageUrl: "https://ext.same-assets.com/1016486942/2806071056.jpeg",
    ctaText: "Learn More",
    ctaLink: "#",
  },
  {
    id: "slide2",
    title: "Xiaomi 15",
    subtitle: "Built for photography excellence",
    imageUrl: "https://ext.same-assets.com/215176618/3782532044.jpeg",
    ctaText: "Buy Now",
    ctaLink: "#",
  },
  {
    id: "slide3",
    title: "Xiaomi Photography Award",
    subtitle: "In Collaboration with Leica",
    imageUrl: "https://ext.same-assets.com/2335395268/2556708631.jpeg",
    ctaText: "Discover More",
    ctaLink: "#",
  },
  {
    id: "slide4",
    title: "Xiaomi Buds 5 Pro",
    subtitle: "Ultimate sound experience",
    imageUrl: "https://ext.same-assets.com/3560796944/732682646.jpeg",
    ctaText: "Buy Now",
    ctaLink: "#",
  },
];

export function HeroCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {heroSlides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="relative h-[460px] w-full overflow-hidden">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 p-6 text-center md:items-start md:justify-end md:p-12 md:text-left">
                <h2 className="mb-2 text-2xl font-bold text-white md:text-4xl lg:text-5xl">
                  {slide.title}
                </h2>
                <p className="mb-4 text-sm text-white md:text-lg">
                  {slide.subtitle}
                </p>
                <Button
                  asChild
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                >
                  <Link href={slide.ctaLink}>{slide.ctaText}</Link>
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-4 right-4 z-10 flex space-x-2">
        <CarouselPrevious className="h-8 w-8 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30" />
        <CarouselNext className="h-8 w-8 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30" />
      </div>
    </Carousel>
  );
}

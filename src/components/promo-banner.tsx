import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PromoBannerProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
}

export function PromoBanner({
  title,
  subtitle,
  imageUrl,
  ctaText,
  ctaLink,
  align = "center",
  theme = "light",
}: PromoBannerProps) {
  const textAlignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  const themeClass = {
    light: "text-black",
    dark: "text-white",
  }[theme];

  return (
    <div className="container-xiaomi py-6">
      <div className="relative h-[200px] w-full overflow-hidden rounded-lg md:h-[300px]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 1226px"
          className="object-cover"
        />
        <div
          className={`absolute inset-0 flex flex-col justify-center p-8 ${textAlignClass}`}
        >
          <h2
            className={`mb-3 text-2xl font-bold md:text-4xl ${themeClass}`}
          >
            {title}
          </h2>
          <p className={`mb-4 max-w-md text-sm md:text-base ${themeClass}`}>
            {subtitle}
          </p>
          <Button
            asChild
            variant={theme === "light" ? "default" : "outline"}
            className={theme === "dark" ? "bg-white/20 text-white hover:bg-white/30" : ""}
          >
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function PromoSection() {
  return (
    <section className="py-8">
      <PromoBanner
        title="Xiaomi HyperOS 2"
        subtitle="Next generation AI-powered operating system with enhanced performance and features"
        imageUrl="https://ext.same-assets.com/1557293475/838820556.webp"
        ctaText="Learn More"
        ctaLink="#"
        align="right"
        theme="dark"
      />
      <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2">
        <PromoBanner
          title="Smart Home Ecosystem"
          subtitle="Connect and control your entire home with Xiaomi's IoT platform"
          imageUrl="https://ext.same-assets.com/2055909854/3969049233.webp"
          ctaText="Explore"
          ctaLink="#"
          align="left"
          theme="dark"
        />
        <PromoBanner
          title="Xiaomi Pad 7 Pro"
          subtitle="Ultimate performance for work and entertainment"
          imageUrl="https://ext.same-assets.com/724327204/4061495056.webp"
          ctaText="Buy Now"
          ctaLink="#"
          align="left"
          theme="light"
        />
      </div>
    </section>
  );
}

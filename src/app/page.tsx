import { Navbar } from "@/components/navbar";
import { HeroCarousel } from "@/components/hero-carousel";
import { ProductCategories } from "@/components/product-categories";
import { FeaturedProducts } from "@/components/featured-products";
import { PromoSection } from "@/components/promo-banner";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroCarousel />
      <ProductCategories />
      <FeaturedProducts />
      <PromoSection />
      <Footer />
    </main>
  );
}

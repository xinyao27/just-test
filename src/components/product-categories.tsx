import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface Category {
  id: string;
  name: string;
  imageUrl: string;
  link: string;
}

const categories: Category[] = [
  {
    id: "phones",
    name: "Smartphones",
    imageUrl: "https://ext.same-assets.com/1969824813/3116262159.png",
    link: "#",
  },
  {
    id: "redmi",
    name: "Redmi Phones",
    imageUrl: "https://ext.same-assets.com/302526479/1362641279.webp",
    link: "#",
  },
  {
    id: "tv",
    name: "TV & Display",
    imageUrl: "https://ext.same-assets.com/2070662925/1681530730.webp",
    link: "#",
  },
  {
    id: "laptops",
    name: "Laptops",
    imageUrl: "https://ext.same-assets.com/1964068949/3223203194.webp",
    link: "#",
  },
  {
    id: "tablets",
    name: "Tablets",
    imageUrl: "https://ext.same-assets.com/1008434350/3043413850.webp",
    link: "#",
  },
  {
    id: "wearables",
    name: "Wearables",
    imageUrl: "https://ext.same-assets.com/354521081/2122942929.webp",
    link: "#",
  },
  {
    id: "audio",
    name: "Audio",
    imageUrl: "https://ext.same-assets.com/3212677570/4136573790.webp",
    link: "#",
  },
  {
    id: "smarthome",
    name: "Smart Home",
    imageUrl: "https://ext.same-assets.com/896309861/1543465561.webp",
    link: "#",
  },
];

export function ProductCategories() {
  return (
    <section className="container-xiaomi py-12">
      <h2 className="mb-6 text-center text-2xl font-bold">Product Categories</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {categories.map((category) => (
          <Link key={category.id} href={category.link}>
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <CardContent className="flex flex-col items-center p-3 text-center">
                <div className="relative mb-3 h-16 w-16">
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium">{category.name}</h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

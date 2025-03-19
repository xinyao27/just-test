import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  imageUrl: string;
  badge?: string;
  category: string;
  link: string;
}

const products: Product[] = [
  {
    id: "redmi-book-pro",
    name: "Redmi Book Pro 2025",
    price: "$799",
    imageUrl: "https://ext.same-assets.com/1513520540/673596058.webp",
    category: "laptop",
    link: "#",
    badge: "NEW",
  },
  {
    id: "redmi-note14",
    name: "Redmi Note 14 Pro",
    price: "$299",
    originalPrice: "$349",
    imageUrl: "https://ext.same-assets.com/1929003514/349821688.webp",
    category: "phone",
    link: "#",
  },
  {
    id: "xiaomi-watch-s4",
    name: "Xiaomi Watch S4",
    price: "$199",
    imageUrl: "https://ext.same-assets.com/1209955852/886501445.webp",
    category: "wearable",
    link: "#",
  },
  {
    id: "xiaomi-buds-5",
    name: "Xiaomi Buds 5 Pro",
    price: "$129",
    imageUrl: "https://ext.same-assets.com/2358935484/4070115016.webp",
    category: "audio",
    link: "#",
  },
  {
    id: "k80-pro",
    name: "Redmi K80 Pro",
    price: "$499",
    imageUrl: "https://ext.same-assets.com/2899217396/731162482.webp",
    category: "phone",
    link: "#",
    badge: "BESTSELLER",
  },
  {
    id: "xiaomi-15",
    name: "Xiaomi 15",
    price: "$899",
    imageUrl: "https://ext.same-assets.com/15479645/1161547914.webp",
    category: "phone",
    link: "#",
  },
  {
    id: "xiaomi-tv",
    name: "Xiaomi TV S Pro",
    price: "$1299",
    imageUrl: "https://ext.same-assets.com/1202222641/2469961047.webp",
    category: "tv",
    link: "#",
  },
  {
    id: "xiaomi-pad-7",
    name: "Xiaomi Pad 7 Pro",
    price: "$399",
    imageUrl: "https://ext.same-assets.com/4149901963/3999448074.webp",
    category: "tablet",
    link: "#",
  },
];

export function FeaturedProducts() {
  return (
    <section className="container-xiaomi py-12">
      <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <Tabs defaultValue="all" className="w-full md:w-auto">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="phone">Phones</TabsTrigger>
            <TabsTrigger value="laptop">Laptops</TabsTrigger>
            <TabsTrigger value="wearable">Wearables</TabsTrigger>
            <TabsTrigger value="audio">Audio</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link key={product.id} href={product.link}>
            <Card className="h-full overflow-hidden transition-all hover:shadow-md">
              {product.badge && (
                <div className="absolute right-2 top-2 z-10 rounded-md bg-primary px-2 py-1 text-xs font-semibold text-white">
                  {product.badge}
                </div>
              )}
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="relative mb-4 h-40 w-full">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="mb-2 text-lg font-medium">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="justify-center border-t p-4">
                <Button variant="outline" className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button asChild variant="outline" className="px-8">
          <Link href="#">View All Products</Link>
        </Button>
      </div>
    </section>
  );
}

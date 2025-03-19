import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User, Menu, Globe, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container-xiaomi flex h-12 items-center justify-between">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[80%]">
            <div className="grid gap-4 py-4">
              <Link href="/" className="flex items-center space-x-1">
                <div className="h-8 w-8 rounded-full bg-[#ff6700]">
                  <div className="flex h-full w-full items-center justify-center font-bold text-white">
                    MI
                  </div>
                </div>
                <span className="text-xl font-bold">Xiaomi</span>
              </Link>
              <div className="grid grid-cols-1 gap-2">
                {['Xiaomi Phones', 'Redmi Phones', 'TV & Display', 'Laptop & Tablet', 'Smart Home', 'Life Style', 'MIoT', 'Discover'].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="flex justify-between p-2 hover:bg-gray-100"
                  >
                    {item}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-[#ff6700]">
            <div className="flex h-full w-full items-center justify-center font-bold text-white">
              MI
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden space-x-1 md:flex">
          {['Xiaomi Phones', 'Redmi Phones', 'TV & Display', 'Laptop & Tablet', 'Smart Home', 'Life Style', 'MIoT', 'Discover'].map((item) => (
            <Link
              key={item}
              href="#"
              className="px-2 py-3 text-sm hover:text-primary"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-2">
          <Link href="#" className="flex items-center px-2 text-sm hover:text-primary">
            <Globe className="mr-1 h-4 w-4" />
            <span className="hidden md:inline">Global</span>
          </Link>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Shop and Learn",
    links: [
      { label: "Xiaomi Phones", href: "#" },
      { label: "Redmi Phones", href: "#" },
      { label: "TV & Display", href: "#" },
      { label: "Laptops", href: "#" },
      { label: "Tablets", href: "#" },
      { label: "Wearables", href: "#" },
      { label: "Audio", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "#" },
      { label: "User Guide", href: "#" },
      { label: "Warranty", href: "#" },
      { label: "Service Centers", href: "#" },
      { label: "Xiaomi Service", href: "#" },
      { label: "Mi Store App", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Xiaomi", href: "#" },
      { label: "Investor Relations", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "News", href: "#" },
      { label: "Events", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Follow Mi",
    links: [
      { label: "Facebook", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "Mi Community", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-gray-100">
      <div className="container-xiaomi py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-lg font-bold">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-[#ff6700]">
                  <div className="flex h-full w-full items-center justify-center font-bold text-white">
                    MI
                  </div>
                </div>
                <span className="ml-2 text-xl font-bold">Xiaomi</span>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Let everyone in the world enjoy a better life through innovative technology
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0">
                <div>
                  <h4 className="mb-2 text-sm font-semibold">Contact Us</h4>
                  <p className="text-sm text-gray-600">+1 (800) XIAOMI</p>
                  <p className="text-sm text-gray-600">support@xiaomi.com</p>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold">Connect with us</h4>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-gray-600 hover:text-primary">
                      <Facebook size={20} />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-primary">
                      <Twitter size={20} />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-primary">
                      <Instagram size={20} />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-primary">
                      <Youtube size={20} />
                      <span className="sr-only">YouTube</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>Copyright © 2023 Xiaomi. All Rights Reserved.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-primary">
              Sales Policy
            </Link>
            <Link href="#" className="hover:text-primary">
              Legal
            </Link>
            <Link href="#" className="hover:text-primary">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

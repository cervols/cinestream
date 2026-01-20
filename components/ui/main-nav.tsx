"use client";

import { useState } from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "./navigation-menu";
import { Menu, X } from "lucide-react";

const links = [
  { name: 'Home', href: '/' },
  { name: 'Why Us', href: '/#why-us' },
  { name: 'Catalog', href: '/#catalog' },
  { name: 'Contacts', href: '/#contacts' },
];

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-2 border-b bg-[#0A0A0A] text-[#888888]">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-around my-4">
        <NavigationMenu>
          <NavigationMenuList className="gap-20">
            {links.map((link) => (
              <NavigationMenuItem key={link.name}>
                <NavigationMenuLink href={link.href} className="text-xl">
                  {link.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden relative">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          <div className="h-6 text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>

        {isOpen && (
          <div className="absolute border-t left-0 right-0 top-12 w-screen h-screen bg-[#0A0A0A]"
               style={{ marginLeft: 'calc(-50vw + 50%)' }}>
            <div className="flex flex-col p-4 space-y-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#888888] p-3 active:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

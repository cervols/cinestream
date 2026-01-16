"use client";

import { useState } from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "./navigation-menu";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full p-4">
      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="gap-8">
          <NavigationMenuItem>
            <NavigationMenuLink className="text-white hover:text-gray-300">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="text-white hover:text-gray-300">
              Movies
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="text-white hover:text-gray-300">
              TV Shows
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="text-white hover:text-gray-300">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <div className="md:hidden relative">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
          <div className="w-6 h-6 flex flex-col justify-center">
            <span className={`block h-0.5 w-6 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all mt-1 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all mt-1 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </div>
        </button>

        {isOpen && (
          <div className="absolute top-12 left-0 w-screen bg-black bg-opacity-80 p-4 z-50">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-white hover:text-gray-300">Home</a>
              <a href="#" className="text-white hover:text-gray-300">Movies</a>
              <a href="#" className="text-white hover:text-gray-300">TV Shows</a>
              <a href="#" className="text-white hover:text-gray-300">About</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

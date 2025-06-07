"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const menuItems = [
  {
    label: "Каталог",
    href: "/shop",
  },
  {
    label: "Конструктор",
    href: "/constructor",
  },
  {
    label: "Мерч для ВУЗов",
    href: "/university-merch",
  },
  {
    label: "Брендовый мерч",
    href: "/brands",
  },
  {
    label: "Распродажа",
    href: "/sale",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="right">
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className=" cursor-pointer">
          <Menu className="h-5 w-5 text-black" />
          <span className="sr-only">Меню</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-[300px] rounded-md p-2 sm:w-[400px] bg-[#F7F7F7] inset-shadow-[0_2px_7px_0_rgba(0,0,0,0.25)]">
        <VisuallyHidden>
          <DrawerDescription>Меню для мобильных устройств</DrawerDescription>
        </VisuallyHidden>
        <DrawerTitle>Разделы сайта</DrawerTitle>
        <nav className="flex flex-col mt-6 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-foreground/80 after:content-[''] after:block after:w-full after:h-[1px] after:bg-gray-400 after:absolute after:bottom-0 after:left-0"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <DrawerFooter className="absolute top-0 right-0">
          <Button variant="outline" onClick={() => setOpen(false)}>
            <X className="h-5 w-5 text-black" />
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

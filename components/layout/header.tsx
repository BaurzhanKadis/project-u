"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Container } from "@/components/shared/container";

const Header = () => {
  const navItems = [
    {
      label: "Каталог",
      href: "/shop",
    },
    {
      label: "Бренды",
      href: "/brands",
    },
    {
      label: "Мерч для ВУЗов",
      href: "/university-merch",
    },
    {
      label: "Распродажа",
      href: "/sale",
    },
    {
      label: "Создать свой дизайн",
      href: "/create-design",
    },
    {
      label: "FAQ",
      href: "/faq",
    },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container className="justify-center flex h-16 items-center">
        {/* Main Navigation */}
        <nav className="hidden flex-1 justify-evenly md:flex items-center text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Logo */}
        <Link href="/" className="">
          <Image
            className=" md:max-w-[270px]  min-w-[70px]"
            width={250}
            height={250}
            src="/svg-icon/logo-header.svg"
            alt="logo"
          />
        </Link>
        {/* Right Side Actions */}
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:inline-flex"
            >
              {/* <Search className="h-5 w-5" />
              <span className="sr-only">Поиск</span> */}
              г. Москва
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/#" className="relative">
                <Image
                  src="/svg-icon/like.svg"
                  alt="Избранное"
                  width={30}
                  height={26}
                />
                <span className="absolute bottom-1 right-0 text-sm bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white">
                  0
                </span>
                <span className="sr-only">Избранное</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart" className="relative">
                <Image
                  src="/svg-icon/basket.svg"
                  alt="Корзина"
                  width={30}
                  height={30}
                />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {/* {totalItems} */}1
                </span>
                <span className="sr-only">Корзина</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard">
                <Image
                  src="/svg-icon/men.svg"
                  alt="Личный кабинет"
                  width={30}
                  height={30}
                />
                <span className="sr-only">Личный кабинет</span>
              </Link>
            </Button>
          </nav>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
};

export default Header;

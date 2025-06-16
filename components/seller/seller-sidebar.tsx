"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LogoutButton } from "@/components/logout-button";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export function SellerSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const data = [
    { title: "Dashboard", href: "/dashboard" },
    { title: "Мои покупки", href: "/purchases" },
    { title: "Избранное", href: "/favorites" },
    { title: "Мои дизайны", href: "/designs" },
    { title: "Аккаунт", href: "/account" },
    { title: "Реферальная программа", href: "/referral" },
    { title: "FAQ", href: "/faq" },
  ];
  const partnerLinks = [
    { title: "Dashboard продавца", href: "/partner/dashboard" },
    { title: "Моя витрина", href: "/partner/store" },
    { title: "Мои товары", href: "/partner/products", active: true },
    { title: "Статистика продаж", href: "/partner/statistics" },
    { title: "Поддержка", href: "/partner/support" },
    { title: "Заказы", href: "/partner/orders" },
  ];

  const isPartnerActive = pathname.startsWith("/partner");

  return (
    <div className="flex flex-col gap-4 p-4">
      {data.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          onClick={() => setOpen(false)}
          className={cn(
            "inner-box-lg p-4 rounded-2xl bg-[#FFFFFF] text-[#181818] 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-base hover:bg-[#F1F1F1] transition-all duration-300",
            pathname === item.href &&
              "bg-[#000000] text-[#FFFFFF] hover:bg-[#000000] hover:text-[#FFFFFF]"
          )}
        >
          {item.title}
        </Link>
      ))}
      {/* Выпадающее меню */}
      <div>
        <button
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "w-full inner-box-lg flex items-center justify-between p-4 rounded-2xl transition-all duration-300 2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg text-base font-normal",
            isPartnerActive
              ? "bg-[#000000] text-[#FFFFFF]"
              : "bg-[#FFFFFF] text-[#181818] hover:bg-[#F1F1F1]"
          )}
        >
          Партнёрский кабинет
          {open ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
        {open && (
          <div className="bg-[#FFFFFF] inner-box-lg rounded-b-2xl shadow-inner px-4 py-2 flex flex-col gap-2">
            {partnerLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "py-2 px-2 rounded text-[#181818] 2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-base hover:text-[#007aff] transition-all duration-200",
                  pathname === item.href && "text-[#007aff] font-medium"
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
      <LogoutButton />
    </div>
  );
}

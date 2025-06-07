"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LogoutButton } from "@/components/logout-button";

export function SellerSidebar() {
  const pathname = usePathname();

  const data = [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Account",
      href: "/account",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      {data.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={cn(
            "inner-box-lg p-4 rounded-2xl bg-[#FFFFFF] text-[#181818] 2xl:text-3xl lg:text-2xl md:text-xl text-lg hover:bg-[#F1F1F1] transition-all duration-300",
            pathname === item.href &&
              "bg-[#000000] text-[#FFFFFF] hover:bg-[#000000] hover:text-[#FFFFFF]"
          )}
        >
          {item.title}
        </Link>
      ))}
      <LogoutButton />
    </div>
  );
}

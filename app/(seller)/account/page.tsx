"use client";

import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { useUserStore } from "@/store/auth.store";

export default function AccountPage() {
  const user = useUserStore((state) => state.user);
  return (
    <React.Fragment>
      <div className="flex justify-between ">
        <h3 className="lg:text-4xl md:text-2xl text-xl font-bold text-[#181818]">
          Аккаунт
        </h3>
        <div>Персональная скидка 7%</div>
      </div>
      <div className="flex gap-4">
        <div className="w-1/4">
          <Avatar className="shadow-lg" userId={user?.id || ""} size={500} />
        </div>
      </div>
      <h3 className="lg:text-4xl md:text-2xl text-xl font-bold text-[#181818]">
        Данные аккаунта:
      </h3>
    </React.Fragment>
  );
}

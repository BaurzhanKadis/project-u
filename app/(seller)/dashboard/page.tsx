"use client";

import { useUserStore } from "@/store/auth.store";
import React from "react";

export default function DashboardPage() {
  const user = useUserStore((state) => state.user);
  return (
    <React.Fragment>
      <div className="flex justify-between ">
        <h3 className="lg:text-4xl md:text-2xl text-xl font-bold text-[#181818]">
          Dashboard
        </h3>
        <div>Персональная скидка 7%</div>
      </div>
      <div>{user?.name} , Собрали для вас самой сводку полезной инофрмации</div>
    </React.Fragment>
  );
}

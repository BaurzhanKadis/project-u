"use client";

import { useEffect } from "react";
import { useUserStore } from "@/store/auth.store";
import { createClient } from "@/lib/supabase/client";

export function UserProvider({ children }: { children: React.ReactNode }) {
  const fetchUser = useUserStore((state) => state.fetchUser);

  useEffect(() => {
    const checkAndFetchUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        fetchUser();
      }
    };

    checkAndFetchUser();
  }, [fetchUser]);

  return <>{children}</>;
}

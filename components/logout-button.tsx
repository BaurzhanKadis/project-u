"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/auth.store";

export function LogoutButton() {
  const router = useRouter();
  const clearUser = useUserStore((state) => state.clearUser);
  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    clearUser();
    router.push("/auth/login");
  };

  return <Button onClick={logout}>Logout</Button>;
}

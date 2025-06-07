"use client";

import { useEffect } from "react";
import { useProductStore } from "@/store/product.store";

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return <>{children}</>;
}

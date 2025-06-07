"use client";

import { useProductStore } from "@/store/product.store";

export default function ProductList() {
  const { products } = useProductStore();
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

"use client";

import ProductList from "@/components/shop/product-list";

export default function ShopPage() {
  return (
    <div className="pt-4">
      <div className="header-shop flex justify-between items-center mb-6">
        <h1 className="  md:text-4xl text-2xl font-extrabold">Каталог</h1>
        <div className="header-shop-filter flex items-center gap-4">
          {/* <SearchInput className="md:w-[520px] w-full" /> */}
          <div className="header-shop-filter-select"></div>
        </div>
      </div>
      <div className="grid md:gap-4 gap-2 lg:grid-cols-[30%_1fr] grid-cols-1">
        {/* Фильтры и категории */}
        {/* <AsideShop /> */}
        {/* Товары */}
        <main className="">
          <ProductList />
        </main>
      </div>
    </div>
  );
}

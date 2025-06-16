import { SellerSidebar } from "@/components/seller/seller-sidebar";

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-[#F1F1F1] rounded-xl inner-box-lg md:my-4 my-2">
      <aside className="w-64 ">
        {/* Меню продавца */}
        <SellerSidebar />
      </aside>
      {/* Основной контент */}
      <main className="flex-1 p-4">
        <div className="inner-box-lg rounded-2xl p-4 bg-[#FFFFFF]">
          {children}
        </div>
      </main>
    </div>
  );
}

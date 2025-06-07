export default function PartnerProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Личный кабинет партнера</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Статистика продаж</h2>
            {/* Здесь будет статистика продаж */}
          </div>
        </div>
        <div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Профиль партнера</h2>
            {/* Здесь будет информация о партнере */}
          </div>
        </div>
      </div>
    </div>
  );
}

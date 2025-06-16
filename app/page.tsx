import Link from "next/link";

export default function Home() {
  const categories = [
    {
      name: "Футболки",
      href: "/#",
    },
    {
      name: "Худи",
      href: "/#",
    },
    {
      name: "Бейсболки",
      href: "/#",
    },
    {
      name: "Щопперы",
      href: "/#",
    },
  ];
  return (
    <div className="mt-4">
      {/* Banner */}
      <section className="flex flex-col h-auto min-h-[430px] @min-[346px]:min-h-[490px] max-h-[910px] relative">
        <div className="hit__main-container relative h-full">
          <div className="hit__main-item rounded-xl md:rounded-3xl flex flex-col justify-between p-2 md:p-6 h-full w-full design">
            <h3 className="text-3xl md:text-4xl 2xl:text-6xl font-extrabold w-full leading-7.5 mb-6">
              Создай <br /> свой уникальный <br /> дизайн
            </h3>
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-2">
              <Link
                className="w-fit xl:w-1/2 bg-gradient-to-r from-[#0095FF] to-[#00BFFF] text-white text-xs sm:text-sm md:text-lg lg:text-2xl font-medium py-2 px-14 xl:px-0 xl:text-center rounded-full"
                href="/#"
              >
                Хочу свой дизайн
              </Link>
              <span className="text-sm font-light">
                Удобный контcруктор создания мерча
                <br />
                Широкий выбор бланковой одежды
              </span>
            </div>
          </div>
          <Link
            href="/#"
            className="hit__main-item rounded-xl md:rounded-3xl flex flex-col justify-between px-2 py-2 md:px-6 md:py-2 h-full w-full sale"
          >
            <h4 className="text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
              Распродажа
            </h4>
            <p className="text-[10px] sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Качественный мерч по выгодным ценам
            </p>
          </Link>
          <Link
            href="/#"
            className="hit__main-item rounded-xl md:rounded-3xl flex flex-col justify-between px-2 py-1 md:px-6 md:py-2 h-full w-full merch"
          >
            <h4 className="text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
              Мерч для ВУЗ-ов
            </h4>
          </Link>
          <div className="hit__main-item rounded-xl md:rounded-3xl flex flex-col justify-between px-2 py-1 md:px-6 md:py-2 h-full w-full promo bg-center lg:bg-[center_40%]">
            <h3 className="text-lg sm:text-xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold">
              Каталог товаров
            </h3>
            <div className="flex justify-between items-end">
              <div className="flex flex-col md:gap-1">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="text-[12px] sm:text-base md:text-xl hover:text-black/80"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              <Link
                className="bg-[#181818] cursor-pointer text-white rounded-full text-center w-1/2 md:w-fit md:px-14 py-1 md:py-2 text-sm sm:text-base md:text-lg hover:bg-black/80"
                href="/shop"
              >
                Каталог
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    // <main className="min-h-screen flex flex-col items-center">
    //   <div className="flex-1 w-full flex flex-col gap-20 items-center">
    //     <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
    //       <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
    //         <div className="flex gap-5 items-center font-semibold">
    //           <div className="flex items-center gap-2"></div>
    //         </div>
    //         {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
    //       </div>
    //     </nav>
    //   </div>
    // </main>
  );
}

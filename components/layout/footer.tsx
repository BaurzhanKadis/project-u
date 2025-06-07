import Image from "next/image";
import { Container } from "@/components/shared/container";
const categories = [
  "Свой дизайн",
  "Шопперы",
  "Футболки",
  "Толстовки",
  "Бейсболки",
  "Рюкзаки",
  "Кружки",
  "Наклейки",
];
const info = [
  "Оплата",
  "Доставка",
  "Обмен и возврат",
  "Как сделать заказ?",
  "Пользовательское соглашение",
  "Юридическая информация",
  "О компании",
];
const partners = [
  "Для ВУЗ-ов",
  "Для дизайнеров",
  "Хочу продавать",
  "Артистам и блогерам",
  "Оптовые заказы",
  "Спортивным организациям",
  "Реферальная программа",
];

export default function Footer() {
  return (
    <footer className="bg-[#181818] text-white">
      <Container className="py-4 md:py-10 flex flex-col md:flex-row gap-10 md:gap-8">
        {/* Левая часть: логотип и слоган */}
        <div className="md:w-1/3 flex flex-col items-start justify-between mb-8 md:mb-0">
          <div className="flex flex-col gap-4 w-full">
            {/* Логотип с отражением */}
            <Image
              className="logo__footer w-full"
              width={100}
              height={100}
              src="/svg-icon/logo-footer.svg"
              alt="logo"
            />
            <div className="hidden sm:block text-lg mt-32 md:text-3xl leading-[35px] text-gray-200 mb-6">
              Пространство, где каждый может выразить свою индивидуальность
              через качественный мерч
            </div>
          </div>
        </div>
        {/* Центральные колонки */}
        <div className="md:w-2/3 w-full flex flex-wrap xl:flex-nowrap justify-between xl:gap-4 gap-y-3">
          <div className="w-1/2 xl:w-auto">
            <div className="font-bold mb-3 text-lg md:text-2xl">Категории</div>
            <ul className="space-y-1 text-gray-300">
              {categories.map((item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/2 xl:w-auto">
            <div className="font-bold mb-3 text-lg md:text-2xl">Информация</div>
            <ul className="space-y-1 text-gray-300">
              {info.map((item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/2 xl:w-auto">
            <div className="font-bold mb-3 text-lg md:text-2xl">
              Сотрудничество
            </div>
            <ul className="space-y-1 text-gray-300">
              {partners.map((item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/2 xl:w-auto">
            <div className="font-bold mb-3 text-lg md:text-2xl">Контакты</div>
            <div className="mb-2 text-gray-300">
              +7 (999) 800-66-55
              <br />
              info@u-merch.ru
            </div>
            <form className="flex items-center mb-2 w-full">
              <input
                type="email"
                placeholder="Ваш Email"
                className="rounded-l px-3 py-1 text-black focus:outline-none w-[inherit]"
                style={{ fontFamily: "Mplus 1p, sans-serif" }}
              />
              <button
                type="submit"
                className="rounded-r bg-white text-black px-4 py-1 font-semibold hover:bg-gray-200 transition"
              >
                ОК
              </button>
            </form>
            <div className="text-xs text-gray-400 mb-2">
              Подпишись на рассылку и получи скидку 15%
            </div>
            <div className="flex gap-3 mt-2">
              <a href="#" aria-label="email">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-gray-400 hover:text-white"
                >
                  <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0v.01L10 10l6-5.99V4H4zm14 2.236l-6.803 5.67a1 1 0 01-1.394 0L2 6.236V16a1 1 0 001 1h14a1 1 0 001-1V6.236z" />
                </svg>
              </a>
              <a href="#" aria-label="vk">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-gray-400 hover:text-white"
                >
                  <path d="M10 2C5.03 2 1 6.03 1 11c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm3.93 13.36c-.13.29-.38.46-.7.46h-1.13c-.38 0-.56-.25-.7-.46-.19-.32-.37-.65-.54-.98-.13-.25-.27-.5-.41-.75-.13-.22-.27-.44-.41-.66-.13-.19-.27-.38-.41-.57-.13-.16-.27-.32-.41-.48-.13-.13-.27-.25-.41-.37-.13-.1-.27-.2-.41-.29-.13-.08-.27-.16-.41-.23-.13-.06-.27-.12-.41-.17-.13-.04-.27-.08-.41-.11-.13-.02-.27-.04-.41-.05-.13-.01-.27-.01-.41 0-.13.01-.27.03-.41.05-.13.03-.27.07-.41.11-.13.05-.27.11-.41.17-.13.07-.27.15-.41.23-.13.09-.27.19-.41.29-.13.12-.27.24-.41.37-.13.16-.27.32-.41.48-.13.19-.27.38-.41.57-.13.22-.27.44-.41.66-.14.25-.28.5-.41.75-.17.33-.35.66-.54.98z" />
                </svg>
              </a>
              <a href="#" aria-label="youtube">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-gray-400 hover:text-white"
                >
                  <path d="M10 2C5.03 2 1 6.03 1 11c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm3.93 13.36c-.13.29-.38.46-.7.46h-1.13c-.38 0-.56-.25-.7-.46-.19-.32-.37-.65-.54-.98-.13-.25-.27-.5-.41-.75-.13-.22-.27-.44-.41-.66-.13-.19-.27-.38-.41-.57-.13-.16-.27-.32-.41-.48-.13-.13-.27-.25-.41-.37-.13-.1-.27-.2-.41-.29-.13-.08-.27-.16-.41-.23-.13-.06-.27-.12-.41-.17-.13-.04-.27-.08-.41-.11-.13-.02-.27-.04-.41-.05-.13-.01-.27-.01-.41 0-.13.01-.27.03-.41.05-.13.03-.27.07-.41.11-.13.05-.27.11-.41.17-.13.07-.27.15-.41.23-.13.09-.27.19-.41.29-.13.12-.27.24-.41.37-.13.16-.27.32-.41.48-.13.19-.27.38-.41.57-.13.22-.27.44-.41.66-.14.25-.28.5-.41.75-.17.33-.35.66-.54.98z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
      {/* Нижняя полоса */}
      <div className="bg-black text-center py-3 text-gray-300 text-sm md:text-2xl mt-6">
        U-MERCH 2025. Все права защищены
      </div>
    </footer>
  );
}

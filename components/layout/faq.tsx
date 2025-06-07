import Link from "next/link";
import { Container } from "../shared/container";

export default function FAQ() {
  return (
    <div className="faq bg-[#181818] mx-auto text-white">
      <Container className="py-4 md:py-10 flex flex-col md:flex-row gap-10 md:gap-8">
        <section className="flex flex-col gap-2 md:gap-4 items-center w-full">
          <h2 className="block text-center text-base sm:text-xl md:text-3xl lg:text-5xl 2xl:text-6xl font-bold">
            Остались вопросы по работе компании?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-around gap-4">
            <p className="text-center text-xs md:text-lg">
              В разделе FAQ есть ответы на часто задаваемые вопросы.
            </p>
            <div className="flex w-full md:w-auto items-center justify-between md:justify-around md:gap-10 gap-2">
              <Link
                className="bg-white block text-center text-sm sm:text-lg md:text-2xl text-black sm:font-medium md:font-light py-1 md:py-0 md:px-12 w-full md:w-auto rounded-full"
                href="/faq"
              >
                Перейти
              </Link>
              <Link
                className="bg-white block text-center text-sm sm:text-lg md:text-2xl text-black sm:font-medium md:font-light py-1 md:py-0 md:px-12 w-full md:w-auto rounded-full"
                href="#"
              >
                Написать
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

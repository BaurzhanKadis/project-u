import Image from "next/image";

export default function FaqPage() {
  return (
    <div className="pt-2">
      <div className="banner-faq aspect-[23/9] max-h-[600px]">
        <Image
          src="/images/banner-faq.png"
          alt="banner-faq"
          className="w-full h-full object-cover"
          height={1000}
          width={1000}
        />
      </div>
    </div>
  );
}

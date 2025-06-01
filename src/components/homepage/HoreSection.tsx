import Image from "next/image";
import { Button } from "../ui/button";

export function HeroSectionHomePage() {
    return (
      <section className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
        <Image
          src="https://i.imgur.com/o74jfUZ.jpeg"
          alt="coba kopt"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Temukan Rasa Kopi Terbaikmu
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-200 max-w-lg">
            Dari biji lokal hingga pilihan kekinian, kami hadirkan berbagai varian kopi dengan kualitas terjamin.
          </p>
          <Button className="mt-4" size="lg">Lihat Katalog</Button>
        </div>
      </section>
    )
}
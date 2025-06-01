import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function CatalogHomePage() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-semibold text-primary">Tentang Kopi</h3>
          <Separator className="my-4 w-24 border-primary" />
        </div>

        {/* Topografi */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Gambar */}
          <div className="w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src="https://i.imgur.com/7zdrjmW.jpeg"
              alt="Gunung Manglayang"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Deskripsi */}
          <div className="flex flex-col justify-center space-y-4">
            <h4 className="text-2xl font-semibold text-primary">Topografi</h4>
            <p className="text-base leading-relaxed text-gray-700">
              Terletak di ketinggian sekitar 1.200–1.400 meter di atas permukaan
              laut, Kebun Kopi Palintang memanfaatkan iklim sejuk dan tanah
              vulkanik subur Gunung Manglayang untuk menghasilkan biji kopi
              Arabika berkualitas tinggi. Tanaman kopi ditanam secara organik di
              bawah kanopi pohon aren dan pinus, yang tidak hanya menjaga
              kelembapan tanah, tetapi juga menciptakan cita rasa kopi yang
              seimbang—antara keasaman lembut dan keharuman alami.
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              Setiap biji kopi dipetik secara selektif pada puncak kematangan
              (“cherry red”), lalu diproses dengan metode semi-washed untuk
              menonjolkan profil rasa klasik pegunungan. Hasilnya adalah secangkir
              kopi dengan aroma harum bunga dan cokelat lembut, perpaduan body
              medium, serta aftertaste yang sedikit manis seperti karamel dan kacang
              panggang. Warna bubuk kopi cokelat tua ketika diseduh, menghadirkan
              rasa keseimbangan sempurna antara keasaman cerah dan sentuhan manis.
            </p>
          </div>
        </div>

        {/* Keunggulan & Rekomendasi */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Keunggulan */}
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-primary">Keunggulan Kopi Palintang</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Asal Terpercaya:</span> Ditumbuhkan di
                ketinggian ideal Gunung Manglayang, Jawa Barat, dengan perawatan
                organik tanpa pestisida.
              </li>
              <li>
                <span className="font-medium">Proses Semi-Washed:</span> Menghasilkan
                kopi dengan keasaman halus, aroma lebih kompleks, dan body yang
                lembut.
              </li>
              <li>
                <span className="font-medium">Citarasa Karakteristik:</span> Nuansa
                bunga melati, cokelat susu, dan sentuhan karamel, cocok dinikmati
                setiap pagi atau sore hari.
              </li>
              <li>
                <span className="font-medium">Komitmen Berkelanjutan:</span> Mendukung
                petani lokal dan lingkungan pegunungan melalui praktik pertanian
                ramah alam.
              </li>
            </ul>
          </div>

          {/* Rekomendasi Penyajian */}
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-primary">Rekomendasi Penyajian</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <span className="font-medium">French Press / Pour Over:</span> Mengeluarkan
                aroma floral dan keasaman optimal.
              </li>
              <li>
                <span className="font-medium">Espresso:</span> Menciptakan crema lembut
                dengan aftertaste manis, cocok untuk pecinta kopi hitam murni.
              </li>
              <li>
                <span className="font-medium">Cold Brew:</span> Menonjolkan rasa manis
                dan kelembutan body, sempurna untuk suasana santai di siang hari.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

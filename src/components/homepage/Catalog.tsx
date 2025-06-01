import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function CatalogHomePage() {
    return (
        
      <section className="py-12 h-screen">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-primary">Tentang Kopi</h3>
            <Separator className="my-4 w-24 border-primary" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
                <h4 className="text-xl font-semibold text-primary">
                    Topografi
                </h4>
                <div className="flex gap-4">
                    <Image src={"https://i.imgur.com/7zdrjmW.jpeg"} height={800} width={600} alt="gunung" />
                    <div className="grow">
                        <p>
                            Terletak di ketinggian sekitar 1.200–1.400 meter di atas permukaan laut, Kebun Kopi Palintang memanfaatkan iklim sejuk dan tanah vulkanik subur Gunung Manglayang untuk menghasilkan biji kopi Arabika berkualitas tinggi. Tanaman kopi ditanam secara organik di bawah kanopi pohon aren dan pinus, yang tidak hanya menjaga kelembapan tanah, tetapi juga menciptakan cita rasa kopi yang seimbang—antara keasaman lembut dan keharuman alami.
                        </p>
                        <p>
                            Setiap biji kopi dipetik secara selektif pada puncak kematangan (“cherry red”), lalu diproses dengan metode semi-washed untuk menonjolkan profil rasa klasik pegunungan. Hasilnya adalah secangkir kopi dengan aroma harum bunga dan cokelat lembut, perpaduan body medium, serta aftertaste yang sedikit manis seperti karamel dan kacang panggang. Warna bubuk kopi cokelat tua ketika diseduh, menghadirkan rasa keseimbangan sempurna antara keasaman cerah dan sentuhan manis.
                        </p>
                    </div>
                </div>
            </div>
            <p>

Keunggulan Kopi Palintang:

Asal Terpercaya: Ditumbuhkan di ketinggian ideal Gunung Manglayang, Jawa Barat, dengan perawatan organik tanpa pestisida.

Proses Semi-Washed: Menghasilkan kopi dengan keasaman halus, aroma lebih kompleks, dan body yang lembut.

Citarasa Karakteristik: Nuansa bunga melati, cokelat susu, dan sentuhan karamel, cocok dinikmati setiap pagi atau sore hari.

Komitmen Berkelanjutan: Mendukung petani lokal dan lingkungan pegunungan melalui praktik pertanian ramah alam.

Rekomendasi Penyajian:

French Press / Pour Over: Mengeluarkan aroma floral dan keasaman optimal.

Espresso: Menciptakan crema lembut dengan aftertaste manis, cocok untuk pecinta kopi hitam murni.

Cold Brew: Menonjolkan rasa manis dan kelembutan body, sempurna untuk suasana santai di siang hari.</p>
          </div>
      </section>
    )
}
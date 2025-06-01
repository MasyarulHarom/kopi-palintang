import Link from "next/link";
import { Button } from "../ui/button";

export function HeaderHomePage() {
    return (
        <header className="border-b border-border">
            <div className="flex items-center justify-between py-4">
                <h1 className="text-2xl font-semibold text-primary">Palintang Kopi</h1>
                <nav className="space-x-6 text-sm font-medium">
                <Link href="#" className="hover:text-primary/80">Beranda</Link>
                <Link href="#" className="hover:text-primary/80">Menu</Link>
                <Link href="#" className="hover:text-primary/80">Kontak</Link>
                </nav>
                <Button variant="outline" size="sm">Pesan Sekarang</Button>
            </div>
        </header>
    )
}
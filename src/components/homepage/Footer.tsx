export function FooterHomepage() {
    return (
      <footer className="border-t border-border bg-background">
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} KopiKu. Semua hak cipta dilindungi.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-foreground">Tentang Kami</a>
            <a href="#" className="hover:text-foreground">Kebijakan Privasi</a>
            <a href="#" className="hover:text-foreground">Syarat & Ketentuan</a>
          </div>
        </div>
      </footer>
    )
}
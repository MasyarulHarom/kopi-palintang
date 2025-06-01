"use client"

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

export function HeaderHomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo / Judul */}
        <h1 className="text-2xl font-semibold text-primary">Palintang Kopi</h1>

        {/* Navigasi untuk layar medium ke atas */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="#" className="hover:text-primary/80">
            Beranda
          </Link>
          <Link href="#" className="hover:text-primary/80">
            Menu
          </Link>
          <Link href="#" className="hover:text-primary/80">
            Kontak
          </Link>
        </nav>

        {/* Tombol Pesan & Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Tombol Pesan Sekarang */}
          <Button variant="outline" size="sm">
            Pesan Sekarang
          </Button>

          {/* Hamburger untuk mobile */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          >
            {isOpen ? (
              // Icon "X" untuk tutup
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icon "Hamburger"
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu untuk Mobile */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="flex flex-col px-4 py-4 space-y-4 text-sm font-medium">
            <Link
              href="#"
              className="hover:text-primary/80"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="#"
              className="hover:text-primary/80"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="#"
              className="hover:text-primary/80"
              onClick={() => setIsOpen(false)}
            >
              Kontak
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import './Header.scss';

export default function Header() {
  const [open, setOpen] = useState(false);
  const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <header className={"Header w-full text-white shadow-xl/20"}>
      <div className="mx-auto max-w-7xl px-4">
        <nav className="flex items-center md:items-end justify-between py-1">
          {/* Left: logo */}
          <Link href="/" className="inline-flex items-center">
            <span className="inline-block p-4">
              <Image
                src={`${BASE_PATH}/genesis-logo.png`}
                alt="Genesis Vita Logo"
                width={176}
                height={96}
                priority
              />
            </span>
          </Link>

          {/* Mobile toggle */}
          <button
            id="button-collapse"
            type="button"
            aria-controls="navbar"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex flex-col items-center justify-center rounded-md p-2 ring-1 ring-white/20 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:hidden"
          >
            <span className="sr-only">Toggle navigation</span>

            <span
              className={`block h-0.5 w-6 rounded-sm bg-white transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""
                }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-sm bg-white transition-opacity duration-300 my-1 ${open ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-sm bg-white transition-transform duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
            />
          </button>

          {/* Desktop nav */}
          <ul className="MainNavbar hidden gap-6 md:flex pb-4">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/quienes-somos">Quiénes Somos</Link></li>
            <li><Link href="/laboratorio">Laboratorio</Link></li>
            <li><Link href="/equipo-medico">Equipo Médico</Link></li>
            <li><Link href="/contactenos">Contáctenos</Link></li>
          </ul>
        </nav>

        {/* Mobile menu */}
        <div
          id="navbar"
          className={`MobileMenu md:hidden ${open ? "block" : "hidden"}`}
        >
          <ul className="space-y-2 border-t border-white/10 py-3">
            <li><Link href="/" className="block px-3 py-2">Inicio</Link></li>
            <li><Link href="/quienes-somos" className="block px-3 py-2">Quiénes Somos</Link></li>
            <li><Link href="/laboratorio" className="block px-3 py-2">Laboratorio</Link></li>
            <li><Link href="/equipo-medico" className="block px-3 py-2">Equipo Médico</Link></li>
            <li><Link href="/contactenos" className="block px-3 py-2">Contáctenos</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

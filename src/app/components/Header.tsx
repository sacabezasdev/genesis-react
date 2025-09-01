'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import './Header.scss';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={"Header w-full text-white shadow-2xl"}>
      <div className="mx-auto max-w-7xl px-4">
        <nav className="flex items-end justify-between py-1">
          {/* Left: logo */}
          <a href="/" className="inline-flex items-center">
            <span className="inline-block p-4">
              <Image
                src="genesis-logo.png"
                alt="Genesis Vita Logo"
                width={176}
                height={96}
                priority
              />
            </span>
          </a>

          {/* Mobile toggle */}
          <button
            id="button-collapse"
            type="button"
            aria-controls="navbar"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 ring-1 ring-white/20 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:hidden"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className={`block h-0.5 w-5 transition ${open ? "translate-y-1.5 rotate-45 bg-white" : "bg-white"}`} />
            <span className={`block h-0.5 w-5 my-1 transition ${open ? "opacity-0" : "bg-white"}`} />
            <span className={`block h-0.5 w-5 transition ${open ? "-translate-y-1.5 -rotate-45 bg-white" : "bg-white"}`} />
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
          className={`md:hidden ${open ? "block" : "hidden"}`}
        >
          <ul className="space-y-2 border-t border-white/10 py-3">
            <li><a href="/" className="block rounded-md px-3 py-2 hover:bg-white/10">Inicio</a></li>
            <li><a href="quienes-somos" className="block rounded-md px-3 py-2 hover:bg-white/10">Quiénes Somos</a></li>
            <li><a href="laboratorio" className="block rounded-md px-3 py-2 hover:bg-white/10">Laboratorio</a></li>
            <li><a href="equipo-medico" className="block rounded-md px-3 py-2 hover:bg-white/10">Equipo Médico</a></li>
            <li><a href="contactenos" className="block rounded-md px-3 py-2 hover:bg-white/10">Contáctenos</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

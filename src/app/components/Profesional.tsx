'use client';

import { useEffect, useRef, useState } from 'react';
import './Profesional.scss';

type Profesional = {
  imagen?: string;
  nombre: string;
  especialidades: string[];
  orden: number;
};

type ProfesionalProps = {
  profesional: Profesional;
};

function EspecialidadesList({ items }: { items: string[] }) {
  return (
    <>
      {items.map((especialidad, i) => (
        <span key={i}>
          {especialidad}
          {i < items.length - 1 && ', '}
        </span>
      ))}
    </>
  );
}

export default function Profesional({ profesional }: ProfesionalProps) {
  const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const imagen = `${BASE_PATH}/profesionales/${profesional.imagen ?? ''}`;

  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (open) closeBtnRef.current?.focus();
  }, [open]);

  return (
    <div className="mb-4 md:mb-0">
      <div className="Profesional flex items-center md:mb-2">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="Profesional--imagen rounded-sm shadow-md/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          aria-label={`Ver foto de ${profesional.nombre} en grande`}
        >
          <img
            src={imagen}
            width={40}
            height={40}
            alt={profesional.nombre}
            className="rounded-sm"
          />
        </button>

        <span className="Profesional--nombre ms-2">{profesional.nombre}</span>

        <span className="Profesional--especialidades ms-2 hidden md:block">
          {profesional.especialidades.map((especialidad, i) => (
            <span key={i}>
              {especialidad}
              {i < profesional.especialidades.length - 1 && ', '}
            </span>
          ))}
        </span>
      </div>

      <span className="Profesional--especialidades md:hidden">
        {profesional.especialidades.map((especialidad, i) => (
          <span key={i}>
            {especialidad}
            {i < profesional.especialidades.length - 1 && ', '}
          </span>
        ))}
      </span>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen de ${profesional.nombre}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <img
              src={imagen}
              alt={profesional.nombre}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-md shadow-lg"
            />

            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2 rounded-md bg-white/90 px-2 py-1 text-sm text-slate-900 shadow hover:bg-white"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

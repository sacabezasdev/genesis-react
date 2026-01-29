import ImageFrame from "../components/ImageFrame";
import SideBar from "../components/SideBar";
import Profesional from "../components/Profesional";

import { readFile } from "node:fs/promises";
import path from "node:path";

import equipoMedico from "../assets/equipo-medico-carousel.jpg";

type ProfesionalItem = {
  imagen?: string;
  nombre: string;
  especialidades: string[];
  orden: number;
};

async function loadProfesionales(): Promise<ProfesionalItem[]> {
  const dataPath =
    process.env.PROFESIONALES_JSON_PATH ??
    path.join(process.cwd(), "public", "data", "profesionales.json");

  try {
    const fileContents = await readFile(dataPath, "utf8");
    return JSON.parse(fileContents) as ProfesionalItem[];
  } catch (error) {
    console.error("Failed to load profesionales data:", error);
    return [];
  }
}

export default async function EquipoMedico() {
  const profesionales = await loadProfesionales();

  return (
    <div className="QuienesSomos Home mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
        <div className="md:col-span-2 flex flex-col gap-10 hidden md:block">
          <ImageFrame image={equipoMedico} imageAlt="Equipo Médico" />
          <div className="mt-6">
            <SideBar />
          </div>
        </div>
        <div className="md:col-span-4">
          <h1 className="text-2xl font-semibold mb-6">Equipo Médico</h1>
          {profesionales.map((profesional, index) => (
            <Profesional key={index} profesional={profesional} />
          ))}
        </div>
        <div className="md:col-span-2 flex flex-col gap-10 md:hidden">
          <ImageFrame image={equipoMedico} imageAlt="Equipo Médico" />
          <div className="mt-6">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

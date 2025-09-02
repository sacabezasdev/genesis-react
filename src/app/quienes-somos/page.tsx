import ImageFrame from "../components/ImageFrame";

import quienesSomos1 from "../assets/equipo-medico-carousel.jpg";
import quienesSomos2 from "../assets/DSC_9116.jpg";

export default function QuienesSomos() {
  return (
    <div className="QuienesSomos Home mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
        <div className="md:col-span-2">
          <ImageFrame image={quienesSomos1} imageAlt="Equipo Médico" />
        </div>
        <div className="md:col-span-4">
          <h1 className="text-2xl font-semibold mb-6">Quiénes somos</h1>
          <h2>Visión</h2>
          <p className="lead mb-6">
            Ser líderes en la región al lograr excelencia médica en la atención ginecológica, obstétrica y diagnóstico ecográfico prenatal y general, por medio de un staff multidisciplinario.
          </p>
          <h2>Misión</h2>
          <p className="lead mb-6">
            Brindar a nuestros pacientes un acompañamiento integral en el diagnóstico y tratamiento de patologías relacionadas con la ginecología, obstetricia y diagnóstico prenatal, en un marco de calidez humana y calidad profesional.
          </p>
          <h2>Objetivo Empresarial</h2>
          <ul className="lead mb-6 list-disc ms-10">
            <li>Honestidad y compromiso</li>
            <li>Respeto por la individualidad</li>
            <li>Confidencialidad</li>
            <li>Empatía y cordialidad</li>
            <li>Comunicación asertiva entre los miembros de la Organización</li>
            <li>y con la Comunidad</li>
            <li>Compromiso con la calidad, la seguridad y el medio ambiente</li>
          </ul>
          <ImageFrame image={quienesSomos2} imageAlt="Scan Fetal" />
        </div>
      </div>
    </div>
  );
}

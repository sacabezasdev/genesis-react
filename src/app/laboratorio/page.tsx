import ImageFrame from "../components/ImageFrame";
import SideBar from "../components/SideBar";
import Descargable from "../components/Descargable";
import WhatsAppButton from "../components/WhatsAppButton";

import laboratorio1 from "../assets/DSC_9017.jpg";
import laboratorio2 from "../assets/DSC_9070.jpg";

const UROCULTIVO = 'http://www.genesisvita.com.ar/static/pdf-indicaciones-largo.pdf';

export default function Laboratorio() {
  return (
    <div className="Laboratorio Home mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
        <div className="md:col-span-2 flex flex-col gap-10">
          <ImageFrame image={laboratorio1} imageAlt="Equipo Médico" />
        </div>
        <div className="md:col-span-4">
          <h1 className="text-2xl font-semibold mb-6">Laboratorio</h1>
          <h2 className="text-2xl font-semibold mb-6">Contáctese con Laboratorio para</h2>
          <div className="lead smaller">Consultas de Indicaciones, resultados, coseguros, turnos para mamografías, etc.</div>
          <div className="mt-4 flex flex-col md:flex-row">
            <div className="lead mr-4 mb-4 md:mb-0">WhatsApp</div>
            <WhatsAppButton size="lg" />
          </div>
          <div className="lead mt-4">
            <a href="mailto:genlaboratorio@yahoo.com.ar"><span className="textPrimaryColor"><strong>genlaboratorio</strong></span>@yahoo.com.ar</a>
          </div>
          <h2 className="text-2xl font-semibold mb-6 mt-8">Horario de Atención</h2>
          <div className="lead">
            Lunes a Viernes de 8:00 a 16:00
          </div>
          <h2 className="text-2xl font-semibold mb-6 mt-8">Indicaciones Descargables</h2>
          <Descargable link={UROCULTIVO} size="sm">
            Urocultivo
          </Descargable>
          <ImageFrame image={laboratorio2} imageAlt="Equipo Médico" />
        </div>
      </div>
    </div>
  );
}

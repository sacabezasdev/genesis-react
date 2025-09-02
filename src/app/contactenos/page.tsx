import ImageFrame from "../components/ImageFrame";
import SideBar from "../components/SideBar";
import WhatsAppButton from "../components/WhatsAppButton";

import contactenos from "../assets/DSC_9051.jpg";

const GESTION_ONLINE_LINK = 'https://genesisvita.portalemprenet.com/index.php';

export default function Contactenos() {
  return (
    <div className="Laboratorio Home mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-6">
        <div className="md:col-span-2 flex flex-col gap-10 hidden md:block">
          <ImageFrame image={contactenos} imageAlt="Equipo Médico" />
        </div>
        <div className="md:col-span-4">
          <h1 className="text-2xl font-semibold mb-6">Contáctenos</h1>
          <ul>
            <li><a className="lead bigger" href="mailto:info@yahoo.com.ar"><span className="textPrimaryColor"><strong>info</strong></span>@yahoo.com.ar</a> <span className="textPrimaryColor lead smaller ms-4 block md:inline">Consultas Generales</span></li>
            <li><a className="lead bigger" href="mailto:administracion@yahoo.com.ar"><span className="textPrimaryColor"><strong>administracion</strong></span>@yahoo.com.ar</a> <span className="textPrimaryColor lead smaller ms-4 block md:inline">Administración</span></li>
            <li><a className="lead bigger" href="mailto:secretaria@yahoo.com.ar"><span className="textPrimaryColor"><strong>secretaria</strong></span>@yahoo.com.ar</a> <span className="textPrimaryColor lead smaller ms-4 block md:inline">Secretaria</span></li>
            <li><a className="lead bigger" href="mailto:informes@yahoo.com.ar"><span className="textPrimaryColor"><strong>informes</strong></span>@yahoo.com.ar</a> <span className="textPrimaryColor lead smaller ms-4 block md:inline">Pedidos de Informes</span></li>
            <li><a className="lead bigger" href="mailto:genlaboratorio@yahoo.com.ar"><span className="textPrimaryColor"><strong>genlaboratorio</strong></span>@yahoo.com.ar</a> <span className="textPrimaryColor lead smaller ms-4 block md:inline">Laboratorio</span></li>
          </ul>
          <h2 className="text-2xl font-semibold mb-6 mt-8">Laboratorio</h2>
          <div className="mt-4 flex flex-col md:flex-row">
            <WhatsAppButton phone="+549 2996275525" />
          </div>
          <div className="mt-8 flex flex-col md:flex-row">
            <a
              href={GESTION_ONLINE_LINK}
              target="_blank"
              className={`rounded-md bg-red-700 hover:brightness-110 text-white shadow transition font-light lead text-center p-4`}
            >
              Auto-Gestione su Turno
              <br />
              <span className="lead bigger">Online</span>
            </a>
          </div>
          <div className="mt-4 flex flex-col md:flex-row">
            <SideBar />
          </div>
        </div>
        <div className="md:col-span-2 flex flex-col gap-10 md:hidden">
          <ImageFrame image={contactenos} imageAlt="Equipo Médico" />
        </div>
      </div>
    </div>
  );
}

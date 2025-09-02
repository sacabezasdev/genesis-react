import Image from "next/image";

import WhatsAppButton from "./WhatsAppButton";

//import googlePlayLogo from "../assets/google-play-badge.png";
import genesisMapa from "../assets/genesis-mapa.png";

import './WhatsAppButton.scss';

export default function SideBar() {

  return (
    <div>
      {/*<h2 className="text-2xl font-semibold">Descargue nuestra App</h2>
      <Image
        src={googlePlayLogo}
        alt="Google Play Logo"
        height={179}
        width={360}
      />*/}

      <h2 className="text-2xl font-semibold">Turnos por WhatsApp</h2>
      <p className="mt-3">
        <WhatsAppButton size="lg" />
      </p>

      <h2 className="mt-8 text-2xl font-semibold">Contáctese Personalmente</h2>
      <Image
        src={genesisMapa}
        alt="Mapa de ubicación de Genesis Vita"
        className="my-2"
        height={223}
        width={360}
      />
      <div className="Home__direccion mt-3 text-slate-700 leading-relaxed">
        Juan B. Justo 343<br />
        Ciudad de <strong>Neuquén</strong>
      </div>
    </div>
  );
}

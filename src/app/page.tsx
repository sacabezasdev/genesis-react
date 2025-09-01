import Image from "next/image";

import CarouselContainer from "./components/CarouselContainer";
import WhatsAppButton from "./components/WhatsAppButton";

import servicios from "./data/servicios.json";

import scanFetal from "./assets/scan.png";
import googlePlayLogo from "./assets/google-play-badge.png";
import genesisMapa from "./assets/genesis-mapa.png";

import "./Home.scss";

export default function Home() {
  return (
    <>
      <CarouselContainer />
      <div className="Home mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-semibold">Descargue nuestra App</h2>
            <Image
              src={googlePlayLogo}
              alt="Google Play Logo"
              height={179}
              width={360}
            />

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

          <div>
            <h2 className="text-2xl font-semibold">Diagnóstico por Imágenes</h2>
            <Image
              src={scanFetal}
              alt="Scan Fetal"
              className="mt-3 w-full"
              height={270}
              width={360}
            />
            <div className="p-3 text-white text-2xl font-light primaryColor">
              Ecografías 5D<br />
              Screening Primer Trimestre<br />
              Scan Fetal<br />
            </div>
          </div>

          <div>
            <ul className="mt-12 list-none space-y-3 textPrimaryColor text-2xl font-light">
              {
                servicios.map((servicio, index) => (
                  <li key={index}>{servicio}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

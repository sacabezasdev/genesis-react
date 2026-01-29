import Image from "next/image";

import Carousel from "./components/Carousel";
import SideBar from "./components/SideBar";
import ImageFrame from "./components/ImageFrame";

import servicios from "./data/servicios.json";

import scanFetal from "./assets/scan.png";

import "./Home.scss";

export default function Home() {
  return (
    <div className="Home mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-8">
        <Carousel />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-4">
        <a
          href="https://informes.genesisvita.com.ar/instructivo/"
          className="container primaryColor rounded-md bg-green-500 hover:brightness-110 text-white shadow transition font-light lead text-center py-2 px-4"
        >
          <span>
            Ingrese aquí para ver sus
          </span>
          <br />
          <span>
            Informes Ecográficos
          </span>
        </a>
        <a
          href="https://genesisvita.portalemprenet.com/index.php"
          className="container secondaryColor rounded-md bg-green-500 hover:brightness-110 text-white shadow transition font-light lead text-center p-2 px-4"
        >
          <span>
            Auto-Gestione Su Turno
          </span>
          <br />
          <span>
            Online
          </span>
        </a>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 px-4 py-4 md:py-10">
        <SideBar />
        <div>
          <h2 className="text-2xl font-semibold">Diagnóstico por Imágenes</h2>
          <ImageFrame image={scanFetal} imageAlt="Scan Fetal" >
            Ecografías 5D<br />
            Screening Primer Trimestre<br />
            Scan Fetal<br />
          </ImageFrame>
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
  );
}

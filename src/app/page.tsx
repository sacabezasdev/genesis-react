import Image from "next/image";

import CarouselContainer from "./components/CarouselContainer";
import SideBar from "./components/SideBar";
import ImageFrame from "./components/ImageFrame";

import servicios from "./data/servicios.json";

import scanFetal from "./assets/scan.png";

import "./Home.scss";

export default function Home() {
  return (
    <>
      <CarouselContainer />
      <div className="Home mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

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
    </>
  );
}

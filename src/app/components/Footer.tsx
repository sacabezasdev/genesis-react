'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import WhatsAppButton from './WhatsAppButton';

import  './Footer.scss';

export default function Footer() {

  return (
    <div id="foot-content" className="Footer bg-neutral-800 text-white py-6">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <div className="space-x-2">
          <a
            href="/inicio"
            className="text-gray-300 hover:text-white transition underline-offset-2 hover:underline {% if page=='inicio' %}font-semibold text-teal-400{% endif %}"
          >
            Inicio
          </a>
          <span>|</span>
          <a
            href="/quienes-somos"
            className="text-gray-300 hover:text-white transition underline-offset-2 hover:underline {% if page=='quienes-somos' %}font-semibold text-teal-400{% endif %}"
          >
            Quiénes Somos
          </a>
          <span>|</span>
          <a
            href="/equipo-medico"
            className="text-gray-300 hover:text-white transition underline-offset-2 hover:underline {% if page=='equipo-medico' %}font-semibold text-teal-400{% endif %}"
          >
            Equipo Médico
          </a>
          <span>|</span>
          <a
            href="/contactenos"
            className="text-gray-300 hover:text-white transition underline-offset-2 hover:underline {% if page=='contactenos' %}font-semibold text-teal-400{% endif %}"
          >
            Contáctenos
          </a>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="mailto:info@genesisvita.com.ar"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <FontAwesomeIcon icon={faEnvelope} />
            info@genesisvita.com.ar
          </a>

          <WhatsAppButton size="sm" />
        </div>
      </div>
    </div>
  );
}

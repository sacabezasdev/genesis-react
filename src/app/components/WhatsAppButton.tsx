'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './WhatsAppButton.scss';

type WhatsAppButtonProps = {
  size?: 'sm' | 'lg';
  phone?: string;
};

export default function WhatsAppButton({
  size = 'lg',
  phone = '+549 2996201397',
}: WhatsAppButtonProps) {

  const sizeClasses = {
    sm: 'px-2 py-1',
    lg: 'px-3 py-2 text-3xl',
  };

  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=5492996201397"
        target="_blank"
        className={`rounded-md bg-green-500 hover:brightness-110 ${sizeClasses[size]} text-white shadow transition font-light`}
      >
        <FontAwesomeIcon icon={faWhatsapp} />
        {phone}
      </a>
    </div>
  );
}

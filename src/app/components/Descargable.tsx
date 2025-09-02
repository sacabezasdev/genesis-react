'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

type DescargableProps = {
  link: string;
  size?: 'sm' | 'lg';
  children?: React.ReactNode;
};

export default function Descargable({
  link,
  size = 'lg',
  children,
}: DescargableProps) {

  const sizeClasses = {
    sm: 'px-2 py-1',
    lg: 'px-3 py-2 text-3xl',
  };

  return (
    <div>
      <a
        href={link}
        target="_blank"
        className={`rounded-md bg-red-500 hover:brightness-110 ${sizeClasses[size]} text-white shadow transition font-light`}
      >
        <FontAwesomeIcon icon={faFilePdf} />
        {children}
      </a>
    </div>
  );
}

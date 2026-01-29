import Image from 'next/image';
import EmblaCarousel from './EmblaCarousel';

import './Carousel.scss';

import CAROUSEL_IMAGES from '../data/carousel.json';

export default function Carousel() {
  const slides = CAROUSEL_IMAGES.map((image, index) => (
    <div
      key={index}
      className="relative h-68 md:h-132 w-full flex-shrink-0"
    >
      <Image
        src={image}
        alt=""
        fill
        className="object-contain md:object-cover"
        sizes="100vw"
        priority={index === 0}
      />
    </div>
  ));

  return (
    <div className="CarouselContainer">
      <EmblaCarousel
        slides={slides}
        options={{ loop: true, align: 'center' }}
        autoplayDelayMs={500000}
      />
    </div>
  );
}

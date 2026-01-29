'use client';

import { useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { DotButton } from './EmblaCarouselDotButton';
import { useDotButton } from './useDotButton';

type EmblaCarouselProps = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
  autoplayDelayMs?: number;
  className?: string;
};

export default function EmblaCarousel({
  slides,
  options,
  autoplayDelayMs = 4000,
  className = '',
}: EmblaCarouselProps) {
  // Keep the plugin stable across renders
  const autoplay = useRef(Autoplay({ delay: autoplayDelayMs, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);

  const onNavClick = useCallback((api?: EmblaCarouselType | null) => {
    const a = api ?? emblaApi;
    const plugin = a?.plugins()?.autoplay as ReturnType<typeof Autoplay> | undefined;
    if (!plugin) return;
    (plugin.options.stopOnInteraction === false ? plugin.reset : plugin.stop)();
  }, [emblaApi]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onNavClick);

  return (
    <section className={`embla ${className}`}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, i) => (
            <div className="embla__slide" key={i}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls" aria-label="Controles del carrusel">
        <div className="embla__dots">
          {scrollSnaps.map((_, i) => (
            <DotButton
              key={i}
              onClick={() => onDotButtonClick(i)}
              className={`embla__dot${i === selectedIndex ? ' embla__dot--selected' : ''}`}
              aria-label={`Ir al slide ${i + 1}`}
              aria-pressed={i === selectedIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

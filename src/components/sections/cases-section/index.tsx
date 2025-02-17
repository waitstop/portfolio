import React from 'react';
import { cn } from '@/lib/utils';
import CaseCard from './case-card';
import StatusBadge from './status-badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cases, CaseType } from './cases';

export default function CasesSection(): React.ReactNode {
  return (
    <section className="container mx-auto py-6">
      <h1 className="px-3 text-3xl">Мои работы</h1>
      <p className="px-3 opacity-50">Некоторые из моих недавних проектов.</p>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-6">
        {cases.map(
          ({
            id,
            status,
            title,
            description,
            link,
            className,
            images,
            videos,
          }): React.ReactElement<CaseType> => (
            <CaseCard className={cn('space-y-3', className)} key={id}>
              <div className="space-y-2">
                <a
                  href={link}
                  target="_blank"
                  className={cn('text-xl', link && 'underline')}
                  rel="noreferrer"
                >
                  {title}
                </a>
                <StatusBadge className="block w-fit" status={status} />
              </div>
              <p>{description}</p>
              {images && images.length > 1 ? (
                <Carousel>
                  <CarouselContent>
                    {images.map((img) => (
                      <CarouselItem key={img} className="basis-5/6 cursor-grab">
                        <img src={img} alt="" />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              ) : (
                images &&
                images[0] && (
                  <img
                    className="overflow-hidden rounded-md object-cover"
                    src={images[0]}
                    alt={id}
                  />
                )
              )}
              {videos && videos.length > 0 && (
                // eslint-disable-next-line jsx-a11y/media-has-caption
                <video
                  className="aspect-video rounded-md object-cover"
                  muted
                  autoPlay
                  loop
                >
                  {videos.map(({ src, type }) => (
                    <source src={src} type={type} key={src} />
                  ))}
                </video>
              )}
            </CaseCard>
          )
        )}
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { sasPhotos } from "@/assets/sas";

/** Activar cuando las fotos estén cargadas en src/assets/sas. */
export const SHOW_SAS_GALLERY = false;

export function SasGallery() {
  const { t } = useI18n();
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 6000);
    return () => clearInterval(id);
  }, [api]);

  if (!SHOW_SAS_GALLERY || sasPhotos.length === 0) return null;

  return (
    <div className="mt-10">
      <Carousel opts={{ loop: true, align: "start" }} setApi={setApi}>
        <CarouselContent className="-ml-4">
          {sasPhotos.map((photo) => (
            <CarouselItem key={photo.src} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-brand-navy/10">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/25 to-transparent"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-navy/50">
        {t("sol.programs.gallery.caption")}
      </p>
    </div>
  );
}

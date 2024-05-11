import Autoplay from 'embla-carousel-autoplay';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { useEffect, useRef, useState } from 'react';

export function Slider() {
    const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    const items = ['dak-met-wapen.jpg', 'huis-afstand.jpg', 'overkapping-afstand.jpg', 'uitbouw-2.jpg'];

    return (
        <div className="relative">
            <section className="absolute left-0 top-0 z-20 w-full h-full text-white flex items-center justify-center bg-black bg-opacity-30">
                <div className="px-4 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Welkom bij
                            <strong className="font-extrabold text-primary sm:block"> Stulen bouwservice. </strong>
                        </h1>

                        <p className="mt-4 sm:text-xl/relaxed">Vakmanschap dat u kunt vertrouwen.</p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-primary sm:w-auto"
                                href="tel:+31614653885"
                            >
                                Bel ons nu
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Carousel
                plugins={[plugin.current]}
                opts={{
                    align: 'start',
                    loop: true,
                }}
                setApi={setApi}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className="w-full z-10"
            >
                <CarouselContent className="w-full h-screen">
                    {items.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="min-w-0 shrink-0 grow-0 basis-full pl-0"
                            style={{
                                backgroundImage: `url(/images/${item})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {/* <img src={`/images/overkapping-afstand.jpg`} alt={`${index}`} /> */}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

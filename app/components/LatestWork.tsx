import { Link } from '@remix-run/react';
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

export function LatestWork() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header className="">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Recente Projecten en Realisaties</h2>

                    <p className="mt-4 max-w-xl text-gray-500">
                        Ontdek onze meest recente projecten waarin we ons vakmanschap en onze aandacht voor detail
                        tonen. Elke afbeelding vertegenwoordigt een uniek verhaal van samenwerking en technische
                        uitmuntendheid. Van uitgebreide renovaties tot maatwerk timmerwerk en complexe utiliteitsbouw,
                        bekijk hoe wij de wensen van onze klanten omzetten in concrete realisaties.
                    </p>
                </header>

                <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <li>
                        <Link to="#" className="group relative block">
                            <img
                                src="/images/overkapping.jpg"
                                alt=""
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white">Casual Trainers</h3>

                                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                                    Shop Now
                                </span>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="#" className="group relative block">
                            <img
                                src="/images/uitbouw-2.jpg"
                                alt=""
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white">Winter Jumpers</h3>

                                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                                    Shop Now
                                </span>
                            </div>
                        </Link>
                    </li>

                    <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <Link to="#" className="group relative block">
                            <img
                                src="/images/dak-met-wapen.jpg"
                                alt=""
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

                                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                                    Shop Now
                                </span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}

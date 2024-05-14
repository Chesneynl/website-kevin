import { Link } from '@remix-run/react';

export function LatestWork() {
    return (
        <section>
            <span className="flex items-center">
                <span className="h-px flex-1 bg-gray-100"></span>
            </span>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-24 text-center">
                <header className="">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Recente projecten en realisaties</h2>

                    <p className="mt-4 max-w-xl text-gray-500 mx-auto">
                        Ontdek onze meest recente projecten waarin we ons vakmanschap en onze aandacht voor detail
                        tonen. Elke afbeelding vertegenwoordigt een uniek verhaal van samenwerking en technische
                        uitmuntendheid. Van uitgebreide renovaties tot maatwerk timmerwerk en complexe utiliteitsbouw,
                        bekijk hoe wij de wensen van onze klanten omzetten in concrete realisaties.
                    </p>
                </header>

                <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <li>
                        <Link to="/projecten/overkapping" className="group relative block">
                            <img
                                src="/images/overkapping.webp"
                                alt="Overkapping"
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white">Overkapping</h3>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/projecten/dakkapel" className="group relative block">
                            <img
                                src="/images/dakkapel.webp"
                                alt="Dakkapel"
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white">Dakkapel</h3>
                            </div>
                        </Link>
                    </li>

                    <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <Link to="/projecten/dak-renovatie" className="group relative block">
                            <img
                                src="/images/dak-met-wapen.webp"
                                alt="dak met wapen"
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white">
                                    Dak renovatie met het wapen van Utrecht
                                </h3>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}

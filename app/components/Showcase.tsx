import { Link } from '@remix-run/react';

export function Showcase() {
    return (
        <section>
            <span className="flex items-center">
                <span className="h-px flex-1 bg-gray-100"></span>
            </span>

            <div className="mx-auto max-w-screen-2xl px-4 py-10 md:py-24 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1  lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img
                                alt=""
                                src="/images/huis-afstand.webp"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center bg-gray-100">
                        <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-3xl">Transformeer uw dak met onze dakkapellen</h2>

                            <p className="mt-4 text-gray-600">
                                Ontdek hoe onze op maat gemaakte dakkapellen meer licht en ruimte aan uw woning
                                toevoegen. Elk van onze dakkapellen wordt zorgvuldig ontworpen en gebouwd om perfect aan
                                te sluiten bij de architectuur van uw huis, met gebruik van hoogwaardige materialen voor
                                duurzaamheid en esthetiek. Ze verbeteren niet alleen de visuele aantrekkelijkheid van uw
                                woning, maar bieden ook praktische voordelen zoals verbeterde ventilatie en extra
                                leefruimte, ideaal voor zolderverdiepingen en andere ruimtes die een comfortboost nodig
                                hebben.
                                <br />
                                <br />
                                We zetten ons in voor kwaliteit en vakmanschap van het hoogste niveau, van het initiële
                                ontwerp tot de uiteindelijke installatie. Onze dakkapellen zijn een waardevolle
                                investering voor het verhogen van de functionaliteit en marktwaarde van uw huis. Neem
                                contact op voor een vrijblijvende offerte en laat ons helpen uw huis te transformeren
                                met een prachtige, functionele dakkapel.
                            </p>

                            <Link
                                to="/projecten/dakkapel"
                                className="mt-8 inline-block rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary"
                            >
                                Meer Informatie
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

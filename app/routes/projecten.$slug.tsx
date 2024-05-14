import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import type { MetaFunction } from '@remix-run/node';
import { json, useLoaderData } from '@remix-run/react';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { USPs } from '~/components/USPs';
import { getMeta } from '~/lib/helpers/meta';

const items = [
    {
        slug: 'tv-wand',
        title: 'Stijlvolle en Praktische TV-Wand op Maat',
        introText:
            'Welkom bij ons nieuwste project: een op maat gemaakte TV-wand, speciaal ontworpen om elke woonkamer te transformeren in een ruimte van comfort en stijl. Dit project is het resultaat van nauwkeurige planning en vakmanschap, gericht op het creëren van een functionele maar esthetisch aantrekkelijke oplossing voor het dagelijkse leven. Of je nu een film wilt kijken, gasten wilt entertainen, of simpelweg genieten van een opgeruimde ruimte, onze TV-wand voldoet aan al deze behoeften. Hieronder delen we graag de details van het ontwerp en de eindresultaten van deze prachtige toevoeging aan een modern huis.',
        sliderImages: ['tv-wand.webp', 'tv-wand-2.webp', 'tv-wand-3.webp'],
        firstComponent: {
            title: 'De Creatie van de TV-Wand',
            image: {
                alt: 'TV Wand',
                url: 'tv-wand.webp',
            },
            description:
                'Onze op maat gemaakte TV-wand is het hart van de woonkamer, ontworpen met oog voor detail en functionaliteit. Het ontwerp omvat moderne, strakke lijnen met een minimalistische flair, terwijl het praktische opbergruimtes biedt om alle media-apparatuur netjes te organiseren. Met een focus op gebruiksvriendelijkheid en esthetische integratie in uw interieur, zorgt onze TV-wand voor een harmonieuze uitstraling in elke setting.',
        },
        secondComponent: {
            title: 'Resultaat en Afwerking',
            image: {
                alt: 'TV Wand Resultaat',
                url: 'tv-wand-2.webp',
            },
            description:
                'In plaats van traditionele klantgetuigenissen, richten we ons hier op de visuele en functionele impact van onze TV-wand. Het eindresultaat is een bewijs van ons streven naar perfectie, waarbij elk detail zorgvuldig is overwogen om zowel praktische als esthetische behoeften te vervullen. De reacties die we hebben ontvangen benadrukken de transformationele aard van onze ontwerpen, die niet alleen een ruimte verfraaien maar ook het dagelijks gebruik verbeteren.',
        },
    },
    {
        slug: 'dakkapel',
        title: 'Moderne en Ruimtebesparende Dakkapel',
        introText:
            'Ontdek ons innovatieve project: de installatie van een moderne dakkapel, ontworpen om niet alleen ruimte en licht toe te voegen aan uw bovenverdieping, maar ook om de uitstraling en waarde van uw woning te verhogen. Dit zorgvuldig geplande project combineert functionaliteit met esthetiek, waarbij elke stap is genomen met het oog op duurzaamheid en stijl.',
        sliderImages: ['dakkapel.webp', 'dakkapel-2.webp', 'dakkapel-4.webp'],
        firstComponent: {
            title: 'Het Ontwerp en de Bouw van de Dakkapel',
            image: {
                alt: 'Dakkapel',
                url: 'dakkapel-7.webp',
            },
            description:
                'Onze dakkapel is specifiek ontworpen om maximale lichtinval en ruimte te bieden, zonder de integriteit van het dak te compromitteren. Met een strak, minimalistisch ontwerp dat past bij zowel moderne als traditionele architectuur, biedt deze dakkapel een slimme oplossing voor uitbreidingsbehoeften. Verhoogde plafondhoogte en natuurlijke lichtinval, gebruik van energie-efficiënte materialen voor betere isolatie, en duurzame bouwmaterialen die onderhoudskosten minimaliseren en de levensduur verlengen.',
        },
        secondComponent: {
            title: 'Resultaat en Impact',
            image: {
                alt: 'Dakkapel Resultaat',
                url: 'dakkapel-6.webp',
            },
            description:
                'Ons doel was om een dakkapel te creëren die niet alleen functioneel en mooi is, maar ook de algehele leefbaarheid van de woning verbetert. Het eindresultaat is een naadloze integratie van de dakkapel met de bestaande structuur, waardoor een nieuw, lichtgevend element aan het huis wordt toegevoegd dat de bewoonbare ruimte aanzienlijk vergroot.',
        },
    },
    {
        slug: 'dak-renovatie',
        title: 'Innovatieve Dakrenovatie met Historische Flair',
        introText:
            'Welkom bij ons project van een uitgebreide dakrenovatie, waarbij we niet alleen de functionaliteit hebben verbeterd, maar ook een uniek historisch element hebben toegevoegd. Dit project omvatte het vervangen van de boeidelen, het toevoegen van kunststof rabatdelen voor een betere isolatie en duurzaamheid, en het plaatsen van het wapen van Utrecht op het hoogste punt van het dak, een specifieke wens van de klant die bijdraagt aan de unieke uitstraling van het pand.',
        sliderImages: [
            'dak-renovatie-afstand.webp',
            'dak-met-wapen-donker.webp',
            'dak-met-wapen-met-takken.webp',
            'dak-renovatie.webp',
        ],
        firstComponent: {
            title: 'Vernieuwing van Boeidelen en Kunststof Rabat',
            image: {
                alt: 'Dak Renovatie',
                url: 'dak-renovatie-afstand.webp',
            },
            description:
                'De renovatie omvatte het vervangen van de bestaande boeidelen door nieuwe, hoogwaardige witte planken die zorgen voor een frisse en strakke uitstraling. Daarnaast hebben we kunststof rabatdelen toegevoegd, die niet alleen esthetisch aantrekkelijk zijn, maar ook bijdragen aan de isolatie en bescherming van het gebouw tegen weersinvloeden.',
        },
        secondComponent: {
            title: 'Plaatsing van het Wapen van Utrecht',
            image: {
                alt: 'Dak Renovatie Wapen van Utrecht',
                url: 'wapen-utrecht.webp',
            },
            description:
                'Een bijzonder aspect van deze renovatie was het plaatsen van het wapen van Utrecht op het punt van het dak. Dit element, specifiek gevraagd door onze klant, voegt een historische en persoonlijke touch toe aan het gebouw, waardoor het zich onderscheidt in de omgeving en een trotse verwijzing naar de lokale cultuur en geschiedenis vormt.',
        },
    },
    {
        slug: 'overkapping',
        title: 'Stijlvolle Overkapping met Zwarte Wanden',
        introText:
            'Ontdek ons project van een elegante overkapping, ontworpen om een moderne en stijlvolle buitenruimte te creëren. Deze overkapping kenmerkt zich door de strakke zwarte wanden die een chique en tijdloze uitstraling bieden. Het project combineert functionaliteit met design, waardoor het niet alleen een praktische toevoeging is, maar ook een esthetische verrijking voor elke tuin.',
        sliderImages: ['overkapping.webp', 'overkapping-schuin.webp', 'overkapping-afstand.webp'],
        firstComponent: {
            title: 'Ontwerp en Realisatie',
            image: {
                alt: 'Overkapping',
                url: 'overkapping.webp',
            },
            description:
                'De overkapping is ontworpen met het oog op zowel functionaliteit als esthetiek. De zwarte wanden zijn uitgevoerd in duurzaam materiaal dat weerbestendig is en weinig onderhoud vraagt. De keuze voor zwart zorgt voor een opvallende contrast met de natuurlijke omgeving en verhoogt de visuele impact van de constructie.',
        },
        secondComponent: {
            title: 'Functionaliteit en Gebruik',
            image: {
                alt: 'Overkapping met Zitgelegenheid',
                url: 'overkapping-afstand.webp',
            },
            description:
                'Deze overkapping biedt niet alleen bescherming tegen zon en regen, maar dient ook als een uitnodigende buitenruimte voor ontspanning of sociale activiteiten. De strategisch geplaatste verlichting en de integratie van comfortabele zitgelegenheden onderstrepen de bruikbaarheid van de overkapping voor dagelijks genot en avondlijke bijeenkomsten.',
        },
    },
];

export const meta: MetaFunction = ({ params }) => {
    let productTitle = '';

    switch (params.slug) {
        case 'dakkapel':
            productTitle = 'Dakkapel';
            break;
        case 'overkapping':
            productTitle = 'Overkapping';
            break;
        case 'tv-wand':
            productTitle = 'TV Wand';
            break;
        case 'dak-renovatie':
            productTitle = 'Dak Renovatie';
            break;
        default:
            productTitle = 'Onze Projecten';
            break;
    }

    return getMeta(`${productTitle} Project`);
};

export const loader = async ({ params }: { params: { slug: string } }) => {
    const slug = params.slug;
    const project = items.find((item) => item.slug === slug);

    if (!project) {
        throw new Response('Not Found', { status: 404 });
    }
    return json({ project });
};

export default function Project() {
    const { project } = useLoaderData<typeof loader>();

    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

    return (
        <div className="w-full">
            <div className="relative">
                <section className="absolute pointer-events-none left-0 top-0 z-20 w-full h-full text-white flex items-center justify-center px-16">
                    <div className="px-4 lg:flex lg:h-[400px] lg:items-center">
                        <div className="mx-auto max-w-xl text-center">
                            <h1 className="text-3xl font-extrabold sm:text-5xl ">{project.title}</h1>
                        </div>
                    </div>
                </section>
                <Carousel
                    plugins={[plugin.current]}
                    opts={{
                        // align: 'start',
                        loop: true,
                    }}
                    className="w-full z-10"
                >
                    <CarouselContent className="w-full h-[700px]">
                        {project.sliderImages.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="min-w-0 shrink-0 grow-0 basis-full pl-0"
                                style={{
                                    backgroundImage: `url(/images/${item})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            ></CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious
                        size="lg"
                        className="absolute top-1/2 left-5 md:left-10 bg-primary w-10 h-10 border-none shadow-md text-black -translate-y-1/2"
                    />
                    <CarouselNext
                        size="lg"
                        className="absolute top-1/2 right-5 md:right-10 bg-primary w-10 h-10 border-none shadow-md text-black -translate-y-1/2"
                    />
                </Carousel>
            </div>
            <div className="container px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24 lg:pb-24 text-center max-w-5xl">
                <p className="mx-auto mt-4 text-gray-500">{project.introText}</p>
            </div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                                alt={project.firstComponent.image.alt}
                                src={`/images/${project.firstComponent.image.url}`}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">{project.firstComponent.title}</h2>

                            <p className="mt-4 text-gray-600">{project.firstComponent.description}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80  lg:h-full">
                            <img
                                alt={project.secondComponent.image.alt}
                                src={`/images/${project.secondComponent.image.url}`}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">{project.secondComponent.title}</h2>

                            <p className="mt-4 text-gray-600">{project.secondComponent.description}</p>
                        </div>
                    </div>
                </div>
            </section>
            <USPs />
        </div>
    );
}

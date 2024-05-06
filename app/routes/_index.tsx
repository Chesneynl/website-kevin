import type { MetaFunction } from '@remix-run/node';
import { FAQ, LatestWork, ShortText, Slider } from '~/components';

export const meta: MetaFunction = () => {
    return [
        { title: 'Maatwerk Timmerwerk en Renovaties | Stulen bouwservice | Omgeving Utrecht ' },
        {
            name: 'description',
            content:
                'Ontdek topkwaliteit in timmerwerk, burgerlijke en utiliteitsbouw, en renovatie werkzaamheden door uw lokale expert. Betrouwbaar, duurzaam en op maat gemaakt voor al uw bouwbehoeften. Neem contact op voor uw project!',
        },
    ];
};

// export const loader = async ({ params }) => {
//     console.log({ params });
//     const contact = null;

//     if (!contact) {
//         throw new Response('Not Found', { status: 404 });
//     }
//     return json({ contact });
// };

export default function Index() {
    // const { contact } = useLoaderData<typeof loader>();

    // console.log({ contact });

    return (
        <div className="w-full">
            <Slider />
            <div className="container px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24 text-center">
                <h2 className="text-xl font-extrabold text-gray-900 sm:text-3xl">
                    Ontdek Vakmanschap in Bouw en Renovatie bij Stulen bouwservice
                </h2>

                <p className="mx-auto mt-4 text-gray-500">
                    Welkom bij Stulen bouwservice, uw betrouwbare partner voor alle timmerwerken, burgerlijke en
                    utiliteitsbouw en renovatieprojecten. Met jarenlange ervaring in de bouwsector bieden wij u
                    vakmanschap en precisie in elk project, groot of klein. Wij staan garant voor maatwerkoplossingen
                    die perfect aansluiten bij uw wensen en behoeften. Onze toewijding aan kwaliteit en duurzaamheid
                    maakt ons dé keuze voor uw volgende bouwproject in omgeving Utrecht. Ontdek wat wij voor u kunnen
                    betekenen en neem vandaag nog contact met ons op voor een vrijblijvende offerte.
                </p>
            </div>
            <LatestWork />
        </div>
    );
}

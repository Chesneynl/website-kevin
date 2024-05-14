import type { MetaFunction } from '@remix-run/node';
import { LatestWork, Showcase, Slider } from '~/components';
import { USPs } from '~/components/USPs';
import { getMeta } from '~/lib/helpers/meta';

export const meta: MetaFunction = () => {
    return getMeta('Maatwerk Timmerwerk en Renovatie');
};

export default function Index() {
    return (
        <div className="w-full">
            <Slider />
            <div className="container px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24 lg:pb-24 text-center max-w-5xl">
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
            <Showcase />
            <LatestWork />
            <USPs />
        </div>
    );
}

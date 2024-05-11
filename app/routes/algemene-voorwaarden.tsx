import type { MetaFunction } from '@remix-run/node';
import BackgroundImageText from '~/components/BannerImage';

import { getMeta } from '~/lib/helpers/meta';

export const meta: MetaFunction = () => {
    return getMeta('Algemene Voorwaarden');
};

export default function Privacybeleid() {
    return (
        <>
            <BackgroundImageText title="Algemene voorwaarden" imageUrl="/images/dak-met-wapen.jpg" />

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Algemene Voorwaarden</h1>

                <p className="text-gray-700 mb-4">
                    Welkom bij Stulen bouwservice. Deze algemene voorwaarden beschrijven de regels en voorschriften voor
                    het gebruik van de website van Stulen bouwservice, gevestigd op stulenbouwservice.nl.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">Intellectuele Eigendomsrechten</h2>
                <p className="text-gray-700 mb-4">
                    Tenzij anders aangegeven, bezitten Stulen bouwservice en/of zijn licentiegevers de intellectuele
                    eigendomsrechten voor alle materialen op Stulen bouwservice. Alle intellectuele eigendomsrechten
                    zijn voorbehouden. U mag deze van Stulen bouwservice voor uw eigen persoonlijk gebruik bekijken
                    en/of printen onder voorbehoud van beperkingen die in deze voorwaarden zijn gesteld.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">Gebruiksbeperkingen</h2>
                <p className="text-gray-700 mb-4">
                    U mag het volgende niet:
                    <ul className="list-disc ml-8 mb-4">
                        <li>Materiaal van stulenbouwservice.nl publiceren in andere media;</li>
                        <li>Materiaal van stulenbouwservice.nl verkopen, verhuren of in sublicentie geven;</li>
                        <li>Materiaal van stulenbouwservice.nl reproduceren, dupliceren of kopiëren;</li>
                        <li>De inhoud van stulenbouwservice.nl opnieuw verspreiden;</li>
                    </ul>
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">Beperking van Aansprakelijkheid</h2>
                <p className="text-gray-700 mb-4">
                    In geen geval zal Stulen bouwservice, noch zijn directeuren, werknemers of partners aansprakelijk
                    zijn voor iets dat voortvloeit uit of op enige manier verband houdt met uw gebruik van deze Website,
                    of het nu onder contract is, onrechtmatige daad of anderszins. Stulen bouwservice, inclusief zijn
                    directeuren, werknemers en partners, sluit alle aansprakelijkheid uit voor de gevolgen die binnen uw
                    gebruik van deze website kunnen ontstaan.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">Uw Privacy</h2>
                <p className="text-gray-700 mb-4">
                    <a href="/privacybeleid">Lees Privacybeleid</a>
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">Wijzigingen in de Voorwaarden</h2>
                <p className="text-gray-700 mb-6">
                    Stulen bouwservice is gerechtigd om deze voorwaarden te allen tijde te herzien en door deze website
                    te gebruiken wordt verwacht dat u deze voorwaarden regelmatig controleert.
                </p>
            </div>
        </>
    );
}

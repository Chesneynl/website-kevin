import type { MetaFunction } from '@remix-run/node';
import BackgroundImageText from '~/components/BannerImage';
import { getMeta } from '~/lib/helpers/meta';

export const meta: MetaFunction = () => {
    return getMeta('Privacybeleid');
};

export default function Privacybeleid() {
    return (
        <>
            <BackgroundImageText title="Privacybeleid" imageUrl="/images/dak-met-wapen.jpg" />

            <div className="container mx-auto px-4 pb-24">
                <div className="privacy-policy bg-white rounded-lg p-6 mt-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Privacybeleid voor Stulen Bouwservice</h2>
                    <p className="mt-4 text-gray-600">
                        Bij Stulen Bouwservice, toegankelijk vanaf onze website, is een van onze hoofdprioriteiten de
                        privacy van onze bezoekers. Dit Privacybeleid document bevat soorten informatie die worden
                        verzameld en vastgelegd door Stulen Bouwservice en hoe we deze gebruiken.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6">
                        Persoonsgegevens die we verzamelen en waarom we deze verzamelen
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-800 mt-4">Contactformulieren</h4>
                    <p className="text-gray-600 mt-2">
                        Wanneer bezoekers het contactformulier op onze site invullen, verzamelen we de gegevens getoond
                        in het contactformulier, zoals uw naam en e-mailadres. We verzamelen deze informatie alleen om
                        te kunnen reageren op uw aanvragen of vragen en deze worden niet gebruikt voor
                        marketingdoeleinden.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Opslag van uw gegevens</h3>
                    <p className="text-gray-600 mt-2">
                        Stulen Bouwservice bewaart uw persoonsgegevens alleen zolang als nodig is voor de doeleinden die
                        in dit Privacybeleid zijn vastgesteld. Wij zullen uw gegevens beschermen en beveiligen volgens
                        de beste praktijken en zullen geen persoonlijke informatie delen met derden, tenzij dit
                        wettelijk vereist is.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Uw privacyrechten</h3>
                    <p className="text-gray-600 mt-2">
                        Als u wilt dat wij uw persoonlijke informatie corrigeren, aanpassen, verwijderen, of de toegang
                        daartoe wilt beperken, kunt u te allen tijde contact met ons opnemen via onze contactpagina.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Contactinformatie</h3>
                    <p className="text-gray-600 mt-2">
                        Voor vragen over ons privacybeleid of de gegevens die we over u verzamelen, kunt u contact
                        opnemen via <a href="mailto:stulenbouwservice@gmail.com">stulenbouwservice@gmail.com</a>.
                    </p>
                </div>
            </div>
        </>
    );
}

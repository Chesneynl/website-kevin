import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import BackgroundImageText from '~/components/BannerImage';
import { USPs } from '~/components/USPs';
import { getMeta } from '~/lib/helpers/meta';

export const meta: MetaFunction = () => {
    return getMeta('Onze Projecten');
};

export default function Project() {
    const items = [
        {
            imageUrl: 'tv-wand.jpg',
            title: 'TV Wand',
            url: '/tv-wand',
        },
        {
            imageUrl: 'dakkapel.jpg',
            title: 'Dakkapel',
            url: '/dakkapel',
        },
        {
            imageUrl: 'dak-met-wapen.jpg',
            title: 'Dak met rabat',
            url: '/dak-',
        },
        {
            imageUrl: 'overkapping.jpg',
            title: 'Overkapping',
            url: '/overkapping',
        },
    ];

    return (
        <div className="w-full">
            <BackgroundImageText title="Onze projecten" imageUrl="/images/dakkapel.jpg" />
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 md:py-24 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                        Ontdek Onze Gerealiseerde Projecten
                    </h1>

                    <p className="mt-4 text-center text-gray-500 dark:text-gray-300 mb-10">
                        Ontdek onze diversiteit aan voltooide projecten die onze toewijding aan kwaliteit en innovatie
                        weerspiegelen. Van woningrenovaties tot commerciële bouwprojecten, ontdek hoe wij onze expertise
                        tot leven brengen.
                    </p>

                    <div className="grid grid-cols-1 gap-8 mt-8  md:grid-cols-2">
                        {items.map((item, key) => (
                            <Link to={`/projecten/${item.url}`} key={`item-${key}`}>
                                <div
                                    className="h-[400px] object-cover w-full rounded-lg block hover:opacity-90 transition-all"
                                    style={{
                                        backgroundImage: `url(/images/${item.imageUrl})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                />
                                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                                    {item.title}
                                </h2>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <USPs />
        </div>
    );
}

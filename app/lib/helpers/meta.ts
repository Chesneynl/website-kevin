export function getMeta(title: string) {
    return [
        { title: `${title} | Stulen bouwservice | Omgeving Utrecht ` },
        {
            property: 'og:image',
            itemprop: 'image',
            content: 'https://stulenbouwservice.nl/images/dak-met-wapen.webp',
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            property: 'site_name',
            content: 'Stulen bouwservice',
        },
        {
            property: 'og:title',
            content: `${title} | Stulen bouwservice | Omgeving Utrecht `,
        },
        {
            property: 'og:description',
            content:
                'Ontdek topkwaliteit in timmerwerk, burgerlijke en utiliteitsbouw, en renovatie werkzaamheden door uw lokale expert. Betrouwbaar, duurzaam en op maat gemaakt voor al uw bouwbehoeften.',
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: `${title} | Stulen bouwservice | Omgeving Utrecht `,
        },
        {
            name: 'twitter:description',
            content:
                'Ontdek topkwaliteit in timmerwerk, burgerlijke en utiliteitsbouw, en renovatie werkzaamheden door uw lokale expert. Betrouwbaar, duurzaam en op maat gemaakt voor al uw bouwbehoeften.',
        },
        {
            name: 'twitter:image',
            content: '/images/dak-met-wapen.webp',
        },
        {
            name: 'description',
            content:
                'Ontdek topkwaliteit in timmerwerk, burgerlijke en utiliteitsbouw, en renovatie werkzaamheden door uw lokale expert. Betrouwbaar, duurzaam en op maat gemaakt voor al uw bouwbehoeften.',
        },
    ];
}

export function getMeta(title: string) {
    return [
        { title: `${title} | Stulen bouwservice | Omgeving Utrecht ` },
        {
            property: 'og:image',
            content: '/images/dak-met-wapen.webp',
        },
        {
            name: 'description',
            content:
                'Ontdek topkwaliteit in timmerwerk, burgerlijke en utiliteitsbouw, en renovatie werkzaamheden door uw lokale expert. Betrouwbaar, duurzaam en op maat gemaakt voor al uw bouwbehoeften.',
        },
    ];
}

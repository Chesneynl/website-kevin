export const loader = () => {
    const content = `
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>https://www.stulenbouwservice.nl/</loc>
                <lastmod>2024-04-11T00:15:16+01:00</lastmod>
                <priority>1.0</priority>
            </url>
            <url>
                <loc>https://www.stulenbouwservice.nl/contact</loc>
                <lastmod>2024-04-11T00:15:16+01:00</lastmod>
                <priority>1.0</priority>
            </url>
            <url>
                <loc>https://www.stulenbouwservice.nl/projecten</loc>
                <lastmod>2024-04-11T00:15:16+01:00</lastmod>
                <priority>1.0</priority>
            </url>
            <url>
                <loc>https://www.stulenbouwservice.nl/projecten/dakkapel</loc>
                <lastmod>2024-04-11T00:15:16+01:00</lastmod>
                <priority>1.0</priority>
            </url>
            <url>
                <loc>https://www.stulenbouwservice.nl/projecten/dak-renovatie</loc>
                <lastmod>2024-04-11T00:15:16+01:00</lastmod>
                <priority>1.0</priority>
            </url>
            <url>
                <loc>https://www.stulenbouwservice.nl/projecten/overkapping</loc>
                <lastmod>2024-04-11T00:15:16+01:00</lastmod>
                <priority>1.0</priority>
            </url>
            <url>
                <loc>https://www.stulenbouwservice.nl/projecten/tv-wand</loc>
                <lastmod>2024-04-11T00:15:16+01:00</lastmod>
                <priority>1.0</priority>
            </url>
            <url>
                <loc>https://www.stulenbouwservice.nl/privacybeleid</loc>
                <lastmod>2024-04-11T00:15:16+01:00</lastmod>
                <priority>1.0</priority>
            </url>
            <url>
                <loc>https://www.stulenbouwservice.nl/algemene-voorwaarden</loc>
                <lastmod>2024-04-11T00:15:16+01:00</lastmod>
                <priority>1.0</priority>
            </url>
        </urlset>
      `;
    // Return the response with the content, a status 200 message, and the appropriate headers for an XML page
    return new Response(content, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
            'xml-version': '1.0',
            encoding: 'UTF-8',
        },
    });
};

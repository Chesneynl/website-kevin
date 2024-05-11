import type { MetaFunction } from '@remix-run/node';
import { getMeta } from '~/lib/helpers/meta';

export const meta: MetaFunction = () => {
    return getMeta('Algemene Voorwaarden');
};

// export const loader = async ({ params }) => {
//     console.log({ params });
//     const contact = null;

//     if (!contact) {
//         throw new Response('Not Found', { status: 404 });
//     }
//     return json({ contact });
// };

export default function Project() {
    // const { contact } = useLoaderData<typeof loader>();

    // console.log({ contact });

    return <div className="w-full">yoyoyo</div>;
}

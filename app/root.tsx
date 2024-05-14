import { LinksFunction } from '@remix-run/node';
import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import styles from './globals.css?url';
import Header from './components/Header';
import Footer from './components/Footer';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export function ErrorBoundary() {
    return (
        <html lang="nl">
            <head>
                <title>Oops!</title>
                <Meta />
                <Links />
            </head>
            <body className="container text-center py-20 text-3xl ">
                Oops, er ging iets mis!
                <br />
                <br />
                <Link to="/" className="text-xl text-primary">
                    Terug naar home
                </Link>
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

import { Link } from '@remix-run/react';
import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm">
            <nav className="container flex items-center justify-between p-2 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="">
                        <span className="sr-only">Your Company</span>
                        <img className="h-20 w-auto" src="/logo.png" alt="" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setIsOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 items-center">
                    <Link
                        to="/"
                        className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                        aria-expanded="false"
                    >
                        Home
                    </Link>
                    <div
                        className="relative pb-20 -mb-20"
                        onMouseEnter={() => setSubmenuOpen(true)}
                        onMouseLeave={() => setSubmenuOpen(false)}
                    >
                        <Link
                            to="/projecten"
                            className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                            aria-expanded="false"
                        >
                            Onze projecten
                            <svg
                                className="h-5 w-5 flex-none text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>

                        <div
                            className={`${
                                submenuOpen ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'
                            } absolute -right-0 translate-x-1/2 top-7 z-40 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-all`}
                        >
                            <div className="p-4">
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div className="flex-auto">
                                        <Link to="/projecten/tv-wand" className="block font-semibold text-gray-900">
                                            TV wand
                                            <span className="absolute inset-0"></span>
                                        </Link>
                                        <p className="mt-1 text-gray-600">Stijlvolle en Praktische TV-Wand op Maat</p>
                                    </div>
                                </div>
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div className="flex-auto">
                                        <Link to="/projecten/dakkapel" className="block font-semibold text-gray-900">
                                            Dakkapel
                                            <span className="absolute inset-0"></span>
                                        </Link>
                                        <p className="mt-1 text-gray-600">Moderne en Ruimtebesparende Dakkapel</p>
                                    </div>
                                </div>
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div className="flex-auto">
                                        <Link
                                            to="/projecten/dak-renovatie"
                                            className="block font-semibold text-gray-900"
                                        >
                                            Dak renovatie
                                            <span className="absolute inset-0"></span>
                                        </Link>
                                        <p className="mt-1 text-gray-600">
                                            Innovatieve Dakrenovatie met Historische Flair
                                        </p>
                                    </div>
                                </div>
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div className="flex-auto">
                                        <Link to="/projecten/overkapping" className="block font-semibold text-gray-900">
                                            Overkapping
                                            <span className="absolute inset-0"></span>
                                        </Link>
                                        <p className="mt-1 text-gray-600">Stijlvolle Overkapping met Zwarte Wanden</p>
                                    </div>
                                </div>
                                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#e3940d] border  bg-[#faa615] border-gray-50 transition-all">
                                    <div className="flex-auto">
                                        <Link
                                            to="https://stulenzonwering.nl"
                                            target="_blank"
                                            className="block font-semibold text-white"
                                            rel="noreferrer"
                                        >
                                            Stulen Zonwering
                                            <span className="absolute inset-0"></span>
                                        </Link>
                                        <p className="mt-1 text-white">Zonwering nodig? bekijk onze andere branche </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                        Contact
                    </Link>
                    <a
                        className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-primary sm:w-auto"
                        href="tel:+31614653885"
                    >
                        Bel ons nu
                    </a>
                </div>
            </nav>
            <div className={`lg:hidden relative z-30 ${!isOpen && 'hidden'}`} role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-10"></div>
                <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Stulen bouwservice</span>
                            <img className="h-12 w-auto" src="/logo.png" alt="Stulen bouwservice" />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 ">
                            <div className="space-y-2 py-6">
                                <Link
                                    to="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </Link>
                                <div className="-mx-3">
                                    <Link
                                        to="/projecten"
                                        onClick={() => setIsOpen(false)}
                                        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        <span>Onze projecten</span>
                                        <svg
                                            className="h-5 w-5 flex-none"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Link>
                                    <div className="mt-2 space-y-2" id="disclosure-1">
                                        <Link
                                            to="/projecten/tv-wand"
                                            onClick={() => setIsOpen(false)}
                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            TV wand
                                        </Link>
                                        <Link
                                            to="/projecten/dakkapel"
                                            onClick={() => setIsOpen(false)}
                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Dakkapel
                                        </Link>
                                        <Link
                                            to="/projecten/dak-renovatie"
                                            onClick={() => setIsOpen(false)}
                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Dak renovatie
                                        </Link>
                                        <Link
                                            to="/projecten/overkapping"
                                            onClick={() => setIsOpen(false)}
                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Overkapping
                                        </Link>
                                    </div>
                                </div>

                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Contact
                                </Link>
                            </div>
                            <div>
                                <a
                                    href={'tel:+31614653885'}
                                    className="mt-8 inline-block rounded-full border border-primary px-12 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
                                >
                                    Bel ons nu
                                </a>
                            </div>
                            <div>
                                <Link
                                    to="https://stulenzonwering.nl"
                                    target="_blank"
                                    className="mt-8 inline-block rounded-full border border-[#faa615] px-12 py-3 text-sm font-medium text-[#faa615] hover:bg-[#faa615] hover:text-white focus:outline-none  active:bg-[#faa615]"
                                    rel="noreferrer"
                                >
                                    Zonwering nodig? Stulen zonwering
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

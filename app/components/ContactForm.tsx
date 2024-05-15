import { Form, useActionData, Link } from '@remix-run/react';

export function ContactForm() {
    const actionData = useActionData();

    return (
        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <h2 className="mb-5 text-2xl font-bold">Neem direct contact met ons op.</h2>
                        <p className="max-w-xl text-lg">
                            Neem contact met ons op via het formulier als u vragen heeft of meer informatie wenst. Wij
                            streven ernaar om binnen 24 uur te reageren. We horen graag van u!
                        </p>

                        <div className="mt-8">
                            Of bel ons meteen op <br />
                            <a href="tel:+31614653885" className="text-2xl font-bold text-primary">
                                06 146 53 885
                            </a>
                        </div>

                        <div className="mt-8">
                            Liever mailen? <br />
                            <a href="mailto:stulenbouwservice@gmail.com" className="text-2xl font-bold text-primary">
                                stulenbouwservice@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        {actionData?.success ? (
                            <>
                                <h2 className="text-2xl font-bold">Bedankt voor uw bericht!</h2>
                                <p className="mt-4">
                                    We hebben uw bericht ontvangen en zullen zo snel mogelijk reageren. <br />
                                    <br />
                                    Terug naar de{' '}
                                    <Link to="/" className="text-primary font-bold">
                                        homepage
                                    </Link>
                                    .
                                </p>
                            </>
                        ) : (
                            <Form method="post" className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="name">
                                        Naam
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                                        placeholder="Naam"
                                        name="name"
                                        type="text"
                                    />
                                    {actionData?.errors?.name && (
                                        <p className="text-red text-xs pl-3 pt-3">{actionData.errors.name}</p>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                                            placeholder="Email"
                                            type="email"
                                            name="email"
                                        />
                                        {actionData?.errors?.email && (
                                            <p className="text-red text-xs pl-3 pt-3">{actionData.errors.email}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="phone">
                                            Phone
                                        </label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                                            placeholder="Telefoonnummer"
                                            type="tel"
                                            name="tel"
                                        />
                                        {actionData?.errors?.tel && (
                                            <p className="text-red text-xs pl-3 pt-3">{actionData.errors.tel}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="name">
                                        Onderwerp
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm border"
                                        placeholder="Onderwerp"
                                        name="subject"
                                        type="text"
                                    />
                                    {actionData?.errors?.subject && (
                                        <p className="text-red text-xs pl-3 pt-3">{actionData.errors.subject}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="message">
                                        Message
                                    </label>

                                    <textarea
                                        className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                                        placeholder="Bericht"
                                        rows={8}
                                        name="message"
                                    ></textarea>
                                    {actionData?.errors?.message && (
                                        <p className="text-red text-xs pl-3 pt-3">{actionData.errors.message}</p>
                                    )}
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-primary px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Verzenden
                                    </button>
                                </div>
                            </Form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

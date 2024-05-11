export function ShortText({
    title,
    description,
    button,
}: {
    title: string;
    description: string;
    button: {
        text: string;
        link: string;
    };
}) {
    return (
        <div className="container px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">{title}</h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">{description}</p>

            <a
                href={button.link}
                className="mt-8 inline-block rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary"
            >
                {button.text}
            </a>
        </div>
    );
}

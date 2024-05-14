import { json, type MetaFunction } from '@remix-run/node';
import { ContactForm } from '~/components';
import BackgroundImageText from '~/components/BannerImage';
import { Resend } from 'resend';
import { z } from 'zod';
import { getMeta } from '~/lib/helpers/meta';

export const meta: MetaFunction = () => {
    return getMeta('Contact');
};

const ContactFormSchema = z.object({
    name: z.string().min(1, 'Naam is verplicht'),
    email: z.string().email('Ongeldig e-mailadres'),
    tel: z.string().min(10, 'Telefoonnummer moet minimaal 10 tekens lang zijn'),
    message: z.string().min(20, 'Bericht moet minimaal 20 tekens lang zijn'),
});

export const action = async ({ request }: { request: Request }) => {
    const formData = await request.formData();

    const name = formData.get('name');
    const email = formData.get('email');
    const tel = formData.get('tel');
    const message = formData.get('message');

    const result = ContactFormSchema.safeParse({
        name,
        email,
        tel,
        message,
    });

    if (!result.success) {
        return json({ errors: result.error.flatten().fieldErrors }, { status: 400 });
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        resend.emails.send({
            from: 'website@stulenbouwservice.nl',
            to: 'stulenbouwservice@gmail.com',
            subject: 'Reactie via contactformulier',
            html: `
                <p>Er is een reactie via het contactformulier ontvangen:</p><br />
                <p>Naam: <strong>${name}</strong></p>
                <p>Email: <strong>${email}/strong></p>
                <p>Telefoonnummer: <strong>${tel}/strong></p>
                <p>Bericht: <br/><strong>${message}/strong></p>
            `,
        });

        return json({ success: true }, { status: 200 });
    } catch (error) {
        return json({ errors: { server: ['Fout bij het verzenden van het formulier.'] } }, { status: 500 });
    }
};

export default function Index() {
    return (
        <div>
            <BackgroundImageText title="Contact" imageUrl="/images/dakkapel.webp" />
            <ContactForm />
        </div>
    );
}

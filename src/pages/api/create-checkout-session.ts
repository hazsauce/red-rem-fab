import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-06-30.basil',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end('Method Not Allowed');
    }

    const { amount } = req.body;

    if (!amount || isNaN(amount)) {
        return res.status(400).json({ error: 'Invalid amount' });
    }

    // Calculate total amount including 3% fee
    const fee = amount * 0.03;
    const totalAmount = amount + fee;

    // Stripe expects amount in cents, rounded to nearest integer
    const unitAmountInCents = Math.round(totalAmount * 100);

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Custom Payment to Red Remington Fab (includes 3% processing fee)',
                    },
                    unit_amount: unitAmountInCents,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/payment`,
    });

    res.status(200).json({ url: session.url });
}

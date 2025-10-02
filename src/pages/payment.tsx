import React from 'react';
import styles from './payment.module.css';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Footer from '../components/Footer';

export default function Payment() {
    const router = useRouter();

    const handleCheckout = () => {
        window.location.href = 'https://buy.stripe.com/6oU4gAc858wFeeYcHxf3a00';
    };

    return (
        <>
            <Head>
                <title>Pay Online | Red Remington Fab</title>
                <meta name="description" content="Secure online payment for Red Remington Fab." />
                {/* Open Graph tags */}
                <meta property="og:title" content="Pay Online | Red Remington Fab" />
                <meta property="og:description" content="Secure online payment portal for Red Remington Fab’s services." />
                <meta property="og:url" content="https://www.redremingtonfab.com/payment" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.redremingtonfab.com/assets/red-rem-logo.png" />
            </Head>
            <Header />
            <div className={styles.pageBackground}>
                <div className={styles.backLinkContainer}>
                    <button
                        onClick={() => router.push('/')}
                        className={styles.backLink}
                        aria-label="Back to home"
                    >
                        ← Back
                    </button>
                </div>
                <div className={styles.container}>
                    <h1 className={styles.title}>Pay Online</h1>
                    <p className={styles.description}>
                        Click the button below to securely pay for Red Remington Fab’s services.
                    </p>
                    <button onClick={handleCheckout} className={styles.button}>
                        Pay Online
                    </button>
                </div>
                <Footer />
            </div>
        </>

    );
}
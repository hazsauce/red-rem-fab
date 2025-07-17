import React from 'react';
import styles from './payment.module.css';
import Header from '../components/Header';
import { useRouter } from 'next/router';

export default function Payment() {
    const router = useRouter();

    const handleCheckout = () => {
        window.location.href = 'https://buy.stripe.com/test_cNi8wR4RPelc3A2d1Basg00';
    };

    return (
        <>
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
            </div>
        </>

    );
}

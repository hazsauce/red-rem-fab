import React from 'react';
import Link from 'next/link';
import styles from './404.module.css';

export default function Custom404() {
    return (
        <div className={styles.container}>
            <div className={styles.big404}>404</div>
            <h1 className={styles.title}>Page not found.</h1>
            <p className={styles.subtitle}>Looks like we couldn't weld this one together.</p>
            <Link href="/" className={styles.homeLink}>
                🔧 Back to Safety
            </Link>
        </div>
    );
}

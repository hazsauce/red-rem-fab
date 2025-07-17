import React from 'react';
import styles from './Header.module.css';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();

    return (
        <header className={styles.header}>
            <div
                className={styles.logoContainer}
                onClick={() => router.push('/')}
                role="button"
                tabIndex={0}
                aria-label="Go to home page"
                onKeyDown={e => e.key === 'Enter' && router.push('/')}
            >
                <img
                    src="/assets/red-rem-logo.png"
                    alt="Red Remington Fab Logo"
                    className={styles.logoImage}
                    draggable={false}
                />
            </div>

            <div
                className={styles.companyName}
                onClick={() => router.push('/')}
                role="button"
                tabIndex={0}
                aria-label="Go to home page"
                onKeyDown={e => e.key === 'Enter' && router.push('/')}
            >
                RED REMINGTON FAB
            </div>

            <div style={{ width: '48px' }}>{/* empty to balance flex */}</div>
        </header>
    );
}

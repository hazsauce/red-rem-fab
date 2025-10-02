import React from 'react';
import styles from './Header.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

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
                <Image
                    src="/assets/red-rem-logo.png"
                    alt="Red Remington Fab Logo"
                    className={styles.logoImage}
                    draggable={false}
                    height={60}
                    width={60}
                    priority
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
                <div className={styles.blurb}>CNC PLASMA CUTTING & CUSTOM FABRICATION</div>
            </div>

            <div style={{ width: '48px' }}>{/* empty to balance flex */}</div>
        </header>
    );
}
import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Header() {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>

            <div
                className={styles.logoContainer}
                onClick={() => router.push('/')}
                role="button"
                tabIndex={0}
            >
                <Image
                    src="/assets/red-rem-logo.png"
                    alt="Red Remington Fab Logo"
                    className={styles.logoImage}
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
            >
                RED REMINGTON FAB

                <div className={styles.blurb}>
                    CNC PLASMA CUTTING & CUSTOM FABRICATION
                </div>
            </div>

            <div className={styles.spacer} />
        </header>
    );
}
import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.RedRem}>
                <Link href="/">
                    RED REM FAB
                </Link>
            </div>

            <div className={styles.links}>
                <Link href="/payment" className={styles.link}>Pay Online</Link>
                <Link href="/gallery" className={styles.link}>Our Work</Link>
            </div>
            <div className={styles.bottom}>
                <p>© {new Date().getFullYear()} Red Remington Fab LLC</p>
                <p className={styles.createdBy}>
                    Created by <span className={styles.wordmark}>HazSauce</span>
                </p>
            </div>
        </footer>
    );
}

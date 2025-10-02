import React from "react";
import styles from "./Gallery.module.css";
import Header from "../components/Header";
import { useRouter } from 'next/router';
import Footer from "../components/Footer";

export default function Gallery() {
    const router = useRouter();
    const items = [
        {
            src: "/assets/rollout-wheel-stand.jpg",
            alt: "Rollout wheel stand for hitch receiver",
            title: "Rollout Wheel Stand for Hitch Receiver",
            price: "$130",
        },
        {
            src: "/assets/hoosier-pole.jpg",
            alt: "Hoosier pole",
            title: "Hoosier Pole",
            price: "$380",
        },
    ];

    return (
        <div className={styles.galleryContainer}>
            <Header />
            <div className={styles.backLinkContainer}>
                <button
                    onClick={() => router.push('/')}
                    className={styles.backLink}
                    aria-label="Back to home"
                >
                    ← Home
                </button>
            </div>
            <main>
                <h1 className={styles.title}>Gallery</h1>
                <div className={styles.galleryGrid}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <img
                                src={item.src}
                                alt={item.alt}
                                className={styles.image}
                            />
                            <h2 className={styles.itemTitle}>{item.title}</h2>
                            <p className={styles.price}>{item.price}</p>
                        </div>
                    ))}
                </div>
                <section className={styles.socialSection}>
                    <h2 className={styles.socialTitle}>See More:</h2>
                    <div className={styles.socialLinks}>
                        <a
                            href="https://www.tiktok.com/@red.redmington.fa"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="/assets/tiktok-icon.png" alt="TikTok" className={styles.iconOnly} />
                        </a>
                        <a
                            href="https://www.facebook.com/redremingtonfab"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="/assets/facebook-icon.png" alt="Facebook" className={styles.iconOnly} />
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

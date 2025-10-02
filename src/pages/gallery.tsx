import React, { useState, useEffect } from "react";
import styles from "./Gallery.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import Image from "next/image";

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

    const [modalOpen, setModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Open modal for clicked image
    const openModal = (index: number) => {
        setCurrentIndex(index);
        setModalOpen(true);
    };

    // Close modal
    const closeModal = () => setModalOpen(false);

    // Navigate images
    const prevImage = () =>
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    const nextImage = () =>
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!modalOpen) return;
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [modalOpen]);

    return (
        <div className={styles.galleryContainer}>
            <Header />
            <div className={styles.backLinkContainer}>
                <button
                    onClick={() => router.push("/")}
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
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={500}
                                height={375}
                                className={styles.image}
                                style={{ cursor: "pointer" }}
                                onClick={() => openModal(index)}
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
                            <Image
                                src="/assets/tiktok-icon.png"
                                alt="TikTok"
                                width={40}
                                height={40}
                                className={styles.iconOnly}
                            />
                        </a>
                        <a
                            href="https://www.facebook.com/redremingtonfab"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                src="/assets/facebook-icon.png"
                                alt="Facebook"
                                width={40}
                                height={40}
                                className={styles.iconOnly}
                            />
                        </a>
                    </div>
                </section>
            </main>

            {/* Modal */}
            {modalOpen && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={`${styles.modalArrow} ${styles['modalArrow-left']}`}onClick={prevImage}>
                            ←
                        </button>
                        <Image
                            src={items[currentIndex].src}
                            alt={items[currentIndex].alt}
                            width={800}
                            height={600}
                            className={styles.modalImage}
                        />

                        <button className={`${styles.modalArrow} ${styles['modalArrow-right']}`} onClick={nextImage}>
                            →
                        </button>
                        <button className={styles.closeButton} onClick={closeModal}>
                            ×
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}

import React, { useState } from 'react';
import styles from './Home.module.css';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Head from 'next/head';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    preferredLanguage: 'English',
  });

  const [status, setStatus] = useState<string | null>(null);

  const router = useRouter();

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Replace async submission with mailto link opening user email client
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    const subject = encodeURIComponent('Contact from Red Remington Fab website');
    const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Language: ${formData.preferredLanguage}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:redremingtonfab@outlook.com?subject=${subject}&body=${body}`;

    // Optional: clear form or set status message
    // setFormData({ name: '', email: '', message: '', phone: '', preferredLanguage: 'English' });
    // setStatus('✅ Ready to send your email!');
  };

  return (
      <div className={styles.container}>
        <Head>
          {/* Open Graph for social sharing */}
          <meta property="og:title" content="Red Remington Fab | Custom Metal Fabrication" />
          <meta
              property="og:description"
              content="Looking for expert metal fabrication? Red Remington Fab delivers quality and reliability in Odessa, TX."
          />
          <meta property="og:url" content="https://www.redremingtonfab.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://www.redremingtonfab.com/assets/red-rem-logo.png" />

          {/* Structured data JSON-LD */}
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: `
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Red Remington Fab LLC",
                "url": "https://www.redremingtonfab.com",
                "logo": "https://www.redremingtonfab.com/favicon.ico",
                "sameAs": [
                  "https://www.facebook.com/redremingtonfab",
                  "https://www.tiktok.com/@red.redmington.fa"
                ]
              }
              `,
              }}
          />
        </Head>
        <Header />

        {/* Main Section */}
        <main className={styles.main}>
          {/* Socials Section & Pay Online Button */}
          <section className={styles.socialSection}>
            <button
                onClick={() => router.push('/payment')}
                className={styles.payButton}
            >
              Pay Online
            </button>

            <h2 className={styles.socialTitle}>Find us on:</h2>
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
            {/* Contact Info Block */}
            <div className={styles.contactInfo}>
              <h2 className={styles.contactTitle}>About Us</h2>
              <div className={styles.contactInfo}>
              <p><strong>Email:</strong> redremingtonfab@outlook.com</p>
              <p><strong>Phone:</strong> (432) 924-8666</p>
              <p><strong>Location:</strong> 11349 Rick St.
                Odessa, TX 79763</p>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className={styles.contactForm}>
            <h2 className={styles.contactTitle}>Contact us</h2>
            <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={styles.input}
                  value={formData.name}
                  onChange={handleChange}
                  required
              />
              <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  required
              />
              <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className={styles.input}
                  value={formData.phone}
                  onChange={handleChange}
              />

              <select
                  name="preferredLanguage"
                  className={styles.input}
                  value={formData.preferredLanguage}
                  onChange={handleChange}
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
              </select>
              <textarea
                  name="message"
                  placeholder="Message"
                  className={styles.textarea}
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
              />
              <button type="submit" className={styles.button}>
                Send
              </button>
            </form>
            {status && <p>{status}</p>}
          </section>
        </main>
      </div>
  );
}

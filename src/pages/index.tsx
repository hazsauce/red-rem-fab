import React, { useState } from 'react';
import styles from './Home.module.css';
import { useRouter } from 'next/router';
import Header from '../components/Header';

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

    window.location.href = `mailto:test@redremingtonfab.com?subject=${subject}&body=${body}`;

    // Could clear form (or keep as is) ???
    // setFormData({ name: '', email: '', message: '' });
    // setStatus('✅ Ready to send your email!');
  };

  return (
      <div className={styles.container}>
        <Header />

        {/* Main Section */}
        <main className={styles.main}>
          {/* Contact Form */}
          <section className={styles.contactForm}>
            <h2 className={styles.contactTitle}>Contact Us</h2>
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

          {/* Socials Section & Pay Online Button */}
          <section className={styles.socialSection}>
            <h2 className={styles.socialTitle}>Find us on:</h2>
            <div className={styles.socialLinks}>
              <a
                  href="https://www.tiktok.com/@red.redmington.fa"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
              >
                {/* Place <img/> tag here when ready to add socials icons */}
                TikTok
              </a>
              <a
                  href="https://www.facebook.com/redremingtonfab"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
              >
                {/* Place <img/> tag here when ready to add socials icons */}
                Facebook
              </a>

            </div>
            <button
                onClick={() => router.push('/payment')} className={styles.button}>
              Pay Online
            </button>
          </section>
        </main>
      </div>
  );
}

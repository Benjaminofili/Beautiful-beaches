import React from 'react';
import styles from './AboutUs.module.css'; // Import the CSS module
import CalaMariolu from "./img/Cala Mariolu, Sardinia, Italy.jpg";

function AboutUs() {
  return (
    <main>
      <section className={styles.aboutUs}>
        <div className={styles.aboutUsContent}>
          <h1>About Us</h1>
          <p>
            Welcome to <span className={styles.highlight}>"BeautyOfBeaches"</span>, your ultimate destination for discovering the world's most beautiful beaches. Our website provides comprehensive information on famous beaches across the globe, showcasing their unique charm and natural beauty.
          </p>
          <p>
            Whether you're planning your next vacation or simply dreaming of sandy shores, <span className={styles.highlight}>"BeautyOfBeaches"</span> offers detailed insights into each beach's location, attractions, and what makes them stand out. From the crystal-clear waters of the Maldives to the stunning cliffs of Italy, we bring the world's best beaches to your fingertips.
          </p>
          <p>
            Our mission is to inspire and inform beach lovers everywhere, helping you find the perfect spot for relaxation, adventure, or simply soaking in the sun. Explore our curated list of beaches and start your journey to paradise with <span className={styles.highlight}> "BeautyOfBeaches."</span>
          </p>
        </div>
        <img src={CalaMariolu} alt="Beautiful Beach Scenery" className={styles.aboutUsImage} /> {/* Ensure the image path is correct */}
      </section>
      <section className={styles.contactDetails}>
        <h2>Contact Information</h2>
        <p><span className={styles.highlight}>Email:</span> contact@beautyofbeaches.com</p>
        <p><span className={styles.highlight}>Address:</span> 123 Beach Road, Paradise City, Ocean State, 12345</p>
        <p><span className={styles.highlight}>Phone:</span> +123 456 7890</p>
      </section>
    </main>
  );
}

export default AboutUs;

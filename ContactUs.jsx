import React from 'react';
import styles from './ContactUs.module.css'; // Import the CSS module
// import 
function ContactUs() {
  return (
    <main>
      <section className={styles.contactUs}>
        <div className={styles.contactUsContent}>
          <h1>Contact Us</h1>
          <p>
            We would love to hear from you! Whether you have questions about the beaches we feature or want to provide feedback, feel free to reach out to us.
          </p>
          <div className={styles.contactDetails}>
            <p><span className={styles.highlight}>Email:</span> contact@beautyofbeaches.com</p>
            <p><span className={styles.highlight}>Address:</span> 123 Beach Road, Paradise City, Ocean State, 12345</p>
            <p><span className={styles.highlight}>Phone:</span> +123 456 7890</p>
          </div>
        </div>
         {/* <img src="/img/contact/Bottle1.jpeg" alt="Contact Us" className={styles.contactImage} />  */}
      </section>
    </main>
  );
}

export default ContactUs;

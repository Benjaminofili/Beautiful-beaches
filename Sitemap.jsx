import React from "react";
import styles from "./Sitemap.module.css";

const Sitemap = () => {
  return (
    <div className={styles.sitemapContainer}>
      <h2 className={styles.title}>Sitemap</h2>
      <ul className={styles.sitemapList}>
        <li className={styles.sitemapItem}>
          <a href="/" className={styles.sitemapLink}>Home</a>
        </li>
        <li className={styles.sitemapItem}>
          <a href="/gallery" className={styles.sitemapLink}>Gallery</a>
        </li>
        <li className={styles.sitemapItem}>
          <a href="/feedback" className={styles.sitemapLink}>Feedback</a>
        </li>
        <li className={styles.sitemapItem}>
          <a href="/about-us" className={styles.sitemapLink}>About Us</a>
        </li>
        <li className={styles.sitemapItem}>
          <a href="/contact-us" className={styles.sitemapLink}>Contact Us</a>
        </li>
        <li className={styles.sitemapItem}>
          <a href="/beach-information" className={styles.sitemapLink}>Beach Information</a>
          <ul className={styles.subList}>
            <li className={styles.sitemapSubItem}>
              <a href="/beach-information/north-zone" className={styles.sitemapLink}>North Zone</a>
            </li>
            <li className={styles.sitemapSubItem}>
              <a href="/beach-information/south-zone" className={styles.sitemapLink}>South Zone</a>
            </li>
            <li className={styles.sitemapSubItem}>
              <a href="/beach-information/east-zone" className={styles.sitemapLink}>East Zone</a>
            </li>
            <li className={styles.sitemapSubItem}>
              <a href="/beach-information/west-zone" className={styles.sitemapLink}>West Zone</a>
            </li>
          </ul>
        </li>
        <li className={styles.sitemapItem}>
          <a href="/downloads" className={styles.sitemapLink}>Download Beach Information</a>
          <ul className={styles.subList}>
            <li className={styles.sitemapSubItem}>
              <a href="/downloads/lofoten-pdf" className={styles.sitemapLink}>Download Lofoten PDF</a>
            </li>
            <li className={styles.sitemapSubItem}>
              <a href="/downloads/goose-spit-park-pdf" className={styles.sitemapLink}>Download Goose Spit Park PDF</a>
            </li>
            <li className={styles.sitemapSubItem}>
              <a href="/downloads/reynisfjara-beach-pdf" className={styles.sitemapLink}>Download Reynisfjara Beach PDF</a>
            </li>
          </ul>
        </li>
        <li className={styles.sitemapItem}>
          <a href="/downloads-docs" className={styles.sitemapLink}>Download Zone Guide as Word Document</a>
          <ul className={styles.subList}>
            <li className={styles.sitemapSubItem}>
              <a href="/downloads-docs/lofoten-doc" className={styles.sitemapLink}>Download Lofoten DOC</a>
            </li>
            <li className={styles.sitemapSubItem}>
              <a href="/downloads-docs/goose-spit-park-doc" className={styles.sitemapLink}>Download Goose Spit Park DOC</a>
            </li>
            <li className={styles.sitemapSubItem}>
              <a href="/downloads-docs/reynisfjara-beach-doc" className={styles.sitemapLink}>Download Reynisfjara Beach DOC</a>
            </li>
          </ul>
        </li>
        <li className={styles.sitemapItem}>
          <a href="/contact-details" className={styles.sitemapLink}>Contact Details</a>
        </li>
        <li className={styles.sitemapItem}>
          <a href="/advertise" className={styles.sitemapLink}>Advertise</a>
        </li>
      </ul>
    </div>
  );
};

export default Sitemap;

import React from "react";
import styles from "./Footer.module.css";
import Ticker from "./Ticker";
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.socialLinks}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
            {/* Add other social media links */}
          </div>
          <div className={styles.contactInfo}>
            <p>
              <strong>Contact Us:</strong>
            </p>
            <p>Email: <a href="mailto:benjaminofili123@gmail.com">benjaminofili123@gmail.com</a></p>
            <p>Address: 123 Beach Avenue, Coastline City</p>
            <p>Phone: <a href="tel:+2348135011286">+234 813 501 1286</a></p>
          </div>
          <div className={styles.siteLinks}>
            <p><Link to="/Sitemap">Site Map</Link></p>
            <p><Link to="/gallery">Gallery</Link></p>
            <p><Link to="/about">About Us</Link></p>
            <p><Link to="/Queries">Queries</Link></p>
            <p><Link to="/contact">Contact Us</Link></p>
          </div>
          <div className={styles.advertiseSection}>
            <p><strong>Advertise:</strong></p>
            <p>Looking to reach your destination? Check out our recommended options:</p>
            <ul>
              <li><Link to="/bus-options">Bus Services</Link></li>
              <li><Link to="/flight-options">Flights</Link></li>
            </ul>
          </div>
        </div>
      </footer>
      <Ticker />
    </div>
  );
};

export default Footer;

// import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import Ticker from "./Ticker";

const Footer = () => {
  // const [location, setLocation] = useState("Fetching location...");

  // // Get location using Geolocation API
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         fetch(
  //           `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
  //         )
  //           .then((response) => response.json())
  //           .then((data) => {
  //             setLocation(`${data.address.city}, ${data.address.country}`);
  //           })
  //           .catch(() => {
  //             setLocation("Location: Unable to retrieve");
  //           });
  //       },
  //       () => {
  //         setLocation("Location: Permission denied");
  //       }
  //     );
  //   } else {
  //     setLocation("Location: Not supported");
  //   }
  // }, []);

  // useEffect(() => {
  //   const updateDateTime = () => {
  //     const now = new Date();
  //     document.getElementById("dateTime").textContent = now.toLocaleString();
  //   };
  //   setInterval(updateDateTime, 1000);
  // }, []);

  return (
    <div>
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.socialLinks}>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
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
      </div>
      
    </footer>
    <Ticker />
    </div>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import styles from './Ticker.module.css'; 

const Ticker = () => {
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('Fetching location...');

  useEffect(() => {
    // Function to update date and time
    const updateDateTime = () => {
      const now = new Date();
      setDateTime(now.toLocaleString());
    };

    // Function to update the location using geolocation and Nominatim API
    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
              .then(response => response.json())
              .then(data => {
                if (data.address && data.address.city && data.address.country) {
                  const locationStr = `${data.address.city}, ${data.address.country}`;
                  setLocation(`Location: ${locationStr}`);
                } else {
                  setLocation('Location: Unable to determine');
                }
              })
              .catch(() => {
                setLocation('Location: Unable to retrieve');
              });
          },
          (error) => {
            if (error.code === error.PERMISSION_DENIED) {
              setLocation('Location: Permission denied');
            } else {
              setLocation('Location: Unable to retrieve');
            }
          }
        );
      } else {
        setLocation('Location: Not supported');
      }
    };

    // Update date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Get the location once on page load
    updateLocation();

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.tickerContent}>
        {dateTime} | {location}
      </div>
    </div>
  );
};

export default Ticker;

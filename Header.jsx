import React, { useEffect } from 'react';
import styles from './Header.module.css';
import logo from './img/logo1-removebg-preview.png'; 
import { NavLink  } from 'react-router-dom';
const Header = () => {

    useEffect(() => {
        // Visitor count increment and storage
        let visitorCountElement = document.getElementById("visitorCount");
        let visitorCount = localStorage.getItem('visitorCount') || 0;
        visitorCount = parseInt(visitorCount) + 1;
        localStorage.setItem('visitorCount', visitorCount);
        visitorCountElement.textContent = visitorCount;
    }, []);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
            <ul className={styles.navList}>
                    <li><NavLink exact to="/" activeClassName={styles.active} className={styles.navLink}>Home</NavLink></li>
                    <li><NavLink to="/gallery" activeClassName={styles.active} className={styles.navLink}>Gallery</NavLink></li>
                    <li><NavLink to="/feedback" activeClassName={styles.active} className={styles.navLink}>Feedback</NavLink></li>
                    <li><NavLink to="/about" activeClassName={styles.active} className={styles.navLink}>About Us</NavLink></li>
                    <li><NavLink to="/contact" activeClassName={styles.active} className={styles.navLink}>Contact Us</NavLink></li>
                </ul>
</nav>

            <div className={styles.logoVisitorContainer}>
                <div className={styles.logo}>
                <NavLink to="/" exact>
                        <img src={logo} alt="Logo" className={styles.logoImage} />
                    </NavLink>
                    <div className={styles.visitorCount}>
                        Visitors: <span id="visitorCount">0</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

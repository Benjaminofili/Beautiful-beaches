import React, { useState } from 'react';
import styles from './Beachinfo.module.css';
import LofotenIslands from "./img/Lofoten Islands Night.jpg";
import ReynisfjaraBeach from "./img/Reynisfjara Beach, Iceland.jpg";
import GooseSpitPark from "./img/Goose Spit Park, Canada.jpg";
import BondiBeach from "./img/Bondi Beach, Australia.jpeg";
import CopacabanaBeach from "./img/Copacabana Beach, Brazil.jpg";
import AnseSourceDArgent from "./img/Anse Source d' Argent, Seychelles.jpg";
import Phuket from "./img/Phuket, Thailand.jpg";
import WhiteBeach from "./img/White Beach, Philippines.jpg";
import AdduCity from "./img/Addu City, Maldives.jpg";
import WaikikiBeach from "./img/Waikiki Beach, Hawaii.jpeg";
import SantaMonicaBeach from "./img/Santa Monica Beach, USA.jpg";
import VeniceBeach from "./img/Venice Beach.jpg";
import myVideo from './img/live.mp4';
import Download from './Download';

const BeachInfoWithZones = () => {
    const [activeZone, setActiveZone] = useState('north');

    const zones = {
        north: {
            title: 'North Zone Beaches',
            description: 'Explore the pristine beauty of beaches located in the northern regions of the world...',
            beaches: [
                {
                    name: 'Lofoten Islands, Norway',
                    description: 'Stunning Arctic beaches with crystal-clear waters and dramatic mountain backdrops.',
                    img: LofotenIslands,
                    rating: 4.5,
                },
                {
                    name: 'Reynisfjara Beach, Iceland',
                    description: 'Known for its black volcanic sand and unique rock formations.',
                    img: ReynisfjaraBeach,
                    rating: 4.7,
                },
                {
                    name: 'Goose Spit Park, Canada',
                    description: 'Popular destination with gentle waves, soft sand, and stunning mountain views.',
                    img: GooseSpitPark,
                    rating: 4.3,
                },
            ],
        },
        south: {
            title: 'South Zone Beaches',
            description: 'Discover the warm and inviting beaches of the southern hemisphere...',
            beaches: [
                {
                    name: 'Bondi Beach, Australia',
                    description: 'Famous for its golden sands and excellent surfing conditions.',
                    img: BondiBeach,
                    rating: 4.6,
                },
                {
                    name: 'Anse Source d\'Argent, Seychelles',
                    description: 'Renowned for its stunning pink sands and granite boulders.',
                    img: AnseSourceDArgent,
                    rating: 4.8,
                },
                {
                    name: 'Copacabana Beach, Brazil',
                    description: 'A lively beach known for its festive atmosphere and beautiful scenery.',
                    img: CopacabanaBeach,
                    rating: 4.7,
                },
            ],
        },
        east: {
            title: 'East Zone Beaches',
            description: 'The East Zone offers a mix of serene and bustling beaches...',
            beaches: [
                {
                    name: 'Phuket, Thailand',
                    description: 'Known for its clear waters, vibrant nightlife, and luxurious resorts.',
                    img: Phuket,
                    rating: 4.4,
                },
                {
                    name: 'White Beach, Philippines',
                    description: 'A beautiful beach famous for its powdery white sands and crystal-clear waters.',
                    img: WhiteBeach,
                    rating: 4.9,
                },
                {
                    name: 'Maldives',
                    description: 'An iconic destination with overwater bungalows and pristine coral reefs.',
                    img: AdduCity,
                    rating: 4.8,
                },
            ],
        },
        west: {
            title: 'West Zone Beaches',
            description: 'The West Zone features some of the world\'s most famous beaches...',
            beaches: [
                {
                    name: 'Waikiki Beach, Hawaii',
                    description: 'A world-renowned beach with clear blue waters and a vibrant atmosphere.',
                    img: WaikikiBeach,
                    rating: 4.7,
                },
                {
                    name: 'Santa Monica Beach, USA',
                    description: 'A popular destination with a historic pier, lively boardwalk, and great surf.',
                    img: SantaMonicaBeach,
                    rating: 4.6,
                },
                {
                    name: 'Venice Beach, USA',
                    description: 'Known for its eclectic boardwalk and artistic vibe.',
                    img: VeniceBeach,
                    rating: 4.5,
                },
            ],
        },
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        return (
            <>
                {'★'.repeat(fullStars)}
                {halfStar && '☆'}
            </>
        );
    };

    return (
        <section className={styles.infoSection}>
            {/* Video Section */}
            <div className={styles.videoContainer}>
                <video className={styles.video} autoPlay loop muted>
                    <source src={myVideo} type="video/mp4" />
                </video>
                <div className={styles.welcomeText}>
                    <h1>Welcome to Our Beach Paradise</h1>
                    <p>Discover the world's most breathtaking beaches, where relaxation and adventure await.</p>
                </div>
            </div>

            {/* Beach Information Section */}
            <div className="beach-info">
                <h1>Beach Information</h1>
                <div className={styles.zoneContainer}>
                    <div className={styles.zoneTabs}>
                        {Object.keys(zones).map((zoneKey) => (
                            <button
                                key={zoneKey}
                                className={`${styles.zoneTab} ${activeZone === zoneKey ? styles.active : ''}`}
                                onClick={() => setActiveZone(zoneKey)}
                            >
                                {zones[zoneKey].title.split(' ')[0]} Zone
                            </button>
                        ))}
                    </div>

                    <div className={styles.zoneContent}>
                        <h2>{zones[activeZone].title}</h2>
                        <p>{zones[activeZone].description}</p>
                        <ul>
                            {zones[activeZone].beaches.map((beach, index) => (
                                <li key={index}>
                                    <h3>{beach.name}</h3>
                                    <p>{renderStars(beach.rating)} {beach.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.container}>
                        {zones[activeZone].beaches.map((beach, index) => (
                            <div key={index} className={styles.card}>
                                <img src={beach.img} alt={beach.name} />
                                <div className={styles.cardContent}>
                                    <h2 className={styles.title}>{beach.name}</h2>
                                    <p className={styles.rating}>{renderStars(beach.rating)}</p>
                                    <p className={styles.location}>{beach.description}</p>
                                    <a href="#"><p>Learn More</p></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Download zone={activeZone} />
            </div>
        </section>
    );
}

export default BeachInfoWithZones;

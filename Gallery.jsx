import React from "react";
import styles from "./Gallery.module.css";

// Importing images
import IpanemaBeach from "./img/Ipanema Beach in Brazil.jpg";
import AnseSourceDArgent from "./img/Anse Source d' Argent, Seychelles.jpg";
import Arcomagno from "./img/Arcomagno, Calabria, Italy.jpg";
import AdduCity from "./img/Addu City, Maldives.jpg";
import CalaLuna from "./img/Cala Luna, Sardinia, Italy.jpg";
import BenagilCaves from "./img/Benagil Caves, Portugal.jpg";
import CalaMariolu from "./img/Cala Mariolu, Sardinia, Italy.jpg";
import Elafonissi from "./img/Elafonissi, Crete, Greece.jpg";
import Zakynthos from "./img/Zakynthos, Greece.jpg";
import Fakarava from "./img/Fakarava, French Polynesia.jpg";
import GraceBay from "./img/Grace Bay, Turks and Caicos.jpg";
import Krabi from "./img/Krabi,Thailand.jpg";
import PuntaMolentis from "./img/Punta Molentis, Sardinia, Italy.jpg";
import PinkBeach from "./img/Pink Beach, Komodo Island, Indonesia.jpg";
import LofotenIslands from "./img/Lofoten Islands Night.jpg";
import ReynisfjaraBeach from "./img/Reynisfjara Beach, Iceland.jpg";
import GooseSpitPark from "./img/Goose Spit Park, Canada.jpg";
import BondiBeach from "./img/Bondi Beach, Australia.jpeg";
import CopacabanaBeach from "./img/Copacabana Beach, Brazil.jpg";
import Phuket from "./img/Phuket, Thailand.jpg";
import WhiteBeach from "./img/White Beach, Philippines.jpg";
import WaikikiBeach from "./img/Waikiki Beach, Hawaii.jpeg";
import SantaMonicaBeach from "./img/Santa Monica Beach, USA.jpg";
import VeniceBeach from "./img/Venice Beach.jpg";

const Gallery = () => {
  const images = [
    {
      src: IpanemaBeach,
      alt: "Ipanema Beach, Brazil",
      title: "Ipanema Beach, Brazil",
    },
    {
      src: AnseSourceDArgent,
      alt: "Anse Source d'Argent, Seychelles",
      title: "Anse Source d'Argent, Seychelles",
    },
    {
      src: Arcomagno,
      alt: "Arcomagno, Calabria, Italy",
      title: "Arcomagno, Calabria, Italy",
    },
    {
      src: AdduCity,
      alt: "Addu City, Maldives",
      title: "Addu City, Maldives",
    },
    {
      src: CalaLuna,
      alt: "Cala Luna, Sardinia, Italy",
      title: "Cala Luna, Sardinia, Italy",
    },
    {
      src: BenagilCaves,
      alt: "Benagil Caves, Portugal",
      title: "Benagil Caves, Portugal",
    },
    {
      src: CalaMariolu,
      alt: "Cala Mariolu, Sardinia, Italy",
      title: "Cala Mariolu, Sardinia, Italy",
    },
    {
      src: Elafonissi,
      alt: "Elafonissi Crete, Greece",
      title: "Elafonissi Crete, Greece",
    },
    {
      src: Zakynthos,
      alt: "Zakynthos, Greece",
      title: "Zakynthos, Greece",
    },
    {
      src: Fakarava,
      alt: "Fakarava, French Polynesia",
      title: "Fakarava, French Polynesia",
    },
    {
      src: GraceBay,
      alt: "Grace Bay, Turks and Caicos",
      title: "Grace Bay, Turks and Caicos",
    },
    {
      src: Krabi,
      alt: "Krabi, Thailand",
      title: "Krabi, Thailand",
    },
    {
      src: PuntaMolentis,
      alt: "Punta Molentis, Sardinia, Italy",
      title: "Punta Molentis, Sardinia, Italy",
    },
    {
      src: PinkBeach,
      alt: "Pink Beach, Komodo Island, Indonesia",
      title: "Pink Beach, Komodo Island, Indonesia",
    },
    {
      src: LofotenIslands,
      alt: "Lofoten Islands, Norway",
      title: "Lofoten Islands, Norway",
    },
    {
      src: ReynisfjaraBeach,
      alt: "Reynisfjara Beach, Iceland",
      title: "Reynisfjara Beach, Iceland",
    },
    {
      src: GooseSpitPark,
      alt: "Goose Spit Park, Canada",
      title: "Goose Spit Park, Canada",
    },
    {
      src: BondiBeach,
      alt: "Bondi Beach, Australia",
      title: "Bondi Beach, Australia",
    },
    {
      src: CopacabanaBeach,
      alt: "Copacabana Beach, Brazil",
      title: "Copacabana Beach, Brazil",
    },
    {
      src: Phuket,
      alt: "Phuket, Thailand",
      title: "Phuket, Thailandl",
    },
    {
      src: WhiteBeach,
      alt: "White Beach, Philippines",
      title: "White Beach, Philippines",
    },
    {
      src: WaikikiBeach,
      alt: "Waikiki Beach, Hawaii",
      title: "Waikiki Beach, Hawaii",
    },
    {
      src: SantaMonicaBeach,
      alt: "Santa Monica Beach, USA",
      title: "Santa Monica Beach, USA",
    },
    {
      src: VeniceBeach,
      alt: "Venice Beach, USA",
      title: "Venice Beach, USA",
    },
    
  ];

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.galleryTitle}>Gallery</h2>
      <div className={styles.galleryContainer}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img
              className={styles.galleryImage}
              src={image.src}
              alt={image.alt}
            />
            <div className={styles.imageTitle}>{image.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

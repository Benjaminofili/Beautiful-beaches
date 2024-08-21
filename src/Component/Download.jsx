import React from "react";
import styles from "./Download.module.css";

// Import your PDF files
import LofotenIslands from "./TXT/PDF/North beaches/Lofoten Islands, Norway A Comprehensive Guide for Beach Lovers.pdf";
import Goose_Spit from "./TXT/PDF/North beaches/Goose_Spit_Park_Guide.pdf";
import Reynisfjara_Beach from "./TXT/PDF/North beaches/Reynisfjara_Beach_Guide.pdf";
import Bondi_Beach from "./TXT/PDF/South beaches/Bondi Beach, Australia A Comprehensive Guide.pdf";
import Anse_Source_DArgent from "./TXT/PDF/South beaches/Anse Source d'Argent, Seychelles.pdf";
import Copacabana_Beach from "./TXT/PDF/South beaches/Copacabana Beach, Brazil.pdf";
import Phuket from "./TXT/PDF/East beaches/Phuket, Thailand.pdf";
import White_Beach from "./TXT/PDF/East beaches/White Beach, Philippines.pdf";
import Maldives from "./TXT/PDF/East beaches/Maldives.pdf";
import Waikiki_Beach from "./TXT/PDF/West beaches/Waikiki Beach, Hawaii.pdf";
import Santa_Monica from "./TXT/PDF/West beaches/Santa Monica Beach, USA.pdf";
import Venice_Beach from "./TXT/PDF/West beaches/Venice Beach, USA.pdf";

// Import your Word documents
import NorthZoneDoc1 from "./TXT/DOC/North beaches/Lofoten Islands, Norway A Comprehensive Guide for Beach Lovers.docx";
import NorthZoneDoc2 from "./TXT/DOC/North beaches/Goose_Spit_Park_Guide.docx";
import NorthZoneDoc3 from "./TXT/DOC/North beaches/Reynisfjara_Beach_Guide.docx";
import SouthZoneDoc1 from "./TXT/DOC/South beaches/Anse Source d'Argent, Seychelles.docx";
import SouthZoneDoc2 from "./TXT/DOC/South beaches/Bondi Beach, Australia A Comprehensive Guide.docx";
import SouthZoneDoc3 from "./TXT/DOC/South beaches/Copacabana Beach, Brazil.docx";
import EastZoneDoc1 from "./TXT/DOC/East beaches/Phuket, Thailand.docx";
import EastZoneDoc2 from "./TXT/DOC/East beaches/The Maldives.docx";
import EastZoneDoc3 from "./TXT/DOC/East beaches/White Beach, Philippines.docx";
import WestZoneDoc1 from "./TXT/DOC/West beaches/Santa Monica Beach, USA.docx";
import WestZoneDoc2 from "./TXT/DOC/West beaches/Venice Beach, USA.docx";
import WestZoneDoc3 from "./TXT/DOC/West beaches/Waikiki Beach, Hawaii.docx";

const Download = ({ zone }) => {
  return (
    <section className={styles.downloadSection}>
      <div className={styles.downloadContainer}>
        <h2 className={styles.downloadTitle}>Download Beach Information</h2>

        {/* Display zone guide name as text */}
        <div>
          <p>Download {zone.charAt(0).toUpperCase() + zone.slice(1)} Zone Guide</p>
        </div>

        {/* Conditionally render additional links for the North zone PDFs */}
        {zone === "north" && (
          <div>
            <a className={styles.downloadLink} href={LofotenIslands} download="LofotenIslands">
              Download Lofoten PDF
            </a>
            <a className={styles.downloadLink} href={Goose_Spit} download="Goose_Spit">
              Download Goose Spit Park PDF
            </a>
            <a className={styles.downloadLink} href={Reynisfjara_Beach} download="Reynisfjara_Beach">
              Download Reynisfjara Beach PDF
            </a>
          </div>
        )}

        {/* Conditionally render additional links for the South zone PDFs */}
        {zone === "south" && (
          <div>
            <a className={styles.downloadLink} href={Bondi_Beach} download="Bondi_Beach">
              Download Bondi Beach PDF
            </a>
            <a className={styles.downloadLink} href={Anse_Source_DArgent} download="Anse_Source_DArgent">
              Download Anse Source d'Argent PDF
            </a>
            <a className={styles.downloadLink} href={Copacabana_Beach} download="Copacabana_Beach">
              Download Copacabana Beach PDF
            </a>
          </div>
        )}

        {/* Conditionally render additional links for the East zone PDFs */}
        {zone === "east" && (
          <div>
            <a className={styles.downloadLink} href={Phuket} download="Phuket">
              Download Phuket PDF
            </a>
            <a className={styles.downloadLink} href={White_Beach} download="White_Beach">
              Download White Beach PDF
            </a>
            <a className={styles.downloadLink} href={Maldives} download="Maldives">
              Download Maldives PDF
            </a>
          </div>
        )}

        {/* Conditionally render additional links for the West zone PDFs */}
        {zone === "west" && (
          <div>
            <a className={styles.downloadLink} href={Waikiki_Beach} download="Waikiki_Beach">
              Download Waikiki Beach PDF
            </a>
            <a className={styles.downloadLink} href={Santa_Monica} download="Santa_Monica">
              Download Santa Monica Beach PDF
            </a>
            <a className={styles.downloadLink} href={Venice_Beach} download="Venice_Beach">
              Download Venice Beach PDF
            </a>
          </div>
        )}
      </div>

      {/* Section for Word Document Downloads */}
      <div className={styles.downloadContainer}>
        <h2 className={styles.downloadTitle}>Download Zone Guide as Word Document</h2>

        {/* Conditionally render additional links for the North zone Word documents */}
        {zone === "north" && (
          <div>
            <a className={styles.downloadLink} href={NorthZoneDoc1} download="Lofoten">
            Download Lofoten DOC
            </a>
            <a className={styles.downloadLink} href={NorthZoneDoc2} download="Goose Spit Park">
            Download Goose Spit Park DOC
            </a>
            <a className={styles.downloadLink} href={NorthZoneDoc3} download="Reynisfjara Beach">
            Download Reynisfjara Beach DOC
            </a>
          </div>
        )}

        {/* Conditionally render additional links for the South zone Word documents */}
        {zone === "south" && (
          <div>
            <a className={styles.downloadLink} href={SouthZoneDoc1} download="Bondi Beach">
            Download Bondi Beach DOC
            </a>
            <a className={styles.downloadLink} href={SouthZoneDoc2} download="Anse Source d'Argent">
            Download Anse Source d'Argent DOC
            </a>
            <a className={styles.downloadLink} href={SouthZoneDoc3} download="Copacabana Beach">
            Download Copacabana Beach DOC
            </a>
          </div>
        )}

        {/* Conditionally render additional links for the East zone Word documents */}
        {zone === "east" && (
          <div>
            <a className={styles.downloadLink} href={EastZoneDoc1} download="Phuket">
            Download Phuket DOC
            </a>
            <a className={styles.downloadLink} href={EastZoneDoc2} download="White Beach">
            Download White Beach DOC
            </a>
            <a className={styles.downloadLink} href={EastZoneDoc3} download="Maldives">
            Download Maldives DOC
            </a>
          </div>
        )}

        {/* Conditionally render additional links for the West zone Word documents */}
        {zone === "west" && (
          <div>
            <a className={styles.downloadLink} href={WestZoneDoc1} download="Waikiki Beach">
            Download Waikiki Beach DOC
            </a>
            <a className={styles.downloadLink} href={WestZoneDoc2} download="Santa Monica Beach">
            Download Santa Monica Beach DOC
            </a>
            <a className={styles.downloadLink} href={WestZoneDoc3} download="Venice Beach">
            Download Venice Beach DOC
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Download;

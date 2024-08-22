import React, { useState } from "react";
import styles from "./Queries.module.css";

const Queries = () => {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.queriesContainer}>
      <h2 className={styles.title}>Submit Your Query</h2>
      {!submitted ? (
        <form className={styles.queryForm} onSubmit={handleSubmit}>
          <textarea
            className={styles.textarea}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your query here..."
            required
          />
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      ) : (
        <div className={styles.thankYouMessage}>
          Thank you for your query! We'll get back to you soon.
        </div>
      )}
    </div>
  );
};

export default Queries;

import React from 'react';
import styles from './Feedback.module.css';

const FeedbackSection = () => {
    return (
        <section className={styles.feedbackSection}>
            <div className={styles.feedbackContainer}>
                <h2>We Value Your Feedback</h2>
                <form className={styles.feedbackForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required className={styles.inputField} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Your Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required className={styles.inputField} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.label}>Your Feedback</label>
                        <textarea id="message" name="message" rows="5" placeholder="Write your feedback here" required className={styles.inputField}></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>Submit Feedback</button>
                </form>
            </div>
        </section>
    );
};

export default FeedbackSection;

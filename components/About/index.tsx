import Link from "next/link";
import { useState } from "react";

import styles from "./About.module.css";

export default function About(){

    return (
        <div className={styles.containerClass}>
            <div className={styles.infoText}>
                <p className={styles.info}>Roll for food is a website created to let randomness to choose your next meal. The idea for this website is based on Adventures In Aardia&#8217;s Roll for Sandwich series on TikTok.</p>
            </div>
            <div className={styles.faq}>
                <div className={styles.faqTitle}>
                    <h1>FAQ</h1>
                </div>
                <div className={styles.faqQuestions}>
                    <h2>What foods can I randomly generate?</h2>
                    <p>Currently, you can generate random barbeque, cocktails, pasta, pizza, ramen sandwiches & sushi.</p>
                    <h2>What if I don&#8217;t like the food I rolled?</h2>
                    <p>If you live in a free country you can roll again. Another option is to make the food anyways.</p>
                    <h2>What if I liked the food I rolled?</h2>
                    <p>Make it & eat it. Or don&#8217;t. It&#8217;s up to you.</p>
                </div>
            </div>
        </div>
    );

}
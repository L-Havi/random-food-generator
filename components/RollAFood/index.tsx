import Link from "next/link";
import { useState } from "react";

import styles from "./RollAFood.module.css";

export default function RollAFood(){

    return (
        <div className={styles.containerClass}>
            <div className={styles.infoText}>
                <p>Choose a food type to randomly generate!</p>
            </div>
            <h1>Categories</h1>
            <div className={styles.buttonPanel}>
                    <Link href="/bbq">
                        <button className={styles.categoryButton}>
                            BBQ
                        </button>
                    </Link>
                    <Link href="/cocktail">
                        <button className={styles.categoryButton}>
                            Cocktail
                        </button>
                    </Link>
                    <Link href="/pasta">
                        <button className={styles.categoryButton}>
                            Pasta
                        </button>
                    </Link>
                    <Link href="/pizza">
                        <button className={styles.categoryButton}>
                            Pizza
                        </button>
                    </Link>
                    <Link href="/ramen">
                        <button className={styles.categoryButton}>
                            Ramen
                        </button>
                    </Link>
                    <Link href="/sandwich">
                        <button className={styles.categoryButton}>
                            Sandwich
                        </button>
                    </Link>
                    <Link href="/sushi">
                        <button className={styles.categoryButton}>
                            Sushi
                        </button>
                    </Link>
                </div>
        </div>
    );

}
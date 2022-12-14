import Link from "next/link";
import { useState } from "react";

import styles from "./MainMenu.module.css";

export default function MainMenu(){

    const [generatedCategory, setGeneratedCategory] = useState("");

    function generateCategory() {

        const categories: string[] = ["Sandwich", "Sushi", "Pizza", "Pasta", "BBQ", "Cocktail", "Ramen"];

        var category = categories[Math.floor(Math.random() * categories.length)];

        setGeneratedCategory(category);
	}

    return (
        <div className={styles.containerClass}>
            <div className={styles.infoText}>
                <h1>Dont know what to eat? Or just feeling adventurous?</h1>
                <p className={styles.info}>Just choose a category you would like to eat and let the website do the rest. You can customize the amounts of different types of ingredients used, and even vegan options are possible. You just need to choose a category. And if that is too big of a task you can randomize it too below!</p>
            </div>
            <div className={styles.infoText}>
                <div>
                    <h2>Random category</h2>
                </div>
                <div className={styles.buttonPanel}>
                    <button onClick={generateCategory}>Generate</button>
                    <p className={styles.random}>Make a random: {generatedCategory}</p>
                </div>
            </div>
            <div>
                <div>
                    <h2>Categories</h2>
                </div>
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
        </div>
    );

}
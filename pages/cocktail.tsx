import type { NextPage } from "next";
import Container from "../components/Container";
import RandomCocktail from "../components/RandomCocktail";

import styles from "./pages.module.css";

const cocktail: NextPage = () => {
  return (
    <Container title="Generate a random cocktail">
      <div className={styles.div}>Cocktail</div>
      <RandomCocktail />
    </Container>
  );
};

export default cocktail;

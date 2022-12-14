import type { NextPage } from "next";
import Container from "../components/Container";
import RandomPizza from "../components/RandomPizza";

import styles from "./pages.module.css";

const pizza: NextPage = () => {
  return (
    <Container title="Generate a random pizza">
      <div className={styles.div}>Pizza</div>
      <RandomPizza />
    </Container>
  );
};

export default pizza;

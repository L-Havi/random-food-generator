import type { NextPage } from "next";
import Container from "../components/Container";
import RandomPasta from "../components/RandomPasta";

import styles from "./pages.module.css";

const pasta: NextPage = () => {
  return (
    <Container title="Generate a random pasta">
      <div className={styles.div}>Pasta</div>
      <RandomPasta />
    </Container>
  );
};

export default pasta;

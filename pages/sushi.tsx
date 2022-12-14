import type { NextPage } from "next";
import Container from "../components/Container";
import RandomSushi from "../components/RandomSushi";

import styles from "./pages.module.css";

const sushi: NextPage = () => {
  return (
    <Container title="Generate a random sushi">
      <div className={styles.div}>Sushi</div>
      <RandomSushi />
    </Container>
  );
};

export default sushi;

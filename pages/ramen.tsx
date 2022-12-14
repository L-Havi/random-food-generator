import type { NextPage } from "next";
import Container from "../components/Container";
import RandomRamen from "../components/RandomRamen";

import styles from "./pages.module.css";

const ramen: NextPage = () => {
  return (
    <Container title="Generate a random ramen">
      <div className={styles.div}>Ramen</div>
      <RandomRamen />
    </Container>
  );
};

export default ramen;

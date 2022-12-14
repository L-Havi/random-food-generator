import type { NextPage } from "next";
import Container from "../components/Container";
import RandomSandwich from "../components/RandomSandwich";

import styles from "./pages.module.css";

const sandwich: NextPage = () => {
  return (
    <Container title="Generate a random sandwich">
      <div className={styles.div}>Sandwich</div>
      <RandomSandwich />
    </Container>
  );
};

export default sandwich;

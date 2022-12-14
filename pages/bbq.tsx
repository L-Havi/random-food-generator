import type { NextPage } from "next";
import Container from "../components/Container";
import RandomBBQ from "../components/RandomBBQ";

import styles from "./pages.module.css";

const bbq: NextPage = () => {
  return (
    <Container title="Generate a random barbecue">
      <div className={styles.div}>BBQ</div>
      <RandomBBQ />
    </Container>
  );
};

export default bbq;

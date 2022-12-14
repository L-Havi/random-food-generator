import type { NextPage } from "next";
import About from "../components/About";
import Container from "../components/Container";

import styles from "./pages.module.css";

const about: NextPage = () => {
  return (
    <Container title="About">
      <div className={styles.div}>About</div>
      <About />
    </Container>
  );
};

export default about;

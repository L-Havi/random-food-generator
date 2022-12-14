import type { NextPage } from "next";
import Container from "../components/Container";
import MainMenu from "../components/MainMenu";

import styles from "./pages.module.css";

const Home: NextPage = () => {
  return (
    <Container title="Main menu">
      <div className={styles.div}>Welcome!</div>
      <MainMenu />
    </Container>
  );
};

export default Home;

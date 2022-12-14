import type { NextPage } from "next";
import Container from "../components/Container";

import RollAFood from "../components/RollAFood";
import styles from "./pages.module.css";

const rollafood: NextPage = () => {
  return (
    <Container title="Choose a food to randomize">
      <div className={styles.div}>Roll a food</div>
      <RollAFood />
    </Container>
  );
};

export default rollafood;
import { Metadata } from "next";
import styles from "../styles/page.module.scss";

export const metadata: Metadata = {
  title: "Home - b8one",
  description: "Desafio Junior",
  openGraph: {
    title: "",
    description: "Desafio Junior",
  },
};

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.main__content}>main</div>
      </main>
    </div>
  );
}

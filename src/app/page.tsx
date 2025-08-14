import { Metadata } from "next";
import styles from "../styles/page.module.scss";

export const metadata: Metadata = {
  title: "Home - b8one",
  description: "Desafio Júnior",
  openGraph: {
    title: "Home - b8one",
    description: "Desafio Júnior",
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

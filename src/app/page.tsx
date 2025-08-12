import styles from "../styles/page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header__content}>header</div>
      </header>

      <section className={styles.banner}>
        <div className={styles.banner__content}>
          <img src="https://placehold.co/600x300?text=Hello+World" alt="" />
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.main__content}>main</div>
      </main>
    </div>
  );
}

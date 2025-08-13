import Link from "next/link";
import styles from "../styles/page.module.scss";

export default function NotFound() {
  return (
    <div className={styles.notfound}>
      <section className={styles.notfound__content}>
        <h1>Página não encontrada!</h1>
        <p>Essa página que tentou acessar não existe!</p>
        <Link href="/">Voltar para Home</Link>
      </section>
    </div>
  );
}

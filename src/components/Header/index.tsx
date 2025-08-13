import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Image src="/download.jpg" width={56} height={56} alt="Logo da b8one" />

        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/ofertas">Ofertas</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

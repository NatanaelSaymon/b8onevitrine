import { Metadata } from "next";
import styles from "./styles.module.scss";
import ProductList from "@/components/ProductList";

export const metadata: Metadata = {
  title: "b8one - Ofertas",
  description: "Aproveite as nossas ofertas!",
  openGraph: {
    title: "b8one - Ofertas",
    description: "Aproveite as nossas ofertas!",
  },
};
export default function Ofertas() {
  const bannerImage = {
    src: "https://placehold.co/2880x300?text=Banner",
    alt: "Banner promocional das ofertas da semana",
  };

  return (
    <div className={styles.offer}>
      <section className={styles.offerBanner}>
        <div className={styles.offerBanner__content}>
          <img src={bannerImage.src} alt={bannerImage.alt} />
        </div>
      </section>
      <h1 className={styles.offerTitle}>Ofertas da Semana</h1>
      <ProductList />
    </div>
  );
}

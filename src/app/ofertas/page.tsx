import { Metadata } from "next";
import styles from "./styles.module.scss";
import ProductList from "@/components/ProductList";

export const metadata: Metadata = {
  title: "Ofertas",
  description: "Aproveite as nossas ofertas!",
  openGraph: {
    title: "Ofertas",
    description: "Aproveite as nossas ofertas!",
  },
};
export default function Ofertas() {
  return (
    <div>
      <h2 className={styles.title}>Ofertas</h2>
      <ProductList />
    </div>
  );
}

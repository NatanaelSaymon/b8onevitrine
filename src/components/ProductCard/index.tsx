"use client";

import { Product } from "@/types/product";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function ProductCard(product: Product) {
  return (
    <div className={styles.card}>
      <Image src={product.image} alt={product.description} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <button>Comprar</button>
    </div>
  );
}

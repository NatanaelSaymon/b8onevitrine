"use client";

import { Product } from "@/types/product";
import styles from "./styles.module.scss";

export default function ProductCard(product: Product) {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={product?.image} alt={product?.description} />
      </div>
      <div className={styles.card__description}>
        <h3>
          {product.title && product.title.length > 50
            ? product.title.substring(0, product.title.lastIndexOf(" ", 50)) +
              "..."
            : product.title}
        </h3>
        <p>{product.price}</p>
      </div>
      <button>Comprar</button>
    </div>
  );
}

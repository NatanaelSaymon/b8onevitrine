"use client";

import { Product } from "@/types/product";
import { loadProducts } from "@/utils/loadProduct";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import styles from "./styles.module.scss";

export default function ProductList() {
  const [product, setProduct] = useState<Product[]>([]);

  const loadData = async () => {
    const data = await loadProducts();
    setProduct(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log(product);
  return (
    <div className={styles.productlist}>
      <section className={styles.productlist__content}>
        {product?.slice(0, 6).map((product) => (
          <ProductCard
            key={product?.id}
            title={product?.title}
            image={product?.image}
            price={product?.price}
            description={product?.description}
          />
        ))}
      </section>
    </div>
  );
}

"use client";

import { Product } from "@/types/product";
import { loadProducts } from "@/utils/loadProduct";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import styles from "./styles.module.scss";

export default function ProductList() {
  const [product, setProduct] = useState<Product[]>([]);
  //
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");

  const loadData = async () => {
    const data = await loadProducts();
    setProduct(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Pega categorias únicas e coloca "all" no começo
  const categories = ["todos", ...new Set(product.map((p) => p.category))];

  // Filtra os produtos pela categoria selecionada
  const filteredProducts =
    selectedCategory === "todos"
      ? product
      : product.filter((p) => p.category === selectedCategory);

  console.log(product);
  return (
    // <div className={styles.productlist}>
    //   <section className={styles.productlist__content}>
    //     {product?.slice(0, 6).map((product) => (
    //       <ProductCard
    //         key={product?.id}
    //         title={product?.title}
    //         image={product?.image}
    //         price={product?.price}
    //         description={product?.description}
    //       />
    //     ))}
    //   </section>
    // </div>

    <div className={styles.productlist}>
      {/* Botões de categoria */}
      <div className={styles.categoryButtons}>
        {categories.map((cat: any) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? styles.activeButton : ""}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Lista de produtos */}
      <section className={styles.productlist__content}>
        {filteredProducts.slice(0, 6).map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        ))}
      </section>
    </div>
  );
}

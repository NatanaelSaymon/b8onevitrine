"use client";

import { Product } from "@/types/product";
import { loadProducts } from "@/utils/loadProduct";
import { useEffect, useState } from "react";

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
  return <section>productlist</section>;
}

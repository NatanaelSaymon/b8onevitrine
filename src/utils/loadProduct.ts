import type { Product } from "@/types/product";

export const loadProducts = async () => {

    const route = "https://fakestoreapi.com/products"
    const response = await fetch(route).then(data => data.json())

    const data = response as Product[]

    return data
}
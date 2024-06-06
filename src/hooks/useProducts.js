import { useState, useEffect } from "react";
import { getProductsByCategory, getAllProducts } from "../api/products";

function useProducts(category) {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			const products = category
				? await getProductsByCategory(category)
				: await getAllProducts();
			if (products) {
				setProducts(products);
				setLoading(false);
			}
		};

		fetchProducts();
	}, [category]);

	return { products, loading };
}

export default useProducts;

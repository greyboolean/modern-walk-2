import { useState, useEffect } from "react";
import { getAllProducts } from "../api/products";
import Section from "../components/Section/Section";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import CategoryGrid from "../components/CategoryGrid/CategoryGrid";

function Home() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			const products = await getAllProducts();
			if (products) {
				setProducts(products);
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	return (
		<div>
			<Section heading="Flash Sale" loading={loading}>
				<ProductGrid products={products.slice(0, 4)} />
			</Section>
			<Section heading="Categories">
				<CategoryGrid />
			</Section>
		</div>
	);
}

export default Home;

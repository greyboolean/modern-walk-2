import useProducts from "../hooks/useProducts";
import Section from "../components/Section/Section";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import CategoryGrid from "../components/CategoryGrid/CategoryGrid";

function Home() {
	const { products, loading } = useProducts();

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

import { useAtom } from "jotai";
import Hero from "@/components/site/Hero/Hero";
import { ProductGrid } from "./components/ProductGrid";
import { ProductFilter } from "./components/ProductFilter";
import { ProductSearch } from "./components/ProductSearch";
import { ProductModal } from "./components/ProductModal";
import { ProductSort } from "./components/ProductSort";
import type { Product, ProductSortOption } from "@/types/product";
import {
	selectedCategoryAtom,
	filteredProductsAtom,
	searchTermAtom,
	sortOptionAtom,
} from "@/stores/productsStore";
import { modalStateAtom } from "@/stores/uiStore";

const ProductsPage = () => {
	const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom);
	const [filteredProducts] = useAtom(filteredProductsAtom);
	const [searchTerm, setSearchTerm] = useAtom(searchTermAtom);
	const [sortOption, setSortOption] = useAtom(sortOptionAtom);
	const [modalState, setModalState] = useAtom(modalStateAtom);

	const handleFilterChange = (category: string) => {
		setSelectedCategory(category === "all" ? null : category);
	};

	const handleSearch = (searchResults: Product[]) => {
		setSearchTerm(searchResults.length > 0 ? searchTerm : "");
	};

	const handleProductClick = (product: Product) => {
		setModalState({
			isOpen: true,
			type: "product",
			data: product,
		});
	};

	const handleCloseModal = () => {
		setModalState({
			isOpen: false,
			type: null,
			data: null,
		});
	};

	const handleSort = (option: ProductSortOption) => {
		setSortOption(option);
	};

	return (
		<div className="min-h-screen bg-background">
			<Hero title="商品紹介" />
			<main className="container mx-auto py-8 px-4">
				<div className="max-w-7xl mx-auto space-y-8">
					<div className="grid gap-6 md:grid-cols-3">
						<div className="md:col-span-2">
							<ProductSearch onSearch={handleSearch} />
						</div>
						<div className="flex gap-4">
							<ProductFilter
								selectedCategory={selectedCategory}
								onFilterChange={handleFilterChange}
							/>
							<ProductSort value={sortOption} onChange={handleSort} />
						</div>
					</div>

					<ProductGrid
						products={filteredProducts}
						onProductClick={handleProductClick}
					/>

					<ProductModal
						isOpen={modalState.isOpen}
						onClose={handleCloseModal}
						product={modalState.data as Product}
					/>
				</div>
			</main>
		</div>
	);
};

export default ProductsPage;

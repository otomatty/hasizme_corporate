import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import { products as rawProducts } from "@/data/productsData";
import type { Product, ProductSortOption, RawProduct } from "@/types/product";
import { PRODUCT_SORT_PRESETS } from "@/types/product";

// RawProductからProductへの変換
const initialProducts: Product[] = (rawProducts as RawProduct[]).map(
	(product) => ({
		id: `product-${product.title}`,
		image: product.image,
		title: product.title,
		description: product.description,
		category: product.category,
		categoryColor: product.categoryColor,
		registrationDate: product.registrationDate,
		isNew: false, // または適切な条件に基づいて設定
		isRecommended: product.recommended,
		status: "in-stock" as const,
		stockCount: 100, // または適切な初期値
	}),
);

// 基本のatom
export const productsAtom = atom<Product[]>(initialProducts);
export const selectedCategoryAtom = atom<string | null>(null);
export const searchTermAtom = atom<string>("");
export const sortOptionAtom = atom<ProductSortOption>(
	PRODUCT_SORT_PRESETS.RECOMMENDED,
);

// カテゴリーでフィルタリングする派生atom
export const filteredProductsAtom = atom((get) => {
	const allProducts = get(productsAtom);
	const selectedCategory = get(selectedCategoryAtom);

	if (!selectedCategory || selectedCategory === "all") return allProducts;
	return allProducts.filter((product) => product.category === selectedCategory);
});

// 検索語でフィルタリングする派生atom
export const searchedProductsAtom = atom((get) => {
	const filteredProducts = get(filteredProductsAtom);
	const searchTerm = get(searchTermAtom);

	if (!searchTerm) return filteredProducts;

	const normalizedSearchTerm = searchTerm.toLowerCase();
	return filteredProducts.filter((product) => {
		return (
			product.title.toLowerCase().includes(normalizedSearchTerm) ||
			product.description.toLowerCase().includes(normalizedSearchTerm) ||
			product.category.toLowerCase().includes(normalizedSearchTerm)
		);
	});
});

// ソート機能を適用する派生atom
export const sortedProductsAtom = atom((get) => {
	const searchedProducts = get(searchedProductsAtom);
	const sortOption = get(sortOptionAtom);

	const sortedProducts = [...searchedProducts];

	switch (sortOption.type) {
		case "recommended":
			return sortedProducts.sort((a, b) => {
				// おすすめ順（isRecommendedフラグとregistrationDateの組み合わせ）
				if (a.isRecommended && !b.isRecommended) return -1;
				if (!a.isRecommended && b.isRecommended) return 1;
				return (
					new Date(b.registrationDate).getTime() -
					new Date(a.registrationDate).getTime()
				);
			});

		case "date":
			return sortedProducts.sort((a, b) => {
				const dateComparison =
					new Date(b.registrationDate).getTime() -
					new Date(a.registrationDate).getTime();
				return sortOption.direction === "asc"
					? -dateComparison
					: dateComparison;
			});

		case "title":
			return sortedProducts.sort((a, b) => {
				const titleComparison = a.title.localeCompare(b.title, "ja");
				return sortOption.direction === "asc"
					? titleComparison
					: -titleComparison;
			});

		case "category":
			return sortedProducts.sort((a, b) => {
				const categoryComparison = a.category.localeCompare(b.category, "ja");
				return sortOption.direction === "asc"
					? categoryComparison
					: -categoryComparison;
			});

		case "stock":
			return sortedProducts.sort((a, b) => {
				const stockA = a.stockCount ?? 0;
				const stockB = b.stockCount ?? 0;
				const stockComparison = stockA - stockB;
				return sortOption.direction === "asc"
					? stockComparison
					: -stockComparison;
			});

		case "custom":
			if (sortOption.customSort) {
				return sortedProducts.sort(sortOption.customSort);
			}
			return sortedProducts;

		default:
			return sortedProducts;
	}
});

// 商品の統計情報を提供する派生atom
export const productStatsAtom = atom((get) => {
	const allProducts = get(productsAtom);
	const filteredProducts = get(filteredProductsAtom);

	return {
		total: allProducts.length,
		filtered: filteredProducts.length,
		categories: Array.from(new Set(allProducts.map((p) => p.category))),
		inStock: filteredProducts.filter((p) => p.status === "in-stock").length,
		lowStock: filteredProducts.filter((p) => (p.stockCount ?? 0) < 10).length,
		outOfStock: filteredProducts.filter((p) => p.status === "out-of-stock")
			.length,
		recommended: filteredProducts.filter((p) => p.isRecommended).length,
		new: filteredProducts.filter((p) => p.isNew).length,
	};
});

// 商品の詳細情報を取得するatomFamily
export const productDetailAtom = atomFamily((productId: string) =>
	atom((get) => {
		const allProducts = get(productsAtom);
		return allProducts.find((p) => p.id === productId) || null;
	}),
);

// 現在選択されている商品IDを管理するatom
export const selectedProductIdAtom = atom<string | null>(null);

// 現在選択されている商品の詳細を取得する派生atom
export const selectedProductAtom = atom((get) => {
	const selectedId = get(selectedProductIdAtom);
	if (!selectedId) return null;

	const productAtom = productDetailAtom(selectedId);
	return get(productAtom);
});

// カテゴリー一覧を取得する派生atom
export const categoriesAtom = atom((get) => {
	const allProducts = get(productsAtom);
	return Array.from(new Set(allProducts.map((p) => p.category)));
});

// 検索サジェスト用の派生atom
export const searchSuggestionsAtom = atom((get) => {
	const searchTerm = get(searchTermAtom);
	const allProducts = get(productsAtom);

	if (!searchTerm) return [];

	const normalizedSearchTerm = searchTerm.toLowerCase();
	const suggestions = new Set<string>();

	for (const product of allProducts) {
		if (product.title.toLowerCase().includes(normalizedSearchTerm)) {
			suggestions.add(product.title);
		}
		if (product.category.toLowerCase().includes(normalizedSearchTerm)) {
			suggestions.add(product.category);
		}
	}

	return Array.from(suggestions).slice(0, 5); // 最大5件のサジェストを返す
});

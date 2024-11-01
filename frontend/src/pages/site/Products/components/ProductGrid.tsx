import { useEffect } from "react";
import { ProductCard } from "./ProductCard";
import type { Product } from "@/types/product";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface ProductGridProps {
	products: Product[];
	onProductClick: (product: Product) => void;
	maxItems?: number;
	loading?: boolean;
	onLoadMore?: () => void;
}

export const ProductGrid = ({
	products,
	onProductClick,
	maxItems,
	loading = false,
	onLoadMore,
}: ProductGridProps) => {
	const { ref, inView } = useInView({
		threshold: 0.1,
	});

	// 無限スクロール
	useEffect(() => {
		if (inView && !loading && onLoadMore) {
			onLoadMore();
		}
	}, [inView, loading, onLoadMore]);

	const displayedProducts = maxItems ? products.slice(0, maxItems) : products;

	return (
		<div className="space-y-6">
			{/* 商品グリッド */}
			<div
				className={cn(
					"grid gap-4 p-4",
					"grid-cols-1 xs:grid-cols-2",
					"sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
				)}
			>
				{displayedProducts.map((product) => (
					<ProductCard
						key={product.id}
						image={product.image}
						title={product.title}
						category={product.category}
						description={product.description}
						isNew={product.isNew}
						isRecommended={product.isRecommended}
						onClick={() => onProductClick(product)}
						onFavoriteClick={() => console.log(`Favorite: ${product.id}`)}
						onQuickViewClick={() => console.log(`QuickView: ${product.id}`)}
					/>
				))}
			</div>

			{/* 商品が存在しない場合 */}
			{displayedProducts.length === 0 && !loading && (
				<div className="text-center py-12">
					<p className="text-gray-500">商品が見つかりませんでした。</p>
				</div>
			)}

			{/* ローディングインジケーター */}
			{loading && (
				<div className="flex justify-center p-4">
					<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
				</div>
			)}

			{/* 無限スクロール用の監視要素 */}
			{onLoadMore && <div ref={ref} className="h-4" />}
		</div>
	);
};

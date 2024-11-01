import { useEffect, useState } from "react";
import type { Product } from "@/types/product";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductModalProps {
	isOpen: boolean;
	onClose: () => void;
	product: Product | null;
}

export const ProductModal = ({
	isOpen,
	onClose,
	product,
}: ProductModalProps) => {
	const [imageLoaded, setImageLoaded] = useState(false);

	useEffect(() => {
		if (product) {
			const img = new Image();
			img.src = product.image;
			img.onload = () => setImageLoaded(true);
			return () => {
				img.onload = null;
			};
		}
	}, [product]);

	if (!product) return null;

	return (
		<Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<DialogContent className="max-w-2xl">
				<DialogHeader>
					<DialogTitle className="text-2xl font-bold">
						{product.title}
					</DialogTitle>
				</DialogHeader>

				<div className="space-y-4">
					{/* 商品画像 */}
					<div className="relative aspect-video overflow-hidden rounded-lg">
						<img
							src={product.image}
							alt={product.title}
							className={cn(
								"w-full h-full object-cover transition-opacity duration-300",
								imageLoaded ? "opacity-100" : "opacity-0",
							)}
							onLoad={() => setImageLoaded(true)}
						/>
					</div>

					{/* 商品情報 */}
					<div className="space-y-4">
						<p className="text-gray-600">{product.description}</p>

						<div className="flex flex-wrap gap-2">
							<Badge
								style={{ backgroundColor: product.categoryColor }}
								className="text-white"
							>
								{product.category}
							</Badge>
							{product.isRecommended && (
								<Badge variant="secondary">おすすめ商品</Badge>
							)}
							{product.isNew && <Badge variant="secondary">新着</Badge>}
						</div>

						<div className="text-sm text-gray-500">
							<p>登録日: {product.registrationDate}</p>
							{product.stockCount !== undefined && (
								<p>在庫数: {product.stockCount}</p>
							)}
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

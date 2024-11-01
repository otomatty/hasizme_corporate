import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart, Eye, TagIcon } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
	image: string;
	title: string;
	category: string;
	description?: string;
	isNew?: boolean;
	isRecommended?: boolean;
	isFavorited?: boolean;
	onClick: () => void;
	onFavoriteClick?: () => void;
	onQuickViewClick?: () => void;
	className?: string;
}

export const ProductCard = ({
	image,
	title,
	category,
	description,
	isNew,
	isRecommended,
	isFavorited: initialIsFavorited = false,
	onClick,
	onFavoriteClick,
	onQuickViewClick,
	className,
}: ProductCardProps) => {
	const [isFavorited, setIsFavorited] = useState(initialIsFavorited);
	const [isHovered, setIsHovered] = useState(false);

	const handleFavoriteClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsFavorited(!isFavorited);
		onFavoriteClick?.();
	};

	const handleQuickViewClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onQuickViewClick?.();
	};

	return (
		<Card
			onClick={onClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={cn(
				"group relative cursor-pointer overflow-hidden h-full",
				"transition-all duration-300",
				"hover:shadow-lg hover:border-primary/20",
				className,
			)}
		>
			{/* バッジエリア */}
			<div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
				{isNew && (
					<Badge variant="default" className="bg-blue-500">
						NEW
					</Badge>
				)}
				{isRecommended && (
					<Badge variant="default" className="bg-amber-500">
						おすすめ
					</Badge>
				)}
			</div>

			{/* アクションボタン */}
			<div
				className={cn(
					"absolute top-2 right-2 z-10 flex flex-col gap-2",
					"opacity-0 transition-opacity duration-200",
					isHovered && "opacity-100",
				)}
			>
				<Button
					size="icon"
					variant="secondary"
					className={cn(
						"h-8 w-8 rounded-full",
						isFavorited && "text-red-500 hover:text-red-600",
					)}
					onClick={handleFavoriteClick}
				>
					<Heart
						className="h-4 w-4"
						fill={isFavorited ? "currentColor" : "none"}
					/>
				</Button>
				<Button
					size="icon"
					variant="secondary"
					className="h-8 w-8 rounded-full"
					onClick={handleQuickViewClick}
				>
					<Eye className="h-4 w-4" />
				</Button>
			</div>

			{/* 画像コンテナ */}
			<div className="relative aspect-square overflow-hidden bg-gray-100">
				<img
					src={image}
					alt={title}
					className={cn(
						"h-full w-full object-cover",
						"transition-transform duration-300",
						"group-hover:scale-105",
					)}
					loading="lazy"
				/>
			</div>

			{/* コンテンツ */}
			<CardContent className="p-4">
				{/* カテゴリー */}
				<div className="flex items-center gap-1 mb-2">
					<TagIcon className="h-3 w-3 text-gray-400" />
					<span className="text-xs text-gray-500">{category}</span>
				</div>

				{/* タイトル */}
				<h3
					className={cn(
						"text-base font-medium text-gray-900",
						"line-clamp-2",
						"group-hover:text-primary",
					)}
				>
					{title}
				</h3>

				{/* 説明文 */}
				{description && (
					<p className="mt-2 text-sm text-gray-600 line-clamp-2">
						{description}
					</p>
				)}
			</CardContent>
		</Card>
	);
};

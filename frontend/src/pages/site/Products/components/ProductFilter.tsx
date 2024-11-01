import { Button } from "@/components/ui/button";
import products from "@/data/productsData";

interface ProductFilterProps {
	selectedCategory: string | null;
	onFilterChange: (category: string) => void;
}

export const ProductFilter = ({
	selectedCategory,
	onFilterChange,
}: ProductFilterProps) => {
	const categories = [
		"All",
		...new Set(products.map((product) => product.category)),
	];

	return (
		<div className="flex flex-wrap gap-2">
			{categories.map((category) => (
				<Button
					key={category}
					variant={selectedCategory === category ? "default" : "outline"}
					size="sm"
					onClick={() => onFilterChange(category)}
					className="min-w-[80px]"
				>
					{category}
				</Button>
			))}
		</div>
	);
};

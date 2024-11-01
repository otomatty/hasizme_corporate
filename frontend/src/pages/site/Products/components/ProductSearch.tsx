import { useState, useCallback } from "react";
import { Search, RotateCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { products } from "@/data/productsData";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

// コンポーネントの外部で定数を定義
const INITIAL_PRODUCTS: Product[] = products.map((product) => ({
	id: `product-${product.title}`,
	image: product.image,
	title: product.title,
	description: product.description,
	category: product.category,
	categoryColor: product.categoryColor,
	registrationDate: product.registrationDate,
	isNew: false,
	isRecommended: product.recommended,
	status: "in-stock" as const,
	stockCount: 100,
}));

const hiraganaToKatakana = (str: string): string => {
	return str.replace(/[\u3041-\u3096]/g, (match) => {
		const chr = match.charCodeAt(0) + 0x60;
		return String.fromCharCode(chr);
	});
};

interface ProductSearchProps {
	onSearch: (filteredProducts: Product[]) => void;
}

export const ProductSearch = ({ onSearch }: ProductSearchProps) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [suggestions, setSuggestions] = useState<string[]>([]);
	const [isOpen, setIsOpen] = useState(false);

	const handleSearch = useCallback((value: string) => {
		setSearchTerm(value);

		if (value.length > 0) {
			const katakanaValue = hiraganaToKatakana(value.toLowerCase());
			const filteredSuggestions = INITIAL_PRODUCTS.filter(
				(product) =>
					product.title.toLowerCase().includes(value.toLowerCase()) ||
					hiraganaToKatakana(product.title.toLowerCase()).includes(
						katakanaValue,
					),
			).map((product) => product.title);
			setSuggestions(filteredSuggestions);
		} else {
			setSuggestions([]);
		}
	}, []);

	const handleSearchButtonClick = () => {
		const katakanaValue = hiraganaToKatakana(searchTerm.toLowerCase());
		const filteredProducts = INITIAL_PRODUCTS.filter(
			(product) =>
				product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				hiraganaToKatakana(product.title.toLowerCase()).includes(katakanaValue),
		);
		onSearch(filteredProducts);
		setSuggestions([]);
	};

	const handleResetButtonClick = () => {
		setSearchTerm("");
		setSuggestions([]);
		onSearch(INITIAL_PRODUCTS);
	};

	const handleSuggestionSelect = (suggestion: string) => {
		setSearchTerm(suggestion);
		setSuggestions([]);
		setIsOpen(false);
		handleSearchButtonClick();
	};

	return (
		<div className="relative w-full max-w-2xl mx-auto">
			<div className="flex flex-col md:flex-row gap-4 mb-4">
				<div className="flex-1 relative">
					<Input
						type="text"
						placeholder="商品を検索..."
						value={searchTerm}
						onChange={(e) => handleSearch(e.target.value)}
						className="w-full"
					/>

					{suggestions.length > 0 && (
						<Select
							open={isOpen}
							onOpenChange={setIsOpen}
							value={searchTerm}
							onValueChange={handleSuggestionSelect}
						>
							<SelectTrigger className="sr-only">
								<SelectValue placeholder="検索候補" />
							</SelectTrigger>
							<SelectContent
								className={cn(
									"absolute w-full bg-white border rounded-md shadow-lg mt-1",
									"max-h-60 overflow-auto z-50",
								)}
							>
								{suggestions.map((suggestion) => (
									<SelectItem
										key={suggestion}
										value={suggestion}
										className={cn(
											"px-4 py-2 cursor-pointer",
											"transition-colors duration-150",
											"hover:bg-gray-100",
										)}
									>
										{suggestion}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					)}
				</div>

				<div className="flex gap-2">
					<Button
						onClick={handleSearchButtonClick}
						className="flex-1 md:flex-none"
					>
						<Search className="h-4 w-4 mr-2" />
						検索
					</Button>
					<Button
						variant="outline"
						onClick={handleResetButtonClick}
						className="flex-1 md:flex-none"
					>
						<RotateCcw className="h-4 w-4 mr-2" />
						リセット
					</Button>
				</div>
			</div>
		</div>
	);
};

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import type { ProductSortOption } from "@/types/product";
import { PRODUCT_SORT_PRESETS, PRODUCT_SORT_LABELS } from "@/types/product";

interface ProductSortProps {
	value: ProductSortOption;
	onChange: (option: ProductSortOption) => void;
}

export const ProductSort = ({ value, onChange }: ProductSortProps) => {
	// 現在のソートオプションの種類を文字列として取得
	const currentSortType = value.type;

	// SelectのonValueChangeハンドラー
	const handleSortChange = (newSortType: string) => {
		// 選択された種類に基づいて適切なProductSortOptionを生成
		switch (newSortType) {
			case "recommended":
				onChange(PRODUCT_SORT_PRESETS.RECOMMENDED);
				break;
			case "date":
				onChange(PRODUCT_SORT_PRESETS.NEWEST);
				break;
			case "title":
				onChange(PRODUCT_SORT_PRESETS.TITLE_ASC);
				break;
			case "category":
				onChange(PRODUCT_SORT_PRESETS.CATEGORY_ASC);
				break;
			default:
				onChange(PRODUCT_SORT_PRESETS.RECOMMENDED);
		}
	};

	return (
		<div className="flex justify-end mb-4">
			<Select value={currentSortType} onValueChange={handleSortChange}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="並び替え">
						{PRODUCT_SORT_LABELS[value.type]}
					</SelectValue>
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="recommended">おすすめ順</SelectItem>
					<SelectItem value="date">新しい順</SelectItem>
					<SelectItem value="title">タイトル順</SelectItem>
					<SelectItem value="category">カテゴリー順</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};

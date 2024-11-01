// 型定義のみを含む
export type RawProduct = {
	image: string;
	title: string;
	description: string;
	category: string;
	categoryColor: string;
	registrationDate: string;
	recommended: boolean;
};

// 他の型定義は現状のまま
export type Product = {
	// 基本情報
	id: string;
	image: string;
	title: string;
	description: string;

	// カテゴリー情報
	category: string;
	categoryColor: string;

	// 日付情報
	registrationDate: string;
	updatedDate?: string;

	// フラグ
	isNew: boolean;
	isRecommended: boolean;

	// 状態
	status?: "in-stock" | "low-stock" | "out-of-stock";
	stockCount?: number;

	// メタデータ
	metadata?: {
		specifications?: Record<string, string>;
		tags?: string[];
		relatedProducts?: string[];
	};

	// 表示制御
	displayOrder?: number;
	isVisible?: boolean;

	// カスタムデータ
	customFields?: Record<string, unknown>;
};

// 商品のソートオプション
export type ProductSortOption = {
	// ソートの種類
	type: "recommended" | "date" | "title" | "category" | "stock" | "custom";

	// ソートの方向
	direction: "asc" | "desc";

	// カスタムソート用の関数
	customSort?: (a: Product, b: Product) => number;
};

// ソートオプションのプリセット
export const PRODUCT_SORT_PRESETS = {
	RECOMMENDED: { type: "recommended", direction: "desc" },
	NEWEST: { type: "date", direction: "desc" },
	OLDEST: { type: "date", direction: "asc" },
	TITLE_ASC: { type: "title", direction: "asc" },
	TITLE_DESC: { type: "title", direction: "desc" },
	CATEGORY_ASC: { type: "category", direction: "asc" },
	CATEGORY_DESC: { type: "category", direction: "desc" },
	STOCK_HIGH: { type: "stock", direction: "desc" },
	STOCK_LOW: { type: "stock", direction: "asc" },
} as const;

// ソートオプションの表示名
export const PRODUCT_SORT_LABELS: Record<ProductSortOption["type"], string> = {
	recommended: "おすすめ順",
	date: "日付順",
	title: "タイトル順",
	category: "カテゴリー順",
	stock: "在庫順",
	custom: "カスタム順",
} as const;

// 商品のフィルターオプション
export type ProductFilterOption = {
	categories?: string[];
	isNew?: boolean;
	isRecommended?: boolean;
	status?: Product["status"];
};

// 商品の検索オプション
export type ProductSearchOption = {
	term: string;
	fields?: ("title" | "description" | "category")[];
};

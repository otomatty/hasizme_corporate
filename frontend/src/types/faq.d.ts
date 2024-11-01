export interface FAQItem {
	id: string;
	_sys: {
		createdAt: string;
		updatedAt: string;
		customOrder: number;
		raw: {
			createdAt: string;
			updatedAt: string;
			firstPublishedAt: string;
			publishedAt: string;
		};
	};
	question: string;
	answer: string;
	category: string;
}

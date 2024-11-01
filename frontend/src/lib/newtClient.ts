import { createClient } from "newt-client-js";
import type { BlogPost } from "../types/blog";
import type { NewsItem } from "../types/news";
import type { FAQItem } from "../types/faq";

const client = createClient({
	spaceUid: import.meta.env.VITE_SPACE_UID,
	token: import.meta.env.VITE_CDN_API_TOKEN,
	apiType: "cdn",
});

export const fetchBlogPosts = async (limit?: number): Promise<BlogPost[]> => {
	const { items } = await client.getContents<BlogPost>({
		appUid: "blog",
		modelUid: "article",
		query: {
			limit: limit || 100, // limitが指定されていない場合はデフォルト値を使用
		},
	});
	return items;
};

export const fetchBlogPostBySlug = async (
	slug: string,
): Promise<BlogPost | null> => {
	const { items } = await client.getContents({
		appUid: import.meta.env.VITE_BLOG_APP_UID,
		modelUid: import.meta.env.VITE_BLOG_MODEL_UID,
		query: {
			slug: slug,
		},
	});
	return items.length > 0 ? (items[0] as BlogPost) : null;
};

export const fetchBlogPostsByTag = async (
	tagSlug: string,
): Promise<BlogPost[]> => {
	const { items } = await client.getContents({
		appUid: import.meta.env.VITE_BLOG_APP_UID,
		modelUid: import.meta.env.VITE_BLOG_MODEL_UID,
		query: {
			"tags.slug": tagSlug,
		},
	});
	return items as BlogPost[];
};

export const fetchNewsItems = async (limit?: number): Promise<NewsItem[]> => {
	const query: { limit?: number } = {};
	if (limit) {
		query.limit = limit;
	}

	const { items } = await client.getContents({
		appUid: import.meta.env.VITE_NEWS_APP_UID,
		modelUid: import.meta.env.VITE_NEWS_MODEL_UID,
		query: query,
	});

	return items as NewsItem[];
};

export const fetchNewsItem = async (slug: string): Promise<NewsItem> => {
	const { items } = await client.getContents({
		appUid: import.meta.env.VITE_NEWS_APP_UID,
		modelUid: import.meta.env.VITE_NEWS_MODEL_UID,
		query: {
			slug: slug,
		},
	});

	if (items.length === 0) {
		throw new Error("News item not found");
	}

	return items[0] as NewsItem;
};

export const fetchFAQItems = async (limit?: number): Promise<FAQItem[]> => {
	const query: { limit?: number } = {};
	if (limit) {
		query.limit = limit;
	}

	const { items } = await client.getContents<FAQItem>({
		appUid: "faq",
		modelUid: "faq",
		query: query,
	});

	return items;
};

export const fetchFAQItemsByCategory = async (
	category: string,
): Promise<FAQItem[]> => {
	const { items } = await client.getContents<FAQItem>({
		appUid: "faq",
		modelUid: "faq",
		query: {
			category: category,
		},
	});

	return items;
};

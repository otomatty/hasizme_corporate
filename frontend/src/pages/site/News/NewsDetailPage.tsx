import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import type { NewsItem } from "@/types/news";
import { fetchNewsItem } from "@/lib/newtClient";
import Hero from "@/components/site/Hero/Hero";

export default function NewsDetailPage() {
	const { slug } = useParams();
	const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadNewsItem = async () => {
			try {
				if (!slug) return;
				const item = await fetchNewsItem(slug);
				setNewsItem(item);
			} catch (error) {
				console.error("ニュースの取得に失敗しました:", error);
			} finally {
				setLoading(false);
			}
		};

		loadNewsItem();
	}, [slug]);

	if (loading) {
		return <div className="text-center py-8">読み込み中...</div>;
	}

	if (!newsItem) {
		return <div className="text-center py-8">記事が見つかりません</div>;
	}

	return (
		<>
			<Hero title={newsItem.newsTitle} />
			<div className="max-w-4xl mx-auto px-8 py-8">
				<p className="text-base text-gray-600 mb-8">
					{new Date(newsItem._sys.createdAt).toLocaleDateString("ja-JP")}
				</p>
				<div className="prose prose-lg max-w-none">
					{parse(newsItem.content)}
				</div>
			</div>
		</>
	);
}

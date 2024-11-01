import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { NewsItem } from "@/types/news"; // 型定義の場所は要調整
import { fetchNewsItems } from "@/lib/newtClient"; // パスは要調整
import Hero from "@/components/site/Hero/Hero";

export default function NewsPage() {
	const [news, setNews] = useState<NewsItem[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadNews = async () => {
			try {
				const items = await fetchNewsItems();
				setNews(items);
			} catch (error) {
				console.error("ニュースの取得に失敗しました:", error);
			} finally {
				setLoading(false);
			}
		};

		loadNews();
	}, []);

	return (
		<>
			<Hero title="お知らせ一覧" />
			<div className="max-w-4xl mx-auto px-8 py-8">
				{loading ? (
					<p className="text-center text-lg text-gray-600">
						ニュースを読み込んでいます...
					</p>
				) : (
					<ul className="space-y-8">
						{news.map((item) => (
							<li
								key={item.slug}
								className="pb-8 border-b border-gray-200 last:border-b-0"
							>
								<Link
									to={`/news/${item.slug}`}
									className="block hover:opacity-80"
								>
									<p className="text-sm text-gray-600">
										{new Date(
											item._sys?.createdAt ?? Date.now(),
										).toLocaleDateString("ja-JP")}
									</p>
									<h2 className="text-2xl mt-2 mb-2">{item.newsTitle}</h2>
									<p className="text-base text-gray-700">
										{item.content?.slice(0, 100) ?? ""}...
									</p>
								</Link>
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
}

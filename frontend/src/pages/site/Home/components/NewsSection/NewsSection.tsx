import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchNewsItems } from "@/lib/newtClient";
import SectionTitle from "@/components/site/SectionTitle";
import Container from "@/components/site/Container/Container";
import { Button } from "@/components/ui/button";

interface NewsItem {
	_id: string;
	_sys: {
		createdAt: string;
	};
	slug: string;

	newsTitle: string;
}

const NewsSection = () => {
	const [news, setNews] = useState<NewsItem[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadNews = async () => {
			try {
				const items = await fetchNewsItems(5);
				setNews(items);
			} catch (error) {
				console.error("Failed to fetch news:", error);
			} finally {
				setLoading(false);
			}
		};

		loadNews();
	}, []);

	return (
		<section className="w-full py-16 bg-gray-50">
			<Container>
				<SectionTitle id="news-title" title="お知らせ" align="center" />
				<div className="mt-8">
					{loading ? (
						<div className="text-center text-gray-600">
							ニュースを読み込んでいます...
						</div>
					) : (
						<div className="space-y-6">
							<ul className="space-y-4">
								{news.map((item) => (
									<li key={item._id} className="bg-white rounded-lg shadow-sm">
										<Link
											to={`/news/${item.slug}`}
											className="block p-4 hover:bg-gray-50 transition-colors"
										>
											<time className="text-sm text-gray-500">
												{new Date(item._sys.createdAt).toLocaleDateString(
													"ja-JP",
												)}
											</time>
											<h3 className="text-lg font-medium text-gray-800 mt-1">
												{item.newsTitle}
											</h3>
										</Link>
									</li>
								))}
							</ul>
							<div className="text-center">
								<Button asChild variant="outline">
									<Link to="/news">もっと見る</Link>
								</Button>
							</div>
						</div>
					)}
				</div>
			</Container>
		</section>
	);
};

export default NewsSection;

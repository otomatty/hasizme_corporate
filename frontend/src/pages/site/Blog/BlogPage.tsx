import { useEffect, useState } from "react";
import { fetchNoteRssFeed } from "@/utils/rssUtils"; // パスは要調整
import Hero from "@/components/site/Hero/Hero";
import Container from "@/components/site/Container/Container";

// 型定義
interface FeedItem {
	title: string;
	thumbnail: string;
	pubDate: string;
	link: string;
	description?: string;
}

const DEFAULT_IMAGE_PATH = "/logo.svg";

export default function BlogPage() {
	const [feed, setFeed] = useState<FeedItem[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadFeed = async () => {
			try {
				const feedData = await fetchNoteRssFeed();
				setFeed(feedData);
			} catch (error) {
				console.error("フィードの取得に失敗しました:", error);
			} finally {
				setLoading(false);
			}
		};

		loadFeed();
	}, []);

	return (
		<>
			<Hero title="橋爪倶楽部" />
			<div className="py-12 bg-gray-50">
				<Container>
					{loading ? (
						<p className="text-center text-lg text-gray-600">
							記事を読み込んでいます...
						</p>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{feed.map((item) => (
								<article
									key={item.link}
									className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
								>
									<div className="relative aspect-video">
										<img
											src={item.thumbnail || DEFAULT_IMAGE_PATH}
											alt={item.title}
											className={`w-full h-full object-cover ${
												!item.thumbnail ? "p-4 object-contain" : ""
											}`}
										/>
									</div>
									<div className="p-6">
										<h2 className="text-xl font-bold mb-2 line-clamp-2">
											{item.title}
										</h2>
										<p className="text-sm text-gray-600 mb-4">
											公開日:{" "}
											{new Date(item.pubDate).toLocaleDateString("ja-JP")}
										</p>
										{/* コメントアウトされた部分を残しておく場合
                    {item.description && (
                      <p className="text-gray-700 mb-4 line-clamp-3">
                        {item.description}
                      </p>
                    )} */}
										<a
											href={item.link}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-block text-primary hover:text-primary-dark font-medium transition-colors duration-200"
										>
											続きを読む
										</a>
									</div>
								</article>
							))}
						</div>
					)}
				</Container>
			</div>
		</>
	);
}

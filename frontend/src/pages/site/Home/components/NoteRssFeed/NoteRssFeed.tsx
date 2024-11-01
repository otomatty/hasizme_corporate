import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchNoteRssFeed } from "@/utils/rssUtils";
import { cn } from "@/lib/utils";
import Container from "@/components/site/Container/Container";
interface FeedItem {
	title: string;
	link: string;
	pubDate: string;
	thumbnail: string;
}

const NoteRssFeed = () => {
	const [feed, setFeed] = useState<FeedItem[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadFeed = async () => {
			try {
				const data = await fetchNoteRssFeed();
				setFeed(data);
			} catch (error) {
				console.error("Failed to fetch RSS feed:", error);
			} finally {
				setLoading(false);
			}
		};

		loadFeed();
	}, []);

	return (
		<section className="w-full py-16 md:py-32">
			<Container>
				<div className="flex flex-col md:flex-row gap-8">
					{/* メインビジュアル */}
					<div className="w-full flex flex-col justify-center md:w-1/3 bg-gradient-to-br from-primary via-accent to-primary rounded-s-xl p-8 text-white animate-gradient">
						<p className="text-lg mb-4">橋爪商事のオウンドメディア</p>
						<h2 className="text-4xl md:text-6xl font-bold mb-4">橋爪倶楽部</h2>
						<p className="text-lg flex items-center gap-2">
							<img
								src="/images/note-logo.svg"
								alt="note"
								className="h-6 inline-block"
							/>
							で情報を発信しています
						</p>
					</div>

					{/* フィードリスト */}
					<div className="w-full md:w-2/3 space-y-4">
						{loading ? (
							<p className="text-center text-gray-600">読み込み中...</p>
						) : (
							<>
								{feed.slice(0, 3).map((item) => (
									<a
										key={item.link}
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										className={cn(
											"flex bg-white rounded-lg shadow-md overflow-hidden",
											"transform transition-transform duration-300 hover:-translate-y-1",
										)}
									>
										<img
											src={item.thumbnail}
											alt={item.title}
											className="w-32 h-32 object-cover"
										/>
										<div className="flex-1 p-4">
											<h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
												{item.title}
											</h3>
											<time className="text-sm text-gray-500">
												{new Date(item.pubDate).toLocaleDateString("ja-JP")}
											</time>
										</div>
									</a>
								))}
								<div className="w-full text-center">
									<Link
										to="/articles"
										className={cn(
											"block px-6 py-3 bg-primary text-white rounded-md",
											"transition-colors duration-300 hover:bg-primary/90",
										)}
									>
										もっと見る
									</Link>
								</div>
							</>
						)}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default NoteRssFeed;

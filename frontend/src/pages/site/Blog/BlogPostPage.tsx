import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogPostBySlug } from "@/lib/newtClient"; // パスは要調整
import type { BlogPost } from "@/types/blog"; // パスは要調整
import parse from "html-react-parser";

export default function BlogPostPage() {
	const { slug } = useParams();
	const [post, setPost] = useState<BlogPost | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadPost = async () => {
			try {
				if (!slug) return;
				const fetchedPost = await fetchBlogPostBySlug(slug);
				setPost(fetchedPost);
			} catch (error) {
				console.error("ブログポストの取得に失敗しました:", error);
			} finally {
				setLoading(false);
			}
		};

		loadPost();
	}, [slug]);

	if (loading) {
		return <p className="text-center py-8">読み込み中...</p>;
	}

	if (!post) {
		return <p className="text-center py-8">記事が見つかりません</p>;
	}

	return (
		<div className="max-w-3xl mx-auto px-4 py-8 font-sans text-gray-800">
			<h1 className="text-4xl font-bold mb-4">{post.title}</h1>
			<p className="text-sm text-gray-500 mb-6">
				{new Date(post._sys.updatedAt).toLocaleDateString("ja-JP")}
			</p>
			{post.tags && (
				<ul className="flex flex-wrap mb-6">
					{post.tags.map((tag) => (
						<li
							key={tag.name}
							className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
							style={{ backgroundColor: tag.tagColor || "#f0f0f0" }}
						>
							{tag.name}
						</li>
					))}
				</ul>
			)}
			<div className="prose prose-lg max-w-none">{parse(post.body)}</div>
		</div>
	);
}

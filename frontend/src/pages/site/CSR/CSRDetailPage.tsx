import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { csrActivities } from "@/data/csrData"; // パスは要調整
import type { CSRActivity } from "@/types/csr"; // パスは要調整

export default function CSRDetailPage() {
	const { id } = useParams();
	const [csrActivity, setCsrActivity] = useState<CSRActivity | null>(null);

	useEffect(() => {
		const activity = csrActivities.find((item) => item.id === id);
		setCsrActivity(activity || null);
	}, [id]);

	if (!csrActivity) {
		return <p className="text-center py-8">活動が見つかりません</p>;
	}

	return (
		<div className="max-w-3xl mx-auto px-4 py-8">
			<img
				src={csrActivity.image}
				alt={csrActivity.title}
				className="w-full h-auto rounded-lg mb-4"
			/>
			<h1 className="text-3xl font-bold text-primary mb-4">
				{csrActivity.title}
			</h1>
			<p className="text-lg leading-relaxed mb-4">
				{csrActivity.fullDescription}
			</p>
			<div className="bg-gray-100 p-4 rounded-lg">
				<p className="mb-2">
					<strong>実施日:</strong> {csrActivity.date}
				</p>
				<p className="mb-2">
					<strong>参加者:</strong> {csrActivity.participants}
				</p>
				<p>
					<strong>影響:</strong> {csrActivity.impact}
				</p>
			</div>
		</div>
	);
}

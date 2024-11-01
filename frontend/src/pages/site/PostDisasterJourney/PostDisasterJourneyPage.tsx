import { timelineEvents } from "@/data/postDisasterJourneyData";
import { Card } from "@/components/ui/card";

interface TimelineEvent {
	date: string;
	title: string;
	description: string;
	image?: string;
}

const PostDisasterJourneyPage = () => {
	return (
		<div className="container mx-auto py-8">
			<div className="max-w-3xl mx-auto px-8">
				<h1 className="text-3xl font-bold text-center mb-12 text-gray-900">
					震災から今日までの歩み
				</h1>

				{/* タイムライン */}
				<div className="relative pl-8">
					{/* 縦線 */}
					<div className="absolute left-0 top-0 h-full w-1 bg-gray-100" />

					{timelineEvents.map((event: TimelineEvent) => (
						<div key={event.date} className="relative pb-12 last:pb-0">
							{/* ドット */}
							<div className="absolute left-[-8px] top-10 w-4 h-4 bg-primary-foreground rounded-full" />

							{/* コンテンツ */}
							<div className="ml-8">
								<div className="font-bold text-lg text-gray-700 mb-2">
									{event.date}
								</div>

								<Card className="p-6 bg-card hover:shadow-md transition-shadow">
									<h3 className="text-xl font-semibold mb-3 text-gray-900">
										{event.title}
									</h3>

									{event.image && (
										<img
											src={event.image}
											alt={event.title}
											className="w-full max-w-md h-auto object-cover rounded-lg mb-4"
										/>
									)}

									<p className="text-gray-600 leading-relaxed">
										{event.description}
									</p>
								</Card>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PostDisasterJourneyPage;

import { Link } from "react-router-dom";
import { csrActivities } from "@/data/csrData"; // パスは要調整
import Hero from "@/components/site/Hero/Hero";

export default function CSRPage() {
	return (
		<>
			<Hero title="CSR活動" />
			<div className="max-w-5xl mx-auto px-8 py-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{csrActivities.map((activity) => (
						<Link
							key={activity.id}
							to={`/csr/${activity.id}`}
							className="block bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
						>
							<img
								src={activity.thumbnail}
								alt={activity.title}
								className="w-full h-48 object-cover"
							/>
							<h3 className="text-lg font-semibold text-primary text-center my-4">
								{activity.title}
							</h3>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}

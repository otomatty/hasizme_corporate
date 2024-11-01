import { Link } from "react-router-dom";
import Container from "@/components/site/Container/Container";

const careerData = [
	{
		title: "営業職",
		description:
			"お客様のニーズを理解し、最適な製品やサービスを提案する営業職を募集しています。",
		link: "/careers#sales",
	},
	{
		title: "技術職",
		description:
			"最新の技術を駆使して、革新的な製品開発に携わる技術職を募集しています。",
		link: "/careers#engineering",
	},
	{
		title: "事務職",
		description: "会社の円滑な運営をサポートする事務職を募集しています。",
		link: "/careers#administrative",
	},
];

const CareersSection = () => {
	return (
		<section className="w-full py-16 bg-gray-50">
			<Container>
				<h2 className="text-4xl text-center mb-8 text-primary">採用情報</h2>
				<div className="flex justify-around flex-wrap gap-8">
					{careerData.map((career) => (
						<div
							key={career.title}
							className="bg-white rounded-lg shadow-md p-8 w-full md:w-[calc(33.333%-2rem)] transition-transform duration-300 hover:-translate-y-1"
						>
							<h3 className="text-2xl mb-4 text-primary">{career.title}</h3>
							<p className="text-gray-600 mb-4">{career.description}</p>
							<Link
								to={career.link}
								className="inline-block mt-4 text-primary font-bold hover:text-accent hover:underline"
							>
								詳細を見る
							</Link>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
};

export default CareersSection;

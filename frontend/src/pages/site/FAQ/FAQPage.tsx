import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { fetchFAQItems } from "@/lib/newtClient";
import type { FAQItem } from "@/types/faq"; // パスは要調整
import Hero from "@/components/site/Hero/Hero";
import parse from "html-react-parser";

export default function FAQPage() {
	const [faqData, setFaqData] = useState<FAQItem[]>([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("全て");
	const [filteredFaqs, setFilteredFaqs] = useState<FAQItem[]>([]);
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	useEffect(() => {
		const loadFAQs = async () => {
			try {
				const items = await fetchFAQItems();
				setFaqData(items);
			} catch (error) {
				console.error("FAQの取得に失敗しました:", error);
			}
		};
		loadFAQs();
	}, []);

	useEffect(() => {
		const filtered = faqData.filter(
			(faq) =>
				(faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
					faq.answer.toLowerCase().includes(searchTerm.toLowerCase())) &&
				(selectedCategory === "全て" || faq.category === selectedCategory),
		);
		setFilteredFaqs(filtered);
	}, [faqData, searchTerm, selectedCategory]);

	const categories = ["全て", ...new Set(faqData.map((faq) => faq.category))];

	const toggleAnswer = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<>
			<Hero title="よくある質問" />
			<div className="max-w-3xl mx-auto px-4 py-8">
				<div className="bg-white rounded-lg shadow-md p-6">
					<input
						type="text"
						placeholder="質問を検索..."
						className="w-full px-4 py-3 mb-6 text-base border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
						onChange={(e) => setSearchTerm(e.target.value)}
					/>

					<div className="flex flex-wrap gap-2 mb-6">
						{categories.map((category) => (
							<button
								type="button"
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-4 py-2 text-sm rounded-full transition-colors
                  ${
										selectedCategory === category
											? "bg-primary text-white"
											: "bg-gray-100 hover:bg-gray-200"
									}`}
							>
								{category}
							</button>
						))}
					</div>

					<ul className="space-y-4">
						{filteredFaqs.map((faq, index) => (
							<li
								key={faq.id}
								className="border border-gray-200 rounded-md overflow-hidden"
							>
								<button
									type="button"
									onClick={() => toggleAnswer(index)}
									className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
								>
									<span className="font-medium">{faq.question}</span>
									<ChevronDown
										className={`w-5 h-5 transition-transform duration-300
                      ${openIndex === index ? "rotate-180" : ""}`}
									/>
								</button>
								<div
									className={`overflow-hidden transition-all duration-300
                    ${
											openIndex === index ? "max-h-[1000px] p-4" : "max-h-0 p-0"
										}`}
								>
									<div className="prose prose-sm max-w-none">
										{parse(faq.answer)}
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

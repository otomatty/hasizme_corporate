import { motion } from "framer-motion";
import { historyData, type HistoryEvent } from "@/data/historyData";
import Hero from "@/components/site/Hero/Hero";
import Container from "@/components/site/Container/Container";

const HistoryPage = () => {
	// 年代でグループ化する（西暦の10年単位でグループ化）
	const groupedHistory = historyData.reduce(
		(acc, item) => {
			const decade = `${Math.floor(item.year / 10) * 10}年代`;
			if (!acc[decade]) {
				acc[decade] = [];
			}
			acc[decade].push(item);
			return acc;
		},
		{} as Record<string, HistoryEvent[]>,
	);

	// 和暦と月を整形する関数
	const formatDate = (item: HistoryEvent) => {
		const month = item.month ? `${item.month}月` : "";
		return `${item.japaneseyear}${item.japaneseyear_number}年${month}`;
	};

	return (
		<>
			<Hero title="橋爪商事の歩み" />

			<Container>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="max-w-5xl mx-auto"
				>
					{Object.entries(groupedHistory).map(([decade, items]) => (
						<div key={decade} className="mb-16">
							<motion.h2
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								className="text-3xl font-bold mb-8 text-primary border-l-4 border-primary pl-4"
							>
								{decade}
							</motion.h2>

							<ul className="relative">
								{/* タイムラインの縦線 */}
								<div className="absolute left-[180px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20" />

								{items.map((item, index) => (
									<motion.li
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.1 }}
										key={`${item.year}-${item.event}`}
										className="mb-8 flex group hover:bg-gray-50/50 rounded-lg p-4 transition-all duration-300"
									>
										{/* 年号と西暦 */}
										<div className="w-[180px] text-right pr-8 pt-1 shrink-0">
											<div className="font-bold text-primary text-lg">
												{formatDate(item)}
											</div>
											<div className="text-sm text-gray-500">{item.year}</div>
										</div>

										{/* イベント */}
										<div className="flex-grow pl-8 relative">
											{/* ドット */}
											<div
												className="absolute left-[-5px] top-[0.7rem] w-3 h-3 bg-primary rounded-full 
											group-hover:scale-150 transition-all duration-300 
											shadow-[0_0_10px_rgba(var(--primary-rgb),0.3)]"
											/>

											{/* イベントテキスト */}
											<p className="text-gray-700 group-hover:text-primary transition-colors duration-300 leading-relaxed">
												{item.event}
											</p>
										</div>
									</motion.li>
								))}
							</ul>
						</div>
					))}
				</motion.div>
			</Container>
		</>
	);
};

export default HistoryPage;

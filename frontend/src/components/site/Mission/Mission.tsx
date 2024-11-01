import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
	type LucideIcon,
	Heart,
	Cpu,
	Recycle,
	ChevronDown,
} from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

interface MissionData {
	id: string;
	title: Array<{ id: string; text: string }>;
	content: Array<{
		id: string;
		type: "text" | "strong" | "list";
		content: string | string[];
	}>;
	icon: LucideIcon;
}

const Mission = () => {
	const missions: MissionData[] = [
		{
			id: "mission-1",
			title: [{ id: "mission-1-title-1", text: "地域愛" }],
			content: [
				{
					id: "mission-1-content-1",
					type: "strong",
					content: "地域社会を取り巻く現在と未来の課題へ立ち向かう覚悟",
				},
				{
					id: "mission-1-content-2",
					type: "text",
					content:
						"地域社会は、これから明治維新を超えるインパクトのある社会の大変革期に入ります。私たちには、強い「地域愛」があります。その「チカラ」をもって現在と未来の課題に立ち向かう覚悟があります。",
				},
				{
					id: "mission-1-content-3",
					type: "text",
					content: "主な課題：",
				},
				{
					id: "mission-1-content-4",
					type: "list",
					content: [
						"急激な人口減少",
						"地球環境の急激な変化による第一次産業への影響",
						"国や自治体の財政悪化",
					],
				},
				{
					id: "mission-1-content-5",
					type: "text",
					content:
						"当社は創業以来、地域の方々からのご愛顧をいただきながら成長させていただきました。これからも地域と共に歩んでいきます。",
				},
			],
			icon: Heart,
		},
		{
			id: "mission-2",
			title: [
				{ id: "mission-2-title-1", text: "近未来" },
				{ id: "mission-2-title-2", text: "テクノロジー" },
			],
			content: [
				{
					id: "mission-2-content-1",
					type: "strong",
					content: "様々なテクノロジーを積極的に活用し、従来の常識を覆す",
				},
				{
					id: "mission-2-content-2",
					type: "text",
					content:
						"2030年を目標に様々なテクノロジーが開発されています。これらは多くの課題解決に役立ちます。",
				},
				{
					id: "mission-2-content-3",
					type: "text",
					content: "テクノロジーの利点：",
				},
				{
					id: "mission-2-content-4",
					type: "list",
					content: [
						"高速な情報収集",
						"世界中とのリアルタイムな接続",
						"人工知能やロボット技術による業務自動化",
						"医療の進歩",
					],
				},
			],
			icon: Cpu,
		},
		{
			id: "mission-3",
			title: [
				{ id: "mission-3-title-1", text: "コア事業領域の" },
				{ id: "mission-3-title-2", text: "リノベーション" },
			],
			content: [
				{
					id: "mission-3-content-1",
					type: "strong",
					content:
						"豊富なノウハウを持つ、建設・産業資材、化学薬品の高付加価値化",
				},
				{
					id: "mission-3-content-2",
					type: "text",
					content: "具体的な取り組み：",
				},
				{
					id: "mission-3-content-4",
					type: "list",
					content: [
						"コアビジネスと最新のテクノロジーの融合",
						"データ解析に基づく新たなサービスや商品の提供",
						"顧客満足度の向上",
						"地元の問題解決への貢献",
					],
				},
				{
					id: "mission-3-content-5",
					type: "text",
					content:
						"これを3つ目の「チカラ」として、地域社会の発展に寄与していきます。",
				},
			],
			icon: Recycle,
		},
	];

	const [openMission, setOpenMission] = useState<Array<{
		id: string;
		text: string;
	}> | null>(null);
	const isDesktop = useMediaQuery("(min-width: 768px)");

	const toggleMission = (mission: Array<{ id: string; text: string }>) => {
		setOpenMission(
			openMission?.map((t) => t.text).join(" ") ===
				mission.map((t) => t.text).join(" ")
				? null
				: mission,
		);
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Escape") {
			handleClose();
		}
	};

	const handleClose = () => {
		setOpenMission(null);
	};

	const getMissionIcon = (title: Array<{ id: string; text: string }>) => {
		const mission = missions.find(
			(m) =>
				m.title.map((t) => t.text).join(" ") ===
				title.map((t) => t.text).join(" "),
		);
		return mission ? <mission.icon className="text-2xl" /> : null;
	};

	const renderContent = (content: MissionData["content"][0]) => {
		switch (content.type) {
			case "strong":
				return (
					<p
						key={content.id}
						className="text-base leading-relaxed text-gray-700 mb-2 font-bold"
					>
						{content.content}
					</p>
				);
			case "list":
				return (
					<ul key={content.id} className="list-disc pl-5 mb-2 text-gray-700">
						{(content.content as string[]).map((item, i) => (
							<li key={`${content.id}-item-${i}`} className="mb-1">
								{item}
							</li>
						))}
					</ul>
				);
			default:
				return (
					<p
						key={content.id}
						className="text-base leading-relaxed text-gray-700 mb-2"
					>
						{content.content}
					</p>
				);
		}
	};

	return (
		<>
			<div className="my-16">
				<p className="text-center">私たちのミッション</p>
				<h2 className="text-center font-bold text-2xl md:text-4xl xl:text-6xl text-gray-800 mt-2">
					「みんな」で持続可能な未来を創る
				</h2>
				<h3 className="text-base md:text-xl mb-4 md:mb-8 text-center text-gray-800">
					ミッションを実現する力
				</h3>

				{isDesktop ? (
					<div className="flex justify-center gap-12">
						{missions.map((mission) => (
							<button
								type="button"
								key={mission.id}
								className="flex flex-col items-center bg-transparent border-none p-0"
								onClick={() => toggleMission(mission.title)}
								onKeyDown={handleKeyDown}
							>
								<div className="w-40 h-40 rounded-full bg-primary flex flex-col justify-center items-center transition-transform hover:scale-110 relative overflow-hidden">
									<h4 className="text-base text-center text-white transition-transform">
										{mission.title.map((titlePart) => (
											<div key={titlePart.id}>{titlePart.text}</div>
										))}
									</h4>
									<div
										className={`mt-2 transition-transform ${
											openMission?.map((t) => t.text).join(" ") ===
											mission.title.map((t) => t.text).join(" ")
												? "rotate-180"
												: ""
										}`}
									>
										<ChevronDown className="w-4 h-4 text-white" />
									</div>
								</div>
							</button>
						))}
					</div>
				) : (
					<div className="flex flex-col gap-4">
						{missions.map((mission) => (
							<button
								key={mission.id}
								type="button"
								className="bg-primary text-white p-4 rounded-lg text-left border-none w-full"
								onClick={() => toggleMission(mission.title)}
								onKeyDown={handleKeyDown}
							>
								<h3 className="text-lg m-0">
									{mission.title.map((titlePart) => (
										<div key={titlePart.id}>{titlePart.text}</div>
									))}
								</h3>
							</button>
						))}
					</div>
				)}
			</div>

			{isDesktop && (
				<div className="mt-8">
					{missions.map((mission) => (
						<div
							key={mission.id}
							className={`max-w-[60%] mx-auto overflow-hidden transition-all duration-500 bg-secondary rounded-lg relative ${
								openMission?.map((t) => t.text).join(" ") ===
								mission.title.map((t) => t.text).join(" ")
									? "max-h-[1000px] opacity-100 p-4"
									: "max-h-0 opacity-0 p-0"
							}`}
						>
							<h3 className="text-xl text-primary mb-4 flex items-center">
								<span className="mr-2">
									<mission.icon className="w-6 h-6" />
								</span>
								{mission.title.map((titlePart) => (
									<div key={titlePart.id}>{titlePart.text}</div>
								))}
							</h3>
							{mission.content.map((paragraph) => renderContent(paragraph))}
						</div>
					))}
				</div>
			)}

			{!isDesktop && (
				<Dialog open={openMission !== null} onOpenChange={() => handleClose()}>
					<DialogContent className="sm:max-w-[425px]">
						{openMission && (
							<>
								<DialogHeader>
									<DialogTitle className="text-xl text-primary flex items-center">
										<span className="mr-2">{getMissionIcon(openMission)}</span>
										{openMission.map((titlePart) => (
											<div key={titlePart.id}>{titlePart.text}</div>
										))}
									</DialogTitle>
								</DialogHeader>
								<div className="mt-4">
									{missions
										.find(
											(m) =>
												m.title.map((t) => t.text).join(" ") ===
												openMission.map((t) => t.text).join(" "),
										)
										?.content.map((paragraph) => renderContent(paragraph))}
								</div>
							</>
						)}
					</DialogContent>
				</Dialog>
			)}
		</>
	);
};

export default Mission;

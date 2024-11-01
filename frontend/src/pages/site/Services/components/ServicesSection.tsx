import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Truck, Factory, Recycle } from "lucide-react";

interface ServiceItem {
	title: string;
	description: string;
	icon: React.ReactNode;
}

const services: ServiceItem[] = [
	{
		title: "建設資材販売",
		description:
			"鉄鋼、非鉄金属、セメント、生コンクリート、各種建材など、建設に必要な資材を幅広く取り扱っています。",
		icon: <Building2 className="h-12 w-12 text-primary" />,
	},
	{
		title: "物流サービス",
		description:
			"自社配送による迅速かつ確実な配送体制を整え、お客様のニーズに応じた物流サービスを提供しています。",
		icon: <Truck className="h-12 w-12 text-primary" />,
	},
	{
		title: "工業製品",
		description:
			"工業用機械、工具、電動機器など、産業界で必要とされる様々な製品を取り扱っています。",
		icon: <Factory className="h-12 w-12 text-primary" />,
	},
	{
		title: "環境・リサイクル",
		description:
			"産業廃棄物の収集運搬から処理まで、環境に配慮したリサイクルサービスを提供しています。",
		icon: <Recycle className="h-12 w-12 text-primary" />,
	},
];

export const ServicesSection = () => {
	return (
		<section className="py-12">
			<div className="text-center mb-12">
				<h2 className="text-3xl font-bold text-gray-900 mb-4">主な事業内容</h2>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">
					創業以来培ってきた経験と実績を活かし、
					お客様のニーズに応える多様なサービスを提供しています。
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
				{services.map((service) => (
					<Card
						key={service.title}
						className="hover:shadow-lg transition-shadow duration-300"
					>
						<CardHeader className="flex flex-col items-center space-y-4">
							{service.icon}
							<CardTitle className="text-2xl font-bold">
								{service.title}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-gray-600 text-center">{service.description}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};

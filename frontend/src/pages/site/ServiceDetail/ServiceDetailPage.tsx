import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { services, type ServiceData } from "@/data/servicesData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Mail } from "lucide-react";

const ServiceDetailPage = () => {
	const { id } = useParams();
	const [service, setService] = useState<ServiceData | undefined>(undefined);

	useEffect(() => {
		const foundService = services.find((s) => s.id === id);
		setService(foundService);
	}, [id]);

	if (!service) {
		return (
			<div className="container mx-auto px-4 py-8">
				<p className="text-center text-gray-600">事業が見つかりません。</p>
			</div>
		);
	}

	return (
		<>
			{/* ヒーローセクション */}
			<div className="relative h-[30vh] flex items-center justify-center">
				{service.imageUrl && (
					<>
						<img
							src={service.imageUrl}
							alt={service.title}
							className="absolute inset-0 w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-black/40" />
					</>
				)}
				<h1 className="relative text-4xl font-bold text-white text-center z-10">
					{service.title}
				</h1>
			</div>

			{/* メインコンテンツ */}
			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* メインエリア */}
					<div className="lg:col-span-2">
						<Card className="p-6">
							<p className="text-gray-700 mb-8">{service.description}</p>

							<h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
								取扱商品
							</h2>
							<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
								{service.products.map((product) => (
									<div
										key={product}
										className="bg-gray-50 rounded-md p-3 text-center text-gray-700"
									>
										{product}
									</div>
								))}
							</div>

							<h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-gray-200">
								特徴
							</h2>
							<ul className="space-y-3 mb-8">
								{service.features.map((feature) => (
									<li key={feature} className="flex items-start gap-2">
										<Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
										<span className="text-gray-700">{feature}</span>
									</li>
								))}
							</ul>
						</Card>
					</div>

					{/* サイドバー */}
					<div className="space-y-6">
						<Card className="p-6">
							<h2 className="text-xl font-semibold mb-4">お問い合わせ</h2>
							<div className="bg-primary/5 rounded-lg p-4 flex items-center gap-3">
								<Mail className="h-5 w-5 text-primary" />
								<span className="text-gray-700">{service.contact}</span>
							</div>
						</Card>

						<Card className="p-6">
							<h2 className="text-xl font-semibold mb-4">ブログ</h2>
							<Button className="w-full" variant="outline" asChild>
								<a
									href={service.blogUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									事業部ブログを見る
								</a>
							</Button>
						</Card>
					</div>
				</div>

				{/* 他の事業 */}
				<div className="mt-12">
					<h2 className="text-2xl font-semibold mb-6">他の事業</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						{services
							.filter((otherService) => otherService.id !== service.id)
							.map((otherService) => (
								<Link
									key={otherService.id}
									to={`/services/${otherService.id}`}
									className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 text-center 
                    text-gray-700 transition-colors duration-200"
								>
									{otherService.title}
								</Link>
							))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ServiceDetailPage;

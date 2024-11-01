import { useState, useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { services } from "@/data/servicesData";
import Container from "@/components/site/Container/Container";
import SectionTitle from "@/components/site/SectionTitle";

interface ServiceData {
	title: string;
	icon: string;
	description: string;
}

const ServicesSection = () => {
	const [selectedService, setSelectedService] = useState<
		ServiceData | undefined
	>(services[0]);
	const isDesktop = useMediaQuery("(min-width: 1024px)");

	const handleMouseEnter = (service: ServiceData) => {
		if (isDesktop) {
			setSelectedService(service);
		}
	};

	useEffect(() => {
		if (!isDesktop) {
			setSelectedService(undefined);
		}
	}, [isDesktop]);

	return (
		<section className=" bg-gray-50 w-full py-16">
			<Container>
				<SectionTitle
					title="事業紹介"
					description="お客様のご要望にお応えするため、さまざまな商品をご用意しております。"
				/>
				<div className="flex items-center justify-between w-full">
					{/* サービス一覧 */}

					<div className="w-full md:w-1/3 space-y-4">
						{services.map((service) => (
							<div
								key={service.title}
								onMouseEnter={() => handleMouseEnter(service)}
								className={cn(
									"w-full p-4 bg-white rounded-lg shadow transition-all cursor-pointer",
									"hover:scale-105 hover:shadow-md",
									selectedService?.title === service.title &&
										"scale-105 shadow-md",
								)}
							>
								<div className="flex items-center gap-4">
									<span className="text-2xl">{service.icon}</span>
									<h3 className="text-xl font-semibold text-gray-800">
										{service.title}
									</h3>
								</div>
							</div>
						))}
					</div>

					{/* サービス詳細 */}
					<div className="hidden md:block w-2/3 ml-8">
						{selectedService && (
							<div
								className={cn(
									"bg-white p-8 rounded-lg shadow-lg",
									"transition-opacity duration-200 ease-in-out",
								)}
							>
								<h3 className="text-2xl font-bold mb-4">
									{selectedService.title}
								</h3>
								<p className="text-gray-600 leading-relaxed">
									{selectedService.description}
								</p>
							</div>
						)}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default ServicesSection;

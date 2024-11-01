import Hero from "@/components/site/Hero/Hero";
import { ServicesSection } from "./components/ServicesSection";

const ServicesPage = () => {
	return (
		<div className="min-h-screen bg-background">
			<Hero title="事業紹介" />
			<main className="container mx-auto py-12 px-4">
				<ServicesSection />
			</main>
		</div>
	);
};

export default ServicesPage;

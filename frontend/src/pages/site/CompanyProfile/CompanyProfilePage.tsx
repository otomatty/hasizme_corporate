import CompanyOverviewSection from "./components/CompanyOverviewSection";
import BusinessContentSection from "./components/BusinessContentSection";
import ExecutivesSection from "./components/ExecutivesSection";
import Hero from "@/components/site/Hero/Hero";
import Container from "@/components/site/Container/Container";

const CompanyProfilePage = () => {
	return (
		<>
			<Hero title="会社概要" />
			<Container>
				<div className="mx-auto py-8">
					<CompanyOverviewSection />
					<BusinessContentSection />
					<ExecutivesSection />
				</div>
			</Container>
		</>
	);
};

export default CompanyProfilePage;

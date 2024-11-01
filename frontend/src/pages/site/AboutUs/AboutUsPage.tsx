import Hero from "@/components/site/Hero/Hero";
import Mission from "./components/MissionSection";
import PresidentMessage from "./components/PresidentMessageSection";
import CompanyInfo from "./components/CompanyInfoSection";

const AboutUsPage = () => {
	return (
		<>
			<Hero title="会社情報" />
			<div className="flex flex-col items-center p-8">
				<Mission />
				<PresidentMessage />
				<CompanyInfo />
			</div>
		</>
	);
};

export default AboutUsPage;

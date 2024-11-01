import { AboutUsContainer } from "./AboutUs.styled";
import Hero from "../../components/Hero/Hero";
import Mission from "./components/MissionSection/MissionSection";
import PresidentMessage from "./components/PresidentMessageSection/PresidentMessageSection";
import CompanyInfo from "./components/CompanyInfoSection/CompanyInfoSection";

function AboutUs() {
	return (
		<>
			<Hero title="会社情報" />
			<AboutUsContainer>
				<Mission />
				<PresidentMessage />
				<CompanyInfo />
			</AboutUsContainer>
		</>
	);
}

export default AboutUs;

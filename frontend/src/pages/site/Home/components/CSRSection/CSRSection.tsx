import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CSRSlider from "./components/CSRSlider";
import { csrActivities } from "@/data/csrData";
import SectionTitle from "@/components/site/SectionTitle";
import Container from "@/components/site/Container/Container";

const CSRSection = () => {
	const navigate = useNavigate();

	const handleViewAllClick = () => {
		navigate("/csr");
	};

	return (
		<section className="w-full py-16 bg-gray-50">
			<div className="mx-auto">
				<Container>
					<SectionTitle title="CSR活動" />
				</Container>
				<div className="space-y-8">
					<CSRSlider activities={csrActivities} />
					<div className="text-center">
						<Button onClick={handleViewAllClick} variant="default">
							CSR活動一覧を見る
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CSRSection;

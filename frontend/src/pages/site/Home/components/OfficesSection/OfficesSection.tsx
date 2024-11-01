import { useState, useRef } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import Container from "@/components/site/Container/Container";
import SectionTitle from "@/components/site/SectionTitle";
import { offices } from "@/data/officesData";
import type { Office } from "@/types/offices";
import type { OfficeListHandle } from "./components/OfficeList";

import OfficeDetails from "./components/OfficeDetails";
import OfficeTabs from "./components/OfficeTabs";
import OfficeList from "./components/OfficeList";

const OfficesSection = () => {
	const prefectures = Array.from(
		new Set(offices.map((office) => office.prefecture)),
	);

	const [selectedPrefecture, setSelectedPrefecture] = useState(prefectures[0]);
	const [selectedOffice, setSelectedOffice] = useState(
		offices.find((office) => office.prefecture === prefectures[0]) ??
			offices[0],
	);

	const filteredOffices = offices.filter(
		(office) => office.prefecture === selectedPrefecture,
	);

	const officeListRef = useRef<OfficeListHandle>(null);

	const handlePrefectureChange = (prefecture: string) => {
		setSelectedPrefecture(prefecture);
		const firstOffice = offices.find(
			(office) => office.prefecture === prefecture,
		);
		if (firstOffice) {
			setSelectedOffice(firstOffice);
			officeListRef.current?.resetPage();
		}
	};

	const handleOfficeSelect = (office: Office) => {
		setSelectedOffice(office);
	};

	return (
		<section className="w-full bg-gray-50 py-16">
			<Container>
				<SectionTitle
					title="事業所一覧"
					description="全国各地の事業所をご紹介します"
				/>

				<div className="flex flex-col lg:flex-row gap-8">
					<OfficeDetails office={selectedOffice} />

					<div className="max-w-[400px] bg-white rounded-lg shadow-lg p-6">
						<Tabs
							defaultValue={selectedPrefecture}
							value={selectedPrefecture}
							onValueChange={handlePrefectureChange}
						>
							<OfficeTabs
								prefectures={prefectures}
								selectedPrefecture={selectedPrefecture}
								onPrefectureChange={handlePrefectureChange}
							/>

							<TabsContent value={selectedPrefecture}>
								<OfficeList
									ref={officeListRef}
									offices={filteredOffices}
									selectedOffice={selectedOffice}
									onOfficeSelect={handleOfficeSelect}
								/>
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default OfficesSection;

import { useAtom } from "jotai";
import Hero from "@/components/site/Hero/Hero";
import Container from "@/components/site/Container/Container";
import {
	officesAtom,
	selectedPrefectureAtom,
	filteredOfficesAtom,
} from "@/stores/officesStore";

export default function OfficesPage() {
	const [offices] = useAtom(officesAtom);
	const [selectedPrefecture, setSelectedPrefecture] = useAtom(
		selectedPrefectureAtom,
	);
	const [filteredOffices] = useAtom(filteredOfficesAtom);

	return (
		<>
			<Hero title="事業所一覧" />
			<Container>
				<div className="flex justify-center space-x-4 mb-8">
					{Array.from(new Set(offices.map((office) => office.prefecture))).map(
						(prefecture) => (
							<button
								key={prefecture}
								type="button"
								onClick={() => setSelectedPrefecture(prefecture)}
								className={`px-4 py-2 rounded-md ${
									selectedPrefecture === prefecture
										? "bg-primary text-white"
										: "bg-gray-100 hover:bg-gray-200"
								}`}
							>
								{prefecture}
							</button>
						),
					)}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredOffices.map((office) => (
						<div
							key={office.name}
							className="bg-white rounded-lg shadow-md p-6"
						>
							<h3 className="text-xl font-bold mb-2">{office.name}</h3>
							<p className="text-gray-600 mb-4">{office.address}</p>
							<div className="space-y-2">
								<p>〒{office.postalCode}</p>
								<p>TEL: {office.phone}</p>
								<p>FAX: {office.fax}</p>
							</div>
						</div>
					))}
				</div>
			</Container>
		</>
	);
}

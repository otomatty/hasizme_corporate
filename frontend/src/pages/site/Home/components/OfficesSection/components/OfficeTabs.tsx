import { TabsList, TabsTrigger } from "@/components/ui/tabs";

interface OfficeTabsProps {
	prefectures: string[];
	selectedPrefecture: string;
	onPrefectureChange: (prefecture: string) => void;
}

const OfficeTabs = ({ prefectures, onPrefectureChange }: OfficeTabsProps) => {
	return (
		<TabsList className="w-full flex flex-wrap gap-1">
			{prefectures.map((prefecture) => (
				<TabsTrigger
					key={prefecture}
					value={prefecture}
					className="flex-1"
					onClick={() => onPrefectureChange(prefecture)}
				>
					{prefecture}
				</TabsTrigger>
			))}
		</TabsList>
	);
};

export default OfficeTabs;

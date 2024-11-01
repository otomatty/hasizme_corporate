import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@/components/ui/table";

const CompanyOverviewSection = () => {
	return (
		<section className="mb-12">
			<h2 className="text-2xl text-gray-700 mb-6 border-b-2 border-gray-200 pb-2">
				会社概要
			</h2>
			<Table>
				<TableBody>
					<TableRow>
						<TableHead className="w-[30%]">社名</TableHead>
						<TableCell>橋爪商事株式会社</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="w-[30%]">創業</TableHead>
						<TableCell>昭和3年</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="w-[30%]">設立</TableHead>
						<TableCell>昭和26年5月1日</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="w-[30%]">資本金</TableHead>
						<TableCell>2億5,120万円（5,024千株）</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="w-[30%]">売上高</TableHead>
						<TableCell>282億円（令和5年度）</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="w-[30%]">従業員数</TableHead>
						<TableCell>男126名　女37名　計163名（役員除く）</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="w-[30%]">主要取引銀行</TableHead>
						<TableCell>
							<ul className="list-none p-0 m-0">
								<li className="mb-2">岩手銀行大船渡支店</li>
								<li className="mb-2">商工中金盛岡支店</li>
								<li className="mb-2">北日本銀行大船渡支店</li>
								<li className="mb-0">東北銀行大船渡支店</li>
							</ul>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</section>
	);
};

export default CompanyOverviewSection;

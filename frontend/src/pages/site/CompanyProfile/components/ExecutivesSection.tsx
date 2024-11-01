import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@/components/ui/table";

const ExecutivesSection = () => {
	return (
		<section className="mb-12">
			<h2 className="text-2xl text-gray-700 mb-6 border-b-2 border-gray-200 pb-2">
				役員一覧
			</h2>
			<Table>
				<TableBody>
					<TableRow>
						<TableHead className="w-[60%] align-top">
							代表取締役社長
							<br />
							（兼橋爪信栄(株) 社長）
						</TableHead>
						<TableCell className="align-top">橋爪　博志</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="w-[60%] align-top">取締役会長</TableHead>
						<TableCell className="align-top">宮澤　信平</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="w-[60%] align-top">
							取締役専務執行役員
							<br />
							（兼大船渡レミコン(株) 社長、
							<br />
							兼高田レミコン(株) 社長、
							<br />
							兼(株)丸協 社長）
						</TableHead>
						<TableCell className="align-top">長谷川　秀信</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="w-[60%] align-top">取締役相談役</TableHead>
						<TableCell className="align-top">橋爪　幸平</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="w-[60%] align-top">常務執行役員</TableHead>
						<TableCell className="align-top">志田　幸雄</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="w-[60%] align-top">
							常務執行役員盛岡支店長
						</TableHead>
						<TableCell className="align-top">石川　修一</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="w-[60%] align-top">
							常務執行役員一関支店長
						</TableHead>
						<TableCell className="align-top">磯谷　正幸</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="w-[60%] align-top">
							執行役員新商材室長
						</TableHead>
						<TableCell className="align-top">平　洋規</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="w-[60%] align-top">
							執行役員新規エリア開拓部長北陸出張所所長
						</TableHead>
						<TableCell className="align-top">水野　孝志</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="w-[60%] align-top">
							執行役員セメント部長
						</TableHead>
						<TableCell className="align-top">水野　宏史</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="w-[60%] align-top">
							執行役員営業部長
						</TableHead>
						<TableCell className="align-top">新沼　敬</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="w-[60%] align-top">監査役</TableHead>
						<TableCell className="align-top">田村　文利</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="w-[60%] align-top">非常勤監査役</TableHead>
						<TableCell className="align-top">山内　睦也</TableCell>
					</TableRow>
					<TableRow>
						<TableHead className="w-[60%] align-top">顧問</TableHead>
						<TableCell className="align-top">水野　幸男</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</section>
	);
};

export default ExecutivesSection;

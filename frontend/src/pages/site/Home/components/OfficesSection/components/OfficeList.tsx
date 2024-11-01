import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useState, forwardRef, useImperativeHandle } from "react";
import type { Office } from "@/types/offices";

interface OfficeListProps {
	offices: Office[];
	selectedOffice: Office;
	onOfficeSelect: (office: Office) => void;
}

export interface OfficeListHandle {
	resetPage: () => void;
}

const OfficeList = forwardRef<OfficeListHandle, OfficeListProps>(
	({ offices, selectedOffice, onOfficeSelect }, ref) => {
		const [currentPage, setCurrentPage] = useState(1);
		// 1ページあたりの表示事業所数
		const itemsPerPage = 8;

		useImperativeHandle(ref, () => ({
			resetPage: () => setCurrentPage(1),
		}));

		// ページネーション関連の計算
		const totalPages = Math.ceil(offices.length / itemsPerPage);
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		const currentOffices = offices.slice(startIndex, endIndex);

		return (
			<div className="flex flex-col" style={{ minHeight: "400px" }}>
				{/* オフィスリスト */}
				<div className="flex-1 space-y-2">
					{currentOffices.map((office, index) => (
						<div key={office.name}>
							<button
								type="button"
								onClick={() => onOfficeSelect(office)}
								className={cn(
									"w-full text-left px-4 py-3 rounded-lg transition-colors",
									"hover:bg-gray-100",
									selectedOffice.name === office.name
										? "bg-gray-100"
										: "bg-white",
								)}
							>
								{office.name}
							</button>
							{index < currentOffices.length - 1 && (
								<Separator className="my-2" />
							)}
						</div>
					))}
				</div>

				{/* ページネーション */}
				{totalPages > 1 && (
					<div className="mt-auto pt-6">
						<div className="flex justify-center gap-2">
							{/* 前のページボタン */}
							<Button
								variant="outline"
								size="sm"
								onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
								disabled={currentPage === 1}
							>
								前へ
							</Button>

							{/* ページ番号ボタン */}
							{Array.from({ length: totalPages }).map((_, i) => {
								const pageNumber = i + 1;
								return (
									<Button
										key={`page-${pageNumber}`}
										variant={currentPage === pageNumber ? "default" : "outline"}
										size="sm"
										onClick={() => setCurrentPage(pageNumber)}
									>
										{pageNumber}
									</Button>
								);
							})}

							{/* 次のページボタン */}
							<Button
								variant="outline"
								size="sm"
								onClick={() =>
									setCurrentPage((prev) => Math.min(prev + 1, totalPages))
								}
								disabled={currentPage === totalPages}
							>
								次へ
							</Button>
						</div>
					</div>
				)}
			</div>
		);
	},
);

OfficeList.displayName = "OfficeList";

export default OfficeList;

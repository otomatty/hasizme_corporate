import { Button } from "@/components/ui/button";

interface OfficePaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const OfficePagination = ({
	currentPage,
	totalPages,
	onPageChange,
}: OfficePaginationProps) => {
	if (totalPages <= 1) return null;

	return (
		<div className="flex justify-center gap-2 mt-4">
			{Array.from({ length: totalPages }, (_, i) => (
				<Button
					key={`page-${i + 1}`}
					variant={currentPage === i + 1 ? "default" : "outline"}
					onClick={() => onPageChange(i + 1)}
				>
					{i + 1}
				</Button>
			))}
		</div>
	);
};

export default OfficePagination;

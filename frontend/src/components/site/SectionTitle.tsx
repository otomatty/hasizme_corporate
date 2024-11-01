import { cn } from "@/lib/utils";

interface SectionTitleProps {
	id?: string;
	title: string;
	description?: string;
	align?: "left" | "center" | "right";
}

const SectionTitle = ({
	id,
	title,
	description,
	align = "left",
}: SectionTitleProps) => {
	return (
		<div
			id={id}
			className={cn(
				"mb-8",
				align === "center" && "text-center",
				align === "right" && "text-right",
			)}
		>
			<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
				{title}
			</h2>
			{description && (
				<p className="text-lg text-gray-600 leading-relaxed">{description}</p>
			)}
		</div>
	);
};

export default SectionTitle;

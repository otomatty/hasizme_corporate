import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronRight, Users } from "lucide-react";

interface OrgNode {
	id: string;
	name: string;
	position?: string; // オプショナルに変更
	department?: string;
	children?: OrgNode[];
}

const OrganizationChartPage = () => {
	const [expandedNodes, setExpandedNodes] = useState<Set<string>>(
		new Set(["1"]),
	);

	const toggleNode = (id: string) => {
		setExpandedNodes((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(id)) {
				newSet.delete(id);
			} else {
				newSet.add(id);
			}
			return newSet;
		});
	};

	// サンプルの組織データ
	const orgData: OrgNode = {
		id: "1",
		name: "橋爪 博志",
		position: "代表取締役社長",
		children: [
			{
				id: "2",
				name: "長谷川 秀信",
				position: "取締役専務執行役員",
				children: [
					{
						id: "3",
						name: "営業本部",
						department: "営業部門",
						children: [
							{
								id: "4",
								name: "盛岡支店",
								department: "営業部門",
							},
							{
								id: "5",
								name: "一関支店",
								department: "営業部門",
							},
							{
								id: "6",
								name: "北上支店",
								department: "営業部門",
							},
						],
					},
					{
						id: "7",
						name: "管理本部",
						department: "管理部門",
						children: [
							{
								id: "8",
								name: "総務部",
								department: "管理部門",
							},
							{
								id: "9",
								name: "経理部",
								department: "管理部門",
							},
						],
					},
				],
			},
			{
				id: "10",
				name: "事業開発本部",
				department: "新規事業部門",
				children: [
					{
						id: "11",
						name: "新商材室",
						department: "新規事業部門",
					},
					{
						id: "12",
						name: "新規エリア開拓部",
						department: "新規事業部門",
					},
				],
			},
		],
	};

	const renderNode = (node: OrgNode, level = 0) => {
		const isExpanded = expandedNodes.has(node.id);
		const hasChildren = node.children && node.children.length > 0;
		const isRoot = level === 0;

		return (
			<div key={node.id} className={`ml-${level > 0 ? "6" : "0"}`}>
				<Card className="mb-2 border-l-4 border-l-blue-500">
					<div className="p-4">
						<div className="flex items-center gap-2">
							{hasChildren && (
								<Button
									variant="ghost"
									size="icon"
									className="h-6 w-6"
									onClick={() => toggleNode(node.id)}
								>
									{isExpanded ? (
										<ChevronDown className="h-4 w-4" />
									) : (
										<ChevronRight className="h-4 w-4" />
									)}
								</Button>
							)}
							<Users className="h-5 w-5 text-blue-500" />
							<div>
								<div className="font-bold">{node.name}</div>
								{node.position && (
									<div className="text-sm text-gray-500">{node.position}</div>
								)}
								{node.department && (
									<div className="text-sm text-gray-500">{node.department}</div>
								)}
							</div>
						</div>
					</div>
				</Card>
				{hasChildren && isExpanded && (
					<div
						className={`ml-4 pl-4 ${
							!isRoot ? "border-l-2 border-gray-200" : ""
						}`}
					>
						{node.children?.map((child) => renderNode(child, level + 1))}
					</div>
				)}
			</div>
		);
	};

	return (
		<div className="container mx-auto py-8">
			<h1 className="text-3xl font-bold text-gray-900 mb-8">組織図</h1>
			<div className="bg-white p-6 rounded-lg shadow-sm">
				{renderNode(orgData)}
			</div>
		</div>
	);
};

export default OrganizationChartPage;

import { Building2, Briefcase, Users, UserRound } from "lucide-react";
import type { MenuItem } from "@/types/menu";

export const menuItems: MenuItem[] = [
	{
		title: "会社情報",
		link: "/about-us",
		icon: Building2,
		backgroundImage: "/images/about-bg.jpg",
		subItems: [
			{ title: "会社情報トップ", link: "/about-us" },
			{
				title: "会社概要",
				link: "/about-us/company-profile",
				description: "橋爪商事の企業情報をご紹介します。",
			},
			{
				title: "沿革",
				link: "/about-us/history",
				description: "創業から現在までの歴史をご紹介します。",
			},
			{
				title: "震災から今日までの歩み",
				link: "/about-us/post-disaster-journey",
				description: "東日本大震災からの復興の歩みをご紹介します。",
			},
			{
				title: "CSR活動",
				link: "/csr",
				description: "企業の社会的責任への取り組みをご紹介します。",
			},
		],
	},
	{
		title: "事業紹介",
		link: "/services",
		icon: Briefcase,
		backgroundImage: "/images/services-bg.jpg",
		subItems: [
			{ title: "事業紹介トップ", link: "/services" },
			{
				title: "建材",
				link: "/services/building-materials",
				description: "建築資材の販売や施工に関するサービスをご紹介します。",
				backgroundImage: "/images/building-materials-bg.jpg",
			},
			{
				title: "セメント",
				link: "/services/cement",
				description: "セメント製品の取り扱いについてご紹介します。",
				backgroundImage: "/images/cement-bg.jpg",
			},
			{
				title: "鋼材・土木",
				link: "/services/steel-civil-engineering",
				description: "鋼材製品と土木工事に関するサービスをご紹介します。",
			},
			{
				title: "化成品",
				link: "/services/chemical-products",
				description: "化学製品の取り扱いについてご紹介します。",
			},
			{
				title: "DX",
				link: "/services/dx",
				description:
					"デジタルトランスフォーメーションへの取り組みをご紹介します。",
			},
			{
				title: "金物センター",
				link: "/services/hardware",
				description: "金物製品の取り扱いについてご紹介します。",
			},
		],
	},
	{
		title: "橋爪倶楽部",
		link: "/blog",
		icon: Users,
		subItems: [],
	},
	{
		title: "採用情報",
		link: "/careers",
		icon: UserRound,
		backgroundImage: "/images/careers-bg.jpg",
		subItems: [
			{ title: "採用トップ", link: "/careers" },
			{
				title: "新卒採用",
				link: "/careers/new-graduates",
				description: "新卒採用に関する情報をご紹介します。",
			},
			{
				title: "中途採用",
				link: "/careers/mid-career",
				description: "中途採用に関する情報をご紹介します。",
			},
		],
	},
];

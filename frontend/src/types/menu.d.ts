import type { LucideIcon } from "lucide-react";

export type SubMenuItem = {
	title: string;
	link: string;
	description?: string;
	backgroundImage?: string;
};

export type MenuItem = {
	title: string;
	link: string;
	subItems: SubMenuItem[];
	icon: LucideIcon;
	backgroundImage?: string;
};

export type MenuItems = MenuItem[];

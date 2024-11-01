import { useNavigate, Link } from "react-router-dom";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuIndicator,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ListItem } from "./ListItem";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@/types/menu";

interface NavbarProps {
	menuItems: MenuItem[];
	activeMenu: string | null;
	setActiveMenu: (menu: string | null) => void;
	isMobile: boolean;
	closeMenu?: () => void;
	keepMegaMenuOpen: () => void;
}

const Navbar = ({
	menuItems,
	activeMenu,
	setActiveMenu,
	isMobile,
	closeMenu,
}: NavbarProps) => {
	const navigate = useNavigate();

	// モバイル表示用のコンポーネント
	if (isMobile) {
		return (
			<ul className="flex flex-col w-full mt-16">
				{menuItems.map((item) => (
					<li key={item.title} className="list-none w-full">
						<button
							type="button"
							onClick={() => {
								if (item.subItems.length === 0) {
									navigate(item.link);
									closeMenu?.();
								} else {
									setActiveMenu(activeMenu === item.title ? null : item.title);
								}
							}}
							className={cn(
								"flex items-center w-full p-4 bg-transparent border-none cursor-pointer hover:bg-gray-100",
								{
									"text-primary font-bold": activeMenu === item.title,
								},
							)}
						>
							<item.icon className="h-4 w-4 mr-2" />
							{item.title}
						</button>
					</li>
				))}
			</ul>
		);
	}

	// デスクトップ表示用のコンポーネント
	return (
		<NavigationMenu>
			<NavigationMenuList className="flex items-center gap-2">
				{menuItems.map((item) => (
					<NavigationMenuItem key={item.title}>
						{item.subItems.length > 0 ? (
							<>
								<NavigationMenuTrigger
									className={cn("flex items-center gap-2", {
										"text-primary": activeMenu === item.title,
									})}
									onClick={() => setActiveMenu(item.title)}
								>
									<item.icon className="h-4 w-4" />
									{item.title}
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid grid-cols-[240px_1fr] w-[800px]">
										{/* インデックスページ（左側） */}
										<li>
											<NavigationMenuLink asChild>
												<button
													type="button"
													onClick={() => {
														navigate(item.link);
														setActiveMenu(null);
													}}
													className="block w-full h-full p-6 text-left bg-muted/50 hover:bg-muted transition-colors"
												>
													<div className="text-lg font-medium mb-2 text-primary">
														{item.title}
													</div>
													<p className="text-sm text-muted-foreground">
														{item.subItems[0].title}へ
													</p>
												</button>
											</NavigationMenuLink>
										</li>

										{/* サブメニュー項目（右側） */}
										<li className="p-8">
											<ul className="grid grid-cols-2 gap-2">
												{item.subItems.slice(1).map((subItem) => (
													<ListItem
														key={subItem.title}
														href={subItem.link}
														title={subItem.title}
													>
														{subItem.description}
													</ListItem>
												))}
											</ul>
										</li>
									</ul>
								</NavigationMenuContent>
							</>
						) : (
							<Link to={item.link}>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>
									<item.icon className="h-4 w-4 mr-2" />
									{item.title}
								</NavigationMenuLink>
							</Link>
						)}
					</NavigationMenuItem>
				))}
				<NavigationMenuIndicator />
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default Navbar;

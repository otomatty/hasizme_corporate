import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@/types/menu";

interface MegaMenuProps {
	activeMenu: string | null;
	menuItems: MenuItem[];
	closeMegaMenu: () => void;
	keepMegaMenuOpen: () => void;
}

const MegaMenu = ({
	activeMenu,
	menuItems,
	closeMegaMenu,
	keepMegaMenuOpen,
}: MegaMenuProps) => {
	const navigate = useNavigate();

	const handleItemClick = (link: string) => {
		navigate(link);
		closeMegaMenu();
	};

	return (
		<div
			className={cn("py-4", {
				block: activeMenu !== null,
				hidden: activeMenu === null,
			})}
			onMouseEnter={keepMegaMenuOpen}
			onMouseLeave={closeMegaMenu}
		>
			{menuItems.map((item) => (
				<div
					key={item.title}
					className={cn("flex flex-wrap gap-4", {
						flex: activeMenu === item.title,
						hidden: activeMenu !== item.title,
					})}
				>
					{item.subItems.length > 0 ? (
						item.subItems.map((subItem) => (
							<button
								key={subItem.title}
								type="button"
								onClick={() => handleItemClick(subItem.link)}
								className="bg-transparent border-none cursor-pointer px-4 py-2 text-base text-text transition-colors duration-300 hover:text-primary hover:bg-black/5"
							>
								{subItem.title}
							</button>
						))
					) : (
						<button
							type="button"
							onClick={() => handleItemClick(item.link)}
							className="bg-transparent border-none cursor-pointer px-4 py-2 text-base text-text transition-colors duration-300 hover:text-primary hover:bg-black/5"
						>
							{item.title}
						</button>
					)}
				</div>
			))}
		</div>
	);
};

export default MegaMenu;

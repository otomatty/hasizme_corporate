import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@/types/menu";
import { Button } from "@/components/ui/button";
import Navbar from "../Navbar/Navbar";
import { MobileContactButtons } from "../ContactButtons/ContactButtons";

interface SlideInMenuProps {
	isOpen: boolean;
	onClose: () => void;
	menuItems: MenuItem[];
	activeMenu: string | null;
	setActiveMenu: (menu: string | null) => void;
	keepMegaMenuOpen: () => void;
}

export const SlideInMenu = ({
	isOpen,
	onClose,
	menuItems,
	activeMenu,
	setActiveMenu,
	keepMegaMenuOpen,
}: SlideInMenuProps) => {
	const handleOverlayInteraction = (
		event: React.MouseEvent | React.KeyboardEvent,
	) => {
		if (
			event.type === "click" ||
			(event as React.KeyboardEvent).key === "Enter" ||
			(event as React.KeyboardEvent).key === " "
		) {
			onClose();
		}
	};

	return (
		<>
			{/* オーバーレイ */}
			<div
				role="button"
				tabIndex={0}
				className={cn(
					"fixed inset-0 bg-black/50 transition-opacity duration-300",
					{
						"opacity-100 visible": isOpen,
						"opacity-0 invisible": !isOpen,
					},
				)}
				onClick={handleOverlayInteraction}
				onKeyDown={handleOverlayInteraction}
				aria-label="メニューを閉じる"
			/>

			{/* スライドインメニュー */}
			<div
				className={cn(
					"fixed top-0 left-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col p-4 z-50",
					{
						"translate-x-0": isOpen,
						"translate-x-full": !isOpen,
					},
				)}
			>
				<Button
					variant="ghost"
					size="icon"
					onClick={onClose}
					className="absolute top-4 right-4 z-[1001]"
					aria-label="メニューを閉じる"
				>
					<X className="h-6 w-6" />
				</Button>

				<Navbar
					menuItems={menuItems}
					activeMenu={activeMenu}
					setActiveMenu={setActiveMenu}
					isMobile={true}
					closeMenu={onClose}
					keepMegaMenuOpen={keepMegaMenuOpen}
				/>

				<MobileContactButtons />
			</div>
		</>
	);
};

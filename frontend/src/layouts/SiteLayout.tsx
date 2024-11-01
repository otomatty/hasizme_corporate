import { useState, useEffect, useCallback } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/site/Header/Header";
import Footer from "@/components/site/Footer/Footer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const SiteLayout = () => {
	const [mainMarginTop, setMainMarginTop] = useState(0);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
	// const [activeMenu, setActiveMenu] = useState<string | null>(null);

	const setHeaderHeight = (height: number) => {
		setMainMarginTop(height);
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// handleResize関数をuseCallbackでメモ化
	const handleResize = useCallback(() => {
		setIsMobile(window.innerWidth <= 1200);
		if (window.innerWidth > 1200) {
			setIsMenuOpen(false);
		}
	}, []);

	// const keepMegaMenuOpen = () => {
	// 	if (activeMenu) {
	// 		setActiveMenu(activeMenu);
	// 	}
	// };

	const handleOverlayClick = () => {
		setIsMenuOpen(false);
	};

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === "Enter" || event.key === "Space") {
			setIsMenuOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [handleResize]);

	return (
		<>
			<Header setHeaderHeight={setHeaderHeight} toggleMenu={toggleMenu} />
			{/* スライドインメニューのオーバーレイ */}
			<div
				role="button"
				tabIndex={0}
				className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
					isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={handleOverlayClick}
				onKeyDown={handleKeyDown}
			/>
			{/* スライドインメニューコンテナ */}
			<div
				className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
					isMenuOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<Button
					variant="ghost"
					size="icon"
					className="absolute top-4 right-4"
					onClick={() => setIsMenuOpen(false)}
					aria-label="メニューを閉じる"
				>
					<X className="h-6 w-6" />
				</Button>
				{/* <Navbar
					menuItems={menuItems}
					activeMenu={activeMenu}
					setActiveMenu={setActiveMenu}
					isMobile={isMobile}
					closeMenu={() => setIsMenuOpen(false)}
					keepMegaMenuOpen={keepMegaMenuOpen}
				/>
				<MobileContactButtons /> */}
			</div>
			<main style={{ marginTop: `${mainMarginTop}px` }}>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default SiteLayout;

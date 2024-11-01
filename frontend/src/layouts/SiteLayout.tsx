import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/site/Header/Header";
import Footer from "@/components/site/Footer/Footer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import useMediaQuery from "@/hooks/useMediaQuery";

const SiteLayout = () => {
	const [mainMarginTop, setMainMarginTop] = useState(0);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isMobile = useMediaQuery("(max-width: 1200px)");

	const setHeaderHeight = (height: number) => {
		setMainMarginTop(height);
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		if (!isMobile) {
			setIsMenuOpen(false);
		}
	}, [isMobile]);

	const handleOverlayClick = () => {
		setIsMenuOpen(false);
	};

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === "Enter" || event.key === "Space") {
			setIsMenuOpen(false);
		}
	};

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

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { useScrollLogic } from "@/utils/scrollLogic";
import { cn } from "@/lib/utils";
import Navbar from "../Navbar/Navbar";
// import MegaMenu from "../MegaMenu/MegaMenu";
import Container from "@/components/site/Container/Container";
import { menuItems } from "@/data/menuItemsData";
import { ContactButtons } from "../ContactButtons/ContactButtons";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { uiStateAtom } from "@/stores/uiStore";

interface HeaderProps {
	setHeaderHeight: (height: number) => void;
	toggleMenu: () => void;
}

const Header = ({ setHeaderHeight, toggleMenu }: HeaderProps) => {
	const headerRef = useRef<HTMLElement>(null);
	const [uiState, setUiState] = useAtom(uiStateAtom);
	const { controlScroll } = useScrollLogic();

	useEffect(() => {
		if (headerRef.current) {
			setHeaderHeight(headerRef.current.offsetHeight);
		}
	}, [setHeaderHeight]);

	const setActiveMenu = (menu: string | null) => {
		setUiState((prev) => ({ ...prev, activeMenu: menu }));
	};

	// const closeMegaMenu = () => {
	// 	setUiState((prev) => ({ ...prev, activeMenu: null }));
	// };

	const keepMegaMenuOpen = () => {
		if (uiState.activeMenu) {
			setUiState((prev) => ({ ...prev, activeMenu: prev.activeMenu }));
		}
	};

	useEffect(() => {
		const handleResize = () => {
			setUiState((prev) => ({ ...prev, isMobile: window.innerWidth <= 1200 }));
		};

		window.addEventListener("scroll", controlScroll);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("scroll", controlScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, [controlScroll, setUiState]);

	return (
		<header
			ref={headerRef}
			className={cn(
				"fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300",
				{
					"translate-y-0": !uiState.isScrollingDown,
					"-translate-y-full": uiState.isScrollingDown,
				},
			)}
		>
			<Container>
				<div className="flex justify-between items-center relative">
					<div className="flex items-center cursor-pointer my-4 lg:my-0">
						<Link
							to="/"
							className="flex items-center no-underline text-inherit"
						>
							<img src="/logo.svg" alt="ロゴ" className="h-10 mr-2" />
							<h1 className="text-2xl md:text-xl font-bold text-primary mt-[0.2rem] mb-0">
								橋爪商事株式会社
							</h1>
						</Link>
					</div>

					<Navbar
						menuItems={menuItems}
						activeMenu={uiState.activeMenu}
						setActiveMenu={setActiveMenu}
						isMobile={uiState.isMobile}
						keepMegaMenuOpen={keepMegaMenuOpen}
					/>

					<div className="flex flex-row-reverse items-center gap-4">
						{!uiState.isMobile && <ContactButtons />}
						{uiState.isMobile && (
							<>
								<ContactButtons />
								<HamburgerButton onClick={toggleMenu} />
							</>
						)}
					</div>
				</div>
			</Container>

			{/* {!uiState.isMobile && (
				<div
					className={cn("bg-gray-100", {
						hidden: uiState.activeMenu === null,
						block: uiState.activeMenu !== null,
					})}
				>
					<Container>
						<MegaMenu
							activeMenu={uiState.activeMenu}
							menuItems={menuItems}
							closeMegaMenu={closeMegaMenu}
							keepMegaMenuOpen={keepMegaMenuOpen}
						/>
					</Container>
				</div>
			)} */}
		</header>
	);
};

export default Header;

import { useState, useCallback } from "react";

export function useScrollLogic() {
	const [isScrollingDown, setIsScrollingDown] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [scrollDistance, setScrollDistance] = useState(0);

	const controlScroll = useCallback(() => {
		const currentScrollY = window.scrollY;
		const direction = currentScrollY > lastScrollY ? "down" : "up";
		const distance = Math.abs(currentScrollY - lastScrollY);

		if (direction === "down") {
			setScrollDistance((prev) => prev + distance);
			if (scrollDistance > 50 && currentScrollY > 50) {
				setIsScrollingDown(true);
			}
		} else {
			setScrollDistance(0);
			setIsScrollingDown(false);
		}

		setLastScrollY(currentScrollY);
	}, [lastScrollY, scrollDistance]);

	return { isScrollingDown, controlScroll };
}

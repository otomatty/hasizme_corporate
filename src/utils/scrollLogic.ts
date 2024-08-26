import { createSignal } from "solid-js";

export function useScrollLogic() {
  const [isScrollingDown, setIsScrollingDown] = createSignal(false);
  const [lastScrollY, setLastScrollY] = createSignal(0);
  const [scrollDistance, setScrollDistance] = createSignal(0);

  const controlScroll = () => {
    const currentScrollY = window.scrollY;
    const direction = currentScrollY > lastScrollY() ? "down" : "up";
    const distance = Math.abs(currentScrollY - lastScrollY());

    if (direction === "down") {
      setScrollDistance((prev) => prev + distance);
      if (scrollDistance() > 50 && currentScrollY > 50) {
        setIsScrollingDown(true);
      }
    } else {
      setScrollDistance(0);
      setIsScrollingDown(false);
    }

    setLastScrollY(currentScrollY);
  };

  return { isScrollingDown, controlScroll };
}

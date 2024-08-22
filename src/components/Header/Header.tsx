import { A } from "@solidjs/router";
import { createSignal, onCleanup, onMount } from "solid-js";
import {
  HeaderContainer,
  LogoWrapper,
  CompanyName,
  NavWrapper,
} from "./Header.styled";
import Navbar from "../Navbar/Navbar";
import ContactButtons from "../ContactButtons/ContactButtons";

function Header() {
  const [isVisible, setIsVisible] = createSignal(true);
  const [lastScrollY, setLastScrollY] = createSignal(0);
  const [scrollDistance, setScrollDistance] = createSignal(0);

  const controlHeader = () => {
    const currentScrollY = window.scrollY;
    const direction = currentScrollY > lastScrollY() ? "down" : "up";
    const distance = Math.abs(currentScrollY - lastScrollY());

    if (direction === "down") {
      setScrollDistance((prev) => prev + distance);
      if (scrollDistance() > 100 && currentScrollY > 100) {
        setIsVisible(false);
      }
    } else {
      setScrollDistance(0);
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  onMount(() => {
    window.addEventListener("scroll", controlHeader);
  });

  onCleanup(() => {
    window.removeEventListener("scroll", controlHeader);
  });

  return (
    <HeaderContainer isVisible={isVisible()}>
      <LogoWrapper>
        <A href="/">
          <img src="/logo.svg" alt="ロゴ" />
        </A>
        <CompanyName>橋爪商事株式会社</CompanyName>
      </LogoWrapper>
      <NavWrapper>
        <Navbar />
        <ContactButtons />
      </NavWrapper>
    </HeaderContainer>
  );
}

export default Header;

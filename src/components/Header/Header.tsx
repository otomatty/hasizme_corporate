import { A } from "@solidjs/router";
import { onCleanup, onMount } from "solid-js";
import { useScrollLogic } from "../../utils/scrollLogic";
import {
  HeaderContainer,
  LogoWrapper,
  CompanyName,
  NavWrapper,
} from "./Header.styled";
import Navbar from "../Navbar/Navbar";
import ContactButtons from "../ContactButtons/ContactButtons";

function Header() {
  const { isScrollingDown, controlScroll } = useScrollLogic();

  onMount(() => {
    window.addEventListener("scroll", controlScroll);
  });

  onCleanup(() => {
    window.removeEventListener("scroll", controlScroll);
  });

  return (
    <HeaderContainer isVisible={!isScrollingDown()}>
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

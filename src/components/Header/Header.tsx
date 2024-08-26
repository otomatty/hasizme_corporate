import { onCleanup, onMount, createSignal } from "solid-js";
import { useScrollLogic } from "../../utils/scrollLogic";
import {
  HeaderContainer,
  HeaderTopRow,
  HeaderBottomRow,
  LogoWrapper,
  CompanyName,
  HeaderExpanded,
} from "./Header.styled";
import Navbar from "../Navbar/Navbar";
import MegaMenu from "../MegaMenu/MegaMenu";
import ContactButtons from "../ContactButtons/ContactButtons";
import Container from "../Container/Container";
import { A } from "@solidjs/router";
import { menuItems } from "../../data/menuItemsData";

interface HeaderProps {
  setHeaderHeight: (height: number) => void;
}

const Header = (props: HeaderProps) => {
  let headerRef: HTMLElement | undefined;

  onMount(() => {
    if (headerRef) {
      props.setHeaderHeight(headerRef.offsetHeight);
    }
  });

  const { isScrollingDown, controlScroll } = useScrollLogic();
  const [activeMenu, setActiveMenu] = createSignal<string | null>(null);

  const closeMegaMenu = () => setActiveMenu(null);

  onMount(() => {
    window.addEventListener("scroll", controlScroll);
  });

  onCleanup(() => {
    window.removeEventListener("scroll", controlScroll);
  });

  return (
    <HeaderContainer
      ref={headerRef}
      isVisible={!isScrollingDown()}
      isExpanded={activeMenu() !== null}
    >
      <Container>
        <HeaderTopRow>
          <LogoWrapper>
            <A href="/">
              <img src="/logo.svg" alt="ロゴ" />
              <CompanyName>橋爪商事株式会社</CompanyName>
            </A>
          </LogoWrapper>
          <ContactButtons />
        </HeaderTopRow>
        <HeaderBottomRow>
          <Navbar
            menuItems={menuItems}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
        </HeaderBottomRow>
      </Container>
      <HeaderExpanded isActive={activeMenu() !== null}>
        <Container>
          <MegaMenu
            activeMenu={activeMenu()}
            menuItems={menuItems}
            onClose={closeMegaMenu}
          />
        </Container>
      </HeaderExpanded>
    </HeaderContainer>
  );
};

export default Header;

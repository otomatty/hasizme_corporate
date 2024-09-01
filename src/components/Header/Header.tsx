import { onCleanup, onMount, createSignal, Show } from 'solid-js';
import { useScrollLogic } from '../../utils/scrollLogic';
import {
  HeaderContainer,
  HeaderTopRow,
  HeaderBottomRow,
  LogoWrapper,
  CompanyName,
  HeaderExpanded,
  HamburgerButton,
  NavLinksOpen,
  HeaderRight,
} from './Header.styled';
import Navbar from '../Navbar/Navbar';
import MegaMenu from '../MegaMenu/MegaMenu';
import Container from '../Container/Container';
import { A } from '@solidjs/router';
import { menuItems } from '../../data/menuItemsData';
import { ContactButtons } from '../ContactButtons/ContactButtons';

interface HeaderProps {
  setHeaderHeight: (height: number) => void;
  toggleMenu: () => void;
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
  const [isMobile, setIsMobile] = createSignal(window.innerWidth <= 1200);

  const closeMegaMenu = () => setActiveMenu(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1200);
  };

  onMount(() => {
    window.addEventListener('scroll', controlScroll);
    window.addEventListener('resize', handleResize);
  });

  onCleanup(() => {
    window.removeEventListener('scroll', controlScroll);
    window.removeEventListener('resize', handleResize);
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
          <HeaderRight>
            <Show when={!isMobile()}>
              <ContactButtons />
            </Show>
            <Show when={isMobile()}>
              <ContactButtons />
              <HamburgerButton onClick={props.toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </HamburgerButton>
            </Show>
          </HeaderRight>
        </HeaderTopRow>
      </Container>
      <Show when={!isMobile()}>
        <HeaderBottomRow>
          <NavLinksOpen isOpen={false}>
            <Navbar
              menuItems={menuItems}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              isMobile={isMobile}
            />
          </NavLinksOpen>
        </HeaderBottomRow>
        <HeaderExpanded isActive={activeMenu() !== null}>
          <MegaMenu
            activeMenu={activeMenu()}
            menuItems={menuItems}
            closeMegaMenu={closeMegaMenu}
          />
        </HeaderExpanded>
      </Show>
    </HeaderContainer>
  );
};

export default Header;

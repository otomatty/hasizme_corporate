import { For, Show, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import {
  NavbarContainer,
  NavItem,
  NavButton,
  MobileNavItem,
  MobileNavButton,
  SubMenuContainer,
  SubMenuItem,
  SubMenuButton,
} from "./Navbar.styled";
import {
  MenuItem,
  SubMenuItem as SubMenuItemType,
} from "../../data/menuItemsData";
import { FaSolidChevronDown, FaSolidChevronRight } from "solid-icons/fa";

interface NavbarProps {
  menuItems: MenuItem[];
  activeMenu: () => string | null;
  setActiveMenu: (menu: string | null) => void;
  isMobile: () => boolean;
  closeMenu?: () => void;
  keepMegaMenuOpen: () => void;
}

function Navbar(props: NavbarProps) {
  const navigate = useNavigate();
  const [activeSubMenu, setActiveSubMenu] = createSignal<string | null>(null);

  const handleClick = (item: MenuItem) => {
    if (props.isMobile()) {
      if (item.subItems.length > 0) {
        props.setActiveMenu(
          props.activeMenu() === item.title ? null : item.title
        );
        setActiveSubMenu(activeSubMenu() === item.title ? null : item.title);
      } else {
        navigate(item.link);
        props.setActiveMenu(null);
        if (props.closeMenu) {
          props.closeMenu();
        }
      }
    } else {
      navigate(item.link);
    }
  };

  const handleMouseEnter = (item: MenuItem) => {
    if (!props.isMobile()) {
      if (item.subItems.length > 0) {
        props.setActiveMenu(item.title);
      } else {
        props.setActiveMenu(null);
      }
    }
  };

  const handleMouseLeave = () => {
    if (!props.isMobile()) {
      props.keepMegaMenuOpen();
    }
  };

  const handleSubItemClick = (subItem: SubMenuItemType) => {
    navigate(subItem.link);
    props.setActiveMenu(null);
    if (props.closeMenu) {
      props.closeMenu();
    }
  };

  return (
    <NavbarContainer>
      <Show
        when={!props.isMobile()}
        fallback={
          <For each={props.menuItems}>
            {(item) => (
              <MobileNavItem>
                <MobileNavButton
                  onClick={() => handleClick(item)}
                  isActive={props.activeMenu() === item.title}
                >
                  <item.icon />
                  {item.title}
                  {item.subItems.length > 0 && (
                    <FaSolidChevronRight size={16} />
                  )}
                </MobileNavButton>
                <Show when={activeSubMenu() === item.title}>
                  <SubMenuContainer>
                    <For each={item.subItems}>
                      {(subItem) => (
                        <SubMenuItem>
                          <SubMenuButton
                            onClick={() => handleSubItemClick(subItem)}
                          >
                            {subItem.title}
                          </SubMenuButton>
                        </SubMenuItem>
                      )}
                    </For>
                  </SubMenuContainer>
                </Show>
              </MobileNavItem>
            )}
          </For>
        }
      >
        <For each={props.menuItems}>
          {(item) => (
            <NavItem
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <NavButton
                onClick={() => handleClick(item)}
                isActive={props.activeMenu() === item.title}
              >
                <item.icon />
                {item.title}
                {item.subItems.length > 0 && (
                  <FaSolidChevronDown
                    size={16}
                    style={{
                      transition: "transform 0.3s ease",
                      transform:
                        props.activeMenu() === item.title
                          ? "rotate(180deg)"
                          : "rotate(0)",
                    }}
                  />
                )}
              </NavButton>
            </NavItem>
          )}
        </For>
      </Show>
    </NavbarContainer>
  );
}

export default Navbar;

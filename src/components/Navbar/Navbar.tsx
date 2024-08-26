import { For } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { NavbarContainer, NavItem, NavButton } from "./Navbar.styled";
import { MenuItem } from "../../data/menuItemsData";
import { FaSolidChevronDown } from "solid-icons/fa";

interface NavbarProps {
  menuItems: MenuItem[];
  activeMenu: () => string | null;
  setActiveMenu: (menu: string | null) => void;
}

function Navbar(props: NavbarProps) {
  const navigate = useNavigate();

  const handleClick = (item: MenuItem) => {
    if (item.subItems.length > 0) {
      props.setActiveMenu(
        props.activeMenu() === item.title ? null : item.title
      );
    } else {
      navigate(item.link);
      props.setActiveMenu(null);
    }
  };

  return (
    <NavbarContainer>
      <For each={props.menuItems}>
        {(item) => (
          <NavItem>
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
    </NavbarContainer>
  );
}

export default Navbar;

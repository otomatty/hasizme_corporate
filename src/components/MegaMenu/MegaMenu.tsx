import { For } from 'solid-js';
import {
  MegaMenuContainer,
  MegaMenuContent,
  MegaMenuItem,
} from './MegaMenu.styled';
import { MenuItem } from '../../data/menuItemsData';
import { useNavigate } from '@solidjs/router';

interface MegaMenuProps {
  activeMenu: string | null;
  menuItems: MenuItem[];
  closeMegaMenu: () => void; // 追加
}

function MegaMenu(props: MegaMenuProps) {
  const navigate = useNavigate();

  const handleItemClick = (link: string) => {
    navigate(link);
    props.closeMegaMenu(); // 追加
  };

  return (
    <MegaMenuContainer isActive={props.activeMenu !== null}>
      <For each={props.menuItems}>
        {(item) => (
          <MegaMenuContent isActive={props.activeMenu === item.title}>
            {item.subItems.length > 0 ? (
              <For each={item.subItems}>
                {(subItem) => (
                  <MegaMenuItem onClick={() => handleItemClick(subItem.link)}>
                    {subItem.title}
                  </MegaMenuItem>
                )}
              </For>
            ) : (
              <MegaMenuItem onClick={() => handleItemClick(item.link)}>
                {item.title}
              </MegaMenuItem>
            )}
          </MegaMenuContent>
        )}
      </For>
    </MegaMenuContainer>
  );
}

export default MegaMenu;

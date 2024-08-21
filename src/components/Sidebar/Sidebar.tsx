import { SidebarContainer, SidebarItem } from "./Sidebar.styled";
import { For } from "solid-js";

interface SidebarProps {
  items: string[];
}

function Sidebar({ items }: SidebarProps) {
  return (
    <SidebarContainer>
      <For each={items}>{(item) => <SidebarItem>{item}</SidebarItem>}</For>
    </SidebarContainer>
  );
}

export default Sidebar;

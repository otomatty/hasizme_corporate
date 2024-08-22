import { NavbarContainer, NavLink } from "./Navbar.styled";
import { useLocation } from "@solidjs/router";

function Navbar() {
  const location = useLocation();

  return (
    <NavbarContainer>
      <NavLink href="/about-us" isActive={location.pathname === "/about-us"}>
        会社情報
      </NavLink>
      <NavLink href="/services" isActive={location.pathname === "/services"}>
        事業紹介
      </NavLink>
      <NavLink href="/products" isActive={location.pathname === "/products"}>
        商品紹介
      </NavLink>
      <NavLink href="/news" isActive={location.pathname === "/news"}>
        お知らせ
      </NavLink>

      <NavLink href="/careers" isActive={location.pathname === "/careers"}>
        採用情報
      </NavLink>
      <NavLink href="/blog" isActive={location.pathname === "/blog"}>
        橋爪倶楽部
      </NavLink>
    </NavbarContainer>
  );
}

export default Navbar;

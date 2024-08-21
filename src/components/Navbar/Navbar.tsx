import { NavbarContainer, NavLink } from "./Navbar.styled";
import { useLocation } from "@solidjs/router";

function Navbar() {
  const location = useLocation();

  return (
    <NavbarContainer>
      <NavLink href="/" isActive={location.pathname === "/"}>
        Home
      </NavLink>
      <NavLink href="/about-us" isActive={location.pathname === "/about-us"}>
        About Us
      </NavLink>
      <NavLink href="/services" isActive={location.pathname === "/services"}>
        Services
      </NavLink>
      <NavLink href="/products" isActive={location.pathname === "/products"}>
        Products
      </NavLink>
      <NavLink href="/news" isActive={location.pathname === "/news"}>
        News
      </NavLink>
      <NavLink
        href="/contact-us"
        isActive={location.pathname === "/contact-us"}
      >
        Contact Us
      </NavLink>
      <NavLink href="/careers" isActive={location.pathname === "/careers"}>
        Careers
      </NavLink>
      <NavLink href="/blog" isActive={location.pathname === "/blog"}>
        Blog
      </NavLink>
    </NavbarContainer>
  );
}

export default Navbar;

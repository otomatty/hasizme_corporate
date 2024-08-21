import { HeaderContainer } from "./Header.styled";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <HeaderContainer>
      <div>Logo</div>
      <Navbar />
    </HeaderContainer>
  );
}

export default Header;

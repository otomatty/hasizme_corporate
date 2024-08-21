import { OfficesContainer, OfficeTitle, OfficeContent } from "./Offices.styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Offices() {
  return (
    <>
      <Header />
      <OfficesContainer>
        <OfficeTitle>Our Offices</OfficeTitle>
        <OfficeContent>{/* 事業所の詳細情報をここに追加 */}</OfficeContent>
      </OfficesContainer>
      <Footer />
    </>
  );
}

export default Offices;

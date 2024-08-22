import { OfficesContainer, OfficeTitle, OfficeContent } from "./Offices.styled";

function Offices() {
  return (
    <OfficesContainer>
      <OfficeTitle>Our Offices</OfficeTitle>
      <OfficeContent>{/* 事業所の詳細情報をここに追加 */}</OfficeContent>
    </OfficesContainer>
  );
}

export default Offices;

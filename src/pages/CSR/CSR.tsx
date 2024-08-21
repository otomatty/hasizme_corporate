import { CSRContainer, CSRTitle, CSRContent } from "./CSR.styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function CSR() {
  return (
    <>
      <Header />
      <CSRContainer>
        <CSRTitle>Our CSR Activities</CSRTitle>
        <CSRContent>{/* CSR活動の詳細情報をここに追加 */}</CSRContent>
      </CSRContainer>
      <Footer />
    </>
  );
}

export default CSR;

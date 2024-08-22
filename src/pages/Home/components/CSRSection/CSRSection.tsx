import {
  CSRContainer,
  CSRTitle,
  CSRContent,
  ButtonContainer,
} from "./CSRSection.styled";
import CSRSlider from "../CSRSlider/CSRSlider";
import { csrActivities } from "../../../../data/csrData";
import Button from "../../../../components/Button/Button";
import { useNavigate } from "@solidjs/router";

function CSRSection() {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate("/csr");
  };

  return (
    <CSRContainer>
      <CSRTitle>CSR活動</CSRTitle>
      <CSRContent>
        <CSRSlider activities={csrActivities} />
        <ButtonContainer>
          <Button onClick={handleViewAllClick} color="primary">
            CSR活動一覧を見る
          </Button>
        </ButtonContainer>
      </CSRContent>
    </CSRContainer>
  );
}

export default CSRSection;

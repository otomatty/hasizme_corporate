import {
  CSRContainer,
  CSRTitle,
  CSRContent,
  CSRLinkButton,
} from "./CSRSection.styled";
import CSRSlider from "../CSRSlider/CSRSlider";
import { csrActivities } from "../../../../data/csrData";
import { A } from "@solidjs/router";

function CSRSection() {
  return (
    <CSRContainer>
      <CSRTitle>CSR活動</CSRTitle>
      <CSRContent>
        <CSRSlider activities={csrActivities} />
        <CSRLinkButton>
          <A href="/csr">CSR活動一覧を見る</A>
        </CSRLinkButton>
      </CSRContent>
    </CSRContainer>
  );
}

export default CSRSection;

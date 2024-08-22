import { For } from "solid-js";
import { A } from "@solidjs/router";
import { csrActivities } from "../../data/csrData";
import {
  CSRContainer,
  CSRTitle,
  CSRGrid,
  CSRCard,
  CSRCardImage,
  CSRCardTitle,
} from "./CSR.styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function CSR() {
  return (
    <>
      <Header />
      <CSRContainer>
        <CSRTitle>CSR活動</CSRTitle>
        <CSRGrid>
          <For each={csrActivities}>
            {(activity) => (
              <A href={`/csr/${activity.id}`}>
                <CSRCard>
                  <CSRCardImage src={activity.thumbnail} alt={activity.title} />
                  <CSRCardTitle>{activity.title}</CSRCardTitle>
                </CSRCard>
              </A>
            )}
          </For>
        </CSRGrid>
      </CSRContainer>
      <Footer />
    </>
  );
}

export default CSR;

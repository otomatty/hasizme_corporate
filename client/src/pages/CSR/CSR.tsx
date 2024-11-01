import { For } from "solid-js";
import { A } from "@solidjs/router";
import { csrActivities } from "../../data/csrData";
import Hero from "../../components/Hero/Hero";
import {
	CSRContainer,
	CSRGrid,
	CSRCard,
	CSRCardImage,
	CSRCardTitle,
} from "./CSR.styled";

function CSR() {
	return (
		<>
			<Hero title="CSR活動" />
			<CSRContainer>
				<CSRGrid>
					<For each={csrActivities}>
						{(activity) => (
							<A href={`/about-us/csr/${activity.id}`}>
								<CSRCard>
									<CSRCardImage src={activity.thumbnail} alt={activity.title} />
									<CSRCardTitle>{activity.title}</CSRCardTitle>
								</CSRCard>
							</A>
						)}
					</For>
				</CSRGrid>
			</CSRContainer>
		</>
	);
}

export default CSR;

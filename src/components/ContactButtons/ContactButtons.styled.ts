import { styled } from "solid-styled-components";

export const ContactButtonsContainer = styled("div")`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

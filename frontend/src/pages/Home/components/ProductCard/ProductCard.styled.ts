import { styled } from "solid-styled-components";

export const CardContainer = styled("div")`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled("img")`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardTitle = styled("h3")`
  font-size: 1.2rem;
  margin: 1rem;
  text-align: center;
`;

// export const CardDescription = styled("p")`
//   font-size: 0.9rem;
//   color: #555;
//   padding: 0 1rem;
//   flex-grow: 1;
// `;

// export const CardCategory = styled("span")`
//   font-size: 0.8rem;
//   color: #777;
//   padding: 0 1rem 1rem;
// `;

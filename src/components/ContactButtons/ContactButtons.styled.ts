import { styled } from 'solid-styled-components';

export const ContactButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 1200px) {
    display: flex;
    order: 1; /* ハンバーガーボタンと並べるために順序を指定 */
  }

  @media (max-width: 768px) {
    display: none; /* 768px以下で非表示 */
  }
`;

export const MobileContactButtonsContainer = styled.div`
  display: none;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

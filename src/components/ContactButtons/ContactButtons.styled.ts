import { styled } from 'solid-styled-components';

export const ContactButtonsContainer = styled.div`
  display: none; /* 768px以下で非表示 */

  @media (min-width: 768px) {
    display: flex;
    gap: 1rem;
    margin-right: 6rem;
  }
  @media (min-width: 1200px) {
    order: 1; /* ハンバーガーボタンと並べるために順序を指定 */
    margin: 0;
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

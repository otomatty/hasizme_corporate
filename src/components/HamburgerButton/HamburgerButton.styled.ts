import { styled } from 'solid-styled-components';

export const StyledHamburgerButton = styled('button')`
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;

  @media (min-width: 375px) {
    width: 6rem;
    height: 6rem;
    background: var(--primary-color); /* 背景色をprimary-colorに設定 */
    border: none;
    border-radius: 0 0 0 50%;
    cursor: pointer;
    padding: 10px;
    position: absolute; /* 追加 */
    top: 0; /* ヘッダーの上に配置 */
    right: -1rem;
    z-index: 1001; /* ヘッダーの上に表示 */
    color: #fff; /* 文字色を白に設定 */
  }

  @media (min-width: 768px) {
    width: 7rem;
    height: 7rem;
    right: -2rem;
  }

  @media (min-width: 992px) {
    right: -3rem;
  }

  @media (min-width: 1200px) {
    display: none;
  }

  span {
    display: block;
    background-color: var(--primary-color);
    width: 2rem;
    height: 4px;
    border-radius: 4px;
    margin: 8px auto;
    transition: all 0.3s ease;

    @media (min-width: 375px) {
      width: 2.4rem;
      height: 6px;
      border-radius: 4px;
      background-color: #fff;
    }
  }
`;
